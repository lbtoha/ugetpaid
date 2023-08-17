"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ModalIsOpenOrNot } from "@/app/layout";

type Props = {
  imageArray: Array<{ id: string | number; image: StaticImageData }>;
  titleText: string;
};

const Withdraw = ({ imageArray, titleText }: Props) => {
  const { setCashOutModalOpen } = useContext(ModalIsOpenOrNot);
  return (
    <div className="mt-10 rounded-[20px] border border-C525C79 bg-C242938 px-S30 py-10">
      <h2 className="text-3xl pb-5">{titleText}</h2>
      <div className="pt-S30 border-t border-C53659A flex items-center  gap-x-S15 flex-wrap gap-y-S15">
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
