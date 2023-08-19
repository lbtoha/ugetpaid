import FeaturedOffer from "@/components/earn1/FeaturedOffer";
import OfferWall from "@/components/earn1/OfferWall";
import Surveys from "@/components/earn1/Surveys";
import WatchVideo from "@/components/earn1/WatchVideo";
import LatestActiveSlider from "@/components/pages/home/LatestActiveSlider";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EARN1 | UGETPAID",
  description: "NextJs Template",
};

const Earn1 = () => {
  return (
    <>
      <LatestActiveSlider />
      <FeaturedOffer />
      <OfferWall />
      <Surveys />
      <WatchVideo />
      <SocialSection />
    </>
  );
};

export default Earn1;
