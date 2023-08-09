import Image from "next/image";
import React from "react";
import howWork from "@/public/images/how-works-img-1.png";
import HomeHeading from "../shared/HomeHeading";

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
      <div className="padding-top-120 padding-bottom-120 padding-left-60 border border-C47506A rounded-xl">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-5 ">
            <HomeHeading
              subHeading="Getting started is simple"
              heading="How to Get Paid to Take Surveys"
              paragraph="It has been made as easy as possible to make money on ugetpaid.you can start in less than 30 seconds."
              paragraphWidth={374}
            />
            <div className="pt-[40px] space-y-5">
              {chooseTaskData.map(({ id, number, heading }) => (
                <div key={id}>
                  <div className="border border-C2E3549 rounded-xl group hover:bg-C185330 ">
                    <div className="flex items-center gap-x-5 p-5">
                      <p className="text-C00FF8B text-3xl p-5 w-[80px] h-[80px] group-hover:text-CFFFFFF group-hover:bg-C237042 flex items-center bg-C3D4661 rounded-[40px]">
                        {number}
                      </p>
                      <p className="text-2xl">{heading}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-start-7 col-end-12">
            <Image src={howWork} alt="how work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowGetPaid;
