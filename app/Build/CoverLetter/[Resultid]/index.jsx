// "use client";
// import React from "react";
// import { useParams } from "next/navigation";
// import ResumePreview from "../../shared/ResumePreview";
// import GoBackToResumeEdit from "../../shared/ResumePreview/shared/GoBackToResumeEdit";
// import ChangeResume from "../../shared/ResumePreview/shared/ChangeResume";
// import PreviewCoverLetter from "./components/PreviewCoverLetter";
// import CoverLetterStylesChoose from "../CoverLetterStylesChoose";
// import IsLoading from "@/shared/loading/IsLoading";
// import { useGetCoverLetter } from "../hooks/useGetCoverLetter";
// import TopBar from "./TopBar";
// import CustomResumePreviews from "../../shared/CustomResumePreviews";

// const Results = () => {
//   const { Resultid } = useParams();
//   const { loading, description, setDescription } = useGetCoverLetter(Resultid);

//   if (loading && !description) {
//     return <IsLoading />;
//   }

//   return (
//     <CustomResumePreviews
//       topBar={<TopBar />}
//       goBackToResumeEdit={
//         <GoBackToResumeEdit type={"CoverLetter"} cvId={Resultid} />
//       }
//       ChangeResume={<ChangeResume />}
//       resumePreview={
//         <ResumePreview>
//           <PreviewCoverLetter />
//         </ResumePreview>
//       }
//       cvStylesChoose={<CoverLetterStylesChoose />}
//     />
//   );
// };

// export default Results;

// app\Build\CoverLetter\[Resultid]\index.jsx


"use client";
import React from "react";
import { useParams } from "next/navigation";
import ResumePreview from "../../shared/ResumePreview";
import GoBackToResumeEdit from "../../shared/ResumePreview/shared/GoBackToResumeEdit";
import ChangeResume from "../../shared/ResumePreview/shared/ChangeResume";
import PreviewCoverLetter from "./components/PreviewCoverLetter";
import CoverLetterStylesChoose from "../CoverLetterStylesChoose";
import IsLoading from "@/shared/loading/IsLoading";
import { useGetCoverLetter } from "../hooks/useGetCoverLetter";
import TopBar from "./TopBar";
import CustomResumePreviews from "../../shared/CustomResumePreviews";

// const Results = () => {
//   const { Resultid } = useParams();
//   const { loading, description, setDescription } = useGetCoverLetter(Resultid);

//   if (loading && !description) {
//     return <IsLoading />;
//   }

//   return (
//     <CustomResumePreviews
//       topBar={<TopBar />}
//       goBackToResumeEdit={
//         <GoBackToResumeEdit type={"CoverLetter"} cvId={Resultid} />
//       }
//       ChangeResume={<ChangeResume title="Customize Your Cover Letter" />}
//       resumePreview={
//         <ResumePreview>
//           <PreviewCoverLetter />
//         </ResumePreview>
//       }
//       cvStylesChoose={<CoverLetterStylesChoose />}
//     />
//   );
// };

// export default Results;



const Results = () => {
  const { Resultid } = useParams();
  const { loading, description, setDescription } = useGetCoverLetter(Resultid);

  // State to store changes
  const [resumeStyles, setResumeStyles] = React.useState({
    fontSize: 12,
    fontFamily: "Arial",
    colorTheme: "default",
  });

  // Handler for updates
  const handleUpdate = (updates) => {
    setResumeStyles((prevStyles) => ({
      ...prevStyles,
      ...updates,
    }));
  };

  if (loading && !description) {
    return <IsLoading />;
  }

  return (
    <CustomResumePreviews
      topBar={<TopBar />}
      goBackToResumeEdit={
        <GoBackToResumeEdit type={"CoverLetter"} cvId={Resultid} />
      }
      ChangeResume={
        <ChangeResume
          title="Customize Your Cover Letter"
          onUpdate={handleUpdate} // Pass the handler
        />
      }
      resumePreview={
        <ResumePreview
          fontSize={resumeStyles.fontSize}
          fontFamily={resumeStyles.fontFamily}
          colorTheme={resumeStyles.colorTheme}
        >
          <PreviewCoverLetter />
        </ResumePreview>
      }
      cvStylesChoose={<CoverLetterStylesChoose />}
    />
  );
};

export default Results;
