import React from "react";
import BigCard from "../shared/BigCard";
import watchVideo1 from "@/public/images/icon/watch-videos-icon-1.png";
import watchVideo2 from "@/public/images/icon/watch-videos-icon-2.png";
import watchVideo3 from "@/public/images/icon/watch-videos-icon-3.png";
import watchVideo4 from "@/public/images/icon/watch-videos-icon-4.png";
import watchVideo5 from "@/public/images/icon/watch-videos-icon-5.png";
import watchVideo6 from "@/public/images/icon/watch-videos-icon-6.png";

const Earn2SurveyCards = () => {
  const Earn2CardData = [
    {
      id: 54801,
      cardImage: watchVideo4,
      cardHeading: "Surveys",
      cardText: "Answer daily surveys.",
      btnText: "View All Surveys",
    },
    {
      id: 54801,
      cardImage: watchVideo5,
      cardHeading: "Offerwalls",
      cardText: "Complete offers from our trusted partners.",
      btnText: "Invite Now",
    },
    {
      id: 54801,
      cardImage: watchVideo6,
      cardHeading: "Offers",
      cardText: "Complete curated offers.",
      btnText: "Watch Videos Start Earning",
    },
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
      <div className="grid grid-cols-3 items-stretch justify-between gap-x-6 gap-y-6">
        {Earn2CardData.map(
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

export default Earn2SurveyCards;
