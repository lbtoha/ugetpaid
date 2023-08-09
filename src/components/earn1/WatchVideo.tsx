import Image from "next/image";
import React from "react";
import watchVideo1 from "@/public/images/icon/watch-videos-icon-1.png";
import watchVideo2 from "@/public/images/icon/watch-videos-icon-2.png";
import watchVideo3 from "@/public/images/icon/watch-videos-icon-3.png";
import BigCard from "../shared/BigCard";

const WatchVideo = () => {
  const watchVideoData = [
    {
      id: 54801,
      cardImage: watchVideo1,
      cardHeading: "Watch Videos",
      cardText: "Watch unlimited videos.",
      btnText: "Watch Videos Start Earning",
    },
    {
      id: 54801,
      cardImage: watchVideo2,
      cardHeading: "Referrals",
      cardText: "Get your referral link and invite friends.",
      btnText: "Invite Now",
    },
    {
      id: 54801,
      cardImage: watchVideo3,
      cardHeading: "Promotions",
      cardText: "Do Idle-Empire special promotions.",
      btnText: "Watch Videos Start Earning",
    },
  ];
  return (
    <div className="section-gap">
      <div className="grid grid-cols-3 items-stretch justify-between gap-x-6">
        {watchVideoData.map(
          ({ id, cardImage, cardHeading, cardText, btnText }) => (
            <BigCard
              key={id}
              cardImage={cardImage}
              cardHeading={cardHeading}
              cardText={cardText}
              btnText={btnText}
            />
          )
        )}
      </div>
    </div>
  );
};

export default WatchVideo;
