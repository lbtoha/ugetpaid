"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

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
    <div className="mx-auto mt-5 max-w-[880px] md:mt-8 lg:mt-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {faqs.map(({ id, question, answer }) => (
          <div key={id} className="mb-2.5">
            <div
              className="mb-[1px] flex w-full cursor-pointer items-center justify-between rounded-xl  bg-C2E3549 px-5 py-S15 text-left md:px-S30 lg:text-[20px]"
              key={id}
              onClick={() => setOpen((p) => (id == p ? null : id))}
            >
              <div className="flex items-center gap-x-5">
                <p>{question}</p>
              </div>
              <i
                className={`fa-solid animation-plus rounded-full bg-[#505E86] p-2 ${
                  id == open ? "fa-plus rotate-45" : "fa-plus"
                }`}
              ></i>
            </div>
            <AnimateHeight
              id={`example-panel-faq${id}`}
              duration={500}
              height={open == id ? "auto" : 0} // see props documentation below
            >
              <div>
                <p className=" rounded-xl bg-C2E3549 px-5 py-S15 text-[20px] text-base font-normal leading-[150%]  md:p-S30">
                  {answer}
                </p>
              </div>
            </AnimateHeight>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQs;
