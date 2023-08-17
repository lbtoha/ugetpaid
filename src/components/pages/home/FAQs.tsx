"use client";
import { faqsData } from "@/public/data/home";
import fatIcon from "@/public/images/icon/faq-icon.png";
import Image from "next/image";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import HomeHeading from "../../shared/HomeHeading";

const FAQs = () => {
  const [activeTab, setActiveTab] = useState<number | string>(0);
  const [open, setOpen] = useState<number | null>(1);

  const handleTabClick = (index: number | string) => {
    setActiveTab(index);
  };

  return (
    <section className="section-gap">
      <div className="faqs-section rounded-xl px-S15 py-[60px] lg:py-[80px] xl:py-[120px]">
        <div className="mx-auto max-w-[615px] text-center">
          <HomeHeading
            heading="Frequently asked questions"
            subHeading="FAQs"
            paragraph="Frequently Asked Questions.Find below our most frequently asked or for more answers."
            paragraphWidth={630}
          />
        </div>
        <div className="mx-auto mt-7 max-w-[1080px] sm:mt-10 lg:mt-S60 xl:mt-S80">
          {faqsData.map(({ id, question, answer }) => (
            <div key={id} className="mb-2 lg:mb-4 xl:mb-5">
              <div
                className="mb-[1px] flex w-full cursor-pointer items-center justify-between  rounded-tl-xl rounded-tr-xl bg-C3E4762 p-S15 text-left text-base sm:p-5 md:p-6 md:text-lg lg:p-7 xl:p-S30 xl:text-[20px]"
                key={id}
                onClick={() => setOpen((p) => (id == p ? null : id))}
              >
                <div className="flex items-center gap-x-4 sm:gap-x-5">
                  <Image
                    src={fatIcon}
                    width={24}
                    alt="Faq icon"
                    className="shrink-0 max-sm:w-5"
                  />
                  <p className="">{question}</p>
                </div>
                <i
                  className={`fa-solid ${id == open ? "fa-minus" : "fa-plus"}`}
                ></i>
              </div>
              <AnimateHeight
                id={`example-panel-faq${id}`}
                duration={500}
                height={open == id ? "auto" : 0}
              >
                <div>
                  <p className=" rounded-bl-xl rounded-br-xl bg-C3E4762 p-S15 text-base font-normal leading-[150%] sm:p-5 md:p-6 md:text-lg lg:p-7 xl:p-S30 xl:text-[20px]">
                    {answer}
                  </p>
                </div>
              </AnimateHeight>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
