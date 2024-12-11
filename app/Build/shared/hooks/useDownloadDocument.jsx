// import JsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import { useState } from "react";
// import axios from "axios";

// export const useDownloadDocument = () => {
//   const [isLoading, setisLoading] = useState();
//   const data = { templateId: "Dev Resume 2" };
//   const downloadPdfDocument = async (id) => {
//     setisLoading(true);
//     // const endpoint = `/api/User/Cv/${id}`;
//     try {
//       const input = document.getElementById("resumePreview");

//       const { width, height } = input.getBoundingClientRect();
//

//       const canvas = await html2canvas(input);
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new JsPDF({
//         orientation: "portrait",
//       });
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, height);
//       pdf.save("resume.pdf");
//       // await axios.patch(endpoint, data);
//       setisLoading(false);
//     } catch (error) {
//       console.error("Could not download the file - ", error);
//       setisLoading(false);
//     }
//   };
//   return {
//     downloadPdfDocument,
//     isLoading,
//   };
// };

// export const useDownloadDocument = () => {
//   const [isLoading, setisLoading] = useState(false);
//   const data = { templateId: "Dev Resume 2" };

//   const downloadPdfDocument = async (id) => {
//     setisLoading(true);
//     // const endpoint = `/api/User/Cv/${id}`;
//     try {
//       const input = document.getElementById("resumePreview");

//       const { width, height } = input.getBoundingClientRect();

//       const canvas = await html2canvas(input);
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new JsPDF({
//         orientation: "portrait",
//       });
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = pdf.internal.pageSize.getHeight();

//       let position = 0;

//       while (position < height) {
//         const remainingHeight = height - position;
//         const pageHeight =
//           remainingHeight > pdfHeight ? pdfHeight : remainingHeight;

//         pdf.addImage(
//           imgData,
//           "PNG",
//           0,
//           -position,
//           pdfWidth,
//           (canvas.height * pdfWidth) / canvas.width
//         );
//         position += pageHeight;

//         // if (position < height) {
//         //   pdf.addPage();
//         // }
//       }

//       pdf.save("resume.pdf");
//       // await axios.patch(endpoint, data);
//       setisLoading(false);
//     } catch (error) {
//       console.error("Could not download the file - ", error);
//       setisLoading(false);
//     }
//   };

//   return { downloadPdfDocument, isLoading };
// };

// import { useState } from "react";
// import html2canvas from "html2canvas";
// import JsPDF from "jspdf";

// export const useDownloadDocument = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const downloadPdfDocument = async (id) => {
//     setIsLoading(true);
//     try {
//       const input = document.getElementById("resumePreview");
//       const { width, height } = input.getBoundingClientRect();

//       // Render canvas with a higher scale for better quality
//       const canvas = await html2canvas(input, {
//         scale: 2, // Increase scale for better resolution
//         useCORS: true, // Enable cross-origin resource sharing
//         logging: true,
//         allowTaint: false,
//       });

//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new JsPDF("portrait", "px", [canvas.width, canvas.height]);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = pdf.internal.pageSize.getHeight();

//       let position = 0;

//       while (position < height) {
//         const remainingHeight = height - position;
//         const pageHeight =
//           remainingHeight > pdfHeight ? pdfHeight : remainingHeight;

//         pdf.addImage(
//           imgData,
//           "PNG",
//           0,
//           -position * (canvas.height / height), // Adjust image positioning
//           pdfWidth,
//           (canvas.height * pdfWidth) / canvas.width
//         );

//         position += pdfHeight;

//         if (position < height) {
//           pdf.addPage();
//         }
//       }

//       // Dynamically set filename based on document type (id could represent document type)
//       const fileName = id === "coverLetter" ? "CoverLetter.pdf" : id === "resume" ? "Resume.pdf" : "InterviewPrep.pdf";
//       pdf.save(fileName);
//     } catch (error) {
//       console.error("Could not download the file - ", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { downloadPdfDocument, isLoading };
// };


import { useState } from "react";
import html2canvas from "html2canvas";
import JsPDF from "jspdf";

// export const useDownloadDocument = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const downloadPdfDocument = async (id) => {
//     setIsLoading(true);
//     try {
//       const input = document.getElementById("resumePreview");
//       if (!input) throw new Error("Element with ID 'resumePreview' not found.");

//       const { width, height } = input.getBoundingClientRect();
//       const canvas = await html2canvas(input, {
//         scale: 2,
//         useCORS: true,
//         logging: true,
//         allowTaint: false,
//       });

//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new JsPDF("portrait", "px", [canvas.width, canvas.height]);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = pdf.internal.pageSize.getHeight();

//       let position = 0;

//       while (position < height) {
//         const remainingHeight = height - position;
//         const pageHeight =
//           remainingHeight > pdfHeight ? pdfHeight : remainingHeight;

//         pdf.addImage(
//           imgData,
//           "PNG",
//           0,
//           -position * (canvas.height / height),
//           pdfWidth,
//           (canvas.height * pdfWidth) / canvas.width
//         );

//         position += pdfHeight;

//         if (position < height) {
//           pdf.addPage();
//         }
//       }

//       const fileNames = {
//         coverLetter: "CoverLetter.pdf",
//         resume: "Resume.pdf",
//         interviewPrep: "InterviewPrep.pdf"
//       };
//       const fileName = fileNames[id] || "Document.pdf";

//       console.log("Saving file as:", fileName);
//       pdf.save(fileName);
//     } catch (error) {
//       console.error("Error while downloading the PDF document:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { downloadPdfDocument, isLoading };
// };


const downloadPdfDocument = async (id) => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    console.error("This function must be called in a browser environment.");
    return;
  }
  
  setIsLoading(true);
  try {
    const input = document.getElementById("resumePreview");
    if (!input) throw new Error("Element with ID 'resumePreview' not found.");

    const { width, height } = input.getBoundingClientRect();
    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: true,
      allowTaint: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new JsPDF("portrait", "px", [canvas.width, canvas.height]);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    let position = 0;

    while (position < height) {
      const remainingHeight = height - position;
      const pageHeight =
        remainingHeight > pdfHeight ? pdfHeight : remainingHeight;

      pdf.addImage(
        imgData,
        "PNG",
        0,
        -position * (canvas.height / height),
        pdfWidth,
        (canvas.height * pdfWidth) / canvas.width
      );

      position += pdfHeight;

      if (position < height) {
        pdf.addPage();
      }
    }

    const fileNames = {
      coverLetter: "CoverLetter.pdf",
      resume: "Resume.pdf",
      interviewPrep: "InterviewPrep.pdf"
    };
    const fileName = fileNames[id] || "Document.pdf";

    console.log("Saving file as:", fileName);
    pdf.save(fileName);
  } catch (error) {
    console.error("Error while downloading the PDF document:", error);
  } finally {
    setIsLoading(false);
  }
};
