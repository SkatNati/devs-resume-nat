"use client";
import PopUpAnimate from "@/shared/animate/PopUpAnimate";
import AccordionCompo from "@/shared/component/accordion";
import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordions = () => {
  const staticFAQS = [
    {
      id: 1,
      title: "What happens after I subscribe?",
      desc: "After subscribing, you'll have immediate access to all the features included in your chosen plan.",
    },
    {
      id: 2,
      title: "Can I cancel my subscription?",
      desc: "Yes, you can cancel your subscription at any time from your account settings.",
    },
    {
      id: 3,
      title: "Do I get a refund if I cancel my plan early?",
      desc: "Refunds are not provided for early cancellations, but you will retain access until the end of your current billing cycle.",
    },
    {
      id: 4,
      title: "How does the 3-month plan save me money?",
      desc: "The 3-month plan is billed at $24.99 every three months, saving you 16% compared to the monthly plan.",
    },
    {
      id: 5,
      title: "Can I upgrade my plan later?",
      desc: "Yes, you can upgrade your plan at any time from your account settings.",
    },
  ];

  return (
    <AccordionCompo>
      {staticFAQS.map((quest, i) => (
        <PopUpAnimate hoverAnimate key={i}>
          <AccordionItem
            value={`item-${i}}`}
            className="py-1 border-2 md:border-0 md:shadow-md px-10 my-4 accordionShadcn"
          >
            <AccordionTrigger className="font-bold text-lg md:text-2xl text-start">
              {quest.title}
            </AccordionTrigger>
            <AccordionContent className="md:w-[50%] text-sm md:text-lg">
              {quest.desc}
            </AccordionContent>
          </AccordionItem>
        </PopUpAnimate>
      ))}
    </AccordionCompo>
  );
};

export default Accordions;
