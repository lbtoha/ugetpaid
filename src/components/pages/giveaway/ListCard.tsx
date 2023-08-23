import Image, { StaticImageData } from "next/image";
type Props = {
  prizeImage: StaticImageData;
  prize: string;
};

const ListCard = ({ prizeImage, prize }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-2.5 rounded-[15px] border border-[#343E59] bg-C1F2432 px-2.5 py-S30 shadow hover:bg-gradient-giveaway">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[10px] bg-[#262D3E] p-S10">
        <Image width={40} height={40} src={prizeImage} alt="Winning Prize" />
      </div>
      <div className="text-center text-sm leading-[21px]  text-C00D675">
        {prize}
      </div>
    </div>
  );
};

export default ListCard;
