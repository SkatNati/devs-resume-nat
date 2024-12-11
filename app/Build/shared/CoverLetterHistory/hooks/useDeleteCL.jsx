import { useToast } from "@/components/ui/use-toast";
import Http from "@/shared/helper/htttp";
import WINDOW from "@/shared/lib/mockWindow";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useDeleteCL = () => {
  const [isDeleting, setisDeleting] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const handleDelete = async (id) => {
    const endpoint = "/api/User/CoverLetter/delete-cv";
    // try {
    //   setisDeleting(true);
    //   await Http.delete({ endpoint, body: { id } });

    //   toast({
    //     title: "Success! ✅",
    //     description: "Coverletter deleted",
    //   });

    //   queryClient.invalidateQueries(["getAllUserCvs"]);
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
          description: "Cover letter deleted",
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
