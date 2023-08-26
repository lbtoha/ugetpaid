import androidIcon from "@/public/images/icon/android.png";
import appleIcon from "@/public/images/icon/apple.png";
import pc from "@/public/images/icon/pc.png";
import officeWall from "@/public/images/offer-walls-img-9.png";
import Image from "next/image";

import { modalData } from "@/public/data/featureOffer";
import SurveysCardDetails from "../shared/SurveysCardDetails";

const FeatureOfferSurveysModal = () => {
  return (
    <div className="rounded-[20px] bg-C3C3E5C p-5 sm:p-S30">
      <div className="flex items-center justify-between max-md:flex-wrap max-md:space-y-5 ">
        <div className="flex items-center gap-x-5 max-sm:flex-wrap ">
          <Image src={officeWall} alt="Modal Image" />
          <div>
            <p className="text-2xl">Hexagon</p>
            <p className="mt-S5 text-sm text-CBDC4DA">
              Complete any offer to receive coins
            </p>
          </div>
        </div>
        <div className="me-5  flex gap-x-5">
          <div className="flex items-center rounded-[10px] border border-C0E311F border-opacity-80 bg-C09B65E bg-opacity-10 px-S15 py-S10 ">
            <Image className="w-[30px]" src={androidIcon} alt="Android" />
          </div>
          <div className="flex items-center rounded-[10px] border border-C0E311F border-opacity-80 bg-C09B65E bg-opacity-10 px-S15 py-S10 ">
            <Image className="w-[30px]" src={appleIcon} alt="Android" />
          </div>
          <div className="flex items-center rounded-[10px] border border-C0E311F border-opacity-80 bg-C09B65E bg-opacity-10 px-S15 py-S10 ">
            <Image className="w-[30px]" src={pc} alt="Android" />
          </div>
        </div>
      </div>
      <div className="content-box mt-5 space-y-S10 rounded-[15px] border-C575988 sm:mt-11 sm:border sm:bg-C404365 sm:p-S30 ">
        {/* modal items */}

        {modalData.map(({ id, cardImage, cardTitle, detailText }) => (
          <SurveysCardDetails
            key={id}
            cardImage={cardImage}
            cardTitle={cardTitle}
            detailText={detailText}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureOfferSurveysModal;
