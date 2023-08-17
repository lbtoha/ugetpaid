import ProfileImageBig from "@/components/shared/ProfileImageBig";
import crown from "@/public/images/icon/crown-kings.png";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  name: string;
  point: number;
  bonus: number;
  coin: number;
  position: string;
  setLeaderBoardModalOpen: (isOpen: boolean) => void;
};

const LeaderBoardCrownCard = ({
  image,
  name,
  point,
  bonus,
  coin,
  position,
  setLeaderBoardModalOpen,
}: Props) => {
  return (
    <div
      onClick={() => setLeaderBoardModalOpen(true)}
      className="px-S30 pt-[100px] pb-S60 relative w-full bg-C1F2432 border border-C3D4660 rounded-[15px]"
    >
      <ProfileImageBig image={image} />
      <div className="flex justify-between">
        <Image src={crown} alt="Crown" className="absolute top-[60px] " />
      </div>
      <p className="text-2xl text-center mt-S15">{name}</p>
      <p className="mt-S5 text-C00FF8B font-semibold text-center">
        {point} Points
      </p>
      <div className="flex justify-between mt-10">
        <div className="border-e border-CD7D6D6 grow  ">
          <p className="text-xl text-center ">{coin}</p>
          <p className="text-C00FF8B mt-S5 text-center">Coins</p>
        </div>
        <div className="grow">
          <p className="text-xl text-center">+{bonus}</p>
          <p className="text-C00FF8B mt-S5 text-center">Bonus</p>
        </div>
      </div>
      <div className="bg-C00FF8B pt-S30 px-S10 pb-5 absolute right-[20px] rounded-br-[30px] top-0 rounded-bl-[30px]">
        <p className="text-C1A1F2C text-xl text-center">{position}</p>
        <p className="text-C1A1F2C text-xs text-center">Place</p>
      </div>
    </div>
  );
};

export default LeaderBoardCrownCard;
