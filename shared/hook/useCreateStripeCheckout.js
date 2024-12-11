import axios from 'axios';
import { useState } from 'react';

export const useCreateStripeCheckout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const createCheckoutSession = async (priceId) => {
        setIsLoading(true);
        try {
            const res = await axios.post('/api/stripe/create-checkout-session', { priceId });
            return res.data;
        } catch (error) {
            console.error('Error creating checkout session:', error);
            if (error.response && error.response.data && error.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error('An unexpected error occurred');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { createCheckoutSession, isLoading };

}