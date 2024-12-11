import connect from "@/app/util/db/connect"
import { NextResponse } from "next/server"

import { authOptions } from "@/app/api/lib/auth";
import { getServerSession } from "next-auth";
import BillingHistory from "@/app/util/model/BillingHistory";


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

        const billingHistory = await BillingHistory.find({ user: userId }).sort({ date: -1 });

        if (!billingHistory) {
            return NextResponse.json(
                { message: "No user subscription found with this user ID" },
                { status: 404 }
            );
        }


        if (!billingHistory) {
            return NextResponse.json(
                { message: "No user subscription found with this id" },
                { status: 404 }
            )
        }

        return NextResponse.json({
            billingHistory
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