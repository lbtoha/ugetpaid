"use client";
import Image, { StaticImageData } from "next/image";
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
    <div
      className={`border-C455070 bg-transparent py-[6px] sm:py-S10 xl:border-t`}
    >
      <div className="relative flex items-center gap-x-4 rounded-[15px] border-C455070 px-5 py-S15 hover:bg-C3D4661 max-4xl:flex-wrap max-xl:rounded-md max-xl:border">
        <Image
          src={cardImage}
          alt="Offer wall image"
          className="max-xxl:w-[90px]"
        />

        <div>
          <p className="mt-S15 text-xl xxl:text-2xl">{heading}</p>
          <div className="sm:mt-S15">
            <div className="flex items-center gap-x-[5px] ">
              <p className="text-sx">Popularity</p>{" "}
              <Image src={countryFlag} alt="Flag" />
              <span className="text-sx">{popularity}</span>
            </div>
          </div>
          <div className="mt-1 w-[150px] xxl:w-[180px] 3xl:w-[150px]">
            <RangeSlider
              className="single-thumb"
              min={0}
              max={100}
              step={5}
              value={[0, popularity]}
            />
          </div>
        </div>

        <p
          className={`${
            !top && "hidden"
          } absolute right-[5%] top-[5%] w-fit rounded-[10px] border border-C09B65E border-opacity-80 bg-C09B65E bg-opacity-10 px-S10 py-[5px] text-center`}
        >
          Top
        </p>
      </div>
    </div>
  );
};

export default OfferWallsSideCard;
