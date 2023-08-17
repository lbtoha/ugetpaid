import Image, { StaticImageData } from "next/image";
type Props = {
  image: StaticImageData;
};
const TopPlayingSurveyIcon = ({ image }: Props) => {
  return (
    <div className="border-gradient flex h-fit min-h-[50px] w-fit min-w-[50px] items-center justify-center rounded-full p-3 xxl:min-h-[80px] xxl:min-w-[80px] xxl:p-5 ">
      <Image src={image} alt="Counter icon 1" />
    </div>
  );
};

export default TopPlayingSurveyIcon;
