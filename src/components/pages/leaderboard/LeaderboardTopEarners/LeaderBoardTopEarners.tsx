"use client";
import Countdown from "react-countdown";
import ShowCountDown from "../ShowCountDown";
import AllLeaderBoard from "./AllLeaderBoard";

const LeaderBoardTopEarners = () => {
  return (
    <section className="section-gap">
      <div>
        <h5 className="text-center text-2xl text-C00FF8B">Leaderboard</h5>
        <h2 className="mx-auto mt-S10 max-w-[561px] text-center text-3xl lg:text-4xl">
          The top earners are rewarded once every week!
        </h2>
        <p className="mx-auto mt-S10 max-w-[520px] text-center text-sm">
          Hard work pays off. Can you make it to the top? Note that the
          leaderboard updates every 10 minutes. Learn more about the
          leaderboard.
        </p>

        <div className="mt-S60  flex justify-center">
          <div className="w-fit space-x-S10 rounded-[10px] border border-C3D4660 bg-transparent p-S10 ">
            <button className="rounded-[10px] bg-C373F56 px-10 py-S10 text-center font-bold leading-[150%] shadow-CSHADOW">
              Daily
            </button>
            <button className="rounded-[10px] bg-C09B65E px-10 py-S10 text-center font-bold leading-[150%] text-C282F41 shadow-CSHADOW">
              Daily
            </button>
          </div>
        </div>
        <div className="mt-S30">
          <p className="text-center text-xs leading-[150%] text-CBDC4DA">
            The current period ends in
          </p>
          <div className="mt-S5 flex justify-center">
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
