"use client";
import { offerAndCardData } from "@/public/offerAndCardData";
import Link from "next/link";
import { useState } from "react";
import "react-range-slider-input/dist/style.css";
import OfferAndSurveyCard from "../shared/OfferAndSurveyCard";

const OfferWall = () => {
  const sliceData = offerAndCardData.slice(0, 8);
  const [showData, setShowData] = useState(sliceData);

  return (
    <section className="section-gap">
      <div className="text-center">
        <h2 className="text-4xl">Offer Walls</h2>
        <p className="mx-auto mt-S10 max-w-[374px] text-sm text-CBDC4DA">
          Each Offer Wall contains hundreds of tasks to complete. Choose from
          one of them to start earning coins.
        </p>
      </div>
      <div className="group mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 xl:mt-S60 xl:grid-cols-3 3xl:grid-cols-4 3xl:gap-6">
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
          ),
        )}
      </div>
      <div
        className={`mt-8 flex items-center justify-center md:mt-10 xl:mt-S60 ${
          showData.length == offerAndCardData.length && "hidden"
        }`}
      >
        <div>
          <Link
            href="/earn1/offerwalls"
            className="shadow-[0px  4px 16px 0px rgba(0, 0, 0, 0.25)] w-fit cursor-pointer rounded-xl bg-C09B65E  px-5 py-[10px] text-sm font-bold text-C282F41"
          >
            <span>View all offer</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfferWall;
