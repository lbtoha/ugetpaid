"use client";
import React, { useState } from "react";
import OfferWallsSideCard from "./OfferwallsSideCard";
import {
  categoryArray,
  deviceArray,
  offerWallCardData,
  orderByArray,
  sideCardData,
} from "@/public/data/offerWallPage";
import OfferPageDropdown from "./OfferPageDropdown";
import { countryByArray } from "../../../public/data/offerWallPage";
import OfferWallCardDetails from "./OfferWallCardDetails";

const OfferwallsDetails = () => {
  const [filterData, setFilterData] = useState(offerWallCardData);
  const [sortFilterData, setSortFilterData] = useState(offerWallCardData);
  // handle category filter
  const handleFilterCategory = (filterText: string) => {
    const result = offerWallCardData.filter(
      (filterItem) =>
        filterItem.category.toLowerCase() == filterText.toLowerCase()
    );
    setFilterData(result);
  };

  // handle sort by filter
  const handleFilterSort = (filterText: string) => {
    const result = offerWallCardData.filter(
      (filterItem) =>
        filterItem.orderBy.toLowerCase() == filterText.toLowerCase()
    );
    setFilterData(result);
  };

  // handle device filter
  const handleFilterDevice = (filterText: string) => {
    const result = offerWallCardData.filter(
      (filterItem) =>
        filterItem.device.toLowerCase() == filterText.toLowerCase()
    );
    setFilterData(result);
  };

  // filter by country name
  const handleFilterCountry = (filterText: string) => {
    const result = offerWallCardData.filter(
      (filterItem) =>
        filterItem.country.toLowerCase() == filterText.toLowerCase()
    );
    setFilterData(result);
  };

  return (
    <div className="grid grid-cols-12 space-x-6 mt-6">
      <div className="col-start-1 col-end-4">
        <div className="bg-C2E3549 rounded-[10px]  p-5 ">
          <p className="text-2.3xl text-center">Offerwalls</p>
          <p className="text-sm text-CBDC4DA mt-S10 text-center pb-5">
            Each Offer Wall contains hundreds of tasks to complete. Choose from
            one of them to start earning coins.
          </p>
          <div className="">
            {sideCardData.map(
              ({ id, cardImage, top, heading, popularity, countryFlag }) => (
                <OfferWallsSideCard
                  key={id}
                  cardImage={cardImage}
                  top={top}
                  heading={heading}
                  countryFlag={countryFlag}
                  popularity={popularity}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="col-start-4 col-end-13">
        <div className="bg-C1B5C4E p-S30 rounded-[15px] pb-5">
          <h2 className="text-2.3xl pb-5">Hexagon Rewards</h2>
          <div className="pt-10 border-t border-C267967 flex justify-between">
            <div className="flex justify-start items-center gap-x-[15px]">
              {/* dropdown section start */}
              <OfferPageDropdown
                filterFunction={handleFilterCategory}
                categoryArray={categoryArray}
                buttonSideText="Category: "
              />
              <OfferPageDropdown
                filterFunction={handleFilterSort}
                categoryArray={orderByArray}
                buttonSideText="Order By: "
              />
              <OfferPageDropdown
                filterFunction={handleFilterDevice}
                categoryArray={deviceArray}
              />
              <OfferPageDropdown
                filterFunction={handleFilterCountry}
                categoryArray={countryByArray}
              />
              {/* dropdown section end */}
            </div>
            <button className="bg-C298470 px-5 py-S10 rounded-[5px] text-center flex  items-center gap-x-S5">
              <span>
                <span className="material-symbols-outlined bg-C2DAB90 p-1 rounded-full">
                  question_mark
                </span>
              </span>
              <span>FAQs</span>
            </button>
          </div>
        </div>
        <div className="mt-S30 space-y-6">
          {filterData.map(
            ({ id, cardImage, cardTitle, detailText, offerPoint }) => (
              <OfferWallCardDetails
                key={id}
                cardImage={cardImage}
                cardTitle={cardTitle}
                detailText={detailText}
                offerPoint={offerPoint}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferwallsDetails;
