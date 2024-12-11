"use client";
import Stepper from "@/shared/Build/Stepper";
import { interviewPrep } from "@/shared/store/CVBuilderStore";
import React from "react";

const InterviewPropTemplate = () => {
  const { steps, currentStep, handleStepChangeBack } = interviewPrep.store(
    (state) => ({
      steps: state.steps,
      currentStep: state.currentStep,
      handleStepChangeBack: state.handleStepChangeBack,
    })
  );

  return (
    <div className="max-w-[90%] mx-auto my-20">
      <Stepper
        steps={steps}
        currentStep={currentStep}
        handleStepChangeBack={handleStepChangeBack}
        type={"interviewPreps"}
      />
    </div>
  );
};

export default InterviewPropTemplate;
