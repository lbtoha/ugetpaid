import Image, { StaticImageData } from "next/image";
import React from "react";
import RangeSlider from "react-range-slider-input";

type Props = {
  cardImage: StaticImageData;
  heading: string;
  top?: boolean;
  countryFlag: StaticImageData;
  popularity: number;
};

const OfferWallsSideCard = ({
  cardImage,
  heading,
  top,
  countryFlag,
  popularity,
}: Props) => {
  return (
    <div className={`  bg-transparent py-S10 border-t border-C455070`}>
      <div className="flex items-center gap-x-4 py-S15 px-5 hover:bg-C3D4661 rounded-[15px]">
        <div>
          <Image src={cardImage} alt="Offer wall image" />
        </div>
        <div>
          <p className="mt-S15 text-2xl">{heading}</p>
          <div className="mt-S15">
            <div className="flex items-center gap-x-[5px] ">
              <p className="text-sx">Popularity</p>{" "}
              <Image src={countryFlag} alt="Flag" />
              <span className="text-sx">{popularity}</span>
            </div>
          </div>
          <div className="w-[180px] mt-1">
            <RangeSlider
              className="single-thumb"
              min={0}
              max={100}
              step={5}
              value={[0, popularity]}
            />
          </div>
        </div>
        <div>
          <p
            className={`${
              !top && "hidden"
            } bg-C09B65E bg-opacity-10 border text-center w-fit border-C09B65E border-opacity-80 px-S10 py-[5px] rounded-[10px]`}
          >
            Top
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferWallsSideCard;
