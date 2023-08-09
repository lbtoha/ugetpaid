"use client";
import Image from "next/image";
import React from "react";
import feature1 from "@/public/images/featured-img-1.png";
import feature2 from "@/public/images/featured-img-2.png";
import feature3 from "@/public/images/featured-img-3.png";
import feature4 from "@/public/images/featured-img-4.png";
import feature5 from "@/public/images/featured-img-5.png";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import OutlineButton from "../shared/OutlineButton";
import { useContext } from "react";
import { ModalIsOpenOrNot } from "@/app/layout";

const FeaturedOffer = () => {
  const { featureOfferModalOpen, setFeatureOfferModalOpen } =
    useContext(ModalIsOpenOrNot);
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
    <section className="pb-[185px]">
      <div className="mt-[15px] featured-offer-section rounded-xl relative">
        <div className="pt-S80 max-w-[805px] mx-auto text-center">
          <h1 className="text-7xl">Featured Offer</h1>
          <p className="mt-S10 pb-S70">
            People from your country have done the most of these things
            recently. (1000 Coins equals $1.00)
          </p>
        </div>
        <div className="grid grid-cols-12 justify-items-center">
          <div className="col-start-2 col-end-12">
            <div className="grid grid-cols-5 justify-between items-center gap-6">
              {featureCardData.map(({ id, cardTitle, cardImage }) => (
                <div
                  key={id}
                  className="bg-C2E3549 border border-C4C5179 rounded-[15px]"
                >
                  <Image
                    src={cardImage}
                    alt="Feature image"
                    className="ps-S10 pt-S10 pe-S10 block mx-auto w-full"
                  />
                  <div className="p-5">
                    <p className="text-xl text-center">{cardTitle}</p>
                    <div className="mt-5 flex justify-between gap-x-6">
                      <OutlineButton buttonText="$0.01" />
                      <div
                        onClick={() => setFeatureOfferModalOpen(true)}
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
    </section>
  );
};

export default FeaturedOffer;
