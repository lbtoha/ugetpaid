import { motion } from "framer-motion";
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
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="grid-cols-2 items-center justify-between gap-10 rounded-[20px] border border-C3D4660 bg-C1F2432 px-3 py-3 max-xl:flex-wrap max-lg:space-y-4 sm:px-5 sm:py-5 lg:grid xl:px-10"
    >
      <div className="flex items-center space-x-5 sm:space-x-S30 xl:space-x-S60">
        <p className="flex h-fit items-center  rounded-[15px] bg-C2C3346 px-S15 py-2.5 text-center">
          {position}
        </p>
        <div className="flex items-center gap-x-5">
          <Image src={image} alt="Table image" />
          <div>
            <p className="text-lg sm:text-2xl">{name}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between max-sm:ms-[60px] sm:max-lg:ms-[70px]">
        <div className="text-center">
          <p className="font-bold">{point}</p>
          <p className="text-xs leading-[150%] text-C00FF8B">Point</p>
        </div>
        <div className="text-center">
          <p className="font-bold">{coin}</p>
          <p className="text-xs leading-[150%] text-C00FF8B">Coins</p>
        </div>
        <div className="text-center">
          <p className="font-bold">{bonus}</p>
          <p className="text-xs leading-[150%] text-C00FF8B">Bonus</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LeaderBoardList;
