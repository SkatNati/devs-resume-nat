// import useResumeStore from "@/shared/store/PreviewResumeSelect";
// import React from "react";
// import resumeTemplates from "../resumeTemplates";

// const PreviewResume = () => {
//   const { selectedTemplateIndex, resumeData } = useResumeStore((state) => ({
//     selectedTemplateIndex: state.selectedTemplateIndex,
//     resumeData: state.resumeData,
//   }));
//   const TemplateComponent =
//     resumeTemplates[selectedTemplateIndex || 0].component;

//   return (
//     <div>{TemplateComponent && <TemplateComponent data={resumeData} />}</div>
//   );
// };

// export default PreviewResume;


import useResumeStore from "@/shared/store/PreviewResumeSelect";
import React from "react";
import resumeTemplates from "../resumeTemplates";

// This function determines the styles based on the color theme.
const getThemeStyles = (colorTheme) => {
  switch (colorTheme) {
    default:
      return { backgroundColor: "", color: "", };
    case "dark":
      return { backgroundColor: "#050100", color: "#f4c768", border: "1px solid #050100", };
    case "light":
      return { backgroundColor: "#f1eceb", color: "#050100", border: "1px solid #f1eceb", };
    case "blue":
      return { backgroundColor: "#e0f7fa", color: "#0277bd", border: "1px solid #0288d1", }; 
  };
};

const PreviewResume = ({ fontSize, fontFamily, colorTheme}) => {
  // Get the theme styles based on the provided colorTheme prop.
  const themeStyles = getThemeStyles(colorTheme);
  // const theme = themeStyles[colorTheme] || themeStyles.default;

   // Define resume style by combining font settings with dynamic theme styles.
  const resumeStyle = {
    fontSize: `${fontSize}px`, // Dynamic font size
    fontFamily: fontFamily, // Dynamic font family
    backgroundColor: themeStyles.backgroundColor, // Set background color from theme
    color: themeStyles.color, // Set text color from theme
    padding: "20px", // Padding for the resume container
    width: "100%", // Ensure full width
    boxSizing: "border-box", // Ensure padding is included in total width
  };
  
  const { selectedTemplateIndex, resumeData } = useResumeStore((state) => ({
    selectedTemplateIndex: state.selectedTemplateIndex,
    resumeData: state.resumeData,
  }));
  const TemplateComponent =
    resumeTemplates[selectedTemplateIndex || 0]?.component;

  return (
    <div id="previewResume" style={resumeStyle}>{TemplateComponent && <TemplateComponent data={resumeData} />}
    </div>
  );
};

export default PreviewResume;