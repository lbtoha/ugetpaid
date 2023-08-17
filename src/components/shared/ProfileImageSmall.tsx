import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image: StaticImageData | string;
};

const ProfileImageSmall: React.FC<Props> = ({ image }) => {
  return (
    <Image
      src={image}
      alt="Icon image"
      width={40}
      height={40}
      className="border-gradient rounded-full h-fit items-center mx-auto justify-center flex  min-h-[40px] min-w-[40px] w-fit"
    />
  );
};

export default ProfileImageSmall;
