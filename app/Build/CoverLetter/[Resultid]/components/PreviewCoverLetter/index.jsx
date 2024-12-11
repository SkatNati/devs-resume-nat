import React from "react";
import useCoverLetterStore from "@/shared/store/PreviewCoverLetterSelect";
import coverLetterTemplates from "../../../components/coverLetterTemplates";

const PreviewCoverLetter = () => {
  const { selectedTemplateIndex, coverLetterData } = useCoverLetterStore(
    (state) => ({
      selectedTemplateIndex: state.selectedTemplateIndex,
      coverLetterData: state.coverLetterData,
    })
  );
  const TemplateComponent =
    coverLetterTemplates[selectedTemplateIndex].component;

  //
  return (
    <div>
      {TemplateComponent && <TemplateComponent data={coverLetterData} />}
    </div>
  );
};

export default PreviewCoverLetter;
