import connect from "@/app/util/db/connect"
import { NextResponse } from "next/server"
import UserSubscription from "@/app/util/model/UserSubscription"
import { authOptions } from "@/app/api/lib/auth";
import { getServerSession } from "next-auth";

const DAT_IN_MS = 86_400_000;

export const GET = async () => {
    try {
        await connect()
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json(
                { error: "Please login" },
                { status: 401 }
            );
        }

        const userId = session._id;
        const userSubscription = await UserSubscription.findOne({ user: userId });

        if (!userSubscription) {
            return NextResponse.json(
                { message: "No user subscription found with this user ID" },
                { status: 404 }
            );
        }

        // Check if the subscription is active or not.
        const isActive = userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime() + DAT_IN_MS > Date.now();


        const subscription = {
            userSubscription: userSubscription,
            isActive: !!isActive,
        }

        return NextResponse.json({
            data: subscription
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json(
            {
                error: "error occur " + error,
            },
            { status: 500 }
        );
    }
}