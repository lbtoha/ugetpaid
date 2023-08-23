"use client";
import CopyLink from "@/components/shared/CopyLink";
import profileImage from "@/public/images/winner-img-4.png";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import LineChartComponent from "../../shared/LineChart";
import ChartButton from "./ChartButton";
import DeleteAccount from "./DeleteAccount";
import ProfileCard from "./ProfileCard";

const ProfileDashboard = () => {
  let [plan, setPlan] = useState("public");
  return (
    <div className="mt-S30">
      <div className="grid-cols-2 justify-between gap-6 max-xl:space-y-5 xl:grid">
        <div className="space-y-5 rounded-[15px] border-C3C4663 sm:border sm:bg-C232A3C sm:p-S30 lg:space-y-S30">
          <ProfileCard
            profileImage={profileImage}
            name="silverlion355"
            userId={952033}
          />

          <div className="rounded-[30px] bg-C2E3549 p-S30">
            <p className="leading text-center text-CBDC4DA">
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
        <div className="space-y-S30 rounded-[15px] border-C3C4663 sm:border sm:bg-C232A3C sm:p-S30">
          <div className=" flex justify-between gap-5 text-center max-md:flex-wrap">
            <ChartButton heading="Completed Offers" number={68} />
            <ChartButton heading="Coins Earned" number={29216} />
            <ChartButton heading="Users Referred" number={16} />
          </div>
          <div className="h-[305px] w-full">
            <LineChartComponent />
          </div>
        </div>
      </div>
      {/* Your info and settings */}
      <div className="mt-5 rounded-[15px] border-C3C4663 sm:border sm:bg-[#1E2433] sm:px-S30 sm:py-S60 lg:mt-10">
        <div className="grid-cols-2 justify-between gap-6 max-lg:space-y-5 lg:grid ">
          <div className="space-y-5 rounded-[30px] bg-[#232A3B] px-S30 py-10">
            <p className=" text-center text-[28px] font-semibold leading-9">
              Your Info
            </p>
            <div className="space-y-2.5">
              <div className=" flex items-center gap-5 rounded-[10px] border border-C3D4660  bg-C2E3549 px-5 py-[15px]">
                <p className="shrink grow basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="shrink grow basis-0 text-right text-xl font-semibold leading-7 text-C109F5A">
                  6522146
                </p>
              </div>
              <div className=" flex items-center gap-5 rounded-[10px] border border-C3D4660  bg-C2E3549 px-5 py-[15px]">
                <p className="shrink grow basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="shrink grow basis-0 text-right text-xl font-semibold leading-7 text-C109F5A">
                  6522146
                </p>
              </div>
              <div className=" flex items-center gap-5 rounded-[10px] border border-C3D4660  bg-C2E3549 px-5 py-[15px]">
                <p className="shrink grow basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="shrink grow basis-0 text-right text-xl font-semibold leading-7 text-C109F5A">
                  6522146
                </p>
              </div>
              <div className=" flex items-center gap-5 rounded-[10px] border border-C3D4660  bg-C2E3549 px-5 py-[15px]">
                <p className="shrink grow basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="shrink grow basis-0 text-right text-xl font-semibold leading-7 text-C109F5A">
                  6522146
                </p>
              </div>
              <div className=" flex items-center gap-5 rounded-[10px] border border-C3D4660  bg-C2E3549 px-5 py-[15px]">
                <p className="shrink grow basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="shrink grow basis-0 text-right text-xl font-semibold leading-7 text-C109F5A">
                  6522146
                </p>
              </div>
              <div className=" flex items-center gap-5 rounded-[10px] border border-C3D4660  bg-C2E3549 px-5 py-[15px]">
                <p className="shrink grow basis-0  text-sm font-normal leading-[21px]">
                  Ugetpaid ID
                </p>
                <p className="shrink grow basis-0 text-right text-xl font-semibold leading-7 text-C109F5A">
                  6522146
                </p>
              </div>
            </div>
          </div>
          {/* setting */}
          <div className="space-y-5 rounded-[30px] bg-[#232A3B] px-5 py-7 sm:px-S30 sm:py-10">
            <p className=" text-center text-[28px] font-semibold leading-9">
              Setting
            </p>
            <div className="space-y-5">
              <div className=" rounded-[10px] border border-C3D4660 bg-C2E3549 p-5 ">
                <p className="mb-5 w-full border-b border-[#505A77] pb-5 font-semibold leading-snug">
                  Change Display Name
                </p>
                <label className="block text-xs font-normal leading-[18px]">
                  Edit Display Name:
                </label>
                <div className="mt-2.5 items-center gap-2.5 max-sm:space-y-3 sm:flex">
                  <input
                    placeholder="Namio321"
                    className="flex grow items-start gap-2.5 rounded-[5px] border border-C3D4660 bg-[#2A2B42] px-[30px] py-2.5 text-sm leading-[21px]"
                  />

                  <button className="items-start gap-2.5 rounded-[5px] bg-[#166F44] px-[30px] py-2.5  text-center text-xs font-semibold leading-[18px]">
                    Change
                  </button>
                </div>
                <p className="mt-S10 text-[8px] font-normal leading-3">
                  Maximum length: 40 characters
                </p>
              </div>
              <div className="rounded-[10px] border border-C3D4660 bg-C2E3549 p-5 ">
                <p className="font-semibold leading-snug">Profile Visibility</p>
                <p className="mt-S10 text-sm font-normal leading-[21px] text-CBDC4DA">
                  Setting your profile to private will prevent anyone from
                  viewing your public profile information except your username
                  and avatar.
                </p>
              </div>
              <div className="rounded-[10px] border border-C3D4660 px-S30  py-5">
                <RadioGroup
                  value={plan}
                  onChange={setPlan}
                  className="flex items-center justify-center gap-10"
                >
                  <RadioGroup.Option value="public">
                    {({ checked }) => (
                      <button className={`flex items-center gap-x-[15px]`}>
                        <span
                          className={`h-4 w-4 outline  ${
                            checked
                              ? "bg-C109F5A outline-C109F5A"
                              : "bg-transparent outline-[#404965]"
                          } rounded-full  p-S5  outline-offset-4`}
                        ></span>{" "}
                        <span>Public</span>
                      </button>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option value="private">
                    {({ checked }) => (
                      <button className={`flex items-center gap-x-[15px]`}>
                        <span
                          className={`h-4 w-4 outline ${
                            checked
                              ? "bg-C109F5A outline-C109F5A"
                              : "bg-transparent outline-[#404965]"
                          }  rounded-full  p-S5  outline-offset-4`}
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
        <div className="mt-6 space-y-6 rounded-[15px] bg-[#232A3B] p-5">
          <div>
            <p className=" text-[28px] font-semibold leading-9">Referrals</p>
            <p className="text-sm leading-[21px] text-[#BCC4D9]">
              Share your referral link and earn 5% of all offers completed by
              your users - including name bonuses! Note: Referral bonus does not
              apply to video offers.Your referred users will also receive 100
              coins as a welcome bonus.
            </p>
          </div>
          <div className=" rounded-[15px] sm:bg-C2E3549 sm:p-[30px]">
            <CopyLink
              componentHeading="Refer users - get rewarded!"
              link="7f66f48062"
            />
          </div>
        </div>
      </div>
      {/* delete your account */}
      <DeleteAccount />
    </div>
  );
};

export default ProfileDashboard;
