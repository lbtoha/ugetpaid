import LeaderBoardBanner from "@/components/pages/leaderboard/LeaderBoardBanner";
import LeaderBoardTopEarners from "@/components/pages/leaderboard/LeaderboardTopEarners/LeaderBoardTopEarners";
import PageNavigationHeader from "@/components/shared/PageNavigationHeader";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offerwalls | UGETPAID",
  description: "NextJs Template",
};

const Earn1 = () => {
  return (
    <>
      <PageNavigationHeader
        title="Leaderboard"
        items={["Home", "Leaderboard"]}
      />
      <LeaderBoardBanner />
      <LeaderBoardTopEarners />
      <SocialSection />
    </>
  );
};

export default Earn1;
