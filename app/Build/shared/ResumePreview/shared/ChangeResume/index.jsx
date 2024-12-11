// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import React from "react";
// import AdditionalSection from "./component/AdditionalSection";

// const ChangeResume = () => {
//   return (
//     <div className="w-[250px] h-[200px] border bg-white px-4 mt-6">
//       <Accordion type="single" collapsible>
//         <AccordionItem value="item-1">
//           <AccordionTrigger noExtaStyle={true}>Styles</AccordionTrigger>
//           <AccordionContent>
//             Yes. It adheres to the WAI-ARIA design pattern.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-2">
//           <AccordionTrigger noExtaStyle={true}>Text</AccordionTrigger>
//           <AccordionContent>
//             Yes. It adheres to the WAI-ARIA design pattern.
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-3">
//           <AccordionTrigger noExtaStyle={true}>
//             Additional Sections
//           </AccordionTrigger>
//           <AccordionContent>
//             <AdditionalSection />
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// };

// export default ChangeResume;


// import React, { useState } from "react";

// const ChangeResume = () => {
//   const [fontSize, setFontSize] = useState(12);
//   const [fontFamily, setFontFamily] = useState("Arial");
//   const [colorTheme, setColorTheme] = useState("default");

//   const fonts = ["Arial", "Times New Roman", "Verdana", "Georgia"];
//   const colorThemes = ["default", "dark", "light", "blue"];

//   const handleFontSizeChange = (e) => {
//     const newSize = parseInt(e.target.value, 10);
//     setFontSize(newSize);
//     // onUpdate({ fontSize: newSize });
//   };

//   const handleFontFamilyChange = (e) => {
//     const newFont = e.target.value;
//     setFontFamily(newFont);
//     // onUpdate({ fontFamily: newFont });
//   };

//   const handleColorThemeChange = (e) => {
//     const newTheme = e.target.value;
//     setColorTheme(newTheme);
//     // onUpdate({ colorTheme: newTheme });
//   };

//   return (
//     <div className="w-64 h-full bg-white shadow-md p-4">
//       <h2 className="font-bold text-lg mb-4">Customize Your Resume</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm mb-2" htmlFor="font-size">
//           Font Size
//         </label>
//         <input
//           type="range"
//           id="font-size"
//           min="8"
//           max="20"
//           value={fontSize}
//           onChange={handleFontSizeChange}
//           className="w-full"
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 text-sm mb-2"
//           htmlFor="font-family"
//         >
//           Font Family
//         </label>
//         <select
//           id="font-family"
//           value={fontFamily}
//           onChange={handleFontFamilyChange}
//           className="block w-full p-2 border border-gray-300 rounded shadow-sm"
//         >
//           {fonts.map((font) => (
//             <option key={font} value={font}>
//               {font}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 text-sm mb-2"
//           htmlFor="color-theme"
//         >
//           Color Theme
//         </label>
//         <select
//           id="color-theme"
//           value={colorTheme}
//           onChange={handleColorThemeChange}
//           className="block w-full p-2 border border-gray-300 rounded shadow-sm"
//         >
//           {colorThemes.map((theme) => (
//             <option key={theme} value={theme}>
//               {theme}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default ChangeResume;


// import React, { useState } from "react";
// import ResumePreview from "../..";

// const ChangeResume = ({ onUpdate }) => {
//   const [fontSize, setFontSize] = useState();
//   const [fontFamily, setFontFamily] = useState("");
//   const [colorTheme, setColorTheme] = useState("default");

//   const fonts = ["Arial", "Times New Roman", "Verdana", "Georgia"];
//   const colorThemes = ["default", "dark", "light", "blue"];

//   const handleFontSizeChange = (e) => {
//     const newSize = parseInt(e.target.value, 10);
//     setFontSize(newSize);
//     onUpdate({ fontSize: newSize });
//   };

//   const handleFontFamilyChange = (e) => {
//     const newFont = e.target.value;
//     setFontFamily(newFont);
//     onUpdate({ fontFamily: newFont });
//   };

//   const handleColorThemeChange = (e) => {
//     const newTheme = e.target.value;
//     setColorTheme(newTheme);
//     onUpdate({ colorTheme: newTheme });
//   };

//   return (
//     <div className="w-64 h-full bg-white shadow-md p-4">
//       <h2 className="font-bold text-lg mb-4">Customize Your Resume</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700 text-sm mb-2" htmlFor="font-size">
//           Font Size
//         </label>
//         <input
//           type="range"
//           id="font-size"
//           min="8"
//           max="20"
//           value={fontSize}
//           onChange={handleFontSizeChange}
//           className="w-full"
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 text-sm mb-2"
//           htmlFor="font-family"
//         >
//           Font Family
//         </label>
//         <select
//           id="font-family"
//           value={fontFamily}
//           onChange={handleFontFamilyChange}
//           className="block w-full p-2 border border-gray-300 rounded shadow-sm"
//         >
//           {fonts.map((font) => (
//             <option key={font} value={font}>
//               {font}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label
//           className="block text-gray-700 text-sm mb-2"
//           htmlFor="color-theme"
//         >
//           Color Theme
//         </label>
//         <select
//           id="color-theme"
//           value={colorTheme}
//           onChange={handleColorThemeChange}
//           className="block w-full p-2 border border-gray-300 rounded shadow-sm"
//         >
//           {colorThemes.map((theme) => (
//             <option key={theme} value={theme}>
//               {theme}
//             </option>
//           ))}
//         </select>
//       </div>
//         {/* Pass the selected color theme to ResumePreview component */}
//         <ResumePreview
//           colorTheme={colorTheme} 
//           fontSize={fontSize}
//           fontFamily={fontFamily}
//         />
//     </div>
//   );
// };

// export default ChangeResume;

// app\Build\shared\ResumePreview\shared\ChangeResume\index.jsx


import React, { useState } from "react";
import ResumePreview from "../..";

const ChangeResume = ({ onUpdate, title }) => {
  const [fontSize, setFontSize] = useState();
  const [fontFamily, setFontFamily] = useState("");
  const [colorTheme, setColorTheme] = useState("default");

  const fonts = ["Arial", "Times New Roman", "Verdana", "Georgia"];
  const colorThemes = ["default", "dark", "light", "blue"];

  // const handleFontSizeChange = (e) => {
  //   const newSize = parseInt(e.target.value, 10);
  //   setFontSize(newSize);
  //   onUpdate({ fontSize: newSize });
  // };

  // const handleFontFamilyChange = (e) => {
  //   const newFont = e.target.value;
  //   setFontFamily(newFont);
  //   onUpdate({ fontFamily: newFont });
  // };

  // const handleColorThemeChange = (e) => {
  //   const newTheme = e.target.value;
  //   setColorTheme(newTheme);
  //   onUpdate({ colorTheme: newTheme });
  // };

  const handleFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    setFontSize(newSize);
    console.log("Font size updated:", newSize); // Debugging
    onUpdate({ fontSize: newSize });
  };
  
  const handleFontFamilyChange = (e) => {
    const newFont = e.target.value;
    setFontFamily(newFont);
    console.log("Font family updated:", newFont); // Debugging
    onUpdate({ fontFamily: newFont });
  };
  
  const handleColorThemeChange = (e) => {
    const newTheme = e.target.value;
    setColorTheme(newTheme);
    console.log("Color theme updated:", newTheme); // Debugging
    onUpdate({ colorTheme: newTheme });
  };
  

  return (
    <div className="w-64 h-full bg-white shadow-md p-4">
      <h2 className="font-bold text-lg mb-4">{title}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="font-size">
          Font Size
        </label>
        <input
          type="range"
          id="font-size"
          min="8"
          max="20"
          value={fontSize || 12}
          onChange={handleFontSizeChange}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm mb-2"
          htmlFor="font-family"
        >
          Font Family
        </label>
        <select
          id="font-family"
          value={fontFamily || "Arial"}
          onChange={handleFontFamilyChange}
          className="block w-full p-2 border border-gray-300 rounded shadow-sm"
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm mb-2"
          htmlFor="color-theme"
        >
          Color Theme
        </label>
        <select
          id="color-theme"
          value={colorTheme}
          onChange={handleColorThemeChange}
          className="block w-full p-2 border border-gray-300 rounded shadow-sm"
        >
          {colorThemes.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
        {/* Pass the selected color theme to ResumePreview component */}
        <ResumePreview
          colorTheme={colorTheme} 
          fontSize={fontSize}
          fontFamily={fontFamily}
        />
    </div>
  );
};

export default ChangeResume;