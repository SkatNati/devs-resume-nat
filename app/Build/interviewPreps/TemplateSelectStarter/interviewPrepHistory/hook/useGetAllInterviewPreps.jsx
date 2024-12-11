import { useToast } from "@/components/ui/use-toast";
import Http from "@/shared/helper/htttp";
import { useEffect, useState } from "react";

export const useGetAllInterviewPreps = () => {
  const { toast } = useToast();
  const [isLoading, setisLoading] = useState(false);
  const [data, setdata] = useState();

  const fetchData = async () => {
    setisLoading(true);
    try {
      const endpoint = `/api/User/interview-preps/`;
      const data = await Http.get({ endpoint });
      setdata(data?.message);
    } catch (error) {
      toast({
        title: "error",
        description: error?.response?.data?.error,
      });
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    data,
  };
};
