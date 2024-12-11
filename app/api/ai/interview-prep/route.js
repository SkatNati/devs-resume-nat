import openai from "@/app/util/OpenAI";
import connect from "@/app/util/db/connect";
import interviewPreps from "@/app/util/model/interviewPreps";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  let id = data.id;

  if (!id) {
    return NextResponse.json({ message: "invalid request" }, { status: 400 });
  }
  try {
    await connect();
    let interviewPrepData = await interviewPreps.findById(id);
    if (!interviewPrepData) {
      return NextResponse.json(
        { message: "interview Prep Data not found" },
        { status: 404 }
      );
    }

    const res = await generateResumeText(data);
    let interviewData;
    if (res) {
      interviewData = JSON.parse(res);
    }
    const updateData = {
      company: interviewData.aboutOrganization,
      summary: interviewData?.aboutMe?.summary,
      skills: interviewData?.aboutMe?.skills,
      behavioralQuestions: interviewData?.behavioralQuestions,
      technicalQuestions: interviewData?.technicalQuestions,
      projectDescription: interviewData?.projectDescription,
      additionalProject: interviewData?.additionalProject,
      questionsForInterviewers: interviewData?.questionsForInterviewers,
    };

    const intRes = await interviewPreps.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return NextResponse.json({ message: intRes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
async function generateResumeText(details) {
  const key = `{
    aboutOrganization:'',
    aboutMe:{
    summary:'',
    skills:[],
    },
    behavioralQuestions: [
      list of all the behavioral questions
    ],
    technicalQuestions: [
      list of all the technical questions
    ],
    projectDescription: [
      list of all project descriptions
    ],
      additionalProject: [
      list some additional project
    ],
    questionsForInterviewers: [
      list of all questions for interviewers
    ]
  }`;

  const messages = [
    {
      role: "system",
      content: `Role Prompting You are a highly skilled creative writer with a special ability to craft successful interview preparation templates for software developers, especially SharePoint, Power Apps, and Power BI developers .
#Task Create an insightful interview preparation template by parsing relevant information provided by the user, and utilizing your knowledge of the industry standards for the user’s profession. User will provide Job Descriptions for their target job and their resume. Using that information craft an interview prep template that follows the structure in the #Example section. You are expected to provide two types of responses.
Parsed information: (this will be what you will collect from what the user provides. Any missing info from here will be replaced wit place holders. example {organization name}.)
Suggestive information: (this will be what you provide as a starting point for the user. Provide relevant and industry standard information here.)
Use a chain of thought to think step by step, ensuring the template includes everything needed to prepare well for the interview. First, analyze the job description and the resume to understand what the interviewers want and the interviewee’s qualification. Then proceed to generate both parsed and suggestive information.
#Specific This task is essential for our service. Do not send any response other than the final product.
#Context You are operating in a professional SaaS business environment with no room for error. Maintain a high level of professionalism.
#Examples
User Input (Complete):
Personal Info (resume): complete information Job Description: has organization name, target skills, interviewer names, etc. Expected Output: A complete interview prep template tailored to the profession, required skill, and responsibilities following the #structure below.
User Input (Incomplete):
Personal Info (resume): few missing information
Job Description: missing some information ( either organization, or required skills information)
expected Output: A complete interview prep template with placeholders where information is missing, tailored to the specified profession, required skill, and responsibilities. Follow the #structure below
#Structure
About the organization: here you will include information about the organization and the interviewers. if the information is unavailable, return {add information about the organization and interviewers}.
About me: here provide information about the user collected from the resume provided. this section will have two sections. Summary ( a recap of experience or professional summary) and Skills ( relevant skills for the interview - by comparing skills from the JD and the user’s resume. if information isn’t available provide a good starting point that is suitable to the JD.
Questions: here analyze the job description and provide two types of questions (behavioral and Technical) with its possible responses. Generate 3-5 questions for each type.
Projects: here, analyze user’s job experience responsibility and provide 3 sample projects that are relevant to the job description. If unavailable generate example projects.
Questions for the interviewers: here, suggest a few (3-5) questions that the interviewee may ask the interviewers to show that they are interested in the Job.
#Notes Ensure the template is professional and tailored. Fill gaps with either the model's knowledge or placeholders. Do not send incomplete responses.
#Notes: I need the return data to be in this structure ${key}.`,
    },
    {
      role: "user",
      content: `Here are the JSON details for generating the Interview preparation: ${JSON.stringify(
        details
      )}.`,
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: messages,
    max_tokens: 1024,
    temperature: 0.7,
    response_format: { type: "json_object" },
  });
  return response.choices[0].message.content;
}
