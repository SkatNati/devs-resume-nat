import { useToast } from "@/components/ui/use-toast";
import Http from "@/shared/helper/htttp";
import WINDOW from "@/shared/lib/mockWindow";
import axios from "axios";

import { useState } from "react";

export const useDeleteInterviewPrep = () => {
  const [isDeleting, setisDeleting] = useState(false);

  const { toast } = useToast();

  const handleDelete = async (id) => {
    const endpoint = "/api/User/interview-preps/delete-interviewPrep";
    // try {
    //   setisDeleting(true);
    //   await Http.delete({ endpoint, body: { id } });
    //   toast({
    //     title: "Success! ✅",
    //     description: "Template deleted",
    //   });

    //   // Reload the page after showing the toast
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 3000); // Adjust the timeout duration as needed
    // } catch (error) {
    // } finally {
    //   setisDeleting(false);
    // }

    setisDeleting(true);
    await axios
      .delete(endpoint, { data: { id } })
      .then((res) => {
        toast({
          title: "Success! ✅",
          description: "Template deleted",
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "An error occurred while deleting the cover letter.",
          status: "error",
        });
      })
      .finally(() => {
        setisDeleting(false);
      });
  };
  return {
    handleDelete,
    isDeleting,
  };
};
