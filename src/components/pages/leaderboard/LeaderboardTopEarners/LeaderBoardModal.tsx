"use client";
import { ModalIsOpenOrNot } from "@/app/layout";
import ProfileImageBig from "@/components/shared/ProfileImageBig";
import winnerImage from "@/public/images/winner-img-1.png";
import React, { useContext, useEffect } from "react";
import RangeSlider from "react-range-slider-input";
import LineChart from "./LineChart";
import RankBadge from "@/components/shared/RankBadge";

const LeaderBoardModal = () => {
  const { setLeaderBoardModalOpen } = useContext(ModalIsOpenOrNot);
  const handleModal = (event: React.MouseEvent) => {
    setLeaderBoardModalOpen(false);
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <div
      onClick={handleModal}
      className="bg-C000000 fixed z-40 bg-opacity-50 top-0 bottom-0 left-0 right-0"
    >
      <div className="w-full h-[100vh]  fixed  overflow-y-auto  top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[684px] fixed rounded-[15px] shadow flex-col justify-start items-center gap-10 inline-flex bg-C222337 my-[120px] h-auto p-S30 z-50 top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2"
        >
          <div className="self-stretch justify-between items-center gap-[82px] inline-flex">
            <div className="text-white text-xl font-semibold leading-7">
              User Information
            </div>
            <div className="w-[30px] h-[30px] p-[3px] bg-C2E3549 rounded-[15px] justify-center items-center flex">
              <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                <span className="material-symbols-outlined">close</span>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-[30px] flex">
            <div className="self-stretch flex-col justify-start items-center gap-[60px] flex">
              <div className="self-stretch flex-col justify-start items-start gap-10 flex">
                <div className="self-stretch flex-col justify-start items-center gap-5 flex">
                  <div className="w-20 h-20 bg-C2E3549 rounded-[40px] border border-pink-400 justify-center items-center inline-flex">
                    <ProfileImageBig image={winnerImage} />
                  </div>
                  <div className="justify-start items-center gap-[15px] inline-flex">
                    <div>
                     <RankBadge badgeRank={28} />
                    </div>
                    <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                      <div className="w-[174px] text-white text-2xl font-semibold leading-[33.60px]">
                        silverlion355
                      </div>
                      <div className="w-[130px] text-CBDC4DA text-base font-normal leading-normal">
                        User Id : 952033
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-col justify-center items-start gap-2.5 flex">
                  <div className="self-stretch text-center text-CBDC4DA text-base font-normal leading-normal">
                    2,870 XP Earned. 30 XP required for next level up.
                  </div>
                  <div className="w-full mt-S10">
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
              <div className="self-stretch justify-start items-center gap-5 inline-flex">
                <div className="grow shrink basis-0 p-5 bg-C2E3549 rounded-[15px] flex-col justify-center items-center gap-[5px] inline-flex">
                  <div className="self-stretch text-center text-C109F5A text-2xl font-semibold leading-[33.60px]">
                    69
                  </div>
                  <div className="self-stretch text-center text-white text-base font-normal leading-normal">
                    Completed Offers
                  </div>
                </div>
                <div className="grow shrink basis-0 p-5 bg-C2E3549 rounded-[15px] flex-col justify-center items-center gap-[5px] inline-flex">
                  <div className="self-stretch text-center text-C109F5A text-2xl font-semibold leading-[33.60px]">
                    29,216
                  </div>
                  <div className="self-stretch text-center text-white text-base font-normal leading-normal">
                    Coins Earned
                  </div>
                </div>
                <div className="grow shrink basis-0 p-5 bg-C2E3549 rounded-[15px] flex-col justify-center items-center gap-[5px] inline-flex">
                  <div className="self-stretch text-center text-C109F5A text-2xl font-semibold leading-[33.60px]">
                    16
                  </div>
                  <div className="self-stretch text-center text-white text-base font-normal leading-normal">
                    Users Referred
                  </div>
                </div>
              </div>
            </div>
            <div className=" p-10 bg-C1E1F30 rounded-lg border border-slate-700  w-full">
              <div className="self-stretch justify-between items-start gap-10 flex">
                <div className="text-center text-white text-xl font-semibold leading-7">
                  Recent Earning
                </div>
                <div className="justify-start items-center gap-2.5 flex">
                  <div className="text-center text-emerald-500 text-sm font-normal leading-[21px]">
                    Last 7 days
                  </div>
                </div>
              </div>
              <div>
                <LineChart />
              </div>
            </div>
          </div>
          <div className="self-stretch text-center text-slate-300 text-base font-normal leading-normal">
            Joined on 26/09/2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardModal;
