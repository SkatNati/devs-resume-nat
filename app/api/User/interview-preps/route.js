import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/lib/auth";
import connect from "@/app/util/db/connect";
import interviewPreps from "@/app/util/model/interviewPreps";

export const GET = async () => {
  try {
    const { _id } = await getServerSession(authOptions);
    await connect();
    if (!_id)
      return NextResponse.json(
        {
          error: "pls login",
        },

        { status: 404 }
      );
    const res = await interviewPreps.find({ user: _id });
    return NextResponse.json({ message: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "error occur " + error,
      },
      { status: 500 }
    );
  }
};
