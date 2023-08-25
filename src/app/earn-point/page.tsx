import Earn2SurveyCards from "@/components/earn-point/Earn2SurveyCards";
import PageNavigationHeader from "@/components/shared/PageNavigationHeader";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earn Point | UGETPAID",
  description: "NextJs Template",
};

const Earn2 = () => {
  return (
    <>
      <PageNavigationHeader title="Earn Point" items={["Home", "Earn Point"]} />
      <Earn2SurveyCards />
      <SocialSection />
    </>
  );
};

export default Earn2;
