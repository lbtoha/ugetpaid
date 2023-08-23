import contactUs from "@/public/images/contact-us-illus.png";
import phoneIcon from "@/public/images/icon/call.png";

import Image from "next/image";
const SupportGetInTouch = () => {
  return (
    <div className="mt-10 grid-cols-2 gap-6 rounded-[30px] border-C5A6890 max-xl:space-y-5 sm:border sm:p-S30 xl:grid">
      <div className="">
        <div className="space-y-S10">
          <p className="text-xl text-C00D675">Get in Touch</p>
          <h2 className="text-2xl font-semibold leading-[41.60px] md:text-[32px]">
            Any thing to say
          </h2>
          <p className=" text-sm leading-[21px] text-[#BCC4D9]">
            Feel free to send us a note with your queries or specific
            information you need.
          </p>
        </div>
        <div className="mt-S30 inline-flex flex-col items-start justify-center gap-[5px] rounded-[10px] bg-C2E3549 px-5 py-2.5 md:px-[30px]">
          <p className="text-lg font-normal leading-[30px] text-white">
            Call Us for info
          </p>
          <div className="inline-flex items-center justify-start gap-2 sm:gap-[15px]">
            <Image src={phoneIcon} alt="Phone" width={24} height={24} />
            <p className="text-xl font-normal leading-[34px] text-white sm:text-2xl">
              (229) 555-0109
            </p>
          </div>
        </div>
        <div className="mt-S120 flex items-center justify-center max-xl:hidden">
          <Image src={contactUs} alt="Contact us " className="mx-auto block" />
        </div>
      </div>
      <div>
        <div className="rounded-[18px] border border-C2E3549 bg-C2E3549 px-5 py-10 md:px-S30 md:py-S60">
          <p className="text-xl font-semibold leading-[33.60px] sm:text-2xl">
            Fill-up Your Information
          </p>
          <form className="mt-S30">
            <label>Name*</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-S5 rounded-[10px] border border-C3F4C70 bg-C212737 px-[30px] py-[15px] text-sm placeholder:text-C3F4C70"
            />
            <label className="mt-5 block">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-S5 rounded-[10px] border border-C3F4C70 bg-C212737 px-[30px] py-[15px] text-sm placeholder:text-C3F4C70"
            />
            <label className="mt-5 block">Message*</label>
            <textarea
              placeholder="Write your message here...."
              className="mt-S5 h-[160px] w-full resize-none rounded-[10px] border border-C3F4C70 bg-C212737 px-[30px] py-[15px] text-sm placeholder:text-C3F4C70"
            />
          </form>
          <button className=" mt-S30 rounded-3xl bg-C09B65E px-10 py-[15px] font-bold leading-[18px] text-C282F41">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportGetInTouch;
