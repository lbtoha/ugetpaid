import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image: StaticImageData | string;
};

const ProfileImageBig: React.FC<Props> = ({ image }) => {
  return (
    <Image
      src={image}
      alt="Icon image"
      width={80}
      height={80}
      className="border-gradient rounded-full h-fit items-center mx-auto justify-center flex  min-h-[80px] min-w-[80px] w-fit"
    />
  );
};

export default ProfileImageBig;
