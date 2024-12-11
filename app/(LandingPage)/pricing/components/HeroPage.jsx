import React from "react";

const HeroPage = () => {
  return (
    <div className="flex flex-col md:flex-row  md:justify-between items-center  py-12 bg-white ">
      <h1 className="text-2xl text-center md:text-left md:text-5xl font-extrabold text-gray-900">
        Choose Your Plan
      </h1>
      <p className="text-lg w-full text-center md:text-justify text-gray-600 md:max-w-[50%]">
        Choose the Best Plan for Your Career Growth Subheading: Affordable
        pricing plans to suit your needs and help you land your dream tech job
        faster
      </p>
    </div>
  );
};

export default HeroPage;
