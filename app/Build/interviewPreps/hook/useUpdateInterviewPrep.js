import { getSearchParams } from "@/shared/lib/getSearchParams";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";

export const useUpdateInterviewPrep = () => {
  const [isLoading, setisLoading] = useState();
  // const id = getSearchParams("id");
  const { results: id } = useParams("results");

  const updateinterviewPrep = async (data) => {
    setisLoading(true);
    // update interview preps
    try {
      const endpoint = `${window.location.origin}/api/User/interview-preps/create-interviewPrep/${id}`;
      return await axios.patch(endpoint, data);
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  };

  return {
    updateinterviewPrep,
    isLoading,
  };
};
