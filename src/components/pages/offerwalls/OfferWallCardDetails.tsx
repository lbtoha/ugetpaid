import { ModalIsOpenOrNot } from "@/app/layout";
import Image, { StaticImageData } from "next/image";
import { useContext } from "react";

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
    <div className="flex items-center justify-between gap-x-5 rounded-[10px] bg-C2E3549 p-S30 max-sm:flex-wrap xl:gap-x-[85px]">
      <div className="flex gap-5 max-md:flex-wrap xl:gap-S30">
        <div className="min-w-fit">
          <Image src={cardImage} alt="Surveys 1" />
        </div>
        <div>
          <p className="text-xl sm:text-2xl">{cardTitle}</p>
          <p className="mt-3 text-sm text-CBDC4DA md:mt-4 lg:mt-5">
            {detailText}
          </p>
        </div>
      </div>
      <div className="max-sm:mt-5 md:min-w-fit">
        <button
          onClick={() => setOfferWallOpen(true)}
          className="shadow-[0px  4px 16px 0px rgba(0, 0, 0, 0.25)] cursor-pointer rounded-xl bg-C09B65E px-3 py-1 text-center text-sm font-bold text-C282F41 max-sm:w-[200px] sm:w-fit sm:px-5 sm:py-[10px]"
        >
          <p className="text-xl font-semibold sm:text-2xl xl:text-2.3xl">
            {offerPoint}
          </p>
          <p className="font-bold">Offer Point</p>
        </button>
      </div>
    </div>
  );
};

export default OfferWallCardDetails;
