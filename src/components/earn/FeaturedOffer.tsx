"use client";
import feature1 from "@/public/images/featured-img-1.png";
import feature2 from "@/public/images/featured-img-2.png";
import feature3 from "@/public/images/featured-img-3.png";
import feature4 from "@/public/images/featured-img-4.png";
import feature5 from "@/public/images/featured-img-5.png";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import { v4 as uuidv4 } from "uuid";
import { closeIcon } from "../shared/ModalCloseIcon";
import OutlineButton from "../shared/OutlineButton";
import SecondaryButton from "../shared/SecondaryButton";
import FeaturedOfferModal from "./FeaturedOfferModal";
const FeaturedOffer = () => {
  const [open, setOpen] = useState(false);

  const featureCardData = [
    {
      id: 25401,
      cardImage: feature1,
      cardTitle: "Rolex & Giveaway",
    },
    {
      id: 25402,
      cardImage: feature2,
      cardTitle: "Product Evaluation",
    },
    {
      id: 25403,
      cardImage: feature3,
      cardTitle: "Saas feedback",
    },
    {
      id: 25404,
      cardImage: feature4,
      cardTitle: "CPX Research",
    },
    {
      id: 25405,
      cardImage: feature5,
      cardTitle: "Opinion Capital",
    },
  ];

  return (
    <section className="4xl:pb-[145px]">
      <div className="featured-offer-section relative mt-[15px] rounded-xl px-S15 pb-10 md:max-xl:pb-S80 xl:max-4xl:pb-S120">
        <div className="mx-auto max-w-[805px] pt-S80 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:mt-[-18px] xl:text-7xl">
            Featured Offer
          </h1>
          <p className="mt-S10 pb-8 md:pb-10 xl:pb-S60">
            People from your country have done the most of these things
            recently. (1000 Coins equals $1.00)
          </p>
        </div>
        <div className="grid grid-cols-12 justify-items-center">
          <div className="col-start-1 col-end-13 min-[2000px]:col-start-2 min-[2000px]:col-end-12">
            {/* grid-cols-1 sm:max-xl:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 */}
            <div className="flex items-center justify-center gap-3 max-4xl:flex-wrap md:gap-6 ">
              {featureCardData.map(({ id, cardTitle, cardImage }) => (
                <div
                  key={uuidv4()}
                  className="rounded-[15px] border border-C4C5179 bg-C2E3549"
                >
                  <Image
                    src={cardImage}
                    alt="Feature image"
                    className="mx-auto block w-full pe-S10 ps-S10 pt-S10"
                  />
                  <div className="p-5">
                    <p className="text-center text-xl">{cardTitle}</p>
                    <div className="mt-5 flex justify-between gap-x-6">
                      <OutlineButton buttonText="$0.01" />
                      <div
                        onClick={() => setOpen(true)}
                        className="cursor-pointer"
                      >
                        <SecondaryButton buttonText="Start Offer" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "customModal",
        }}
        closeIcon={closeIcon}
      >
        <FeaturedOfferModal />
      </Modal>
    </section>
  );
};

export default FeaturedOffer;
