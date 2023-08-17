"use client";
import RankBadge from "@/components/shared/RankBadge";
import profileImage from "@/public/images/winner-img-4.png";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import LineChart from "../leaderboard/LeaderboardTopEarners/LineChart";
import ProfileImage from "./ProfileImage";

const ProfileDashboard = () => {
  let [plan, setPlan] = useState("public");
  return (
    <div className="mt-S30">
      <div className="grid grid-cols-2 justify-between gap-6">
        <div className="bg-C232A3C p-S30 rounded-[15px] border border-C3C4663 space-y-S30">
          <div className="px-S30 py-10 bg-C2E3549 rounded-[30px] space-y-S30">
            <ProfileImage image={profileImage} />
            <div className="justify-center items-center gap-[15px] flex">
              <div>
                <RankBadge badgeRank={28} />
              </div>
              <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                <div className="w-[174px]  text-2xl font-semibold leading-[33.60px]">
                  silverlion355
                </div>
                <div className="w-[130px] text-CBDC4DA  font-normal leading-normal">
                  User Id : 952033
                </div>
              </div>
            </div>
          </div>
          <div className="p-S30 bg-C2E3549 rounded-[30px]">
            <p className="text-center text-CBDC4DA leading">
              2,870 XP Earned. 30 XP required for next level up.
            </p>
            <div className="mt-2.5">
              <RangeSlider
                className="single-thumb"
                min={0}
                max={100}
                step={5}
                value={[0, 80]}
              />
            </div>
          </div>
        </div>
        <div className="bg-C232A3C p-S30 rounded-[15px] border border-C3C4663 space-y-S30">
          <div className=" flex justify-between gap-5 text-center">
            <div className="w-full p-5 bg-C2E3549 rounded-[15px] flex-col justify-center items-center gap-[5px] inline-flex">
              <p className="self-stretch text-center text-C109F5A text-2xl font-semibold leading-[33.60px]">
                69
              </p>
              <p className="self-stretch text-center ">Completed Offers</p>
            </div>
            <div className="w-full p-5 bg-C2E3549 rounded-[15px] flex-col justify-center items-center gap-[5px] inline-flex">
              <p className="self-stretch text-center text-C109F5A text-2xl font-semibold leading-[33.60px]">
                69
              </p>
              <p className="self-stretch text-center ">Completed Offers</p>
            </div>
            <div className="w-full p-5 bg-C2E3549 rounded-[15px] flex-col justify-center items-center gap-[5px] inline-flex">
              <p className="self-stretch text-center text-C109F5A text-2xl font-semibold leading-[33.60px]">
                69
              </p>
              <p className="self-stretch text-center ">Completed Offers</p>
            </div>
          </div>
          <div>
            <LineChart />
          </div>
        </div>
      </div>
      {/* Your info and settings */}
      <div className="bg-[#1E2433] px-S30 py-S60 rounded-[15px] border border-C3C4663 mt-10">
        <div className="grid grid-cols-2 justify-between gap-6 ">
          <div className="px-S30 py-10 bg-[#232A3B] rounded-[30px] space-y-5">
            <p className=" text-center text-[28px] font-semibold leading-9">
              Your Info
            </p>
            <div className="space-y-2.5">
              <div className=" px-5 py-[15px] bg-C2E3549 rounded-[10px] border border-C3D4660  items-center gap-5 flex">
                <p className="grow shrink basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="grow shrink basis-0 text-right text-C109F5A text-xl font-semibold leading-7">
                  6522146
                </p>
              </div>
              <div className=" px-5 py-[15px] bg-C2E3549 rounded-[10px] border border-C3D4660  items-center gap-5 flex">
                <p className="grow shrink basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="grow shrink basis-0 text-right text-C109F5A text-xl font-semibold leading-7">
                  6522146
                </p>
              </div>
              <div className=" px-5 py-[15px] bg-C2E3549 rounded-[10px] border border-C3D4660  items-center gap-5 flex">
                <p className="grow shrink basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="grow shrink basis-0 text-right text-C109F5A text-xl font-semibold leading-7">
                  6522146
                </p>
              </div>
              <div className=" px-5 py-[15px] bg-C2E3549 rounded-[10px] border border-C3D4660  items-center gap-5 flex">
                <p className="grow shrink basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="grow shrink basis-0 text-right text-C109F5A text-xl font-semibold leading-7">
                  6522146
                </p>
              </div>
              <div className=" px-5 py-[15px] bg-C2E3549 rounded-[10px] border border-C3D4660  items-center gap-5 flex">
                <p className="grow shrink basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="grow shrink basis-0 text-right text-C109F5A text-xl font-semibold leading-7">
                  6522146
                </p>
              </div>
              <div className=" px-5 py-[15px] bg-C2E3549 rounded-[10px] border border-C3D4660  items-center gap-5 flex">
                <p className="grow shrink basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="grow shrink basis-0 text-right text-C109F5A text-xl font-semibold leading-7">
                  6522146
                </p>
              </div>
            </div>
          </div>
          {/* setting */}
          <div className="px-S30 py-10 bg-[#232A3B] rounded-[30px] space-y-5">
            <p className=" text-center text-[28px] font-semibold leading-9">
              Setting
            </p>
            <div className="space-y-5">
              <div className=" p-5 bg-C2E3549 rounded-[10px] border border-C3D4660 ">
                <p className="w-full font-semibold leading-snug border-b border-[#505A77] pb-5 mb-5">
                  Change Display Name
                </p>
                <label className="text-xs font-normal leading-[18px] block">
                  Edit Display Name:
                </label>
                <div className="items-center gap-2.5 flex mt-2.5">
                  <input
                    placeholder="Namio321"
                    className="grow px-[30px] py-2.5 bg-[#2A2B42] rounded-[5px] border border-C3D4660 items-start gap-2.5 flex text-sm leading-[21px]"
                  />

                  <button className="px-[30px] py-2.5 bg-[#166F44] rounded-[5px] items-start gap-2.5  text-center text-xs font-semibold leading-[18px]">
                    Change
                  </button>
                </div>
                <p className="text-[8px] font-normal leading-3 mt-S10">
                  Maximum length: 40 characters
                </p>
              </div>
              <div className="p-5 bg-C2E3549 rounded-[10px] border border-C3D4660 ">
                <p className="font-semibold leading-snug">Profile Visibility</p>
                <p className="text-CBDC4DA text-sm font-normal leading-[21px] mt-S10">
                  Setting your profile to private will prevent anyone from
                  viewing your public profile information except your username
                  and avatar.
                </p>
              </div>
              <div className="border border-C3D4660 px-S30 py-5  rounded-[10px]">
                <RadioGroup
                  value={plan}
                  onChange={setPlan}
                  className="flex justify-center items-center gap-10"
                >
                  <RadioGroup.Option value="public">
                    {({ checked }) => (
                      <button className={`flex gap-x-[15px] items-center`}>
                        <span
                          className={`w-4 h-4 outline  ${
                            checked
                              ? "outline-C109F5A bg-C109F5A"
                              : "outline-[#404965] bg-transparent"
                          } outline-offset-4  p-S5  rounded-full`}
                        ></span>{" "}
                        <span>Public</span>
                      </button>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option value="private">
                    {({ checked }) => (
                      <button className={`flex gap-x-[15px] items-center`}>
                        <span
                          className={`w-4 h-4 outline ${
                            checked
                              ? "outline-C109F5A bg-C109F5A"
                              : "outline-[#404965] bg-transparent"
                          }  outline-offset-4  p-S5  rounded-full`}
                        ></span>{" "}
                        <span>Private</span>
                      </button>
                    )}
                  </RadioGroup.Option>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
        {/* Referrals */}
        <div className="bg-[#232A3B] rounded-[15px] p-5 space-y-6 mt-6">
          <div>
            <p className=" text-[28px] font-semibold leading-9">Referrals</p>
            <p className="text-[#BCC4D9] text-sm leading-[21px]">
              Share your referral link and earn 5% of all offers completed by
              your users - including name bonuses! Note: Referral bonus does not
              apply to video offers.Your referred users will also receive 100
              coins as a welcome bonus.
            </p>
          </div>
          <div className=" p-[30px] bg-C2E3549 rounded-[15px]">
            <div>
              <p>Refer users - get rewarded!</p>
              <div className="items-center gap-2.5 flex">
                <div className=" flex-1 mt-2 px-[30px] py-[15px] rounded-[15px] border border-C3F4C70 gap-2.5 ">
                  <span className="text-CBDC4DA text-sm font-normal leading-[21px]">
                    Your referral code :{" "}
                  </span>
                  <span className="text-C00D675 text-sm font-normal leading-[21px]">
                    7f66f48062
                  </span>
                </div>
                <button className="self-stretch px-10 py-2.5 bg-C09B55E rounded-[10px] shadow text-C282F41 text-base font-bold">
                  Copy link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* delete your account */}
      <div className="p-5 bg-[#232A3B] rounded-[15px] mt-S60">
        <p className="text-[28px] font-semibold leading-9">
          Delete your Account
        </p>
        <p className="text-[#BCC4D9] mt-2.5 text-sm font-normal leading-[21px]">
          consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
          congue
        </p>

        <div className="mt-5 p-5 bg-C2E3549 rounded-[10px] border border-C2E3549">
          <p className=" font-semibold leading-snug">Delete Account</p>
          <button className="px-5 py-2.5 font-bold bg-[#EA1F37] rounded-[10px] mt-5">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
