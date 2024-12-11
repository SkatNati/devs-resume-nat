// import React from "react";

// const ResumePreview = ({ children }) => {
//   return (
//     <div id="resumePreview">
//       <div>{children}</div>
//     </div>
//   );
// };

// export default ResumePreview;

import React from "react";

const ResumePreview = ({ children, fontSize, fontFamily, colorTheme }) => {
  // Define color themes
  const themeStyles = {
    default: { backgroundColor: "#ffffff", color: "#000000" },
    dark: { backgroundColor: "#1a1a1a", color: "#ffffff" },
    light: { backgroundColor: "#f5f5f5", color: "#333333" },
    blue: { backgroundColor: "#e0f7fa", color: "#007bb6" },
  };

  return (
    <div
      id="resumePreview"
      style={{
        fontSize: `${fontSize}px`,
        fontFamily: fontFamily,
        ...themeStyles[colorTheme],
      }}
      className="resume-preview"
    >
      <div>{children}</div>
    </div>
  );
};

export default ResumePreview;
