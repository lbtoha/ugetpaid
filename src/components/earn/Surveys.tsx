"use client";
import { offerAndCardData } from "@/public/data/featureOffer";
import { useState } from "react";
import Modal from "react-responsive-modal";
import { v4 as uuidv4 } from "uuid";
import { closeIcon } from "../shared/ModalCloseIcon";
import OfferAndSurveyCard from "../shared/OfferAndSurveyCard";
import OfferPageSectionHeading from "../shared/OfferPageSectionHeading";
import PrimaryLinkBtn from "../shared/PrimaryLinkBtn";
import FeatureOfferSurveysModal from "./FeatureOfferSurveysModal";

const Surveys = () => {
  const sliceData = offerAndCardData.slice(0, 4);
  const [showData, setShowData] = useState(sliceData);
  const [open, setOpen] = useState(false);
  const handleSetOpen = () => setOpen(true);

  return (
    <section className="section-gap mt-[8px]">
      <div className="rounded-[10px] border-C535E7C lg:border lg:px-S15 lg:pb-S80 lg:pt-S60 xxl:pt-S120">
        <OfferPageSectionHeading
          key={uuidv4()}
          heading="Surveys"
          subHeading="Complete surveys to earn coins. You will be rewarded for each survey completed."
        />
        <div className="group mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 xl:mt-S60 xl:grid-cols-3 3xl:grid-cols-4 3xl:gap-6">
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
                  key={uuidv4()}
                  setModalOpen={handleSetOpen}
                  cardImage={cardImage}
                  bonus={bonus}
                  heading={heading}
                  countryFlag={countryFlag}
                  cardBg={cardBg}
                  popularity={popularity}
                />
              </>
            ),
          )}
        </div>
        <div
          // mt-8 md:mt-10 xl:mt-S60
          className={` mt-8 flex items-center justify-center md:mt-10 xl:mt-[70px] xl:pb-[10px] ${
            showData.length == offerAndCardData.length && "hidden"
          }`}
        >
          <div>
            <PrimaryLinkBtn
              key={uuidv4()}
              link="/earn1/surveys"
              linkText="View all Surveys"
            />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "customModal offer-walls-modal",
        }}
        closeIcon={closeIcon}
      >
        <FeatureOfferSurveysModal />
      </Modal>
    </section>
  );
};

export default Surveys;
