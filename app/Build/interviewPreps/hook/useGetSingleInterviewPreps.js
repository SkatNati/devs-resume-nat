import Http from "@/shared/helper/htttp";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useGetSingleInterviewPreps = () => {
  const { results: id } = useParams("results");

  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseApiPath = `/api/User/`;

  async function getSingleInterviewPreps() {
    setLoading(true);
    const endpoint = `${baseApiPath}interview-preps/${id}`;
    try {
      const res = await Http.get({ endpoint });

      setdata(res.message);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSingleInterviewPreps();
  }, []);

  return { data, loading, error, getSingleInterviewPreps };
};
