import React, { Suspense } from "react";
import ComingSoon from "../../../shared/comingSoon";
import InterviewPropTemplate from ".";
import Spin from "@/shared/spin";

const page = () => {
  return (
    <div>
      {/* <ComingSoon /> */}
      <Suspense fallback={<Spin />}>
        <InterviewPropTemplate />
      </Suspense>
    </div>
  );
};

export default page;
