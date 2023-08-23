import Image, { StaticImageData } from "next/image";
type Props = {
  image: StaticImageData;
  point: number;
};
const DailyBonusItem = ({ image, point }: Props) => {
  return (
    <div className="flex  grow basis-0 items-center justify-center gap-2.5 rounded-[10px] border border-slate-600 px-2.5 py-[5px]">
      <div className="flex h-6 w-6 items-center justify-center rounded-[15px] bg-C3B445E">
        <Image src={image} alt="Crown" />
      </div>
      <p className="w-[35px]  text-sm font-bold leading-[21px]">{point}</p>
    </div>
  );
};

export default DailyBonusItem;
