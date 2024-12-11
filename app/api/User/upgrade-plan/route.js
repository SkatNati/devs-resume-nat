import { stripe } from "@/app/api/lib/stripe";
import { NextResponse } from "next/server"
import UserSubscription from "@/app/util/model/UserSubscription"
import { authOptions } from "@/app/api/lib/auth";
import { getServerSession } from "next-auth";

export const POST = async (req) => {
    try {

        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json(
                { error: "Please login" },
                { status: 401 }
            );
        }
        const { newPriceId } = await req.json();
        const userId = session._id;
        const userSubscription = await UserSubscription.findOne({ user: userId });

        if (!userSubscription) {
            return NextResponse.json(
                { message: "No user subscription found with this user ID" },
                { status: 404 }
            );
        }

        if (userSubscription.stripePriceId === newPriceId) {
            return NextResponse.json(
                { message: "You are already subscribed to this plan" },
                { status: 400 }
            );
        }

        const subscription = await stripe.subscriptions.retrieve(userSubscription.stripeSubscriptionId);
        const subscriptionItemId = subscription.items.data[0].id;

        const updatedSubscription = await stripe.subscriptions.update(userSubscription.stripeSubscriptionId, {
            items: [{ id: subscriptionItemId, price: newPriceId }],
            proration_behavior: "create_prorations"
        })

        userSubscription.plan = newPriceId;
        userSubscription.stripePriceId = newPriceId;
        userSubscription.stripeCurrentPeriodEnd = new Date(updatedSubscription.current_period_end + 1000)
        await userSubscription.save();

        return NextResponse.json({
            message: "Subscription updated successfully",
        }, { status: 200 });



    } catch (error) {
        return NextResponse.json(
            {
                error: "error occur " + error,
            },
            { status: 500 }
        );
    }
}