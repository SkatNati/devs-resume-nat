import axios from "axios";
import { useState } from "react";

export const useCreateInterviewPreps = () => {
  const [isLoading, setisLoading] = useState(false);
  async function createProject() {
    // WINDOW.localStorage.setItem("InterviewPrepTemplate", 0);

    try {
      setisLoading(true);
      const res = await axios.post(
        `${window.location.origin}/api/User/interview-preps/create-interviewPrep`
      );
      setisLoading(false);
      return res;
    } catch (error) {}
  }
  return {
    createProject,
    isLoading,
  };
};
