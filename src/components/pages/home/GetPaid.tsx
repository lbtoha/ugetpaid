"use client";
import getPaidIllus from "@/public/images/get-paid-illus.png";
import paidShape1 from "@/public/images/get-paid-shape-1.png";
import paidShape2 from "@/public/images/get-paid-shape-2.png";
import paidShape3 from "@/public/images/get-paid-shape-3.png";
import paidShape4 from "@/public/images/get-paid-shape-4.png";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import PrimaryButton from "../../shared/PrimaryButton";

const GetPaid = () => {
  return (
    <section className="banner-section relative mt-[15px] rounded-xl">
      <div className="section-gap grid-cols-12 items-center lg:grid ">
        <div className="z-10 col-span-6 pb-S60 xl:pb-S80 xxl:pb-S120 4xl:col-span-5">
          <div className="pl-8 sm:pl-10 md:pl-S60">
            <h1 className="max-w-[612px]">
              <span className="block text-2.3xl text-C00FF8B md:text-4xl 3xl:text-7xl">
                Get Paid for{" "}
              </span>
              <span className="block text-2.3xl max-md:pt-2 md:text-4xl 3xl:text-7xl">
                <Typewriter
                  options={{
                    strings: ["Taking Surveys"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <p className="mt-4 max-w-[533px] text-lg max-xl:leading-[140%] md:text-xl xl:text-2xl xxl:mt-6">
              Get up to $7.5 for each survey,Safe and easy payment
            </p>
            <div className="mt-[30px]">
              <PrimaryButton buttonText="Start Earning" />
            </div>
          </div>
        </div>
        <div className="col-start-7 col-end-13 max-lg:hidden 3xl:col-start-7 3xl:col-end-12">
          <Image src={getPaidIllus} alt="get paid" />
        </div>
        {/* banner objects */}
        <div className="z-0">
          <Image
            src={paidShape1}
            alt="paid shape 1"
            className="absolute left-[2%] top-3 animate-spin-slow overflow-hidden max-3xl:w-[150px] max-md:hidden"
          />
          <Image
            src={paidShape2}
            alt="paid shape 2"
            className="absolute right-[5%] top-[2%] animate-spin-slow max-xl:w-[90px]"
          />
          <Image
            src={paidShape3}
            alt="paid shape 3"
            className="absolute bottom-0 left-[20%] max-xl:left-[40%] max-xl:w-[130px] max-lg:hidden"
          />
          <Image
            src={paidShape4}
            alt="paid shape 4"
            className="absolute left-[45%] top-3 max-xl:w-[70px] max-sm:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default GetPaid;
