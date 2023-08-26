"use client";
import { offerAndCardData } from "@/public/data/featureOffer";
import { useState } from "react";
import "react-range-slider-input/dist/style.css";
import Modal from "react-responsive-modal";
import { v4 as uuidv4 } from "uuid";
import { closeIcon } from "../shared/ModalCloseIcon";
import OfferAndSurveyCard from "../shared/OfferAndSurveyCard";
import PrimaryLinkBtn from "../shared/PrimaryLinkBtn";
import FeatureOfferSurveysModal from "./FeatureOfferSurveysModal";

const OfferWall = () => {
  const sliceData = offerAndCardData.slice(0, 8);
  const [showData, setShowData] = useState(sliceData);
  const [open, setOpen] = useState(false);
  const handleSetOpen = () => setOpen(true);
  return (
    <section className="section-gap">
      <div className="text-center">
        <h2 className="text-4xl">Offer Walls</h2>
        <p className="mx-auto mt-S10 max-w-[374px] text-sm text-CBDC4DA">
          Each Offer Wall contains hundreds of tasks to complete. Choose from
          one of them to start earning coins.
        </p>
      </div>
      <div className="group mt-8 grid gap-3 sm:grid-cols-2 md:mt-10 xl:mt-S60 xl:grid-cols-3 3xl:grid-cols-4 3xl:gap-6">
        {showData
          .slice(0, 8)
          .map(
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
                key={uuidv4()}
                setModalOpen={handleSetOpen}
                cardImage={cardImage}
                bonus={bonus}
                heading={heading}
                countryFlag={countryFlag}
                cardBg={cardBg}
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
          <PrimaryLinkBtn link="/earn1/offerwalls" linkText="View all offer" />
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

export default OfferWall;
