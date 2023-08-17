import contactUs from "@/public/images/contact-us-illus.png";
import phoneIcon from "@/public/images/icon/call.png";

import Image from "next/image";
const SupportGetInTouch = () => {
  return (
    <div className="mt-10 p-S30 grid grid-cols-2 gap-6 border border-C5A6890 rounded-[30px]">
      <div className="">
        <div className="space-y-S10">
          <p className="text-C00D675 text-xl">Get in Touch</p>
          <h2 className=" text-[32px] font-semibold leading-[41.60px]">
            Any thing to say
          </h2>
          <p className=" text-[#BCC4D9] text-sm leading-[21px]">
            Feel free to send us a note with your queries or specific
            information you need.
          </p>
        </div>
        <div className="mt-S30 px-[30px] py-2.5 bg-C2E3549 rounded-[10px] flex-col justify-center items-start gap-[5px] inline-flex">
          <p className="text-white text-lg font-normal leading-[30px]">
            Call Us for info
          </p>
          <div className="justify-start items-center gap-[15px] inline-flex">
            <Image src={phoneIcon} alt="Phone" width={24} height={24} />
            <p className="text-white text-2xl font-normal leading-[34px]">
              (229) 555-0109
            </p>
          </div>
        </div>
        <div className="justify-center items-center flex mt-S120">
          <Image src={contactUs} alt="Contact us " className="block mx-auto" />
        </div>
      </div>
      <div>
        <div className="bg-C2E3549 px-S30 py-S60 rounded-[18px] border border-C2E3549">
          <p className="text-2xl font-semibold leading-[33.60px]">
            Fill-up Your Information
          </p>
          <form className="mt-S30">
            <label>Name*</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-[30px] py-[15px] mt-S5 bg-C212737 rounded-[10px] border border-C3F4C70 placeholder:text-C3F4C70 text-sm"
            />
            <label className="mt-5 block">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-[30px] py-[15px] mt-S5 bg-C212737 rounded-[10px] border border-C3F4C70 placeholder:text-C3F4C70 text-sm"
            />
            <label className="mt-5 block">Message*</label>
            <textarea
              placeholder="Write your message here...."
              className="px-[30px] py-[15px] mt-S5 w-full resize-none h-[160px] bg-C212737 rounded-[10px] border border-C3F4C70 placeholder:text-C3F4C70 text-sm"
            />
          </form>
          <button className=" mt-S30 px-10 text-C282F41 py-[15px] bg-C09B65E rounded-3xl text-xs font-bold leading-[18px]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportGetInTouch;
