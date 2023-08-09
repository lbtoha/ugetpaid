import Image from "next/image";
import React from "react";
import logoDark from "@/public/images/logo-dark.png";
import Link from "next/link";

const SocialSection = () => {
  return (
    <div className="section-gap grid grid-cols-12">
      <div className="social-section py-S80 text-center flex items-center justify-center col-start-2 col-end-12">
        <div>
          <Image src={logoDark} alt="Logo dark" className="block mx-auto " />
          <p className="text-C1A1F2C text-xl max-w-[804px] font-normal leading-[30px]">
            Get Instant Access to Top Paying Surveys. Earn Up To $300 Per Day by
            Sharing your Opinion.If you want an easy way to make money from
            surveys, you should join the ugetpaid community.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-5 text-2xl text-C000000">
            <Link
              href="/"
              className="border p-[13px] w-S50 h-S50 rounded-full flex items-center justify-center hover:border-CE0E4FF border-C000000 group cursor-pointer hover:bg-CFFFFFF"
            >
              <i className="fa-brands fa-facebook-f group-hover:text-C02835B"></i>
            </Link>
            <Link
              href="/"
              className="border p-[13px] w-S50 h-S50 rounded-full flex items-center justify-center hover:border-CE0E4FF border-C000000 group cursor-pointer hover:bg-CFFFFFF"
            >
              <i className="fa-brands fa-twitter group-hover:text-C02835B"></i>
            </Link>
            <Link
              href="/"
              className="border p-[13px] w-S50 h-S50 rounded-full flex items-center justify-center hover:border-CE0E4FF border-C000000 group cursor-pointer hover:bg-CFFFFFF"
            >
              <i className="fa-brands fa-instagram group-hover:text-C02835B"></i>
            </Link>
            <Link
              href="/"
              className="border p-[13px] w-S50 h-S50 rounded-full flex items-center justify-center hover:border-CE0E4FF border-C000000 group cursor-pointer hover:bg-CFFFFFF"
            >
              <i className="fa-brands fa-discord group-hover:text-C02835B"></i>
            </Link>
            <Link
              href="/"
              className="border p-[13px] w-S50 h-S50 rounded-full flex items-center justify-center hover:border-CE0E4FF border-C000000 group cursor-pointer hover:bg-CFFFFFF"
            >
              <i className="fa-brands fa-reddit-alien group-hover:text-C02835B"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
