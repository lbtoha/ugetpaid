"use client";
import clock from "@/public/images/icon/clock-icon-2.png";
import usersIcon from "@/public/images/icon/counter-icon-4.png";
import crown from "@/public/images/icon/crown-kings-1.png";
import appLogo from "@/public/images/icon/own-app.png";
import twitter from "@/public/images/icon/twitter.png";
import coin from "@/public/images/winners-item-1.png";
import Image from "next/image";
// import arrowTop1 from "@/public/images/icon/arrow-top-1.png"
// import arrowTop2 from "@/public/images/icon/arrow-top-2.png"
// import arrowTop3 from "@/public/images/icon/arrow-top-3.png"
// import arrowTop4 from "@/public/images/icon/arrow-top-4.png"
// import star from "@/public/images/icon/star-icon.png"
import ProfileImageSmall from "@/components/shared/ProfileImageSmall";
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
import RewardsCountDown from "./RewardsCountDown";
const Affiliates = () => {
  return (
    <div className="grid grid-cols-12 space-x-6 mt-10">
      <div className="col-start-1 col-end-10">
        <div className="px-5 py-[30px] bg-C212737 rounded-[15px]">
          <div className="justify-between items-center flex">
            <div className="flex-col   gap-[5px] inline-flex">
              <h2 className="text-C00FF8B text-2.3xl font-semibold leading-9">
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
            <div className="gap-[5px] flex">
              <div className="w-[30px] h-[30px] p-1.5 rounded-[15px] border border-C4C5673  justify-center items-center flex">
                <i className="fa-brands fa-twitter w-[18px] h-[18px]"></i>
              </div>
              <div className="w-[30px] h-[30px] p-1.5 bg-emerald-700 rounded-[15px] justify-center items-center flex">
                <i className="fa-brands w-[18px] h-[18px] text-center fa-facebook-f"></i>
              </div>
              <div className="w-[30px] h-[30px] p-1.5 rounded-[15px] border border-C4C5673 justify-center items-center flex">
                <i className="fa-brands w-[18px] h-[18px] text-center fa-pinterest-p"></i>
              </div>
            </div>
          </div>
          {/* card section */}
          <div className=" px-2.5 pt-2.5 pb-[15px] bg-c12161F mt-6 rounded-[10px] border border-C3B445E  items-center gap-x-1 flex">
            <div className="grow basis-0 p-[30px] bg-gradient-affiliates-1 shadow-BSAffiliates-1 rounded-[10px]  flex-col  items-center gap-2.5 inline-flex">
              <div className="w-[60px] h-[60px] p-2.5 bg-[rgba(46, 53, 73, 0.50)] rounded-[10px] justify-center items-center inline-flex">
                <Image
                  src={coin}
                  alt="coin"
                  className="w-10 h-10 flex-col   flex"
                />
              </div>
              <div className="h-[46px] flex-col  items-center flex">
                <p className="text-CFEDB41 text-xs leading-[18px]">You Win</p>
                <p className=" text-xl font-semibold leading-7">$2.50</p>
              </div>
            </div>
            <div className="grow shrink bg-gradient-affiliates-2 shadow-BSAffiliates-2 basis-0 p-[30px]    rounded-[10px]  flex-col  items-center gap-2.5 inline-flex">
              <div className="w-[60px] h-[60px] p-2.5 bg-[rgba(46, 53, 73, 0.50)] rounded-[10px] justify-center items-center inline-flex">
                <Image
                  src={coin}
                  alt="coin"
                  className="w-10 h-10 flex-col   flex"
                />
              </div>
              <div className="self-stretch h-[46px] flex-col  items-center flex">
                <p className="self-stretch text-center text-CBDC4DA text-xs leading-[18px]">
                  You Win
                </p>
                <p className="self-stretch text-center  text-xl font-semibold leading-7">
                  $0.50
                </p>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-gradient-affiliates-3 shadow-BSAffiliates-3 rounded-[10px]  flex-col  items-center gap-2.5 inline-flex">
              <div className="w-[60px] h-[60px] p-2.5 bg-[rgba(46, 53, 73, 0.50)] rounded-[10px] justify-center items-center inline-flex">
                <Image
                  src={coin}
                  alt="coin"
                  className="w-10 h-10 flex-col   flex"
                />
              </div>
              <div className="self-stretch h-[46px] flex-col  items-center flex">
                <p className="self-stretch text-center text-CBDC4DA text-xs leading-[18px]">
                  You Win
                </p>
                <p className="self-stretch text-center  text-xl font-semibold leading-7">
                  $0.50
                </p>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-gradient-affiliates-4 shadow-BSAffiliates-4 rounded-[10px]  flex-col  items-center gap-2.5 inline-flex">
              <div className="w-[60px] h-[60px] p-2.5 bg-[rgba(46, 53, 73, 0.50)] rounded-[10px] justify-center items-center inline-flex">
                <Image
                  src={coin}
                  alt="coin"
                  className="w-10 h-10 flex-col   flex"
                />
              </div>
              <div className="self-stretch h-[46px] flex-col  items-center flex">
                <p className="self-stretch text-center text-CBDC4DA text-xs leading-[18px]">
                  You Win
                </p>
                <p className="self-stretch text-center  text-xl font-semibold leading-7">
                  $0.50
                </p>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-gradient-affiliates-5 shadow-BSAffiliates-5  rounded-[10px]  flex-col  items-center gap-2.5 inline-flex">
              <div className="w-[60px] h-[60px] p-2.5 bg-[rgba(46, 53, 73, 0.50)] rounded-[10px] justify-center items-center inline-flex">
                <Image
                  src={coin}
                  alt="coin"
                  className="w-10 h-10 flex-col   flex"
                />
              </div>
              <div className="self-stretch h-[46px] flex-col  items-center flex">
                <p className="self-stretch text-center text-CBDC4DA text-xs leading-[18px]">
                  You Win
                </p>
                <p className="self-stretch text-center  text-xl font-semibold leading-7">
                  $0.50
                </p>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-gradient-affiliates-6 shadow-BSAffiliates-6 rounded-[10px] flex-col  items-center gap-2.5 inline-flex">
              <div className="w-[60px] h-[60px] p-2.5 bg-[rgba(46, 53, 73, 0.50)] rounded-[10px] justify-center items-center inline-flex">
                <Image
                  src={coin}
                  alt="coin"
                  className="w-10 h-10 flex-col   flex"
                />
              </div>
              <div className="self-stretch h-[46px] flex-col  items-center flex">
                <p className="self-stretch text-center text-CBDC4DA text-xs leading-[18px]">
                  You Win
                </p>
                <p className="self-stretch text-center  text-xl font-semibold leading-7">
                  $0.50
                </p>
              </div>
            </div>
            <div className="grow shrink basis-0 p-[30px] bg-gradient-affiliates-7 shadow-BSAffiliates-7 rounded-[10px] flex-col  items-center gap-2.5 inline-flex">
              <div className="w-[60px] h-[60px] p-2.5 bg-[rgba(46, 53, 73, 0.50)] rounded-[10px] justify-center items-center inline-flex">
                <Image
                  src={coin}
                  alt="coin"
                  className="w-10 h-10 flex-col   flex"
                />
              </div>
              <div className="self-stretch h-[46px] flex-col  items-center flex">
                <p className="self-stretch text-center text-CBDC4DA text-xs leading-[18px]">
                  You Win
                </p>
                <p className="self-stretch text-center  text-xl font-semibold leading-7">
                  $0.50
                </p>
              </div>
            </div>
          </div>
          {/* card section end */}
          {/* user referred section start */}
          <div className="   gap-x-6 mt-6 flex">
            <div className="grow basis-0 p-5 bg-C2E3549  rounded-[15px] justify-center items-center gap-[15px] flex">
              <div className="w-[60px] h-[60px] p-[18px] bg-C3F4C70 border-C3F4C70  rounded-[30px] justify-center items-center flex">
                <Image src={usersIcon} alt="users" className="w-6" />
              </div>
              <div className="flex-col justify-center  gap-[5px] inline-flex">
                <p className="text-xl font-semibold leading-7">50</p>
                <p className="text-CBDC4DA text-xs leading-[18px]">
                  Users Referred
                </p>
              </div>
            </div>
            <div className="grow basis-0 p-5 bg-C2E3549  rounded-[15px] justify-center items-center gap-[15px] flex">
              <div className="w-[60px] h-[60px] p-[18px] bg-C3F4C70 border-C3F4C70 rounded-[30px] justify-center items-center flex">
                <Image src={usersIcon} alt="users" className="w-6 " />
              </div>
              <div className="flex-col justify-center  gap-[5px] inline-flex">
                <p className="text-xl font-semibold leading-7">50</p>
                <p className="text-CBDC4DA text-xs leading-[18px]">
                  Users Referred
                </p>
              </div>
            </div>
          </div>
          {/* user referred section end */}
          {/* affiliates link start */}
          <div className="w-full mt-6 p-[30px] bg-C2E3549 rounded-[15px]   gap-5 inline-flex">
            <div className="grow shrink basis-0 flex-col   gap-2 inline-flex">
              <p
                className="self-stretch 
              "
              >
                Affiliates Link
              </p>
              <div className="self-stretch  items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-[51px] px-[30px] py-[15px] rounded-[15px] border border-C3F4C70   gap-2.5 flex">
                  <div className="grow basis-0">
                    <span className="text-CBDC4DA text-sm">
                      Your referral code :{" "}
                    </span>
                    <span className="text-C00D675 text-sm">7f66f48062</span>
                  </div>
                </div>
                <button className="self-stretch px-10 py-2.5 bg-C00D675 rounded-[10px] shadow justify-center items-center gap-x-2 flex text-C282F41 font-bold">
                  Copy link
                </button>
              </div>
            </div>
          </div>
          {/* affiliates link end */}
        </div>
        {/* 7 Days Streak Rewards start */}
        <div className="w-full mt-6 p-5 bg-C282F41 rounded-[20px] flex-col  items-center gap-5 inline-flex">
          <div className="self-stretch p-5 bg-C2E3549  items-center gap-[87px] inline-flex">
            <div className=" flex-col  items-center inline-flex">
              <div className="self-stretch flex-col flex">
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
            <div className="grow shrink basis-0 text-right">
              <span className="text-C00D675 text-xs  leading-[18px]">
                Earn 1,000
              </span>
              <span className="text-CBDC4DA text-xs  leading-[18px]">
                {" "}
                or more coins within{" "}
              </span>
              <span className="text-C00D675 text-xs  leading-[18px]">
                24 hours
              </span>
              <span className="text-CBDC4DA text-xs  leading-[18px]">
                {" "}
                to keep your streak.
              </span>
            </div>
          </div>
          <div className="self-stretch gap-2.5 inline-flex">
            <div className="grow shrink basis-0 p-5 rounded-[15px] border border-C3B445E flex-col  items-center gap-2.5 inline-flex">
              <Image src={clock} alt="Clock" className="w-6 h-6" />
              <div className="self-stretch flex-col justify-center items-center gap-[5px] flex">
                <p className="self-stretch text-center font-semibold leading-snug">
                  Day1
                </p>
                <p className="self-stretch text-center text-CBDC4DA text-xs leading-[18px]">
                  25 Coins
                </p>
              </div>
              <div className="self-stretch px-2.5 py-[5px] bg-C2E3549 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <p className="text-center text-CBDC4DA text-xs leading-[18px]">
                  Claim
                </p>
              </div>
            </div>
            <div className="grow shrink basis-0 p-5 rounded-[15px] border border-C3B445E flex-col  items-center gap-2.5 inline-flex">
              <Image src={clock} alt="Clock" className="w-6 h-6" />
              <div className="self-stretch flex-col justify-center items-center gap-[5px] flex">
                <p className="self-stretch text-center font-semibold leading-snug">
                  Day2
                </p>
                <p className="self-stretch text-center text-CBDC4DA text-xs leading-[18px]">
                  50 Coins
                </p>
              </div>
              <div className="self-stretch px-2.5 py-[5px] bg-C2E3549 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <p className="text-center text-CBDC4DA text-xs leading-[18px]">
                  Claim
                </p>
              </div>
            </div>
            <div className="grow shrink basis-0 p-5 rounded-[15px] border border-C3B445E flex-col  items-center gap-2.5 inline-flex">
              <Image src={clock} alt="Clock" className="w-6 h-6" />
              <div className="self-stretch flex-col justify-center items-center gap-[5px] flex">
                <p className="self-stretch text-center font-semibold leading-snug">
                  Day3
                </p>
                <div className="self-stretch text-center text-CBDC4DA text-xs  leading-[18px]">
                  100 Coins
                </div>
              </div>
              <div className="self-stretch px-2.5 py-[5px] bg-C2E3549 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-CBDC4DA text-xs leading-[18px]">
                  Claim
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-5 rounded-[15px] border border-C3B445E flex-col  items-center gap-2.5 inline-flex">
              <Image src={clock} alt="Clock" className="w-6 h-6" />
              <div className="self-stretch flex-col justify-center items-center gap-[5px] flex">
                <div className="self-stretch text-center font-semibold leading-snug">
                  Day4
                </div>
                <div className="self-stretch text-center text-CBDC4DA text-xs  leading-[18px]">
                  200 Coins
                </div>
              </div>
              <div className="self-stretch px-2.5 py-[5px] bg-C2E3549 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-CBDC4DA text-xs  leading-[18px]">
                  Claim
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-5 rounded-[15px] border border-C3B445E flex-col  items-center gap-2.5 inline-flex">
              <Image src={clock} alt="Clock" className="w-6 h-6" />
              <div className="self-stretch flex-col justify-center items-center gap-[5px] flex">
                <div className="self-stretch text-center   font-semibold leading-snug">
                  Day5
                </div>
                <div className="self-stretch text-center text-CBDC4DA text-xs  leading-[18px]">
                  400 Coins
                </div>
              </div>
              <div className="self-stretch px-2.5 py-[5px] bg-C2E3549 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-CBDC4DA text-xs  leading-[18px]">
                  Claim
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-5 rounded-[15px] border border-C3B445E flex-col  items-center gap-2.5 inline-flex">
              <Image src={clock} alt="Clock" className="w-6 h-6" />
              <div className="self-stretch flex-col justify-center items-center gap-[5px] flex">
                <div className="self-stretch text-center font-semibold leading-snug">
                  Day6
                </div>
                <div className="self-stretch text-center text-CBDC4DA text-xs leading-[18px]">
                  800 Coins
                </div>
              </div>
              <div className="self-stretch px-2.5 py-[5px] bg-C2E3549 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-CBDC4DA text-xs leading-[18px]">
                  Claim
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-5 rounded-[15px] border border-C3B445E flex-col  items-center gap-2.5 inline-flex">
              <Image src={clock} alt="Clock" className="w-6 h-6" />
              <div className="self-stretch flex-col justify-center items-center gap-[5px] flex">
                <div className="self-stretch text-center font-semibold leading-snug">
                  Day7
                </div>
                <div className="self-stretch text-center text-CBDC4DA text-xs leading-[18px]">
                  100-50,000 Coins
                </div>
              </div>
              <div className="self-stretch px-2.5 py-[5px] bg-C2E3549 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-CBDC4DA text-xs leading-[18px]">
                  Claim
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 7 Days Streak Rewards end */}
        {/* Follow us on Twitter start */}
        <div className="flex mt-6 gap-x-6 ">
          {/* Follow us on Twitter */}
          <div className="w-[390px] p-[30px] bg-C2E3549 rounded-[15px] justify-between flex-row-reverse items-center gap-[30px] inline-flex">
            <div className=" flex-col justify-center items-end gap-3 inline-flex">
              <div className="self-stretch text-right text-sm font-bold leading-[21px]">
                Follow us on Twitter
              </div>
              <div className="px-[15px] py-[5px] bg-C09B65E rounded-[10px] justify-end items-center gap-2.5 inline-flex">
                <div className="text-C282F41 font-bold leading-normal">
                  Claim 50 coins
                </div>
              </div>
            </div>
            <div className="w-20 h-20 p-5 bg-C434D6D rounded-[10px] justify-center items-center flex">
              <Image src={twitter} alt="twitter" className="w-10 h-10" />
            </div>
          </div>
          {/* Download our App  */}
          <div className="w-[390px] flex-row-reverse h-[140px] p-[30px] bg-C2E3549 rounded-[15px] justify-between items-center gap-[30px] inline-flex">
            <div className="w-[351px] flex-col justify-center items-end gap-3 inline-flex">
              <div className="self-stretch text-right text-sm font-bold leading-[21px]">
                Download our App
              </div>
              <div className="px-[15px] py-[5px] bg-C09B65E rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                <div className="text-C282F41  font-bold leading-normal">
                  Download for 150 coins
                </div>
              </div>
            </div>
            <div className="w-20 h-20 p-5 bg-C434D6D rounded-[10px] justify-center items-center flex">
              <Image src={appLogo} alt="twitter" className="w-10" />
            </div>
          </div>
        </div>
        {/* Follow us on Twitter end */}
      </div>
      <div className="col-start-10 col-end-13">
        {/* Daily Bonus Ladder start */}
        <div className="w-full p-[30px] bg-gray-800 rounded-[15px] flex-col  items-center gap-5 inline-flex">
          <div className="self-stretch text-C00FF8B text-2.3xl font-semibold leading-9">
            Daily Bonus Ladder
          </div>
          <div className="self-stretch flex-col gap-2.5 flex">
            <div className="self-stretch items-center gap-2.5 inline-flex">
              <div className="grow  basis-0 px-2.5 py-[5px] rounded-[10px] border border-slate-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 bg-C3B445E rounded-[15px] justify-center items-center flex">
                    <Image src={crown} alt="Crown" />
                  </div>
                  <div className="w-[35px]  text-sm font-bold leading-[21px]">
                    5120
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 px-2.5 py-[5px] rounded-[10px] border border-slate-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 p-[5px] bg-C3B445E rounded-[15px] justify-center items-center flex">
                    <Image src={star} alt="Star" />
                  </div>
                  <div className="w-[38px]  text-sm font-bold leading-[21px]">
                    2560
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch  items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 px-2.5 py-[5px] rounded-[10px] border border-slate-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 pl-[7.50px] pr-[8.50px] py-[5px] bg-C3B445E rounded-[15px] justify-center items-center flex">
                    <Image src={arrowTop4} alt="Top point" />
                  </div>
                  <div className="w-[35px]  text-sm font-bold leading-[21px]">
                    1280
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 px-2.5 py-[5px] rounded-[10px] border border-slate-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 px-2 pt-[7px] pb-1.5 bg-C3B445E rounded-[15px] justify-center items-center flex">
                    <Image src={arrowTop3} alt="Top point" />
                  </div>
                  <div className="w-[38px]  text-sm font-bold leading-[21px]">
                    640
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch  items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 px-2.5 py-[5px] rounded-[10px] border border-slate-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 pl-[8.50px] pr-[7.50px] py-2 bg-C3B445E rounded-[15px] justify-center items-center flex">
                    <Image src={arrowTop2} alt="Top point" />
                  </div>
                  <div className="w-[35px]  text-sm font-bold leading-[21px]">
                    320
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 px-2.5 py-[5px] rounded-[10px] border border-slate-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 pl-[9px] pr-[7px] py-2 bg-C3B445E rounded-[15px] justify-center items-center flex">
                    <Image src={arrowTop2} alt="Top point" />
                  </div>
                  <div className="w-[38px]  text-sm font-bold leading-[21px]">
                    160
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch  items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 px-2.5 py-[5px] rounded-[10px] border border-slate-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 pl-[8.50px] pr-[7.50px] py-2 bg-C3B445E rounded-[15px] justify-center items-center flex">
                    <Image src={arrowTop2} alt="Top point" />
                  </div>
                  <div className="w-[35px]  text-sm font-bold leading-[21px]">
                    80
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 px-2.5 py-[5px] rounded-[10px] border border-slate-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 pl-[9px] pr-[7px] py-2 bg-C3B445E rounded-[15px] justify-center items-center flex">
                    <Image src={arrowTop2} alt="Top point" />
                  </div>
                  <div className="w-[38px]  text-sm font-bold leading-[21px]">
                    40
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch  items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 px-2.5 py-[5px] rounded-[10px] border border-slate-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 pl-[8.50px] pr-[7.50px] bg-C3B445E rounded-[15px] justify-center items-center flex">
                    <Image src={arrowTop1} alt="Top point" />
                  </div>
                  <div className="w-[35px]  text-sm font-bold leading-[21px]">
                    20
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 px-2.5 py-[5px] rounded-[10px] border border-slate-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 pl-[9px] pr-[7px] bg-C3B445E rounded-[15px] justify-center items-center flex">
                    <Image src={arrowTop1} alt="Top point" />
                  </div>
                  <div className="w-[38px]  text-sm font-bold leading-[21px]">
                    10
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch  items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 px-2.5 py-[5px] rounded-[10px] border border-slate-600 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="self-stretch justify-center items-center gap-2.5 inline-flex">
                  <div className="w-6 h-6 pl-[5.50px] pr-[4.50px] py-[5px] bg-C3B445E rounded-[15px] justify-center items-center flex">
                    <Image src={zero} alt="Zero" />
                  </div>
                  <div className="w-3  text-sm font-bold leading-[21px]">0</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch px-10 py-2.5 bg-C09B55E rounded-[10px] shadow justify-center items-center gap-2 inline-flex">
            <div
              className="text-C282F41 font-bold 
            "
            >
              Claim Bonus
            </div>
          </div>
        </div>
        {/* Level10 start */}
        <div className="mt-6 h-32 p-5 bg-C2E3549 rounded-[15px] flex-col justify-center  gap-2.5 inline-flex">
          <div className="self-stretch gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-CBDC4DA">Level0</div>
            <div className="grow shrink basis-0 text-right text-CBDC4DA">
              Level1
            </div>
          </div>

          <div className="w-full mt-S10">
            <RangeSlider
              className="single-thumb"
              min={0}
              max={100}
              step={5}
              value={[0, 70]}
            />
          </div>
          <div className="self-stretch gap-2.5 inline-flex">
            <div className="w-[50px] text-C00FF8B">10</div>
            <div className="grow shrink basis-0 text-center text-CBDC4DA text-xs leading-[18px]">
              Reach level 1 to Claim your first daily reward
            </div>
            <div className="w-[50px] text-right text-CBDC4DA">10</div>
          </div>
        </div>
        {/* Top wins last section start */}
        <div className=" w-full mt-6 p-5 bg-slate-800 rounded-[15px] flex-col  items-center gap-5 inline-flex">
          <div className="self-stretch justify-center items-center gap-[11px] inline-flex">
            <Image src={bigCrown} alt="Crown king" className="w-[60px]" />
            <div className="text-C00FF8B text-xl font-semibold leading-7">
              Top wins last 24h
            </div>
          </div>
          <div className="self-stretch flex-col gap-2 flex">
            <div className="self-stretch p-5 bg-C212737 rounded-[15px] border border-C3B445E  items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 h-10  items-center gap-2.5 flex">
                <ProfileImageSmall image={profileImage1} />
                <div className="grow shrink basis-0 font-semibold leading-snug">
                  bigbear444
                </div>
              </div>
              <div className="px-2 py-[5px] bg-C09B55E bg-opacity-10 rounded-[10px] border border-C09B55E border-opacity-80 justify-center items-center gap-2 flex">
                <div className="text-C00FF7D text-sm font-bold leading-[21px]">
                  51,200
                </div>
              </div>
            </div>
            <div className="self-stretch p-5 bg-gray-800 rounded-[15px] border border-C3B445E  items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 h-10  items-center gap-2.5 flex">
                <ProfileImageSmall image={profileImage2} />
                <div className="grow shrink basis-0 font-semibold leading-snug">
                  tinypanda866
                </div>
              </div>
              <div className="px-2 py-[5px] bg-C09B55E bg-opacity-10 rounded-[10px] border border-C09B55E border-opacity-80 justify-center items-center gap-2 flex">
                <div className="text-C00FF7D text-sm font-bold leading-[21px]">
                  51,201
                </div>
              </div>
            </div>
            <div className="self-stretch p-5 bg-gray-800 rounded-[15px] border border-C3B445E  items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 h-10 items-center gap-2.5 flex">
                <ProfileImageSmall image={profileImage3} />

                <div className="grow shrink basis-0 font-semibold leading-snug">
                  redkoala509
                </div>
              </div>
              <div className="px-2 py-[5px] bg-C09B55E bg-opacity-10 rounded-[10px] border border-C09B55E border-opacity-80 justify-center items-center gap-2 flex">
                <div className="text-C00FF7D text-sm font-bold leading-[21px]">
                  51,202
                </div>
              </div>
            </div>
            <div className="self-stretch p-5 bg-gray-800 rounded-[15px] border border-C3B445E  items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 h-10  items-center gap-2.5 flex">
                <ProfileImageSmall image={profileImage4} />
                <div className="grow shrink basis-0 font-semibold leading-snug">
                  crazyelephant681
                </div>
              </div>
              <div className="px-2 py-[5px] bg-C09B55E bg-opacity-10 rounded-[10px] border border-C09B55E border-opacity-80 justify-center items-center gap-2 flex">
                <div className="text-C00FF7D text-sm font-bold leading-[21px]">
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
