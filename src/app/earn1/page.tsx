import FeaturedOffer from "@/components/earn1/FeaturedOffer";
import FeaturedOfferModal from "@/components/earn1/FeaturedOfferModal";
import OfferWall from "@/components/earn1/OfferWall";
import Surveys from "@/components/earn1/Surveys";
import WatchVideo from "@/components/earn1/WatchVideo";
import LatestActive from "@/components/home/LatestActive";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Home | UGETPAID",
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
      {/* <FeaturedOfferModal /> */}
      <SocialSection />
    </>
  );
};

export default Earn1;
