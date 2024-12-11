import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { pricingPlan } from "@/data/pricing-plans";
import { Badge } from "@/components/ui/badge";
import { useUpgradePlan } from "../hooks/useUpgradePlan";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";

export function UpgradePlanModal({ open, handleClose, priceId }) {
  const { upgradePlan, isLoading } = useUpgradePlan();
  const { toast } = useToast();
  const router = useRouter();

  const handleUpgrade = async (priceId) => {
    await upgradePlan(priceId)
      .then((res) => {
        toast({
          title: "Success! ✅",
          description: "Plan updated successfully",
        });
        handleClose();
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error upgrading plan:", err);
        toast({
          variant: "destructive",
          description: err?.response?.data?.message,
        });
      });
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className=" sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Upgrade Plan</DialogTitle>
          <DialogDescription>
            Choose a plan you wish to upgrade to.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-3 max-h-[60vh] overflow-y-auto">
          {/* {pricingPlan.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col md:flex-row gap-y-4 md:gap-x-8 w-full"
            >
              <div className="bg-white p-3 rounded-lg border border-r">
                <h3 className="text-lg font-semibold flex justify-between items-center">
                  {plan.name}

                  {plan.id === priceId && (
                    <Badge className="bg-green-500">Current Plan</Badge>
                  )}
                </h3>
                <p className="text-xl font-bold">${plan.price}</p>
                <p className="text-gray-600">{plan.frequency}</p>
                <p className="text-gray-600 hidden lg:block">
                  {plan.description}
                </p>
                <button
                  disabled={isLoading}
                  className="mt-4 text-sm bg-black text-white px-3 md:px-6 py-2 rounded"
                  onClick={() => handleUpgrade(plan.id)}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))} */}

          {pricingPlan.map((plan) => (
            // <div
            //   key={plan.id}
            //   className="flex flex-col gap-y-10 md:gap-x-8 w-full h-full"
            // >
            <div
              key={plan.id}
              className="bg-white p-3 rounded-lg border border-r"
            >
              <h3 className="text-xl font-semibold flex justify-between items-center">
                {plan.name}

                {plan.id === priceId && (
                  <Badge className="bg-green-500">Current Plan</Badge>
                )}
              </h3>
              <p className="text-xl md:text-2xl font-bold">${plan.price}</p>

              <ul className="text-gray-600 flex flex-col gap-y-2">
                {plan.descriptions.map((value, index) => (
                  <li key={index} className="flex list-none gap-x-2">
                    <Check className="w-3 h-3" />
                    <span className="text-sm">{value}</span>
                  </li>
                ))}
              </ul>
              <button
                disabled={isLoading}
                className=" text-sm bg-[#F9E547] text-black w-full px-3 md:px-6 py-2 rounded justify-end mt-auto"
                onClick={() => handleUpgrade(plan.id)}
              >
                {plan.cta}
              </button>
            </div>
            // </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
