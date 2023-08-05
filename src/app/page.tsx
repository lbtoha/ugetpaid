import Banner from "@/components/home/Banner";
import Counter from "@/components/home/Counter";
import HowGetPaid from "@/components/home/HowGetPaid";
import LatestActive from "@/components/home/LatestActive";
import TopPlayingSurvey from "@/components/home/TopPlayingSurvay";
import React from "react";

const Home = () => {
  return (
    <>
      <LatestActive />
      <Banner />
      <Counter />
      <HowGetPaid />
      <TopPlayingSurvey />
    </>
  );
};

export default Home;
