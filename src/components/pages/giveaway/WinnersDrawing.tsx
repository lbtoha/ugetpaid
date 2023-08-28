"use client";
import { winnersDrawingData } from "@/public/data/giveaway";
import Countdown from "react-countdown";
import { v4 as uuidv4 } from "uuid";
import ShowCountDown from "../leaderboard/ShowCountDown";
import WinnerDrawingCard from "./WinnerDrawingCard";

const WinnersDrawing = () => {
  return (
    <section className="section-gap">
      <h2 className=" mt-[-7px] text-center text-[32px] font-semibold leading-[41.60px]">
        Winners Drawing In
      </h2>
      <div className="mt-5 grid grid-cols-1 items-center justify-start gap-3 sm:mt-8 md:grid-cols-2 md:gap-6 lg:mt-10 xl:mt-S60 xl:grid-cols-3 ">
        {winnersDrawingData.map(({ image, price, time }) => (
          <WinnerDrawingCard key={uuidv4()} image={image} price={price}>
            {
              <Countdown
                daysInHours={false}
                date={Date.now() + time}
                renderer={ShowCountDown}
              />
            }
          </WinnerDrawingCard>
        ))}
      </div>
    </section>
  );
};

export default WinnersDrawing;
