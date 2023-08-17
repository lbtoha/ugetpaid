"use client";
import React, { useState } from "react";
import "react-range-slider-input/dist/style.css";
import SecondaryButton from "../shared/SecondaryButton";
import OfferAndSurveyCard from "../shared/OfferAndSurveyCard";
import { offerAndCardData } from "@/public/offerAndCardData";
import Link from "next/link";

const OfferWall = () => {
  const sliceData = offerAndCardData.slice(0, 8);
  const [showData, setShowData] = useState(sliceData);

  return (
    <section className="section-gap">
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
        <div>
          <Link
            href="/earn1/offerwalls"
            className="cursor-pointer  font-bold text-C282F41 text-sm shadow-[0px 4px 16px 0px rgba(0, 0, 0, 0.25)]  bg-C09B65E px-5 py-[10px] w-fit rounded-xl"
          >
            <span>View all offer</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfferWall;
