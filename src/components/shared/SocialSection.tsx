import logoDark from "@/public/images/logo-dark.png";
import Image from "next/image";
import SocialIcon from "./SocialIcon";

const SocialSection = () => {
  return (
    <div className="section-gap grid grid-cols-12">
      <div className="social-section col-start-1 col-end-13 flex items-center justify-center px-S15 py-10 text-center sm:py-S60 sm:max-lg:px-5 xl:col-start-2 xl:col-end-12 xl:py-S80">
        <div>
          <Image
            src={logoDark}
            alt="Logo dark"
            className="mx-auto block max-md:w-[150px]"
          />
          <p className="mt-5 max-w-[804px] px-2 text-sm !font-normal !leading-[150%] text-C1A1F2C sm:text-base md:mt-6 md:text-lg xl:mt-S30 xl:text-xl">
            Get Instant Access to Top Paying Surveys. Earn Up To $300 Per Day by
            Sharing your Opinion.If you want an easy way to make money from
            surveys, you should join the ugetpaid community.
          </p>
          <div className="mt-5 flex items-center justify-center gap-x-3 text-lg text-C000000 md:mt-10  md:gap-x-5 md:text-2xl">
            {/* Provide a font awesome icon name*/}
            <SocialIcon iconName="facebook-f" link="/" />
            <SocialIcon iconName="twitter" link="/" />
            <SocialIcon iconName="instagram" link="/" />
            <SocialIcon iconName="discord" link="/" />
            <SocialIcon iconName="reddit-alien" link="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
