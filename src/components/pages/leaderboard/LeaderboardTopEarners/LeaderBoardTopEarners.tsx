"use client";
import React from "react";
import Countdown from "react-countdown";
import ShowCountDown from "../ShowCountDown";
import AllLeaderBoard from "./AllLeaderBoard";

const LeaderBoardTopEarners = () => {
  return (
    <section className="section-gap">
      <div>
        <h5 className="text-C00FF8B text-2xl text-center">Leaderboard</h5>
        <h2 className="text-4xl max-w-[561px] text-center mx-auto mt-S10">
          The top earners are rewarded once every week!
        </h2>
        <p className="text-sm max-w-[520px] text-center mx-auto mt-S10">
          Hard work pays off. Can you make it to the top? Note that the
          leaderboard updates every 10 minutes. Learn more about the
          leaderboard.
        </p>

        <div className="flex  justify-center mt-S60">
          <div className="p-S10 bg-transparent border border-C3D4660 rounded-[10px] w-fit space-x-S10 ">
            <button className="px-10 py-S10 bg-C373F56 shadow-CSHADOW rounded-[10px] text-center font-bold leading-[150%]">
              Daily
            </button>
            <button className="px-10 py-S10 bg-C09B65E text-C282F41 shadow-CSHADOW rounded-[10px] text-center font-bold leading-[150%]">
              Daily
            </button>
          </div>
        </div>
        <div className="mt-S30">
          <p className="text-xs leading-[150%] text-CBDC4DA text-center">
            The current period ends in
          </p>
          <div className="flex justify-center mt-S5">
            <Countdown
              daysInHours={false}
              date={Date.now() + 50000565700}
              renderer={ShowCountDown}
            />
          </div>
        </div>
        <AllLeaderBoard />
      </div>
    </section>
  );
};

export default LeaderBoardTopEarners;
