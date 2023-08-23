"use client";
import giveawayIcon from "@/public/images/icon/giveaway-icon.png";
import lock from "@/public/images/icon/lock-icon.png";
import Image from "next/image";
import GiveawayPriceModalButton from "./GiveawayPriceModalButton";

const GiveaWayPrice = () => {
  return (
    <div className="flex flex-col gap-5 rounded-[20px] border border-[#475477] bg-[#252C3F] px-[30px] py-10 shadow sm:gap-S30">
      <div className="mx-auto flex w-fit items-center justify-end rounded-[150px] bg-C206C55 pb-[47px] pl-[45.50px] pr-[16.95px] pt-[46px]">
        <Image
          width={237}
          height={207}
          alt="Price"
          className="mx-auto max-sm:w-[150px]"
          src={giveawayIcon}
        />
      </div>
      <div>
        <h2 className=" text-center text-2xl font-semibold leading-9 sm:text-[28px]">
          $7500 Rolex Giveaway + 5x $500
        </h2>
        <p className="mt-S15 text-center text-sm font-normal leading-[21px] text-CBDC4DA">
          Good luck to everyone! There will be 6 winners in total. Cheating with
          the earn coins tasks will result in a re-roll.
        </p>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between max-md:flex-wrap max-md:gap-3">
          <GiveawayPriceModalButton number={0} title="Your Entries" />
          <GiveawayPriceModalButton number={8135250} title="Total Entries" />
          <GiveawayPriceModalButton number={15} title="Days Left" />
        </div>
      </div>
      <button className="mx-auto flex w-fit items-center justify-center gap-2.5 rounded-[24px] bg-[#343E59] px-10  py-S15 hover:bg-C09B65E group-hover:text-C282F41">
        <Image
          src={lock}
          alt="Lock"
          width={18}
          height={18}
          className="h-[18px] w-[18px]"
        />
        <span className=" text-xs font-bold leading-[18px]">Open for free</span>
      </button>
    </div>
  );
};

export default GiveaWayPrice;
