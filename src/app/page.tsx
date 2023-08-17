import Counter from "@/components/pages/home/Counter";
import FAQs from "@/components/pages/home/FAQs";
import GetPaid from "@/components/pages/home/GetPaid";
import HowGetPaid from "@/components/pages/home/HowGetPaid";
import LatestActiveSlider from "@/components/pages/home/LatestActiveSlider";
import TopPlayingSurvey from "@/components/pages/home/TopPlayingSurvay";
import WhatPeople from "@/components/pages/home/WhatPeople";

const Home = () => {
  return (
    <>
      <LatestActiveSlider />
      <GetPaid />
      <Counter />
      <HowGetPaid />
      <TopPlayingSurvey />
      <FAQs />
      <WhatPeople />
      {/* <StartEarning /> */}
      {/* <SocialSection /> */}
    </>
  );
};

export default Home;
