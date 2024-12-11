import openai from "@/app/util/OpenAI";
import CoverLetter from "@/app/util/model/CoverLetter";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  let id = data.id;
  if (!id) {
    return NextResponse.json(
      { message: "Invalid request no ID provided" },
      { status: 400 }
    );
  }

  try {
    let coverLetterData = await CoverLetter.findById(id);
    if (!coverLetterData) {
      return NextResponse.json(
        { message: "Cover Letter not found" },
        { status: 404 }
      );
    }

    // if (coverLetterData.isAiGenerate) {
    //   return NextResponse.json({ message: coverLetterData }, { status: 200 });
    // }

    const coverLetterText = await generateCoverLetterText(coverLetterData);
    let coverLetterObj;
    if (coverLetterText) {
      coverLetterObj = JSON.parse(coverLetterText);
    }
    const updateData = {
      email: coverLetterObj.email,
      linkedin: coverLetterObj.linkedin,
      address: coverLetterObj.address,
      phone: coverLetterObj.phone,
      salutation: coverLetterObj.salutation,
      jobInfo: {
        companyName: coverLetterObj.jobInfo?.companyName,
        companyAddress: coverLetterObj.jobInfo?.companyAddress,
        companyCity: coverLetterObj.jobInfo?.companyCity,
      },
      result: coverLetterObj.result,
      isAiGenerate: true,
      isComplete: true,
    };

    await CoverLetter.findByIdAndUpdate(coverLetterData._id, updateData, {
      new: true,
    });

    return NextResponse.json(
      { message: "Cover letter generated successfully", coverLetterText },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred", error },
      { status: 500 }
    );
  }
};

const keys = `{
        
          email: {
              The User Email the user provided in the prompt,
            },
            linkedin: {
                "The LinkedIn the user provided in the prompt"
            },
            address: {
              "The  Address the user provided in the prompt",
            },
            phone: {
              "The  phone the user provided in the prompt",
            },
          {
            salutation: 'title to be use eg Dear manager, or Dear Recuiter or Dear Hiring Manager'
          }
           jobInfo: {
            companyName: {
              "The Company Name the user provided in the prompt",
            },
            companyAddress: {
              The Company Address the user provided in the prompt,
            },
            companyCity: {
              The Company City the user provided in the prompt,
            },
            
          },
          result: "The result of the cover letter just the message should be here the uset address and the comany should be attach to the each field"
}
`;

// Function to generate cover letter text
async function generateCoverLetterText(details) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [
      {
        role: "system",
        content: `You are a highly skilled creative writer with a special ability to craft successful cover letters that attracts 
          recruiters attention for software development professionals.
          #Task Create a professional cover letter by parsing relevant information provided by the user. User will provide 
          Job Descriptions for target job and their resume. Using that information craft a concise cover letter. 
          For missing information like ‘organization name’ and others, use placeholders like {Organization name}. 
          Use a chain of thought to think step by step, ensuring the cover letter includes personal info, target organization
           details, and a tailored message.
          #Specific This task is essential for our service. Do not send any comments or response other than the final product,
           which is the cover letter itself.
          #Context You are operating in a professional SaaS business environment with no room for error. Maintain a high level
           of professionalism and ensure the cover letter is concise, relevant, and devoid of any personal notes or additional
            comments.
          #Examples User Input (Complete):,
          Personal Info(Resume): ${details.firstName} ${details.email}, SharePoint Developer,
          Job Description: extract the organization information (${details.jobInfo.companyName}, Hiring Manager), key responsibilities, 
          and what skills they are looking for
          Expected Output: A complete cover letter addressing ${details.jobInfo.companyAddress} and the Hiring Manager, detailing ${details.firstName}
          ${details.lastName} 
          qualifications, past experience and enthusiasm for the position.
          User Input (Incomplete):
          Personal Info(Resume): ${details.firstName} ${details.lastName}, ${details.email}, some missing 
          information Expected Output: A complete cover letter with placeholders where key information ( like name, years of experience, and education 
          is missing, and filling in with industry standard keywords where skills is missing. Address the target 
          organization with a tailored message.
          #Notes
          Fill gaps with either the model's knowledge or placeholders.
          Ensure the cover letter is professional and tailored to the job description.
          Do not include any personal notes, comments, or incomplete responses.
          Maintain a high level of professionalism and focus on the user's qualifications and the job requirements.
          Cover letter should be between 250-400 words. Make sure you follow this json to return the data bach ${keys}`,
      },
      {
        role: "user",
        content: `Here are the JSON details for generating the CV: ${details}.`,

        // `Create the main content of a cover letter highlighting the applicant's
        //  strengths and suitability for the position, based on the following
        //   details: LinkedIn: ${details.linkedin}, Job Title: ${details.jobTitle},
        //    Personal Summary: ${details.summary}. Resume/CV Overview: ${details.parsedText}.
        //     The cover letter should be personalized for the following
        //     Job Description: ${details.JobDescription}. Exclude any formal greetings,
        //     company addresses, and closings, as those will be added separately. Concentrate
        //      on developing a compelling narrative that aligns the applicant's experience and
        //       skills with the requirements of the job description.`,
      },
    ],
    max_tokens: 1024,
    temperature: 0.7,
  });

  return response.choices[0].message.content;
}
