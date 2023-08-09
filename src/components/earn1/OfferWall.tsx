"use client";
import React, { useState } from "react";
import "react-range-slider-input/dist/style.css";
import "react-range-slider-input/dist/style.css";
import SecondaryButton from "../shared/SecondaryButton";
import OfferAndSurveyCard from "../shared/OfferAndSurveyCard";
import { offerAndCardData } from "@/public/offerAndCardData";

const OfferWall = () => {
  const sliceData = offerAndCardData.slice(0, 8);
  const [showData, setShowData] = useState(sliceData);
  const handleClick = () => {
    setShowData(offerAndCardData);
  };
  return (
    <section className="section-gap">
      <div></div>
      <div className="text-center">
        <h2 className="text-4xl">Offer Walls</h2>
        <p className="max-w-[374px] text-sm text-CBDC4DA mx-auto mt-S10">
          Each Offer Wall contains hundreds of tasks to complete. Choose from
          one of them to start earning coins.
        </p>
      </div>
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
            <OfferAndSurveyCard
              key={id}
              cardImage={cardImage}
              bonus={bonus}
              heading={heading}
              countryFlag={countryFlag}
              popularity={popularity}
            />
          )
        )}
      </div>
      <div
        className={`mt-S60 flex items-center justify-center ${
          showData.length == offerAndCardData.length && "hidden"
        }`}
      >
        <div onClick={handleClick}>
          <SecondaryButton buttonText="View all offer" />
        </div>
      </div>
    </section>
  );
};

export default OfferWall;
