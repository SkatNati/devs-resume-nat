import { extractDocxText, extractPdfText } from "@/app/util/ExtractPdfText";
import connect from "@/app/util/db/connect";
import interviewPreps from "@/app/util/model/interviewPreps";

export async function PATCH(request) {
  const formData = await request.formData();
  const id = formData.get("id");
  const uploadedFiles = formData.get("resumePDF");
  try {
    await connect();
    const interviewPrep = await interviewPreps.findById(id);

    if (!interviewPrep) {
      return new Response(JSON.stringify({ message: "Not Found" }), {
        status: 404,
      });
    }
    if (interviewPrep?.extractedCvText?.parsedText && !uploadedFiles.type) {
      return new Response(JSON.stringify({ message: "..." }), {
        status: 200,
      });
    }
    if (!uploadedFiles?.arrayBuffer) {
      return new Response(JSON.stringify({ message: "No files uploaded." }), {
        status: 400,
      });
    }

    const fileBuffer = Buffer.from(await uploadedFiles.arrayBuffer());
    const fileType = uploadedFiles.type;
    let parsedText;

    if (fileType === "application/pdf") {
      parsedText = await extractPdfText(fileBuffer);
    } else if (
      fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      fileType === "application/msword"
    ) {
      parsedText = await extractDocxText(fileBuffer);
    } else {
      return new Response(
        JSON.stringify({ message: "Unsupported file type" }),
        {
          status: 400,
        }
      );
    }

    await interviewPreps.findByIdAndUpdate(
      id,
      {
        $set: {
          "extractedCvText.parsedText": parsedText,
          "extractedCvText.fileName": uploadedFiles.name,
        },
      },
      { new: true }
    );

    return new Response(
      JSON.stringify({ message: "Data updated successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in PDF handling: ", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export default PATCH;
