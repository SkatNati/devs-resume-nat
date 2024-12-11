import { useToast } from "@/components/ui/use-toast";
import Http from "@/shared/helper/htttp";
import WINDOW from "@/shared/lib/mockWindow";
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

import { useState } from "react";

export const useDeleteResume = () => {
  const [isDeleting, setisDeleting] = useState(false);
  const { toast } = useToast();

  const handleDelete = async (id) => {
    const endpoint = "/api/User/Cv/delete-cv";
    // try {
    //   setisDeleting(true);
    //   await Http.delete({ endpoint, body: { id } });

    //   toast({
    //     title: "Success! ✅",
    //     description: "Resume deleted",
    //   });

    //   QueryClient.invalidateQueries(["getAllUserCvs"]);
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 3000);
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
          description: "Resume deleted",
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
