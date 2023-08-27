"use client";
import quotation from "@/public/images/icon/quotation.png";
//@ts-ignore
import { Rating } from "@smastrom/react-rating";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type Props = {
  image: StaticImageData;
  name: string;
  country: string;
  heading: string;
  paragraph: string;
  rating: number;
  ratingTime: number;
};

const WhatPeopleSliderCard = ({
  image,
  name,
  country,
  heading,
  paragraph,
  rating,
  ratingTime,
}: Props) => {
  const [showText, setShowText] = useState<string>("");

  return (
    <div className="relative rounded-[15px] bg-C2E3549 px-S15 py-10 xl:px-S30 ">
      <div className="flex items-center gap-x-5">
        <Image
          src={image}
          alt="active Image"
          className="h-S60 w-S60 rounded-full bg-C3E4762"
        />
        <div>
          <p className="text-xl">{name}</p>
          <p className="text-sm">{country}</p>
        </div>
      </div>
      <div>
        <p className="mt-6 text-2xl xxl:text-2.3xl" title={heading}>
          {heading}
        </p>
        <p className="mt-1 border-b border-b-C626F95 pb-6 text-base text-CBDC4DA xl:mt-S15 xl:text-lg">
          {paragraph.length > 70 ? (
            <>
              <span title={paragraph} className="cursor-pointer">
                {paragraph.length > 70
                  ? paragraph.substring(0, 70) + "..."
                  : showText}
              </span>
            </>
          ) : (
            paragraph
          )}
        </p>
      </div>
      <div className="flex items-center justify-between pt-6">
        <div>
          <Rating
            style={{ maxWidth: 100 }}
            value={rating}
            readOnly
            transition="none"
            spaceInside="none"
            radius="none"
            className="rating-star-style"
          />
        </div>
        <p className="text-sm">{ratingTime} hour ago</p>
      </div>
      <Image
        src={quotation}
        alt="Quotation"
        className="absolute right-[3%] top-[4%] w-[76px]"
      />
    </div>
  );
};

export default WhatPeopleSliderCard;
