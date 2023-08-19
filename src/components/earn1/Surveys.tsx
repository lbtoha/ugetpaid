"use client";
import { ModalIsOpenOrNot } from "@/app/layout";
import { offerAndCardData } from "@/public/offerAndCardData";
import Link from "next/link";
import { useContext, useState } from "react";
import OfferAndSurveyCard from "../shared/OfferAndSurveyCard";
import OfferPageSectionHeading from "../shared/OfferPageSectionHeading";

const Surveys = () => {
  const sliceData = offerAndCardData.slice(0, 4);
  const [showData, setShowData] = useState(sliceData);
  const { setFeatureOfferSurveysModalOpen } = useContext(ModalIsOpenOrNot);
  const handleModalOpen = () => {
    setFeatureOfferSurveysModalOpen(true);
  };
  return (
    <section className="section-gap">
      <div className="rounded-[10px] border border-C535E7C px-S15 pb-S80 pt-S120">
        <OfferPageSectionHeading
          heading="Surveys"
          subHeading="Complete surveys to earn coins. You will be rewarded for each survey completed."
        />
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
              <>
                <OfferAndSurveyCard
                  key={id}
                  setModalOpen={handleModalOpen}
                  cardImage={cardImage}
                  bonus={bonus}
                  heading={heading}
                  countryFlag={countryFlag}
                  popularity={popularity}
                />
              </>
            ),
          )}
        </div>
        <div
          className={`mt-S60 flex items-center justify-center ${
            showData.length == offerAndCardData.length && "hidden"
          }`}
        >
          <div>
            <Link
              href="/earn1/surveys"
              className="shadow-[0px  4px 16px 0px rgba(0, 0, 0, 0.25)] w-fit cursor-pointer rounded-xl bg-C09B65E  px-5 py-[10px] text-sm font-bold text-C282F41"
            >
              <span>View all Surveys</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Surveys;
