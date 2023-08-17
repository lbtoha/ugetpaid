import { ModalIsOpenOrNot } from "@/app/layout";
import Image, { StaticImageData } from "next/image";
import React, { useContext } from "react";

type Props = {
  cardImage: StaticImageData;
  cardTitle: string;
  detailText: string;
  offerPoint: number;
};

const OfferWallCardDetails = ({
  cardImage,
  cardTitle,
  detailText,
  offerPoint,
}: Props) => {
  const { setOfferWallOpen } = useContext(ModalIsOpenOrNot);
  return (
    <div className="p-S30 bg-C2E3549 rounded-[10px] flex items-center justify-between gap-x-[85px]">
      <div className="flex gap-x-S30">
        <div className="min-w-fit">
          <Image src={cardImage} alt="Surveys 1" />
        </div>
        <div>
          <p className="text-2xl">{cardTitle}</p>
          <p className="text-sm text-CBDC4DA mt-5">{detailText}</p>
        </div>
      </div>
      <div className="min-w-fit">
        <button
          onClick={() => setOfferWallOpen(true)}
          className="cursor-pointer  font-bold text-C282F41 text-sm shadow-[0px 4px 16px 0px rgba(0, 0, 0, 0.25)]  bg-C09B65E px-5 py-[10px] w-fit rounded-xl text-center "
        >
          <p className="text-2.3xl font-semibold">{offerPoint}</p>
          <p className="font-bold">Offer Point</p>
        </button>
      </div>
    </div>
  );
};

export default OfferWallCardDetails;
