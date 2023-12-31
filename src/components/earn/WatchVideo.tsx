import { watchVideoData } from "@/public/data/featureOffer";
import { v4 as uuidv4 } from "uuid";
import BigCard from "../shared/BigCard";

const WatchVideo = () => {
  return (
    <div className="section-gap max-lg:mt-5">
      <div className="grid grid-cols-1 items-stretch justify-center gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-2 xl:grid-cols-3 xxl:gap-x-6">
        {watchVideoData.map(
          ({ id, cardImage, cardHeading, cardText, cardBg, btnText }) => (
            <BigCard
              key={uuidv4()}
              cardImage={cardImage}
              cardHeading={cardHeading}
              cardText={cardText}
              cardBg={cardBg}
              btnText={btnText}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default WatchVideo;
