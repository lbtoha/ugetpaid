"use client";
import { Tab } from "@headlessui/react";
import Countdown from "react-countdown";
import ShowCountDown from "../ShowCountDown";
import AllLeaderBoard from "./AllLeaderBoard";

const LeaderBoardTopEarners = () => {
  return (
    <section className="section-gap">
      <div>
        <h5 className="text-center text-2xl text-C00FF8B xl:mt-[-8px]">
          Leaderboard
        </h5>
        <h2 className="mx-auto max-w-[561px] text-center text-3xl sm:mt-S10 lg:text-4xl">
          The top earners are rewarded once every week!
        </h2>
        <p className="mx-auto mt-S10 max-w-[520px] text-center text-sm">
          Hard work pays off. Can you make it to the top? Note that the
          leaderboard updates every 10 minutes. Learn more about the
          leaderboard.
        </p>
        <Tab.Group>
          <div className="mt-10 flex justify-center md:mt-S60">
            <Tab.List className="w-fit space-x-S10 rounded-[10px] border border-C3D4660 bg-transparent p-S10 ">
              <Tab className="focus-visible:outline-none">
                {({ selected }) => (
                  <button
                    className={`custom-transition-button rounded-[10px] px-10 py-S10 text-center font-bold leading-[150%] shadow-CSHADOW focus-visible:outline-none ${
                      selected
                        ? "bg-C09B65E text-C282F41 hover:bg-C373F56 hover:text-white"
                        : "bg-C373F56 hover:bg-C09B65E hover:text-C282F41"
                    }`}
                  >
                    Daily
                  </button>
                )}
              </Tab>
              <Tab className="focus-visible:outline-none">
                {({ selected }) => (
                  <button
                    className={`custom-transition-button rounded-[10px] px-10 py-S10 text-center font-bold leading-[150%] shadow-CSHADOW focus-visible:outline-none ${
                      selected
                        ? "bg-C09B65E text-C282F41 hover:bg-C373F56 hover:text-CFFFFFF"
                        : "bg-C373F56 hover:bg-C09B65E hover:text-C282F41"
                    }`}
                  >
                    Daily
                  </button>
                )}
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels>
            <Tab.Panel>
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
            </Tab.Panel>
            <Tab.Panel>
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
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default LeaderBoardTopEarners;
