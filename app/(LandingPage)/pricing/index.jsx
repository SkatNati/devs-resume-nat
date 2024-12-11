import React from "react";
import HeroPage from "./components/HeroPage";
import PricingOptions from "./components/PricingOptions";
import PricingPlan from "./components/PricingPlan";
import FeatureCategory from "./components/FeatureCategory";
import FAQs from "./components/FAQs";

const Pricing = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <HeroPage />
      {/* <PricingOptions />  */}
      {/*  */}
      <PricingPlan />
      {/* <FeatureCategory /> */}
      <FAQs />
    </div>
  );
};

export default Pricing;
