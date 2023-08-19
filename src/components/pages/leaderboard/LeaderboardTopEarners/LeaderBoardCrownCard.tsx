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
      className="relative w-full rounded-[15px] border border-C3D4660 bg-C1F2432 px-S30 pb-S60 pt-[100px]"
    >
      <div className="flex justify-center ">
        <Image src={crown} alt="Crown" />
      </div>
      <ProfileImageBig image={image} />

      <p className="mt-S15 text-center text-2xl">{name}</p>
      <p className="mt-S5 text-center font-semibold text-C00FF8B">
        {point} Points
      </p>
      <div className="mt-10 flex justify-between">
        <div className="grow border-e border-CD7D6D6  ">
          <p className="text-center text-xl ">{coin}</p>
          <p className="mt-S5 text-center text-C00FF8B">Coins</p>
        </div>
        <div className="grow">
          <p className="text-center text-xl">+{bonus}</p>
          <p className="mt-S5 text-center text-C00FF8B">Bonus</p>
        </div>
      </div>
      <div className="absolute right-[20px] top-0 rounded-bl-[30px] rounded-br-[30px] bg-C00FF8B px-S10 pb-5 pt-S30">
        <p className="text-center text-xl text-C1A1F2C">{position}</p>
        <p className="text-center text-xs text-C1A1F2C">Place</p>
      </div>
    </div>
  );
};

export default LeaderBoardCrownCard;
