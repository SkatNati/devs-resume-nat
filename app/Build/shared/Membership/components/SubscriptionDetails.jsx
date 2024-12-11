"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useCreateStripeCheckout } from "@/shared/hook/useCreateStripeCheckout";
import { useGetUserSubscription } from "@/shared/hook/useGetUserSubscription";
import { SubscriptionDetailsSkeleton } from "@/shared/SkeletonsComponents";
import { IdCardIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { ArrowDownUp, Settings } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UpgradePlanModal } from "./UpgradePlanModal";

const SubScriptionDetails = () => {
  const { getUserSubscription, subscription, loadingSubscription } =
    useGetUserSubscription();
  const { createCheckoutSession, isLoading } = useCreateStripeCheckout();
  const [open, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  const { toast } = useToast();
  useEffect(() => {
    getUserSubscription();
  }, []);

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
          description: "something went wrong, please try again",
        });
      });
  };

  if (loadingSubscription) return <SubscriptionDetailsSkeleton />;

  return (
    <Card className="rounded-lg">
      {subscription && subscription.userSubscription != null ? (
        <>
          <CardHeader className="bg-gray-100">
            <CardTitle>{subscription.userSubscription.planName} Plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex-col space-y-3 flex lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p>{subscription.userSubscription.cardBrand}</p>
                <p>xxxxx {subscription.userSubscription.cardLast4}</p>
                <p className=" truncate capitalize  flex items-center">
                  <IdCardIcon className=" truncate mr-2" />
                  Credit Card
                </p>
              </div>
              <div className="lg:px-4">
                You are currently on a {subscription.userSubscription.planName}{" "}
                plan, which will expire on
                {format(
                  new Date(
                    subscription.userSubscription.stripeCurrentPeriodEnd
                  ),
                  "PPP"
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <Button
                  className="bg-[#F9E547] text-black w-full text-sm"
                  disabled={isLoading}
                  onClick={() =>
                    handleSubscribe(subscription.userSubscription.stripePriceId)
                  }
                >
                  <Settings className="mr-2 text-sm" />
                  Manage Subscription
                </Button>

                <Button
                  className="w-full text-sm"
                  disabled={isLoading}
                  variant="outline"
                  onClick={() => {
                    setIsOpen(true);
                  }}
                >
                  <ArrowDownUp className="mr-2 text-sm" />
                  Upgrade Plan
                </Button>
              </div>
            </div>
          </CardContent>

          <UpgradePlanModal
            open={open}
            handleClose={handleClose}
            priceId={subscription.userSubscription.stripePriceId}
          />
        </>
      ) : (
        <>
          <CardHeader className="bg-gray-100">
            <CardTitle className="text-center">
              No Active subscription found
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <Button asChild className="mt-4 bg-[#F9E547] text-black">
              <Link href="/pricing">Subscribe</Link>
            </Button>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default SubScriptionDetails;
