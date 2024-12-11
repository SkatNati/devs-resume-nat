"use client";

import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { pricingPlan, pricingPlanTest } from "@/data/pricing-plans";
import { cn } from "@/lib/utils";
import { useCreateStripeCheckout } from "@/shared/hook/useCreateStripeCheckout";
import { Check } from "lucide-react";
import React from "react";

const PricingPlan = () => {
  const { createCheckoutSession, isLoading } = useCreateStripeCheckout();
  const { toast } = useToast();

  const handleSubscribe = async (priceId) => {
    await createCheckoutSession(priceId)
      .then((response) => {
        console.log(response);
        const { checkoutUrl } = response;
        window.document.location.href = checkoutUrl;
      })
      .catch((err) => {
        console.log(err);
        toast({
          variant: "destructive",
          description: err?.message,
        });
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Pricing Plans</h2>
          <p className="text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-2 md:space-x-4 items-stretch justify-between">
          {pricingPlan.map((plan) => (
            // <div
            //   key={plan.id}
            //   className="flex flex-col gap-y-10 md:gap-x-8 w-full h-full"
            // >
            <div
              key={plan.id}
              className="bg-white p-6 rounded-lg border flex flex-col gap-y-10 h-full lg:w-1/3 hover:shadow-lg hover:shadow-[#F9E547] transition  hover:scale-95"
            >
              <h3 className="text-2xl font-semibold flex justify-between items-center">
                {plan.name}

                {plan.name === "Monthly Plan" && (
                  <Badge className="bg-[#F9E547] text-black ">
                    Recommended
                  </Badge>
                )}
              </h3>
              <p
                className={cn(
                  "text-3xl md:text-6xl font-bold"
                  // plan.name === "Monthly Plan" && "text-green-500",
                  // plan.name === "3-Months Plan" && "text-green-500"
                )}
              >
                ${plan.price}
              </p>
              <p className="text-gray-600">{plan.frequency}</p>
              <ul className="text-gray-600 flex flex-col gap-y-2 h-[12rem]">
                {plan.descriptions.map((value, index) => (
                  <li key={index} className="flex list-none gap-x-2">
                    <Check
                      className={cn(
                        plan.name === "Monthly Plan" &&
                          "text-green-500  font-bold",
                        plan.name === "3-Months Plan" &&
                          "text-green-500 font-bold"
                      )}
                    />
                    <span className="">{value}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled={isLoading}
                className="text-xl font-bold bg-[#F9E547] text-black  px-3 md:px-6 py-2 rounded justify-end mt-auto"
                onClick={() => handleSubscribe(plan.id)}
              >
                {plan.cta}
              </button>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
