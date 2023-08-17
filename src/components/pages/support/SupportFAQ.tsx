"use client";
import {
  FaqEarning,
  FaqRedeeming,
  faqs,
  faqsPolicies,
} from "@/public/data/SupportFAqs";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import FAQs from "./Faq";

const SupportFAQ = () => {
  return (
    <section className="section-gap">
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-end-11 bg-C22293A p-S60 space-y-S60">
          <div className="space-y-S10">
            <p className="text-center text-C00FF8B text-2xl font-semibold leading-[33.60px]">
              Questions and Answer
            </p>
            <h2 className=" text-center text-[40px] font-semibold leading-[52px]">
              Frequently Asked Questions
            </h2>
            <div className="w-[704px] mx-auto text-center">
              <span className="text-slate-300 text-sm font-normal leading-[21px]">
                We would love to answer your questions, some of them are here so
                that you may quickly go through them. If you have any other
                queries{" "}
              </span>
              <span className="text-emerald-400 text-sm font-normal leading-[21px]">
                contact us
              </span>
              <span className="text-slate-300 text-sm font-normal leading-[21px]">
                .
              </span>
            </div>
          </div>
          <Tab.Group>
            <Tab.List className=" max-w-[980px] p-2.5 rounded-[15px] border flex-wrap border-[#5D6888] items-center gap-2.5 flex ">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`grow  h-[51px]  px-[30px] py-[15px]  rounded-[10px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "focus-visible:hidden text-C1A1F2C bg-green-500"
                        : "bg-C373F56"
                    }`}
                  >
                    FAQs
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`grow  h-[51px]  px-[30px] py-[15px]  rounded-[10px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "focus-visible:hidden text-C1A1F2C bg-green-500"
                        : "bg-C373F56"
                    }`}
                  >
                    Redeeming Your Coins
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`grow  h-[51px]  px-[30px] py-[15px]  rounded-[10px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "focus-visible:hidden text-C1A1F2C bg-green-500 "
                        : "bg-C373F56"
                    }`}
                  >
                    Earning Coins
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`grow  h-[51px]  px-[30px] py-[15px]  rounded-[10px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "focus-visible:hidden text-C1A1F2C bg-green-500"
                        : "bg-C373F56"
                    }`}
                  >
                    Policies
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`grow  h-[51px]  px-[30px] py-[15px]  rounded-[10px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "focus-visible:hidden text-C1A1F2C bg-green-500"
                        : "bg-C373F56"
                    }`}
                  >
                    Account
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`grow  h-[51px]  px-[30px] py-[15px]  rounded-[10px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "focus-visible:hidden text-C1A1F2C bg-green-500"
                        : "bg-C373F56"
                    }`}
                  >
                    Policies
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <FAQs faqs={faqs} />
              </Tab.Panel>
              <Tab.Panel>
                <FAQs faqs={FaqRedeeming} />
              </Tab.Panel>
              <Tab.Panel>
                <FAQs faqs={FaqEarning} />
              </Tab.Panel>
              <Tab.Panel>
                <FAQs faqs={FaqEarning} />
              </Tab.Panel>
              <Tab.Panel>
                <FAQs faqs={faqsPolicies} />
              </Tab.Panel>
              <Tab.Panel>
                <FAQs faqs={faqsPolicies} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default SupportFAQ;
