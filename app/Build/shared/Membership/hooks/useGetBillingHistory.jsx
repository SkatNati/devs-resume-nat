import axios from "axios";
import { useEffect, useState } from "react";

export const useGetBillingHistory = () => {
  const [billingHistory, setBillingHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);

  const getUserBillingHistory = async () => {
    setLoadingHistory(true);
    try {
      const res = await axios.get("/api/User/billing-history");
      console.log(res.data.billingHistory);
      setBillingHistory(res.data.billingHistory);
    } catch (error) {
      console.error("Error fetching subscription data:", error);
    } finally {
      setLoadingHistory(false);
    }
  };

  useEffect(() => {
    getUserBillingHistory();
  }, []);

  return {
    billingHistory,
    loadingHistory,
  };
};
