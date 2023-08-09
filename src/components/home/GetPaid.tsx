import React from "react";
import getPaidIllus from "@/public/images/get-paid-illus.png";
import Image from "next/image";
import Link from "next/link";
import paidShape1 from "@/public/images/get-paid-shape-1.png";
import paidShape2 from "@/public/images/get-paid-shape-2.png";
import paidShape3 from "@/public/images/get-paid-shape-3.png";
import paidShape4 from "@/public/images/get-paid-shape-4.png";
import PrimaryButton from "../shared/PrimaryButton";

const GetPaid = () => {
  return (
    <section className="mt-[15px] banner-section rounded-xl relative">
      <div className="grid grid-cols-12  section-gap ">
        <div className="col-span-5 z-10">
          <div className="padding-left-60">
            <h1 className="max-w-[612px]">
              <span className="text-7xl text-C00FF8B">Get Paid for </span>
              <span className="text-7xl">Taking Surveys</span>
            </h1>
            <p className="mt-6 text-2xl max-w-[533px]">
              Get up to $7.5 for each survey,Safe and easy payment
            </p>
            <div className="mt-[30px]">
              <PrimaryButton buttonText="Start Earning" />
            </div>
          </div>
        </div>
        <div className="col-start-6 col-end-12">
          <Image src={getPaidIllus} alt="get paid" />
        </div>
        {/* banner objects */}
        <div className="z-0">
          <Image
            src={paidShape1}
            alt="paid shape 1"
            className="absolute top-3 left-[2%] animate-spin-slow overflow-hidden"
          />
          <Image
            src={paidShape2}
            alt="paid shape 2"
            className="top-[2%] right-[5%] absolute animate-spin-slow"
          />
          <Image
            src={paidShape3}
            alt="paid shape 3"
            className="absolute bottom-0 left-[20%]"
          />
          <Image
            src={paidShape4}
            alt="paid shape 4"
            className="absolute top-3 left-[45%]"
          />
        </div>
      </div>
    </section>
  );
};

export default GetPaid;
