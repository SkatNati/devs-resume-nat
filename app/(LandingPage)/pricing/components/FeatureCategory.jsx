"use client";
import React, { useEffect, useState } from "react";

import { Check } from "lucide-react";

const FeatureCategory = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const tableData = [
    {
      feature: "Unlimited access to Resume Building Service",
      threeMonths: <Check className="mx-auto" />,
      monthly: <Check className="mx-auto" />,
      oneTime: <Check className="mx-auto" />,
    },
    {
      feature: "Unlimited Cover Letter creation",
      threeMonths: <Check className="mx-auto" />,
      monthly: <Check className="mx-auto" />,
      oneTime: <Check className="mx-auto" />,
    },
    {
      feature: "Unlimited Interview Prep Templates",
      threeMonths: <Check className="mx-auto" />,
      monthly: <Check className="mx-auto" />,
      oneTime: <Check className="mx-auto" />,
    },
    {
      feature: "Unlimited Resume Optimization",
      threeMonths: <Check className="mx-auto" />,
      monthly: <Check className="mx-auto" />,
      oneTime: <Check className="mx-auto" />,
    },
    {
      feature: "Weekly Blogs",
      threeMonths: <Check className="mx-auto" />,
      monthly: <Check className="mx-auto" />,
      oneTime: <Check className="mx-auto" />,
    },
  ];

  return (
    <div className="my-10 w-full">
      <table className="w-full my-10 border-t border-black">
        <thead>
          <tr className="flex w-full flex-wrap">
            <th className="lg:w-[25%] w-full p-2 justify-center border-b border-black">
              Feature
            </th>
            <th className="lg:w-[25%] w-full p-3 justify-center text-center border-b lg:border-l border-black">
              3-Months Plan
            </th>
            <th className="lg:w-[25%] w-full p-3 justify-center text-center border-b lg:border-l border-black">
              Monthly Plan
            </th>
            <th className="lg:w-[25%] w-full p-3 justify-center text-center border-b lg:border-l border-black">
              One Time Plan
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr className="flex w-full flex-wrap" key={index}>
              <td className="lg:w-[25%] w-full p-2 justify-center border-b border-black">
                <p>{item.feature}</p>
              </td>
              <td className="lg:w-[25%] w-full p-3 justify-center text-center border-b lg:border-l border-black">
                <p className="font-semibold">{item.threeMonths}</p>
              </td>
              <td className="lg:w-[25%] w-full p-3 justify-center text-center border-b lg:border-l border-black">
                <p className="font-semibold">{item.monthly}</p>
              </td>
              <td className="lg:w-[25%] w-full p-3 justify-center text-center border-b lg:border-l border-black">
                <p className="font-semibold">{item.oneTime}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureCategory;
