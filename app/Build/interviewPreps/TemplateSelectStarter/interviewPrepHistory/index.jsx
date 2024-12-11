"use client"
import React from "react";
import { useGetAllInterviewPreps } from "./hook/useGetAllInterviewPreps";
import Link from "next/link";
import { ResumeSkeleton } from "@/shared/SkeletonsComponents";
import { ImgComp } from "@/shared/ImgComp";
import { format } from "date-fns";

const InterviewPrepHistory = () => {
  const { data, isLoading } = useGetAllInterviewPreps();
  if (isLoading) {
    return (
      <div className="loading-indicator">
        <ResumeSkeleton />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {data?.length > 0 &&
        data?.map((elem, i) => (
          <Link href={`/Build/interviewPreps?id=${elem._id}`} key={i}>
            <div className="flex flex-col items-center p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <ImgComp
                  src="/interviewprep.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-2">
                <p className="text-gray-600 text-sm">
                  Created: {format(new Date(elem.createdAt), "PPP")}
                </p>
                <p className="text-gray-600 text-sm">
                  Updated: {format(new Date(elem.updatedAt), "PPP")}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default InterviewPrepHistory;
