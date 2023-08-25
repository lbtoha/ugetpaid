import FeaturedOffer from "@/components/earn/FeaturedOffer";
import OfferWall from "@/components/earn/OfferWall";
import Surveys from "@/components/earn/Surveys";
import WatchVideo from "@/components/earn/WatchVideo";
import LatestActiveSlider from "@/components/pages/home/LatestActiveSlider";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EARN | UGETPAID",
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
