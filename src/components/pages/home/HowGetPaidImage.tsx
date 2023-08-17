import Image, { StaticImageData } from "next/image";
type Props = {
  image: StaticImageData;
  selected: boolean;
};

const HowGetPaidImage = ({ image, selected }: Props) => {
  return (
    <Image
      src={image}
      alt="how work"
      width={600}
      height={600}
      className={`custom-fade max-lg:mx-auto max-lg:w-[50%] ${
        selected ? " opacity-100" : "hidden"
      }`}
    />
  );
};

export default HowGetPaidImage;
