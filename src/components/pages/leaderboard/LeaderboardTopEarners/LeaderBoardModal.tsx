"use client";
import ProfileImageBig from "@/components/shared/ProfileImageBig";
import RankBadge from "@/components/shared/RankBadge";
import winnerImage from "@/public/images/winner-img-1.png";
import RangeSlider from "react-range-slider-input";
import LineChartComponent from "../../../shared/LineChart";
import ProfileInfoBtn from "./ProfileInfoBtn";

const LeaderBoardModal = () => {
  return (
    <div className=" rounded-[15px] bg-C222337 p-3 shadow md:p-S30">
      <p className="mb-S30 text-xl font-semibold leading-7 text-white">
        User Information
      </p>
      <ProfileImageBig image={winnerImage} />
      <div className="mt-5 flex items-center justify-center gap-[15px]">
        <RankBadge badgeRank={28} />
        <div>
          <p className=" text-2xl font-semibold leading-[33.60px] text-white">
            silverlion355
          </p>
          <p className="text-base font-normal leading-normal text-CBDC4DA">
            User Id : 952033
          </p>
        </div>
      </div>

      <p className="mt-7 text-center text-CBDC4DA md:mt-10">
        2,870 XP Earned. 30 XP required for next level up.
      </p>
      <div className="mt-S10">
        <RangeSlider
          className="single-thumb"
          min={0}
          max={100}
          step={5}
          value={[0, 80]}
        />
      </div>
      <div className="mt-10 flex items-center gap-3 max-lg:flex-wrap md:mt-S60 md:gap-5">
        <ProfileInfoBtn number={69} title="Completed Offers" />
        <ProfileInfoBtn number={29216} title="Coins Earned" />
        <ProfileInfoBtn number={16} title="Users Referred" />
      </div>
      <div className="mt-S30 w-full rounded-lg border border-slate-700 bg-C1E1F30 p-2 md:p-10">
        <div className="flex items-center justify-between gap-1 md:gap-10 ">
          <p className="text-center text-xl font-semibold leading-7 text-white">
            Recent Earning
          </p>
          <p className="text-center text-sm font-normal leading-[21px] text-[#00D676]">
            Last 7 days
          </p>
        </div>
        <div className="mt-10 h-[200px] w-[250px] sm:w-full">
          <LineChartComponent />
        </div>
      </div>
      <p className="mt-10 text-center text-base font-normal leading-normal text-CBDC4DA">
        Joined on 26/09/2022
      </p>
    </div>
  );
};

export default LeaderBoardModal;
