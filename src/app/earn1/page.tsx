import FeaturedOffer from "@/components/earn1/FeaturedOffer";
import OfferWall from "@/components/earn1/OfferWall";
import Surveys from "@/components/earn1/Surveys";
import WatchVideo from "@/components/earn1/WatchVideo";
import LatestActive from "@/components/pages/home/LatestActive";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EARN1 | UGETPAID",
  description: "NextJs Template",
};

const Earn1 = () => {
  return (
    <>
      <LatestActive />
      <FeaturedOffer />
      <OfferWall />
      <Surveys />
      <WatchVideo />
      <SocialSection />
    </>
  );
};

export default Earn1;
