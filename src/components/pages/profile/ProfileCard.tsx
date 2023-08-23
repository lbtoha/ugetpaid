import RankBadge from "@/components/shared/RankBadge";
import { StaticImageData } from "next/image";
import ProfileImage from "./ProfileImage";
type Props = {
  profileImage: StaticImageData;
  name: string;
  userId: string | number;
};

const ProfileCard = ({ profileImage, name, userId }: Props) => {
  return (
    <div className="space-y-S30 rounded-[30px] bg-C2E3549 px-S30 py-10">
      <ProfileImage image={profileImage} />
      <div className="flex items-center justify-center gap-[15px]">
        <div>
          <RankBadge badgeRank={28} />
        </div>
        <div className="inline-flex flex-col items-start justify-center gap-2.5">
          <p className="w-[174px]  text-2xl font-semibold leading-[33.60px]">
            {name}
          </p>
          <p className="w-[130px] font-normal  leading-normal text-CBDC4DA">
            User Id : {userId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
