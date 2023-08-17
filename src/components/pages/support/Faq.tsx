"use client";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { v4 as uuidv4 } from "uuid";

type Props = {
  faqs: { id: any; question: string; answer: string }[];
};
const FAQs = ({ faqs }: Props) => {
  const [activeTab, setActiveTab] = useState<number | string>(0);
  const [open, setOpen] = useState<number | null>(1);

  const handleTabClick = (index: number | string) => {
    setActiveTab(index);
  };

  return (
    <div className="mt-10 max-w-[1080px] mx-auto">
      {faqs.map(({ id, question, answer }) => (
        <div key={uuidv4()} className="mb-2.5">
          <div
            className="flex w-full items-center justify-between text-left mb-[1px] py-S15  px-S30 bg-C2E3549 cursor-pointer rounded-xl  text-[20px]"
            key={id}
            onClick={() => setOpen((p) => (id == p ? null : id))}
          >
            <div className="flex items-center gap-x-5">
              <p>{question}</p>
            </div>
            <i
              className={`fa-solid bg-[#3E4865] p-4 rounded-full ${
                id == open ? "fa-minus" : "fa-plus"
              }`}
            ></i>
          </div>
          <AnimateHeight
            id={`example-panel-faq${id}`}
            duration={500}
            height={open == id ? "auto" : 0} // see props documentation below
          >
            <div>
              <p className=" text-base font-normal leading-[150%] bg-C2E3549 p-S30 rounded-xl  text-[20px]">
                {answer}
              </p>
            </div>
          </AnimateHeight>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
