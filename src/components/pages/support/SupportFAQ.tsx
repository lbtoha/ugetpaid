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
        <div className="col-start-3 col-end-11 mx-auto space-y-S60 bg-C22293A max-md:px-3 max-md:py-S30 md:p-S60 4xl:min-w-[980]">
          <div className="space-y-S10">
            <p className="text-center text-2xl font-semibold leading-[33.60px] text-C00FF8B">
              Questions and Answer
            </p>
            <h2 className=" text-center text-3xl font-semibold leading-[52px] md:text-[40px]">
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
            <Tab.List className="mx-auto flex max-w-[980px] flex-wrap items-center justify-center gap-2.5 rounded-[15px] border border-[#5D6888] p-2.5 ">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`custom-transition-button h-[51px] rounded-[10px] px-[30px] py-[15px]  text-center  text-sm font-bold leading-[21px] ${
                      selected
                        ? "bg-green-500 text-C1A1F2C focus-visible:hidden"
                        : "bg-C373F56 hover:bg-green-500"
                    }`}
                  >
                    FAQs
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`h-[51px] rounded-[10px] px-[30px]  py-[15px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "bg-green-500 text-C1A1F2C focus-visible:hidden"
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
                    className={`h-[51px] rounded-[10px] px-[30px]  py-[15px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "bg-green-500 text-C1A1F2C focus-visible:hidden "
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
                    className={`h-[51px] rounded-[10px] px-[30px]  py-[15px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "bg-green-500 text-C1A1F2C focus-visible:hidden"
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
                    className={`h-[51px] rounded-[10px] px-[30px]  py-[15px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "bg-green-500 text-C1A1F2C focus-visible:hidden"
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
                    className={`h-[51px] rounded-[10px] px-[30px]  py-[15px]  text-center text-sm font-bold leading-[21px] ${
                      selected
                        ? "bg-green-500 text-C1A1F2C focus-visible:hidden"
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
