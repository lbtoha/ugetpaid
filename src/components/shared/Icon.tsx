import Image, { StaticImageData } from "next/image";

type Props = {
  iconImage: StaticImageData;
};

const Icon = ({ iconImage }: Props) => {
  return (
    <div className="border-gradient flex h-fit min-h-[60px] w-fit min-w-[60px] items-center justify-center rounded-full p-3 xl:min-h-[80px] xl:min-w-[80px] xl:p-5 ">
      <Image
        src={iconImage}
        alt="Icon image"
        className="xl:min-h-10  xl:min-w-10 min-h-[30px] min-w-[30px]"
      />
    </div>
  );
};

export default Icon;
