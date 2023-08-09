import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  iconImage: StaticImageData;
};

const Icon = ({ iconImage }: Props) => {
  return (
    <div className="border-gradient rounded-full h-fit items-center justify-center flex p-5 min-h-[80px] min-w-[80px] w-fit ">
      <Image src={iconImage} alt="Icon image" />
    </div>
  );
};

export default Icon;
