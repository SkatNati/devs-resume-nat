import {
  coverLetterBuilder,
  cvBuilder,
  interviewPrep,
  optimizeResume,
} from "@/shared/store/CVBuilderStore";

export const builderInstance = (type) => {
  switch (type) {
    case "CoverLetter":
      return coverLetterBuilder;
    case "optimizeResume":
      return optimizeResume;
    case "interviewPreps":
      return interviewPrep;
    default:
      return cvBuilder;
  }
};
