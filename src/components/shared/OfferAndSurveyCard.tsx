import Image, { StaticImageData } from "next/image";
import React from "react";
import RangeSlider from "react-range-slider-input";

type Props = {
  cardImage: StaticImageData;
  bonus: number;
  heading: string;
  countryFlag: StaticImageData;
  popularity: number;
};

const OfferAndSurveyCard = ({
  cardImage,
  bonus,
  heading,
  countryFlag,
  popularity,
}: Props) => {
  return (
    <div
      className={`flex items-center gap-x-4 shadow shadow-CSHADOW bg-gradient-offer-walls-1 p-S10 rounded-[10px]`}
    >
      <Image src={cardImage} alt="Offer wall image" />
      <div>
        <p className="bg-C09B65E bg-opacity-10 border text-center w-fit border-C09B65E border-opacity-80 px-S10 py-[5px] rounded-[10px]">
          +{bonus}% Bonus
        </p>
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
    </div>
  );
};

export default OfferAndSurveyCard;
