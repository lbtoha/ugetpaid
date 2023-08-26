import Image, { StaticImageData } from "next/image";
import RangeSlider from "react-range-slider-input";
import { v4 as uuidv4 } from "uuid";

type Props = {
  cardImage: StaticImageData;
  bonus: number;
  heading: string;
  countryFlag: StaticImageData;
  popularity: number;
  cardBg?: string;
  setModalOpen?: () => void;
};

const OfferAndSurveyCard = ({
  cardImage,
  bonus,
  heading,
  countryFlag,
  popularity,
  cardBg = "gradient-offer-walls2",
  setModalOpen,
}: Props) => {
  return (
    <div
      onClick={setModalOpen}
      className={`flex items-center gap-x-4 ${cardBg} rounded-[10px] p-S10 shadow shadow-CSHADOW ${
        setModalOpen && "cursor-pointer"
      }`}
    >
      <Image src={cardImage} alt="Offer wall image" />
      <div className="flex flex-col">
        <p className="w-fit rounded-[10px] border border-C09B65E border-opacity-80 bg-C09B65E bg-opacity-10 px-S10 py-[5px] text-center">
          +{bonus}% Bonus
        </p>
        <p className="mt-2.5 text-lg md:text-xl 3xl:mt-S15 3xl:text-2xl">
          {heading}
        </p>
        <div className="mt-2.5 3xl:mt-S15">
          <div className="flex items-center gap-x-[5px] ">
            <p className="text-sx">Popularity</p>{" "}
            <Image src={countryFlag} alt="Flag" />
            <span className="text-sx">{popularity}</span>
          </div>
        </div>
        <div className="mt-1 w-[130px] lg:w-[180px]">
          <RangeSlider
            key={uuidv4()}
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
