import Banner from "@/components/home/GetPaid";
import Counter from "@/components/home/Counter";
import FAQs from "@/components/home/FAQs";
import HowGetPaid from "@/components/home/HowGetPaid";
import LatestActive from "@/components/home/LatestActive";
import SocialSection from "@/components/shared/SocialSection";
import { StartEarning } from "@/components/home/StartEarning";
import TopPlayingSurvey from "@/components/home/TopPlayingSurvay";
import WhatPeople from "@/components/home/WhatPeople";
import React from "react";
import GetPaid from "@/components/home/GetPaid";

const Home = () => {
  return (
    <>
      <LatestActive />
      <GetPaid />
      <Counter />
      <HowGetPaid />
      <TopPlayingSurvey />
      <FAQs />
      <WhatPeople />
      <StartEarning />
      <SocialSection />
    </>
  );
};

export default Home;
