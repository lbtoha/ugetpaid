import Image, { StaticImageData } from "next/image";
type Props = {
  boxImage: StaticImageData;
  lockImage: StaticImageData;
  earn: string;
};

const DailyCasesModalEarnCard = ({ boxImage, lockImage, earn }: Props) => {
  return (
    <div className="group flex w-full flex-col items-center justify-between gap-S15 self-stretch rounded-[15px] border border-[#343E59] p-2.5 hover:bg-gradient-giveaway">
      <div className="mx-auto flex h-[110px] w-[110px] items-center justify-center rounded-[55px] border border-[#58BA9C] bg-C263530 p-[15px] shadow">
        <div className="flex shrink grow basis-0 items-center justify-center self-stretch rounded-[40px] bg-C206C55">
          <Image
            width={89}
            height={89}
            alt="Image"
            className="h-[89px] w-[89px]"
            src={boxImage}
          />
        </div>
      </div>
      <p className="text-center font-semibold leading-snug">
        Earn {earn} coins
      </p>
      <button className="flex w-fit items-center justify-center gap-2.5 rounded-[15px] bg-[#343E59] px-5 py-2 group-hover:bg-C09B65E group-hover:text-C282F41">
        <Image
          src={lockImage}
          alt="Lock"
          width={18}
          height={18}
          className="h-[18px] w-[18px]"
        />
        <span className=" text-xs font-bold leading-[18px]">Open for free</span>
      </button>
    </div>
  );
};

export default DailyCasesModalEarnCard;
