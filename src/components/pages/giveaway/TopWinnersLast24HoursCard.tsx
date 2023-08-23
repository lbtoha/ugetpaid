import Image, { StaticImageData } from "next/image";
type Props = {
  prizeImage: StaticImageData;
  prizePrice: number;
  userName: string;
  userImage: StaticImageData;
};

const TopWinnersLast24HoursCard = ({
  prizeImage,
  prizePrice,
  userName,
  userImage,
}: Props) => {
  return (
    <div className="flex shrink grow basis-0 flex-col items-center justify-center  gap-5 rounded-[15px]  border border-C343D59 bg-C1F2432 px-2.5 py-[30px] shadow-BSGiveaway hover:border-C406152 hover:bg-gradient-giveaway">
      <div className="flex flex-col items-center justify-start gap-2.5 self-stretch">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[10px] bg-C2A3247 p-S10">
          <Image src={prizeImage} width={40} alt="Coin" />
        </div>
        <p className="self-stretch text-center text-sm leading-[21px] text-C00D675">
          ${prizePrice}
        </p>
      </div>
      <div className="h-[0px] self-stretch border border-C343D59"></div>
      <div className="inline-flex items-center justify-start gap-2">
        <div className="flex h-[18px] w-[18px] items-center justify-center rounded-xl bg-CF1B1E7 pl-[0.09px] pr-[0.26px]">
          <Image
            alt="Image"
            width={18}
            height={18}
            className="h-[17.65px] w-[17.65px] rounded-full"
            src={userImage}
          />
        </div>
        <p className="text-xs leading-[18px] text-CBDC4DA">{userName}</p>
      </div>
    </div>
  );
};

export default TopWinnersLast24HoursCard;
