import React, { Suspense } from "react";
import Results from ".";
import Spin from "@/shared/spin";

const page = () => {
  return (
    <div>
      <Suspense fallback={<Spin />}>
        <Results />
      </Suspense>
    </div>
  );
};

export default page;
