import Image, { StaticImageData } from "next/image";
import React from "react";
import SecondaryButton from "./SecondaryButton";

type Props = {
  cardImage: StaticImageData;
  cardHeading: string;
  cardText: string;
  btnText: string;
};

const BigCard = ({ cardImage, cardHeading, cardText, btnText }: Props) => {
  return (
    <div className="px-10 py-S90 flex items-center justify-center text-center bg-gradient-offer-walls-1 rounded-xl">
      <div>
        <Image
          src={cardImage}
          alt="Card Image"
          className="border border-C535E7C rounded-full w-[240px]"
        />
        <h5 className="text-4xl mt-10">{cardHeading}</h5>
        <p className="text-sm text-CBDC4DA mt-S10">{cardText}</p>
        <div className="mt-10">
          <SecondaryButton buttonText={btnText} />
        </div>
      </div>
    </div>
  );
};

export default BigCard;
