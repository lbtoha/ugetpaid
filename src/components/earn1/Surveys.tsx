"use client";
import usaFlag from "@/public/images/icon/usa-flag.png";
import offerWall1 from "@/public/images/offer-walls-img-1.png";
import offerWall2 from "@/public/images/offer-walls-img-2.png";
import offerWall3 from "@/public/images/offer-walls-img-3.png";
import offerWall4 from "@/public/images/offer-walls-img-4.png";
import offerWall5 from "@/public/images/offer-walls-img-5.png";
import offerWall6 from "@/public/images/offer-walls-img-6.png";
import offerWall7 from "@/public/images/offer-walls-img-7.png";
import offerWall8 from "@/public/images/offer-walls-img-8.png";
import offerWall9 from "@/public/images/offer-walls-img-9.png";
import SecondaryButton from "../shared/SecondaryButton";
import OfferAndSurveyCard from "../shared/OfferAndSurveyCard";
import React, { useContext, useState } from "react";
import { offerAndCardData } from "@/public/offerAndCardData";
import OfferPageSectionHeading from "../shared/OfferPageSectionHeading";
import { ModalIsOpenOrNot } from "@/app/layout";

const Surveys = () => {
  const sliceData = offerAndCardData.slice(0, 4);
  const [showData, setShowData] = useState(sliceData);
  const { setFeatureOfferSurveysModalOpen } = useContext(ModalIsOpenOrNot);

  const handleClick = () => {
    setShowData(offerAndCardData);
  };
  return (
    <section className="section-gap">
      <div className="border border-C535E7C rounded-[10px] px-S15 pt-S120 pb-S80">
        <OfferPageSectionHeading
          heading="Surveys"
          subHeading="Complete surveys to earn coins. You will be rewarded for each survey completed."
        />
        <div className="grid grid-cols-4 gap-6 mt-S60 group">
          {showData.map(
            ({
              id,
              cardImage,
              bonus,
              heading,
              popularity,
              cardBg,
              countryFlag,
            }) => (
              <div
                key={id}
                onClick={() => setFeatureOfferSurveysModalOpen(true)}
                className="cursor-pointer"
              >
                <OfferAndSurveyCard
                  cardImage={cardImage}
                  bonus={bonus}
                  heading={heading}
                  countryFlag={countryFlag}
                  popularity={popularity}
                />
              </div>
            )
          )}
        </div>
        <div
          className={`mt-S60 flex items-center justify-center ${
            showData.length == offerAndCardData.length && "hidden"
          }`}
        >
          <div onClick={handleClick}>
            <SecondaryButton buttonText="View all Surveys" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Surveys;
