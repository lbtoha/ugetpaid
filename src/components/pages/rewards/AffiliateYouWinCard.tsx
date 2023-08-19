import coin from "@/public/images/winners-item-1.png";
import Image from "next/image";

type Props = {
  winePrice: number;
  bgGradient: string;
  boxShadow: string;
};

const AffiliateYouWinCard = ({ winePrice, bgGradient, boxShadow }: Props) => {
  return (
    <div
      className={`inline-flex grow basis-0 flex-col items-center gap-2.5  rounded-[10px]  bg-${bgGradient} p-[30px] shadow-${boxShadow}`}
    >
      <div className="bg-[rgba(46, 53, 73, 0.50)] inline-flex h-[60px] w-[60px] items-center justify-center rounded-[10px] p-2.5">
        <Image src={coin} alt="coin" className="flex h-10 w-10   flex-col" />
      </div>
      <div className="flex h-[46px]  flex-col items-center">
        <p className="text-xs leading-[18px] text-CFEDB41">You Win</p>
        <p className=" text-xl font-semibold leading-7">${winePrice}</p>
      </div>
    </div>
  );
};

export default AffiliateYouWinCard;
