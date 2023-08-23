import watchVideo1 from "@/public/images/icon/watch-videos-icon-1.png";
import watchVideo2 from "@/public/images/icon/watch-videos-icon-2.png";
import watchVideo3 from "@/public/images/icon/watch-videos-icon-3.png";
import watchVideo4 from "@/public/images/icon/watch-videos-icon-4.png";
import watchVideo5 from "@/public/images/icon/watch-videos-icon-5.png";
import watchVideo6 from "@/public/images/icon/watch-videos-icon-6.png";
import BigCard from "../shared/BigCard";

const Earn2SurveyCards = () => {
  const Earn2CardData = [
    {
      id: 54801,
      cardImage: watchVideo4,
      cardHeading: "Surveys",
      cardText: "Answer daily surveys.",
      btnText: "View All Surveys",
      cardBg: "gradient-earn-point-card-1",
    },
    {
      id: 54801,
      cardImage: watchVideo5,
      cardHeading: "Offerwalls",
      cardText: "Complete offers from our trusted partners.",
      btnText: "Invite Now",
      cardBg: "gradient-earn-point-card-2",
    },
    {
      id: 54801,
      cardImage: watchVideo6,
      cardHeading: "Offers",
      cardText: "Complete curated offers.",
      btnText: "Watch Videos Start Earning",
      cardBg: "gradient-earn-point-card-3",
    },
    {
      id: 54801,
      cardImage: watchVideo1,
      cardHeading: "Watch Videos",
      cardText: "Watch unlimited videos.",
      btnText: "Watch Videos Start Earning",
      cardBg: "gradient-earn-point-card-4",
    },
    {
      id: 54801,
      cardImage: watchVideo2,
      cardHeading: "Referrals",
      cardText: "Get your referral link and invite friends.",
      btnText: "Invite Now",
      cardBg: "gradient-earn-point-card-5",
    },
    {
      id: 54801,
      cardImage: watchVideo3,
      cardHeading: "Promotions",
      cardText: "Do Idle-Empire special promotions.",
      btnText: "Watch Videos Start Earning",
      cardBg: "gradient-earn-point-card-6",
    },
  ];
  return (
    <div className="mt-4 md:mt-7 xl:mt-10">
      <div className="grid grid-cols-1 items-stretch justify-between gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
        {Earn2CardData.map(
          ({ id, cardImage, cardHeading, cardBg, cardText, btnText }) => (
            <BigCard
              key={id}
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

export default Earn2SurveyCards;
