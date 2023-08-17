import discordIcon from "@/public/images/icon/discord-icon.png";
import facebookIcon from "@/public/images/icon/fb-icon.png";
import instagramIcon from "@/public/images/icon/insta-icon.png";
import streamIcon from "@/public/images/icon/steam-icon.png";
import twitterIcon from "@/public/images/icon/twitter-icon.png";
import Image from "next/image";
const SocialMedia = () => {
  return (
    <div className="mt-10 w-full justify-start items-start gap-[30px] inline-flex">
      <div className="grow shrink basis-0 px-[30px] py-10 rounded-[15px] border border-C2E3549 flex-col justify-start items-center gap-[17px] inline-flex">
        <Image width={120} height={120} src={streamIcon} alt="Stream icon" />
        <p className="self-stretch text-center  text-xl font-semibold leading-7">
          Steam
        </p>
        <button className="w-full px-[30px] py-[15px] bg-[#424C6B] bg-opacity-20 rounded-[30px] border border-[#424C6B]  text-center   font-bold gap-2.5">
          452,708 Members
        </button>
      </div>
      <div className="grow shrink basis-0 px-[30px] py-10 rounded-[15px] border border-C2E3549 flex-col justify-start items-center gap-[17px] inline-flex">
        <Image src={twitterIcon} alt="Twitter icon" />
        <p className="self-stretch text-center  text-xl font-semibold leading-7">
          Twitter
        </p>
        <button className="self-stretch px-[30px] py-[15px] text-center font-bold bg-[#54ACED] bg-opacity-20 rounded-[30px] border border[#54ACED] w-full">
          108,501 Members
        </button>
      </div>
      <div className="grow shrink basis-0 px-[30px] py-10 rounded-[15px] border border-C2E3549 flex-col justify-start items-center gap-[17px] inline-flex">
        <Image
          width={120}
          height={120}
          src={facebookIcon}
          alt="Facebook icon"
        />
        <p className="self-stretch text-center  text-xl font-semibold leading-7">
          Facebook
        </p>
        <button className=" w-full self-stretch px-[30px] py-[15px] bg-[#285396] bg-opacity-20 rounded-[30px] border border-[#285396] justify-start text-center  font-bold ">
          41,669 Members
        </button>
      </div>
      <div className="grow shrink basis-0 px-[30px] py-10 rounded-[15px] border border-C2E3549 flex-col justify-start items-center gap-[17px] inline-flex">
        <Image
          width={120}
          height={120}
          src={instagramIcon}
          alt="Instagram icon"
        />
        <p className="self-stretch text-center  text-xl font-semibold leading-7">
          Instagram
        </p>
        <button className="self-stretch px-[30px] py-[15px] bg-[#9B54EE] bg-opacity-20 rounded-[30px] border border-[#9B54EE] text-center font-bold ">
          19,399 Members
        </button>
      </div>
      <div className="grow shrink basis-0 px-[30px] py-10 rounded-[15px] border border-C2E3549 flex-col justify-start items-center gap-[17px] inline-flex">
        <Image width={120} height={120} src={discordIcon} alt="Discord icon" />
        <p className="self-stretch text-center  text-xl font-semibold leading-7">
          Discord
        </p>
        <button className="self-stretch px-[30px] py-[15px] bg-[#8B9EFF] bg-opacity-30 rounded-[30px] border border-[#8B9EFF] justify-start text-center   font-bold items-start gap-2.5 inline-flex">
          258,823 Members
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
