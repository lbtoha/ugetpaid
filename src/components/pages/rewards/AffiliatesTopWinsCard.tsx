import ProfileImageSmall from "@/components/shared/ProfileImageSmall";
import { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  name: string;
  points: number;
};

const AffiliatesTopWinsCard = ({ image, name, points }: Props) => {
  return (
    <div className="inline-flex items-center gap-2.5 self-stretch rounded-[15px] border  border-C3B445E bg-C212737 p-5">
      <div className="flex h-10 shrink grow  basis-0 items-center gap-2.5">
        <ProfileImageSmall image={image} />
        <div className="shrink grow basis-0 font-semibold leading-snug">
          {name}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 rounded-[10px] border border-C09B55E border-opacity-80 bg-C09B55E bg-opacity-10 px-2 py-[5px]">
        <div className="text-sm font-bold leading-[21px] text-C00FF7D">
          {points}
        </div>
      </div>
    </div>
  );
};

export default AffiliatesTopWinsCard;
