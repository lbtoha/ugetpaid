import coin from "@/public/images/winners-item-1.png";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  winePrice: number;
  bgGradient: string;
  boxShadow: string;
};

const AffiliateYouWinCard = ({ winePrice, bgGradient, boxShadow }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
      className={`inline-flex min-w-[130px] grow basis-0 flex-col items-center gap-2.5 rounded-[10px] sm:max-w-[160px] ${bgGradient} p-[30px] ${boxShadow}`}
    >
      <div className="bg-[rgba(46, 53, 73, 0.50)] inline-flex h-[60px] w-[60px] items-center justify-center rounded-[10px] p-2.5">
        <Image src={coin} alt="coin" className="flex h-10 w-10   flex-col" />
      </div>
      <div className="flex h-[46px]  flex-col items-center">
        <p className="text-xs leading-[18px] text-CFEDB41">You Win</p>
        <p className=" text-xl font-semibold leading-7">${winePrice}</p>
      </div>
    </motion.div>
  );
};

export default AffiliateYouWinCard;
