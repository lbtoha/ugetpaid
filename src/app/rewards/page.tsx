import Affiliates from "@/components/pages/rewards/Affiliates";
import PageNavigationHeader from "@/components/shared/PageNavigationHeader";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rewards | UGETPAID",
  description: "NextJs Template",
};

const Earn1 = () => {
  return (
    <>
      <PageNavigationHeader title="Rewards" items={["Home", "Rewards"]} />
      <Affiliates />
      <SocialSection />
    </>
  );
};

export default Earn1;
