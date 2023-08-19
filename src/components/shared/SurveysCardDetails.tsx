import clock from "@/public/images/icon/clock-icon.png";
import coins from "@/public/images/icon/coin-icon.png";
import prize from "@/public/images/icon/price-icon.png";
import Image, { StaticImageData } from "next/image";
import PrimaryButton from "./PrimaryButton";
type Props = {
  cardImage: StaticImageData;
  cardTitle: string;
  detailText: string;
};

const SurveysCardDetails = ({ cardImage, cardTitle, detailText }: Props) => {
  return (
    <div className="flex items-center gap-x-[85px] rounded-[10px] bg-C2E3549 p-5 max-lg:flex-wrap max-lg:space-y-5 md:p-S30 lg:justify-between">
      <div className="flex gap-x-S30 max-md:flex-wrap">
        <div className="min-w-fit max-md:mb-4">
          <Image src={cardImage} alt="Surveys 1" />
        </div>
        <div>
          <p className="text-2xl">{cardTitle}</p>
          <div className="mt-S15 flex items-center gap-x-S15 max-sm:flex-wrap max-sm:gap-2">
            <div className="flex items-center justify-center gap-x-S5 rounded-[5px] bg-C1B5C4E px-S10 py-S5">
              <Image src={clock} alt="Clock" />
              <span className="text-xs">15 minutes</span>
            </div>
            <div className="flex items-center justify-center gap-x-S5 rounded-[5px] bg-C1B5C4E px-S10 py-S5">
              <Image src={prize} alt="Prize" />
              <span className="text-xs">Exactly 6250</span>
              <Image src={coins} alt="Coins" />
            </div>
          </div>
          <p className="mt-4 text-sm text-CBDC4DA md:mt-5">{detailText}</p>
        </div>
      </div>
      <div className="min-w-fit md:max-lg:ml-[140px]">
        <PrimaryButton buttonText="Start Earning" />
      </div>
    </div>
  );
};

export default SurveysCardDetails;
