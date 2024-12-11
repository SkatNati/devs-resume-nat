import connect from "@/app/util/db/connect";
import interviewPreps from "@/app/util/model/interviewPreps";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  const { updateInterviewPreps: id } = params;
  const data = await request.json();

  try {
    await connect();

    const res = await interviewPreps.findById(id);
    if (!res)
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    const updatedData = await interviewPreps.findByIdAndUpdate(id, data, {
      new: true,
    });

    return NextResponse.json({ message: updatedData }, { status: 200 });
  } catch (error) {}
};
