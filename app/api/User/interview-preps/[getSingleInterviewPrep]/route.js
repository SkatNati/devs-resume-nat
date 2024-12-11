import connect from "@/app/util/db/connect";
import interviewPreps from "@/app/util/model/interviewPreps";
import { NextResponse } from "next/server";

export const GET = async (_, { params }) => {
  try {
    await connect();
    const { getSingleInterviewPrep: id } = params;
    const res = await interviewPreps.findById(id);
    if (!res)
      return NextResponse.json(
        { message: "no interview with this data" },
        { status: 200 }
      );
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
