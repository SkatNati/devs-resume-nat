import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import User from "@/app/util/model/User";
import connect from "@/app/util/db/connect";
import InterviewPreps from "@/app/util/model/interviewPreps";
import { authOptions } from "@/app/api/lib/auth";

export const POST = async () => {
  try {
    await connect();
    const { _id } = await getServerSession(authOptions);

    const user = await User.findById(_id);
    if (!user)
      return NextResponse.json(
        {
          error: "pls login",
        },
        { status: 404 }
      );
    const res = await InterviewPreps.create({ user: _id });
    return NextResponse.json({ message: res._id }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "error occur " + error,
      },
      { status: 500 }
    );
  }
};
