import Image from "next/image";
import React from "react";
import priceBox from "@/public/images/price-box-icon.png";

const LeaderBoardBanner = () => {
  return (
    <div className="leaderboard mt-S30">
      <div className="pt-S80">
        <div className="leaderboard__priceing text-center w-1/2 mx-auto flex justify-center ">
          <div>
            <Image src={priceBox} alt="Price box" />
            <div className="flex justify-center gap-x-5 pb-S70">
              <button className="text-xl font-bold leading-[150%] px-S30 py-5 bg-C02835B rounded-[10px] text-center">
                $500.00 Daily
              </button>
              <button className="text-xl font-bold leading-[150%] px-S30 py-5 bg-C02835B rounded-[10px] text-center">
                $10,000.00 Monthly
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardBanner;
