import { ModalIsOpenOrNot } from "@/app/layout";
import Image from "next/image";
import React from "react";
import androidIcon from "@/public/images/icon/android.png";
import appleIcon from "@/public/images/icon/apple.png";
import pc from "@/public/images/icon/pc.png";
import modalImage from "@/public/images/featured-img-6.png";
import officeWall from "@/public/images/offer-walls-img-9.png";
import surveys1 from "@/public/images/survery-img-1.png";
import surveys2 from "@/public/images/survery-img-2.png";
import surveys3 from "@/public/images/survery-img-3.png";
import surveys4 from "@/public/images/survery-img-4.png";
import clock from "@/public/images/icon/clock-icon.png";
import prize from "@/public/images/icon/price-icon.png";
import coins from "@/public/images/icon/coin-icon.png";

import { useContext } from "react";
import SecondaryButton from "../shared/SecondaryButton";
import PrimaryButton from "../shared/PrimaryButton";
import SurveysCardDetails from "../shared/SurveysCardDetails";

const FeatureOfferSurveysModal = () => {
  const modalData = [
    {
      id: 545401,
      cardImage: surveys1,
      cardTitle: "Your Surveys",
      detailText:
        "You earn 6,250 points per survey and you can complete multiple surveys per day. Complete the survey until you reach the &quot;Thank you&quot; page.",
    },
    {
      id: 545402,
      cardImage: surveys2,
      cardTitle: "CPX Research",
      detailText:
        "Answer profiling questions and start doing matching surveys. Check back daily for new surveys.",
    },
    {
      id: 545403,
      cardImage: surveys3,
      cardTitle: "Speak Up",
      detailText:
        "Speak Up asks you a few questions and redirects you to a survey that matches your profile. You can complete multiple surveys per day with Speak Up!",
    },
  ];
  const { setFeatureOfferSurveysModalOpen } = useContext(ModalIsOpenOrNot);
  const handleModal = (event: React.MouseEvent) => {
    setFeatureOfferSurveysModalOpen(false);
  };
  return (
    <div>
      <div
        onClick={handleModal}
        className="bg-C000000 fixed z-40 h-screen w-screen bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-C3C3E5C h-auto  p-S30 w-[1000px] rounded-[20px] fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-x-5 ">
              <Image src={officeWall} alt="Modal Image" />
              <div>
                <p className="text-2xl">Hexagon</p>
                <p className="text-sm text-CBDC4DA mt-S5">
                  Complete any offer to receive coins
                </p>
              </div>
            </div>
            <div className="flex  gap-x-5">
              <div className="flex items-center px-S15 py-S10 border border-C0E311F border-opacity-80 rounded-[10px] bg-C09B65E bg-opacity-10 ">
                <Image className="w-[30px]" src={androidIcon} alt="Android" />
              </div>
              <div className="flex items-center px-S15 py-S10 border border-C0E311F border-opacity-80 rounded-[10px] bg-C09B65E bg-opacity-10 ">
                <Image className="w-[30px]" src={appleIcon} alt="Android" />
              </div>
              <div className="flex items-center px-S15 py-S10 border border-C0E311F border-opacity-80 rounded-[10px] bg-C09B65E bg-opacity-10 ">
                <Image className="w-[30px]" src={pc} alt="Android" />
              </div>
            </div>
          </div>
          <div className="mt-11 bg-C404365 border max-h-[500px] overflow-auto border-C575988 space-y-S10 p-S30 rounded-[15px] content-box ">
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
      </div>
    </div>
  );
};

export default FeatureOfferSurveysModal;
