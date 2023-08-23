import Image, { StaticImageData } from "next/image";
type Props = {
  image: StaticImageData;
  socialMediaName: string;
  socialMediaMember: number;
  color: string;
};

const SocialMediaCard = ({
  image,
  socialMediaName,
  socialMediaMember,
  color,
}: Props) => {
  return (
    <div className="flex flex-col items-center gap-[17px] rounded-[15px] border border-C2E3549 px-[30px] py-10">
      <Image width={120} height={120} src={image} alt="Stream icon" />
      <p className="self-stretch text-center  text-xl font-semibold leading-7">
        {socialMediaName}
      </p>
      <button
        className={` rounded-[30px] border ${color} self-stretch px-3 py-[15px] text-center font-bold 4xl:px-[30px]`}
      >
        {socialMediaMember} Members
      </button>
    </div>
  );
};

export default SocialMediaCard;
