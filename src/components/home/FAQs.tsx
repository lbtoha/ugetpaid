"use client";
import React from "react";
import HomeHeading from "../shared/HomeHeading";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import Image from "next/image";
import fatIcon from "@/public/images/icon/faq-icon.png";

const FAQs = () => {
  const [activeTab, setActiveTab] = useState<number | string>(0);
  const [open, setOpen] = useState<number | null>(1);

  const handleTabClick = (index: number | string) => {
    setActiveTab(index);
  };

  const faqsData = [
    {
      id: 52201,
      question: "How to make money on ugetpaid?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus pulvinar egestas non convallis semper ut fermentum pellentesque accumsan. Tellus, vitae sapien ut nunc, consectetur risus vel. Ipsum ullamcorper nec ut tortor metus, euismod est, nunc. Morbi mi integer nam nullam tortor nisl quis at a. Duis viverra ac nunc amet sed. ",
    },
    {
      id: 52202,
      question: "How is ugetpaid able to pay users?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus pulvinar egestas non convallis semper ut fermentum pellentesque accumsan. Tellus, vitae sapien ut nunc, consectetur risus vel. Ipsum ullamcorper nec ut tortor metus, euismod est, nunc. Morbi mi integer nam nullam tortor nisl quis at a. Duis viverra ac nunc amet sed. ",
    },
    {
      id: 52203,
      question: "How long does it take to cash out your money?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus pulvinar egestas non convallis semper ut fermentum pellentesque accumsan. Tellus, vitae sapien ut nunc, consectetur risus vel. Ipsum ullamcorper nec ut tortor metus, euismod est, nunc. Morbi mi integer nam nullam tortor nisl quis at a. Duis viverra ac nunc amet sed. ",
    },
    {
      id: 52204,
      question: "What are Terms and Conditions and Privacy Policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus pulvinar egestas non convallis semper ut fermentum pellentesque accumsan. Tellus, vitae sapien ut nunc, consectetur risus vel. Ipsum ullamcorper nec ut tortor metus, euismod est, nunc. Morbi mi integer nam nullam tortor nisl quis at a. Duis viverra ac nunc amet sed. ",
    },
    {
      id: 52205,
      question: "How much money can you really earn on ugetpaid?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus pulvinar egestas non convallis semper ut fermentum pellentesque accumsan. Tellus, vitae sapien ut nunc, consectetur risus vel. Ipsum ullamcorper nec ut tortor metus, euismod est, nunc. Morbi mi integer nam nullam tortor nisl quis at a. Duis viverra ac nunc amet sed. ",
    },
  ];
  return (
    <section className="section-gap ">
      <div className="py-S120 faqs-section rounded-xl">
        <div className="text-center max-w-[615px] mx-auto">
          <HomeHeading
            heading="Frequently asked questions"
            subHeading="FAQs"
            paragraph="Frequently Asked Questions.Find below our most frequently asked or for more answers."
            paragraphWidth={630}
          />
        </div>
        <div className="mt-S80 max-w-[1080px] mx-auto">
          {faqsData.map(({ id, question, answer }) => (
            <div key={id} className="mb-5">
              <div
                className="flex w-full items-center justify-between text-left mb-[1px]  p-S30 bg-C3E4762 cursor-pointer rounded-tl-xl rounded-tr-xl text-[20px]"
                key={id}
                onClick={() => setOpen((p) => (id == p ? null : id))}
              >
                <div className="flex items-center gap-x-5">
                  <Image src={fatIcon} alt="Faq icon" />
                  <p>{question}</p>
                </div>
                <i
                  className={`fa-solid ${id == open ? "fa-minus" : "fa-plus"}`}
                ></i>
              </div>
              <AnimateHeight
                id={`example-panel-faq${id}`}
                duration={500}
                height={open == id ? "auto" : 0} // see props documentation below
              >
                <div>
                  <p className=" text-base font-normal leading-[150%] bg-C3E4762 p-S30 rounded-bl-xl rounded-br-xl text-[20px]">
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
