import Earn2SurveyCards from "@/components/earn2/Earn2SurveyCards";
import PageNavigationHeader from "@/components/shared/PageNavigationHeader";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Earn-2 | UGETPAID",
  description: "NextJs Template",
};

const Earn2 = () => {
  return (
    <>
      <PageNavigationHeader title="Earn Point" items={["Home", "Earn"]} />
      <Earn2SurveyCards />
      <SocialSection />
    </>
  );
};

export default Earn2;
