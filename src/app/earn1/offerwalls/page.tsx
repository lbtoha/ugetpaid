import OfferwallsDetails from "@/components/pages/offerwalls/OfferwallsDetails";
import PageNavigationHeader from "@/components/shared/PageNavigationHeader";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offerwalls | UGETPAID",
  description: "NextJs Template",
};

const Earn1 = () => {
  return (
    <>
      <PageNavigationHeader
        title="Offerwalls"
        items={["Home", "Earn", "Offerwalls"]}
      />

      <OfferwallsDetails />
      <SocialSection />
    </>
  );
};

export default Earn1;
