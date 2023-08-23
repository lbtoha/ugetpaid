import { socialMediaData } from "@/public/data/community";
import { v4 as uuidv4 } from "uuid";
import SocialMediaCard from "./SocialMediaCard";
const SocialMedia = () => {
  return (
    <div className="mt-10 flex w-full items-start justify-center gap-5 max-3xl:flex-wrap 4xl:gap-[30px]">
      {socialMediaData.map(
        ({ image, socialMediaName, socialMediaMember, color }) => (
          <SocialMediaCard
            key={uuidv4()}
            image={image}
            socialMediaName={socialMediaName}
            socialMediaMember={socialMediaMember}
            color={color}
          />
        ),
      )}
    </div>
  );
};

export default SocialMedia;
