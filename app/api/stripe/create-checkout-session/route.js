import { authOptions } from "@/app/api/lib/auth";
import { NextResponse } from "next/server"
import UserSubscription from "@/app/util/model/UserSubscription"
import { getServerSession } from "next-auth";
import { stripe } from "@/app/api/lib/stripe";


export const POST = async (req) => {
    try {
        const session = await getServerSession(authOptions);



        if (!session) {
            return NextResponse.json(
                { error: "Please login" },
                { status: 401 }
            );
        }
        const { priceId } = await req.json();
        const userId = session._id;
        const userSubscription = await UserSubscription.findOne({ user: userId });
        if (userSubscription && userSubscription.stripeCustomerId) {
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: userSubscription.stripeCustomerId,
                return_url: `${process.env.NEXT_PUBLIC_NEXT_URL ?? ""}/dashboard`

            })

            return NextResponse.json({
                checkoutUrl: stripeSession.url,
            }, { status: 200 });
        }

        const price = await stripe.prices.retrieve(priceId);

        let mode;
        if (price.recurring) {
            mode = "subscription";
        } else {
            mode = "payment";
        }

        const stripeSession = await stripe.checkout.sessions.create({
            mode: mode,
            payment_method_types: ["card"],
            line_items: [
                {
                    quantity: 1,
                    price: priceId,

                },
            ],
            customer_email: session.email,
            success_url: `${process.env.NEXT_PUBLIC_NEXT_URL ?? ""}/dashboard`,
            cancel_url: `${process.env.NEXT_PUBLIC_NEXT_URL ?? ""}/dashboard`,
            metadata: {
                userId: userId.toString(),
            }

        })

        return NextResponse.json({
            checkoutUrl: stripeSession.url,
        }, { status: 200 });




    } catch (error) {
        return NextResponse.json(
            {
                error: error.message || "An unexpected error occurred",
            },
            { status: 500 }
        );
    }
}


