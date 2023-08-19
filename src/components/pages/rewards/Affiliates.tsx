"use client";
import clock from "@/public/images/icon/clock-icon-2.png";
import usersIcon from "@/public/images/icon/counter-icon-4.png";
import crown from "@/public/images/icon/crown-kings-1.png";
import appLogo from "@/public/images/icon/own-app.png";
import twitter from "@/public/images/icon/twitter.png";
import Image from "next/image";
// import arrowTop1 from "@/public/images/icon/arrow-top-1.png"
// import arrowTop2 from "@/public/images/icon/arrow-top-2.png"
// import arrowTop3 from "@/public/images/icon/arrow-top-3.png"
// import arrowTop4 from "@/public/images/icon/arrow-top-4.png"
// import star from "@/public/images/icon/star-icon.png"
import ProfileImageSmall from "@/components/shared/ProfileImageSmall";
import { affiliateCardData } from "@/public/data/rewards";
import profileImage1 from "@/public/images/activites-img-1.png";
import profileImage2 from "@/public/images/activites-img-2.png";
import profileImage3 from "@/public/images/activites-img-3.png";
import profileImage4 from "@/public/images/activites-img-4.png";
import arrowTop1 from "@/public/images/icon/arrow-top-1.png";
import arrowTop2 from "@/public/images/icon/arrow-top-2.png";
import arrowTop3 from "@/public/images/icon/arrow-top-3.png";
import arrowTop4 from "@/public/images/icon/arrow-top-4.png";
import bigCrown from "@/public/images/icon/crown-kings.png";
import star from "@/public/images/icon/star-icon.png";
import zero from "@/public/images/icon/zero-icon.png";
import Countdown from "react-countdown";
import RangeSlider from "react-range-slider-input";
import { v4 as uuidv4 } from "uuid";
import AffiliateYouWinCard from "./AffiliateYouWinCard";
import RewardsCountDown from "./RewardsCountDown";
const Affiliates = () => {
  return (
    <div className="mt-10 grid grid-cols-12 space-x-6">
      <div className="col-start-1 col-end-10">
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
            <div className="flex gap-[5px]">
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
          <div className="mt-6 flex flex-wrap items-center rounded-[10px] border border-C3B445E bg-c12161F px-2.5 pb-[15px] pt-2.5  max-3xl:gap-x-2 max-3xl:gap-y-3 4xl:gap-1">
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
          <div className="   mt-6 flex gap-x-6">
            <div className="flex grow basis-0 items-center  justify-center gap-[15px] rounded-[15px] bg-C2E3549 p-5">
              <div className="flex h-[60px] w-[60px] items-center justify-center  rounded-[30px] border-C3F4C70 bg-C3F4C70 p-[18px]">
                <Image src={usersIcon} alt="users" className="w-6" />
              </div>
              <div className="inline-flex flex-col  justify-center gap-[5px]">
                <p className="text-xl font-semibold leading-7">50</p>
                <p className="text-xs leading-[18px] text-CBDC4DA">
                  Users Referred
                </p>
              </div>
            </div>
            <div className="flex grow basis-0 items-center  justify-center gap-[15px] rounded-[15px] bg-C2E3549 p-5">
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[30px] border-C3F4C70 bg-C3F4C70 p-[18px]">
                <Image src={usersIcon} alt="users" className="w-6 " />
              </div>
              <div className="inline-flex flex-col  justify-center gap-[5px]">
                <p className="text-xl font-semibold leading-7">50</p>
                <p className="text-xs leading-[18px] text-CBDC4DA">
                  Users Referred
                </p>
              </div>
            </div>
          </div>
          {/* user referred section end */}
          {/* affiliates link start */}
          <div className="mt-6 inline-flex w-full gap-5 rounded-[15px]   bg-C2E3549 p-[30px]">
            <div className="inline-flex shrink grow basis-0   flex-col gap-2">
              <p
                className="self-stretch 
              "
              >
                Affiliates Link
              </p>
              <div className="inline-flex  items-center gap-2.5 self-stretch">
                <div className="flex h-[51px] shrink grow basis-0 gap-2.5 rounded-[15px] border border-C3F4C70   px-[30px] py-[15px]">
                  <div className="grow basis-0">
                    <span className="text-sm text-CBDC4DA">
                      Your referral code :{" "}
                    </span>
                    <span className="text-sm text-C00D675">7f66f48062</span>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-x-2 self-stretch rounded-[10px] bg-C00D675 px-10 py-2.5 font-bold text-C282F41 shadow">
                  Copy link
                </button>
              </div>
            </div>
          </div>
          {/* affiliates link end */}
        </div>
        {/* 7 Days Streak Rewards start */}
        <div className="mt-6 inline-flex w-full flex-col items-center gap-5  rounded-[20px] bg-C282F41 p-5">
          <div className="inline-flex items-center gap-[87px]  self-stretch bg-C2E3549 p-5">
            <div className=" inline-flex  flex-col items-center">
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
            <div className="shrink grow basis-0 text-right">
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
          <div className="inline-flex gap-2.5 self-stretch">
            <div className="inline-flex shrink grow basis-0 flex-col items-center gap-2.5 rounded-[15px]  border border-C3B445E p-5">
              <Image src={clock} alt="Clock" className="h-6 w-6" />
              <div className="flex flex-col items-center justify-center gap-[5px] self-stretch">
                <p className="self-stretch text-center font-semibold leading-snug">
                  Day1
                </p>
                <p className="self-stretch text-center text-xs leading-[18px] text-CBDC4DA">
                  25 Coins
                </p>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-C2E3549 px-2.5 py-[5px]">
                <p className="text-center text-xs leading-[18px] text-CBDC4DA">
                  Claim
                </p>
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-center gap-2.5 rounded-[15px]  border border-C3B445E p-5">
              <Image src={clock} alt="Clock" className="h-6 w-6" />
              <div className="flex flex-col items-center justify-center gap-[5px] self-stretch">
                <p className="self-stretch text-center font-semibold leading-snug">
                  Day2
                </p>
                <p className="self-stretch text-center text-xs leading-[18px] text-CBDC4DA">
                  50 Coins
                </p>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-C2E3549 px-2.5 py-[5px]">
                <p className="text-center text-xs leading-[18px] text-CBDC4DA">
                  Claim
                </p>
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-center gap-2.5 rounded-[15px]  border border-C3B445E p-5">
              <Image src={clock} alt="Clock" className="h-6 w-6" />
              <div className="flex flex-col items-center justify-center gap-[5px] self-stretch">
                <p className="self-stretch text-center font-semibold leading-snug">
                  Day3
                </p>
                <div className="self-stretch text-center text-xs leading-[18px]  text-CBDC4DA">
                  100 Coins
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-C2E3549 px-2.5 py-[5px]">
                <div className="text-center text-xs leading-[18px] text-CBDC4DA">
                  Claim
                </div>
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-center gap-2.5 rounded-[15px]  border border-C3B445E p-5">
              <Image src={clock} alt="Clock" className="h-6 w-6" />
              <div className="flex flex-col items-center justify-center gap-[5px] self-stretch">
                <div className="self-stretch text-center font-semibold leading-snug">
                  Day4
                </div>
                <div className="self-stretch text-center text-xs leading-[18px]  text-CBDC4DA">
                  200 Coins
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-C2E3549 px-2.5 py-[5px]">
                <div className="text-center text-xs leading-[18px]  text-CBDC4DA">
                  Claim
                </div>
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-center gap-2.5 rounded-[15px]  border border-C3B445E p-5">
              <Image src={clock} alt="Clock" className="h-6 w-6" />
              <div className="flex flex-col items-center justify-center gap-[5px] self-stretch">
                <div className="self-stretch text-center   font-semibold leading-snug">
                  Day5
                </div>
                <div className="self-stretch text-center text-xs leading-[18px]  text-CBDC4DA">
                  400 Coins
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-C2E3549 px-2.5 py-[5px]">
                <div className="text-center text-xs leading-[18px]  text-CBDC4DA">
                  Claim
                </div>
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-center gap-2.5 rounded-[15px]  border border-C3B445E p-5">
              <Image src={clock} alt="Clock" className="h-6 w-6" />
              <div className="flex flex-col items-center justify-center gap-[5px] self-stretch">
                <div className="self-stretch text-center font-semibold leading-snug">
                  Day6
                </div>
                <div className="self-stretch text-center text-xs leading-[18px] text-CBDC4DA">
                  800 Coins
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-C2E3549 px-2.5 py-[5px]">
                <div className="text-center text-xs leading-[18px] text-CBDC4DA">
                  Claim
                </div>
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-center gap-2.5 rounded-[15px]  border border-C3B445E p-5">
              <Image src={clock} alt="Clock" className="h-6 w-6" />
              <div className="flex flex-col items-center justify-center gap-[5px] self-stretch">
                <div className="self-stretch text-center font-semibold leading-snug">
                  Day7
                </div>
                <div className="self-stretch text-center text-xs leading-[18px] text-CBDC4DA">
                  100-50,000 Coins
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch rounded-[10px] bg-C2E3549 px-2.5 py-[5px]">
                <div className="text-center text-xs leading-[18px] text-CBDC4DA">
                  Claim
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 7 Days Streak Rewards end */}
        {/* Follow us on Twitter start */}
        <div className="mt-6 flex gap-x-6 ">
          {/* Follow us on Twitter */}
          <div className="inline-flex w-[390px] flex-row-reverse items-center justify-between gap-[30px] rounded-[15px] bg-C2E3549 p-[30px]">
            <div className=" inline-flex flex-col items-end justify-center gap-3">
              <div className="self-stretch text-right text-sm font-bold leading-[21px]">
                Follow us on Twitter
              </div>
              <div className="inline-flex items-center justify-end gap-2.5 rounded-[10px] bg-C09B65E px-[15px] py-[5px]">
                <div className="font-bold leading-normal text-C282F41">
                  Claim 50 coins
                </div>
              </div>
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-[10px] bg-C434D6D p-5">
              <Image src={twitter} alt="twitter" className="h-10 w-10" />
            </div>
          </div>
          {/* Download our App  */}
          <div className="inline-flex h-[140px] w-[390px] flex-row-reverse items-center justify-between gap-[30px] rounded-[15px] bg-C2E3549 p-[30px]">
            <div className="inline-flex w-[351px] flex-col items-end justify-center gap-3">
              <div className="self-stretch text-right text-sm font-bold leading-[21px]">
                Download our App
              </div>
              <div className="inline-flex items-center justify-center gap-2.5 rounded-[10px] bg-C09B65E px-[15px] py-[5px]">
                <div className="font-bold  leading-normal text-C282F41">
                  Download for 150 coins
                </div>
              </div>
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-[10px] bg-C434D6D p-5">
              <Image src={appLogo} alt="twitter" className="w-10" />
            </div>
          </div>
        </div>
        {/* Follow us on Twitter end */}
      </div>

      <div className="col-start-10 col-end-13">
        {/* Daily Bonus Ladder start */}
        <div className="inline-flex w-full flex-col items-center gap-5  rounded-[15px] bg-gray-800 p-[30px]">
          <div className="self-stretch text-2.3xl font-semibold leading-9 text-C00FF8B">
            Daily Bonus Ladder
          </div>
          <div className="flex flex-col gap-2.5 self-stretch">
            <div className="inline-flex items-center gap-2.5 self-stretch">
              <div className="inline-flex  grow basis-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
                <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E">
                    <Image src={crown} alt="Crown" />
                  </div>
                  <div className="w-[35px]  text-sm font-bold leading-[21px]">
                    5120
                  </div>
                </div>
              </div>
              <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
                <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E p-[5px]">
                    <Image src={star} alt="Star" />
                  </div>
                  <div className="w-[38px]  text-sm font-bold leading-[21px]">
                    2560
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex  items-center gap-2.5 self-stretch">
              <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
                <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E py-[5px] pl-[7.50px] pr-[8.50px]">
                    <Image src={arrowTop4} alt="Top point" />
                  </div>
                  <div className="w-[35px]  text-sm font-bold leading-[21px]">
                    1280
                  </div>
                </div>
              </div>
              <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
                <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E px-2 pb-1.5 pt-[7px]">
                    <Image src={arrowTop3} alt="Top point" />
                  </div>
                  <div className="w-[38px]  text-sm font-bold leading-[21px]">
                    640
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex  items-center gap-2.5 self-stretch">
              <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
                <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E py-2 pl-[8.50px] pr-[7.50px]">
                    <Image src={arrowTop2} alt="Top point" />
                  </div>
                  <div className="w-[35px]  text-sm font-bold leading-[21px]">
                    320
                  </div>
                </div>
              </div>
              <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
                <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E py-2 pl-[9px] pr-[7px]">
                    <Image src={arrowTop2} alt="Top point" />
                  </div>
                  <div className="w-[38px]  text-sm font-bold leading-[21px]">
                    160
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex  items-center gap-2.5 self-stretch">
              <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
                <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E py-2 pl-[8.50px] pr-[7.50px]">
                    <Image src={arrowTop2} alt="Top point" />
                  </div>
                  <div className="w-[35px]  text-sm font-bold leading-[21px]">
                    80
                  </div>
                </div>
              </div>
              <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
                <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E py-2 pl-[9px] pr-[7px]">
                    <Image src={arrowTop2} alt="Top point" />
                  </div>
                  <div className="w-[38px]  text-sm font-bold leading-[21px]">
                    40
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex  items-center gap-2.5 self-stretch">
              <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
                <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E pl-[8.50px] pr-[7.50px]">
                    <Image src={arrowTop1} alt="Top point" />
                  </div>
                  <div className="w-[35px]  text-sm font-bold leading-[21px]">
                    20
                  </div>
                </div>
              </div>
              <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
                <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E pl-[9px] pr-[7px]">
                    <Image src={arrowTop1} alt="Top point" />
                  </div>
                  <div className="w-[38px]  text-sm font-bold leading-[21px]">
                    10
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex  items-center gap-2.5 self-stretch">
              <div className="inline-flex shrink grow basis-0 flex-col items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
                <div className="inline-flex items-center justify-center gap-2.5 self-stretch">
                  <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E py-[5px] pl-[5.50px] pr-[4.50px]">
                    <Image src={zero} alt="Zero" />
                  </div>
                  <div className="w-3  text-sm font-bold leading-[21px]">0</div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2 self-stretch rounded-[10px] bg-C09B55E px-10 py-2.5 shadow">
            <div
              className="font-bold text-C282F41 
            "
            >
              Claim Bonus
            </div>
          </div>
        </div>
        {/* Level10 start */}
        <div className="mt-6 inline-flex h-32 flex-col justify-center gap-2.5 rounded-[15px]  bg-C2E3549 p-5">
          <div className="inline-flex gap-2.5 self-stretch">
            <div className="shrink grow basis-0 text-CBDC4DA">Level0</div>
            <div className="shrink grow basis-0 text-right text-CBDC4DA">
              Level1
            </div>
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
            <div className="w-[50px] text-C00FF8B">10</div>
            <div className="shrink grow basis-0 text-center text-xs leading-[18px] text-CBDC4DA">
              Reach level 1 to Claim your first daily reward
            </div>
            <div className="w-[50px] text-right text-CBDC4DA">10</div>
          </div>
        </div>
        {/* Top wins last section start */}
        <div className=" mt-6 inline-flex w-full flex-col items-center gap-5  rounded-[15px] bg-slate-800 p-5">
          <div className="inline-flex items-center justify-center gap-[11px] self-stretch">
            <Image src={bigCrown} alt="Crown king" className="w-[60px]" />
            <div className="text-xl font-semibold leading-7 text-C00FF8B">
              Top wins last 24h
            </div>
          </div>
          <div className="flex flex-col gap-2 self-stretch">
            <div className="inline-flex items-center gap-2.5 self-stretch rounded-[15px] border  border-C3B445E bg-C212737 p-5">
              <div className="flex h-10 shrink grow  basis-0 items-center gap-2.5">
                <ProfileImageSmall image={profileImage1} />
                <div className="shrink grow basis-0 font-semibold leading-snug">
                  bigbear444
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-[10px] border border-C09B55E border-opacity-80 bg-C09B55E bg-opacity-10 px-2 py-[5px]">
                <div className="text-sm font-bold leading-[21px] text-C00FF7D">
                  51,200
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 self-stretch rounded-[15px] border  border-C3B445E bg-gray-800 p-5">
              <div className="flex h-10 shrink grow  basis-0 items-center gap-2.5">
                <ProfileImageSmall image={profileImage2} />
                <div className="shrink grow basis-0 font-semibold leading-snug">
                  tinypanda866
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-[10px] border border-C09B55E border-opacity-80 bg-C09B55E bg-opacity-10 px-2 py-[5px]">
                <div className="text-sm font-bold leading-[21px] text-C00FF7D">
                  51,201
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 self-stretch rounded-[15px] border  border-C3B445E bg-gray-800 p-5">
              <div className="flex h-10 shrink grow basis-0 items-center gap-2.5">
                <ProfileImageSmall image={profileImage3} />

                <div className="shrink grow basis-0 font-semibold leading-snug">
                  redkoala509
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-[10px] border border-C09B55E border-opacity-80 bg-C09B55E bg-opacity-10 px-2 py-[5px]">
                <div className="text-sm font-bold leading-[21px] text-C00FF7D">
                  51,202
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 self-stretch rounded-[15px] border  border-C3B445E bg-gray-800 p-5">
              <div className="flex h-10 shrink grow  basis-0 items-center gap-2.5">
                <ProfileImageSmall image={profileImage4} />
                <div className="shrink grow basis-0 font-semibold leading-snug">
                  crazyelephant681
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-[10px] border border-C09B55E border-opacity-80 bg-C09B55E bg-opacity-10 px-2 py-[5px]">
                <div className="text-sm font-bold leading-[21px] text-C00FF7D">
                  51,203
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Top wins last section end */}
      </div>
    </div>
  );
};

export default Affiliates;
