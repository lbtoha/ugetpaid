"use client";
import clock from "@/public/images/icon/clock-icon-2.png";
import Image from "next/image";
type Prop = {
  days: number;
  coin: number;
};

const Affiliates7DayCard = ({ days, coin }: Prop) => {
  return (
    <div className="inline-flex shrink grow basis-0 flex-col items-center gap-2.5 rounded-[15px]  border border-C3B445E p-5">
      <Image src={clock} alt="Clock" className="h-6 w-6" />
      <div className="flex flex-col items-center justify-center gap-[5px] self-stretch">
        <p className="self-stretch text-center font-semibold leading-snug">
          Day{days}
        </p>
        <p className="self-stretch text-center text-xs leading-[18px] text-CBDC4DA">
          {coin} Coins
        </p>
      </div>

      <button className="custom-transition-button w-full cursor-pointer rounded-[10px]  bg-C2E3549 px-2.5 py-[5px] text-center text-xs leading-[18px] text-CBDC4DA hover:bg-C00D675 hover:text-white">
        Claim
      </button>
    </div>
  );
};

export default Affiliates7DayCard;
