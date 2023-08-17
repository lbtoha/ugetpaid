import Image, { StaticImageData } from "next/image";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import surveys1 from "@/public/images/survery-img-1.png";
import clock from "@/public/images/icon/clock-icon.png";
import prize from "@/public/images/icon/price-icon.png";
import coins from "@/public/images/icon/coin-icon.png";
type Props = {
  cardImage: StaticImageData;
  cardTitle: string;
  detailText: string;
};

const SurveysCardDetails = ({ cardImage, cardTitle, detailText }: Props) => {
  return (
    <div className="p-S30 bg-C2E3549 rounded-[10px] flex items-center justify-between gap-x-[85px]">
      <div className="flex gap-x-S30">
        <div className="min-w-fit">
          <Image src={cardImage} alt="Surveys 1" />
        </div>
        <div>
          <p className="text-2xl">{cardTitle}</p>
          <div className="flex items-center gap-x-S15 mt-S15">
            <div className="flex items-center rounded-[5px] bg-C1B5C4E justify-center gap-x-S5 px-S10 py-S5">
              <Image src={clock} alt="Clock" />
              <span className="text-xs">15 minutes</span>
            </div>
            <div className="flex items-center justify-center gap-x-S5 px-S10 py-S5 rounded-[5px] bg-C1B5C4E">
              <Image src={prize} alt="Prize" />
              <span className="text-xs">Exactly 6250</span>
              <Image src={coins} alt="Coins" />
            </div>
          </div>
          <p className="text-sm text-CBDC4DA mt-5">{detailText}</p>
        </div>
      </div>
      <div className="min-w-fit">
        <PrimaryButton buttonText="Start Earning" />
      </div>
    </div>
  );
};

export default SurveysCardDetails;
