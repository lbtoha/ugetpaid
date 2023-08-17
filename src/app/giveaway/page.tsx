import DailyWinner from "@/components/pages/giveaway/DailyWinner";
import GiveawayBanner from "@/components/pages/giveaway/GiveawayBanner";
import TopWinner from "@/components/pages/giveaway/TopWinner";
import WinnersDrawing from "@/components/pages/giveaway/WinnersDrawing";
import PageNavigationHeader from "@/components/shared/PageNavigationHeader";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giveaway | UGETPAID",
  description: "NextJs Template",
};

const Earn1 = () => {
  return (
    <>
      <PageNavigationHeader title="Giveaway" items={["Home", "Giveaway"]} />
      <GiveawayBanner />
      <TopWinner />
      <DailyWinner />
      <WinnersDrawing />
      <SocialSection />
    </>
  );
};

export default Earn1;
