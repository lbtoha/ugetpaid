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
      <div className="grid-cols-12 3xl:grid">
        <div className="col-start-3 col-end-11 mx-auto space-y-5 bg-C22293A max-md:px-3 max-md:py-S30 md:space-y-10 md:p-S60 xl:space-y-S60 4xl:min-w-[980]">
          <div className="space-y-S10">
            <p className="text-center text-2xl font-semibold leading-[33.60px] text-C00FF8B xl:mt-[-7px]">
              Questions and Answer
            </p>
            <h2 className=" text-center text-2xl font-semibold leading-[52px] sm:text-3xl md:text-[40px]">
              Frequently Asked Questions
            </h2>
            <div className="mx-auto max-w-[704px] text-center">
              <span className="text-sm font-normal leading-[21px] text-slate-300">
                We would love to answer your questions, some of them are here so
                that you may quickly go through them. If you have any other
                queries{" "}
              </span>
              <span className="text-sm font-normal leading-[21px] text-emerald-400">
                contact us
              </span>
              <span className="text-sm font-normal leading-[21px] text-slate-300">
                .
              </span>
            </div>
          </div>
          <Tab.Group>
            <Tab.List className="mx-auto !mt-8 flex  max-w-[980px] flex-wrap justify-center gap-2.5 rounded-[15px] border border-[#5D6888] p-2.5 max-sm:flex-col sm:items-center md:!mt-10 lg:!mt-S60">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`custom-transition-button h-[51px] rounded-[10px] px-[30px] py-[15px]  text-center  text-sm font-bold leading-[21px] ${
                      selected
                        ? "bg-C09B65E text-C1A1F2C hover:bg-C373F56 hover:text-white focus-visible:outline-none"
                        : "bg-C373F56 hover:bg-C09B65E hover:text-C1A1F2C"
                    }`}
                  >
                    FAQs
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`custom-transition-button h-[51px] rounded-[10px]  px-[30px] py-[15px] text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "bg-C09B65E text-C1A1F2C hover:bg-C373F56 hover:text-white focus-visible:outline-none"
                        : "bg-C373F56 hover:bg-C09B65E hover:text-C1A1F2C"
                    }`}
                  >
                    Redeeming Your Coins
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`custom-transition-button h-[51px] rounded-[10px] px-[30px]  py-[15px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "bg-C09B65E text-C1A1F2C hover:bg-C373F56 hover:text-white focus-visible:outline-none"
                        : "bg-C373F56 hover:bg-C09B65E hover:text-C1A1F2C"
                    }`}
                  >
                    Earning Coins
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`custom-transition-button h-[51px] rounded-[10px] px-[30px]  py-[15px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "bg-C09B65E text-C1A1F2C hover:bg-C373F56 hover:text-white focus-visible:outline-none"
                        : "bg-C373F56 hover:bg-C09B65E hover:text-C1A1F2C"
                    }`}
                  >
                    Policies
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`custom-transition-button h-[51px] rounded-[10px] px-[30px]  py-[15px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "hover:text-whiten bg-C09B65E text-C1A1F2C hover:bg-C373F56 hover:text-white focus-visible:outline-none"
                        : "bg-C373F56 hover:bg-C09B65E hover:text-C1A1F2C"
                    }`}
                  >
                    Account
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`custom-transition-button h-[51px] rounded-[10px] px-[30px]  py-[15px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "bg-C09B65E text-C1A1F2C hover:bg-C373F56 hover:text-white focus-visible:outline-none"
                        : "bg-C373F56 hover:bg-C09B65E hover:text-C1A1F2C"
                    }`}
                  >
                    Policies
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="!mt-0">
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
