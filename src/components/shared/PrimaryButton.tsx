import Image from "next/image";
import Link from "next/link";
import React from "react";
import btnIcon from "@/public/images/icon/btn-icon-1.png";

type Prop = {
  buttonText: string;
};
const PrimaryButton = ({ buttonText }: Prop) => {
  return (
    <button className="flex gap-x-2 items-center cursor-pointer text-base font-bold text-C282F41 bg-C09B65E px-5 py-[10px] w-fit rounded-xl">
      <Image src={btnIcon} alt="btn icon" />
      <span>{buttonText}</span>
    </button>
  );
};

export default PrimaryButton;
