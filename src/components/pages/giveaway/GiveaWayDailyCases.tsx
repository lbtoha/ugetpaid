"use client";
import { dailyCasesModalListCardData } from "@/public/data/giveaway";
import coinBox1 from "@/public/images/icon/coin-box-1.png";
import coinBox2 from "@/public/images/icon/coin-box-2.png";
import coinBox3 from "@/public/images/icon/coin-box-3.png";
import lock from "@/public/images/icon/lock-icon.png";
import { v4 as uuidv4 } from "uuid";
import DailyCasesModalEarnCard from "./DailyCasesModalEarnCard";
import ListCard from "./ListCard";

const GiveaWayDailyCases = () => {
  return (
    <div className=" rounded-[20px] border border-slate-600 bg-[#252C3F] shadow max-sm:px-5 max-sm:pb-5 max-sm:pt-10 sm:p-[30px]">
      <p className="text-center text-2xl font-semibold leading-[41.60px] md:text-[32px]">
        Open Daily Cases
      </p>
      <div className="mt-5 grid grid-cols-1 items-center justify-between gap-6  self-stretch sm:grid-cols-2 md:mt-10 md:grid-cols-3">
        <DailyCasesModalEarnCard
          boxImage={coinBox1}
          lockImage={lock}
          earn="0/3,000"
        />
        <DailyCasesModalEarnCard
          boxImage={coinBox2}
          lockImage={lock}
          earn="0/5,000"
        />
        <DailyCasesModalEarnCard
          boxImage={coinBox3}
          lockImage={lock}
          earn="0/2,000"
        />
      </div>

      {/* contains section */}
      <div className="mt-S30 flex items-center justify-center gap-5 self-stretch">
        <div className="flex h-[15px] shrink grow basis-0 rotate-180 items-center justify-start">
          <div className="h-[15px] w-[15px] rounded-full border border-[#495576]" />
          <div className="h-[1px] shrink grow basis-0 bg-gradient-giveaway-modal"></div>
        </div>
        <span className="font-semibold  leading-snug text-C00D675">
          Contains
        </span>
        <div className="flex h-[15px] shrink grow basis-0 items-center justify-start">
          <div className="h-[15px] w-[15px] rounded-full border border-[#495576]" />
          <div className="h-[1px] shrink grow basis-0 bg-gradient-giveaway-modal"></div>
        </div>
      </div>
      {/* card section */}
      <div className="mt-5 grid grid-cols-1 justify-between gap-2.5  self-stretch sm:grid-cols-2 md:grid-cols-3">
        {dailyCasesModalListCardData.map(({ prizeImage, prize }) => (
          <ListCard key={uuidv4()} prizeImage={prizeImage} prize={prize} />
        ))}
      </div>
    </div>
  );
};

export default GiveaWayDailyCases;
