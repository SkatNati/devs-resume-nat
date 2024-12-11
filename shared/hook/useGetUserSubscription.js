
import axios from "axios";
import { useState } from "react";

export const useGetUserSubscription = () => {


    const [subscription, setSubscription] = useState(null);
    const [loadingSubscription, setLoadingSubscription] = useState(false)

    const getUserSubscription = async () => {
        setLoadingSubscription(true)
        try {
            const res = await axios.get("/api/User/user-subscription");
            // console.log(res.data.data)
            setSubscription(res.data.data);
        } catch (error) {
            console.error("Error fetching subscription data:", error);
        } finally {
            setLoadingSubscription(false)
        }
    };

    return {
        getUserSubscription,
        subscription,
        loadingSubscription
    };
}