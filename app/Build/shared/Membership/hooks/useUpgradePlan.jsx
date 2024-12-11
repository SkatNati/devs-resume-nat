import axios from "axios";
import { useState } from "react";

export const useUpgradePlan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const upgradePlan = async (priceId) => {
    setIsLoading(true);
    try {
      const res = await axios.post("/api/User/upgrade-plan", {
        newPriceId: priceId,
      });
      return res.data;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { upgradePlan, isLoading };
};
