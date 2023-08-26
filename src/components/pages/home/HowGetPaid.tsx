"use client";
import howWork from "@/public/images/how-works-img-1.png";
import howWork2 from "@/public/images/how-works-img-2.png";
import howWork3 from "@/public/images/how-works-img-3.png";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import HomeHeading from "../../shared/HomeHeading";
import HowGetPaidImage from "./HowGetPaidImage";

const HowGetPaid = () => {
  const chooseTaskData = [
    {
      id: 545201,
      number: "01",
      heading: "Choose a task",
    },
    {
      id: 545201,
      number: "02",
      heading: "Complete the task",
    },
    {
      id: 545201,
      number: "03",
      heading: "Receive coins",
    },
  ];
  return (
    <section className="section-gap">
      <div className="rounded-xl border border-C47506A px-3 py-10 focus-visible:outline-none md:px-5 md:max-xl:py-S60 lg:pl-S60 xl:py-S120">
        <Tab.Group>
          <div className="grid-cols-12 items-center justify-between max-xl:space-y-5 xl:grid">
            <Tab.List className="col-span-5 space-y-3 md:space-y-5">
              <div className="mb-5 md:mb-10">
                <HomeHeading
                  subHeading="Getting started is simple"
                  heading="How to Get Paid to Take Surveys"
                  paragraph="It has been made as easy as possible to make money on ugetpaid.you can start in less than 30 seconds."
                  paragraphWidth={374}
                />
              </div>
              {chooseTaskData.map(({ id, number, heading }) => (
                <Tab key={uuidv4()} as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={`group custom-transition w-full cursor-pointer rounded-xl border border-C2E3549 hover:bg-C185330 focus-visible:outline-none ${
                        selected ? "bg-C185330 " : ""
                      }`}
                    >
                      <div className="flex items-center gap-x-4 p-4 xl:gap-x-5 xl:p-5">
                        <p
                          className={`custom-transition flex h-[60px] w-[60px] items-center justify-center rounded-[40px] p-5 text-xl group-hover:bg-C237042 group-hover:text-CFFFFFF  xl:h-[80px] xl:w-[80px] xl:text-3xl ${
                            selected
                              ? "bg-C237042 text-CFFFFFF"
                              : "bg-C3D4661 text-C00FF8B"
                          }`}
                        >
                          {number}
                        </p>
                        <p className="text-lg md:text-xl xl:text-2xl">
                          {heading}
                        </p>
                      </div>
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="max-lg:mt-5 md:col-start-7 md:col-end-13 xl:col-start-7 xl:col-end-12">
              <Tab.Panel>
                {({ selected }) => (
                  <HowGetPaidImage image={howWork} selected={selected} />
                )}
              </Tab.Panel>
              <Tab.Panel>
                {({ selected }) => (
                  <HowGetPaidImage image={howWork2} selected={selected} />
                )}
              </Tab.Panel>
              <Tab.Panel>
                {({ selected }) => (
                  <HowGetPaidImage image={howWork3} selected={selected} />
                )}
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
};

export default HowGetPaid;
