"use client";
import { ModalIsOpenOrNot } from "@/app/layout";
import Image, { StaticImageData } from "next/image";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  imageArray: Array<{ id: string | number; image: StaticImageData }>;
  titleText: string;
};

const Withdraw = ({ imageArray, titleText }: Props) => {
  const { setCashOutModalOpen } = useContext(ModalIsOpenOrNot);
  return (
    <div className="mt-10 rounded-[20px] border border-C525C79 bg-C242938 px-S30 py-10">
      <h2 className="pb-5 text-2xl sm:text-3xl">{titleText}</h2>
      <div className="flex flex-wrap items-center justify-around gap-x-S15 gap-y-S15 border-t border-C53659A pt-S30">
        {imageArray.map(({ id, image }) => (
          <div
            onClick={() => setCashOutModalOpen(true)}
            key={uuidv4()}
            className="cursor-pointer"
          >
            <Image src={image} width={300} alt="Payment" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Withdraw;
