"use client";
import {
  categoryArray,
  deviceArray,
  offerWallCardData,
  orderByArray,
  sideCardData,
} from "@/public/data/offerWallPage";
import { useState } from "react";
import { countryByArray } from "../../../public/data/offerWallPage";
import OfferPageDropdown from "./OfferPageDropdown";
import OfferWallCardDetails from "./OfferWallCardDetails";
import OfferWallsSidebar from "./OfferWallsSidebar";

const OfferwallsDetails = () => {
  const [filterData, setFilterData] = useState(offerWallCardData);
  // handle category filter
  const handleFilterCategory = (filterText: string) => {
    const result = offerWallCardData.filter(
      (filterItem) =>
        filterItem.category.toLowerCase() == filterText.toLowerCase(),
    );
    setFilterData(result);
  };

  // handle sort by filter
  const handleFilterSort = (filterText: string) => {
    const result = offerWallCardData.filter(
      (filterItem) =>
        filterItem.orderBy.toLowerCase() == filterText.toLowerCase(),
    );
    setFilterData(result);
  };

  // handle device filter
  const handleFilterDevice = (filterText: string) => {
    const result = offerWallCardData.filter(
      (filterItem) =>
        filterItem.device.toLowerCase() == filterText.toLowerCase(),
    );
    setFilterData(result);
  };

  // filter by country name
  const handleFilterCountry = (filterText: string) => {
    const result = offerWallCardData.filter(
      (filterItem) =>
        filterItem.country.toLowerCase() == filterText.toLowerCase(),
    );
    setFilterData(result);
  };

  return (
    <div className="mt-6 grid grid-cols-12 max-xl:space-y-5 md:max-xl:space-y-6 xl:space-x-6">
      <div className="col-start-1 col-end-13 xl:col-end-4">
        <OfferWallsSidebar
          sectionTitle="Offerwalls"
          sectionDescription="Each Offer Wall contains hundreds of tasks to complete. Choose from one of them to start earning coins."
          sideCardData={sideCardData}
        />
      </div>
      <div className="col-start-1 col-end-13 xl:col-start-4">
        <div className="rounded-[15px] bg-C1B5C4E p-S30 pb-5">
          <h2 className="pb-5 text-2.3xl">Hexagon Rewards</h2>
          <div className="flex justify-between border-t border-C267967 pt-10">
            <div className="flex items-center justify-start gap-[15px] max-3xl:flex-wrap">
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
            <button className="flex h-fit items-center gap-x-S5 rounded-[5px] bg-C298470 px-5 py-S10 text-center max-sm:hidden">
              <span>
                <span className="material-symbols-outlined rounded-full bg-C2DAB90 p-1">
                  question_mark
                </span>
              </span>
              <span>FAQs</span>
            </button>
          </div>
        </div>
        <div className="mt-5 space-y-5 xl:mt-S30 xl:space-y-6">
          {filterData.map(
            ({ id, cardImage, cardTitle, detailText, offerPoint }) => (
              <OfferWallCardDetails
                key={id}
                cardImage={cardImage}
                cardTitle={cardTitle}
                detailText={detailText}
                offerPoint={offerPoint}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferwallsDetails;
