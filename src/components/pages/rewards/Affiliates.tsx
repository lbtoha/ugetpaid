"use client";
import CopyLink from "@/components/shared/CopyLink";
import {
  DailyBonusLadderData,
  affiliate7daysRewardsData,
  affiliateCardData,
  affiliatesTopWinnerData,
} from "@/public/data/rewards";
import bigCrown from "@/public/images/icon/crown-kings.png";
import appLogo from "@/public/images/icon/own-app.png";
import twitter from "@/public/images/icon/twitter.png";
import Image from "next/image";
import Countdown from "react-countdown";
import RangeSlider from "react-range-slider-input";
import { v4 as uuidv4 } from "uuid";
import AffiliateYouWinCard from "./AffiliateYouWinCard";
import Affiliates7DayCard from "./Affiliates7DayCard";
import AffiliatesReferredCard from "./AffiliatesReferredCard";
import AffiliatesTopWinsCard from "./AffiliatesTopWinsCard";
import DailyBonusItem from "./DailyBonusItem";
import RewardsCountDown from "./RewardsCountDown";
const Affiliates = () => {
  return (
    <div className="mt-10 grid grid-cols-12 max-3xl:space-y-6 3xl:space-x-6">
      <div className="col-start-1 col-end-13 3xl:col-end-10">
        <div className="rounded-[15px] bg-C212737 px-5 py-[30px]">
          <div className="flex items-center justify-between">
            <div className="inline-flex   flex-col gap-[5px]">
              <h2 className="text-2.3xl font-semibold leading-9 text-C00FF8B">
                Affiliates
              </h2>
              <div>
                <span className="text-CBDC4DA">Gift your friends a </span>
                <span className="text-C00FF8B">free case</span>
                <span className="text-CBDC4DA"> and </span>
                <span className="text-C00FF8B">earn 5%</span>
                <span className="text-CBDC4DA"> of what they earn</span>
              </div>
            </div>
            <div className="flex gap-[5px] max-sm:hidden">
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[15px]  border border-C4C5673 p-1.5">
                <i className="fa-brands fa-twitter h-[18px] w-[18px]"></i>
              </div>
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[15px] bg-emerald-700 p-1.5">
                <i className="fa-brands fa-facebook-f h-[18px] w-[18px] text-center"></i>
              </div>
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[15px] border border-C4C5673 p-1.5">
                <i className="fa-brands fa-pinterest-p h-[18px] w-[18px] text-center"></i>
              </div>
            </div>
          </div>
          {/* card section */}
          <div className="mt-6 flex flex-wrap items-center gap-1 rounded-[10px] border border-C3B445E bg-c12161F px-2.5 pb-[15px]  pt-2.5 max-3xl:gap-x-2 max-3xl:gap-y-3">
            {affiliateCardData.map(({ winePrice, bgGradient, boxShadow }) => (
              <AffiliateYouWinCard
                key={uuidv4()}
                bgGradient={bgGradient}
                winePrice={winePrice}
                boxShadow={boxShadow}
              />
            ))}
          </div>
          {/* card section end */}
          {/* user referred section start */}
          <div className="mt-6 flex gap-6 max-lg:flex-wrap">
            <AffiliatesReferredCard key={uuidv4()} point={50} />
            <AffiliatesReferredCard key={uuidv4()} point={70} />
          </div>
          {/* user referred section end */}
          {/* affiliates link start */}
          <CopyLink componentHeading="Affiliates Link" link="7f66f48062" />
          {/* affiliates link end */}
        </div>
        {/* 7 Days Streak Rewards start */}
        <div className="mt-6 inline-flex w-full flex-col items-center gap-5  rounded-[20px] bg-C282F41 p-5">
          <div className="items-center gap-[87px] self-stretch bg-C2E3549 p-5 max-xl:space-y-4 xl:flex ">
            <div className="inline-flex flex-col items-center">
              <div className="flex flex-col self-stretch">
                <div>
                  <span>7 Day Streak Rewards ( </span>
                  <Countdown
                    daysInHours={false}
                    date={Date.now() + 50045400565700}
                    renderer={RewardsCountDown}
                  />
                  <span>)</span>
                </div>
              </div>
            </div>
            <div className="shrink grow basis-0 xl:text-right">
              <span className="text-xs leading-[18px]  text-C00D675">
                Earn 1,000
              </span>
              <span className="text-xs leading-[18px]  text-CBDC4DA">
                {" "}
                or more coins within{" "}
              </span>
              <span className="text-xs leading-[18px]  text-C00D675">
                24 hours
              </span>
              <span className="text-xs leading-[18px]  text-CBDC4DA">
                {" "}
                to keep your streak.
              </span>
            </div>
          </div>
          <div className="flex gap-2.5 self-stretch max-3xl:flex-wrap">
            {affiliate7daysRewardsData.map(({ days, coin }) => (
              <Affiliates7DayCard key={uuidv4()} coin={coin} days={days} />
            ))}
          </div>
        </div>
        {/* 7 Days Streak Rewards end */}
        {/* Follow us on Twitter start */}
        <div className="mt-6 flex gap-5 max-xl:flex-wrap xl:gap-6 ">
          {/* Follow us on Twitter */}
          <div className="inline-flex flex-row-reverse items-center justify-between gap-5 rounded-[15px] bg-C2E3549 p-5 max-lg:w-full xl:w-[390px] xl:gap-[30px] xl:p-[30px]">
            <div className=" inline-flex flex-col items-end justify-center gap-3">
              <p className="self-stretch text-right text-sm font-bold leading-[21px]">
                Follow us on Twitter
              </p>
              <div className="inline-flex items-center justify-end gap-2.5 rounded-[10px] bg-C09B65E px-[15px] py-[5px]">
                <p className="font-bold leading-normal text-C282F41">
                  Claim 50 coins
                </p>
              </div>
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-[10px] bg-C434D6D p-5">
              <Image src={twitter} alt="twitter" className="h-10 w-10" />
            </div>
          </div>
          {/* Download our App  */}
          <div className="inline-flex flex-row-reverse items-center justify-between gap-5 rounded-[15px] bg-C2E3549 p-5 max-lg:w-full xl:w-[390px] xl:gap-[30px] xl:p-[30px]">
            <div className="inline-flex flex-col items-end justify-center gap-3">
              <p className="self-stretch text-right text-sm font-bold leading-[21px]">
                Download our App
              </p>
              <div className="inline-flex items-center justify-center gap-2.5 rounded-[10px] bg-C09B65E px-[15px] py-[5px]">
                <p className="font-bold  leading-normal text-C282F41">
                  Download for 150 coins
                </p>
              </div>
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-[10px] bg-C434D6D p-5">
              <Image src={appLogo} alt="twitter" className="w-10" />
            </div>
          </div>
        </div>
        {/* Follow us on Twitter end */}
      </div>

      <div className="col-start-1 col-end-13 3xl:col-start-10">
        {/* Daily Bonus Ladder start */}
        <div className="inline-flex w-full flex-col items-start gap-5 rounded-[15px] bg-gray-800  p-[30px] max-sm:items-center 3xl:items-center">
          <p className="self-stretch text-2.3xl font-semibold leading-9 text-C00FF8B">
            Daily Bonus Ladder
          </p>
          <div className="flex  flex-wrap gap-2.5 self-stretch">
            {DailyBonusLadderData.map(({ image, point }) => (
              <DailyBonusItem key={uuidv4()} image={image} point={point} />
            ))}
          </div>
          <button className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-C09B55E px-10 py-2.5 font-bold text-C282F41 shadow 3xl:self-stretch">
            Claim Bonus
          </button>
        </div>
        {/* Level10 start */}
        <div className="mt-6 inline-flex h-32 flex-col justify-center gap-2.5 rounded-[15px] bg-C2E3549  p-5 max-3xl:w-full">
          <div className="inline-flex gap-2.5 self-stretch">
            <p className="shrink grow basis-0 text-CBDC4DA">Level 0</p>
            <p className="shrink grow basis-0 text-right text-CBDC4DA">
              Level 10
            </p>
          </div>

          <div className="mt-S10 w-full">
            <RangeSlider
              className="single-thumb"
              min={0}
              max={100}
              step={5}
              value={[0, 70]}
            />
          </div>
          <div className="inline-flex gap-2.5 self-stretch">
            <p className="w-[50px] text-C00FF8B">0</p>
            <p className="shrink grow basis-0 text-center text-xs leading-[18px] text-CBDC4DA">
              Reach level 10 to Claim your first daily reward
            </p>
            <div className="w-[50px] text-right text-CBDC4DA">10</div>
          </div>
        </div>
        {/* Top wins last section start */}
        <div className=" mt-6 inline-flex w-full flex-col items-center gap-5  rounded-[15px] bg-slate-800 p-5">
          <div className="inline-flex items-center justify-center gap-[11px] self-stretch">
            <Image src={bigCrown} alt="Crown king" className="w-[60px]" />
            <p className="text-xl font-semibold leading-7 text-C00FF8B">
              Top wins last 24h
            </p>
          </div>
          <div className="flex flex-col gap-2 self-stretch">
            {affiliatesTopWinnerData.map(({ image, name, points }) => (
              <AffiliatesTopWinsCard
                key={uuidv4()}
                image={image}
                name={name}
                points={points}
              />
            ))}
          </div>
        </div>
        {/* Top wins last section end */}
      </div>
    </div>
  );
};

export default Affiliates;
