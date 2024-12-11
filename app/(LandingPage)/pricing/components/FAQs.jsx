import React from "react";
import { HeaderText } from "../../shared/Text/Header";
import { Paragraph } from "../../shared/Text/Paragraph";
import ButtonComp from "@/shared/Button";
import Accordions from "./AccordionsComp";

const FAQs = () => {
  return (
    <div className="max-w-[90%] mx-auto flex flex-col gap-y-4 mt-20 py-10 border-b-2">
      <HeaderText text={"FAQs"} className={"text-start"} />
      <Paragraph
        text="Find answers to commonly asked questions for quick assistance."
        className={"text-start"}
      />
      <Accordions />
      <div className="flex gap-y-3 flex-col">
        <HeaderText text={"Still have questions?"} className={"text-start"} />
        <Paragraph
          text="Feel free to reach out to our support team."
          className={"text-start"}
        />

        <ButtonComp text="Contact" />
      </div>
    </div>
  );
};

export default FAQs;
