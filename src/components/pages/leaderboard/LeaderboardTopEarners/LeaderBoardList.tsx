import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  name: string;
  point: number;
  bonus: number;
  coin: number;
  position: number;
};

const LeaderBoardList = ({
  image,
  name,
  point,
  bonus,
  coin,
  position,
}: Props) => {
  return (
    <div className="px-10 py-5 border border-C3D4660 bg-C1F2432 rounded-[20px]  grid grid-cols-4 justify-between items-center">
      <div className="space-x-S60 flex">
        <p className="px-S10 py-S15 bg-C2C3346 rounded-[15px] flex items-center text-center">
          {position}
        </p>
        <div className="flex items-center gap-x-5">
          <Image src={image} alt="Table image" />
          <p className="text-2xl">{name}</p>
        </div>
      </div>
      <div className="text-center">
        <p className="font-bold">{point}</p>
        <p className="text-C00FF8B text-xs leading-[150%]">Point</p>
      </div>
      <div className="text-center">
        <p className="font-bold">{coin}</p>
        <p className="text-C00FF8B text-xs leading-[150%]">Coins</p>
      </div>
      <div className="text-center">
        <p className="font-bold">{bonus}</p>
        <p className="text-C00FF8B text-xs leading-[150%]">Bonus</p>
      </div>
    </div>
  );
};

export default LeaderBoardList;
