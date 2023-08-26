import Image, { StaticImageData } from "next/image";
type Props = {
  winnerImage: StaticImageData;
  winnerName: string;
  reward: string;
};

const WinnerListCard = ({ winnerImage, winnerName, reward }: Props) => {
  return (
    <div className="items-center justify-between gap-[103px] self-stretch rounded-[10px] bg-[#3B445E] p-3 max-sm:space-y-5 sm:flex md:p-5">
      <div className="flex items-center gap-[15px]">
        <Image
          alt="Image"
          width={60}
          height={60}
          className="flex h-[60px] w-[60px] items-center justify-center rounded-[30px] bg-[#262D3E]"
          src={winnerImage}
        />
        <p>{winnerName}</p>
      </div>
      <p className="rounded-[10px] border border-neutral-700 bg-C5DDA1D bg-opacity-20 px-[15px] py-2.5 text-lg leading-snug text-C5DDA1D max-sm:w-fit">
        {reward}
      </p>
    </div>
  );
};

export default WinnerListCard;
