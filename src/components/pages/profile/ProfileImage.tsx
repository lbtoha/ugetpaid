import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image: StaticImageData | string;
};

const ProfileImage: React.FC<Props> = ({ image }) => {
  return (
    <Image
      src={image}
      alt="Icon image"
      width={140}
      height={140}
      className="border-gradient rounded-full h-fit items-center mx-auto justify-center flex  min-h-[140px] min-w-[140px] w-fit"
    />
  );
};

export default ProfileImage;
