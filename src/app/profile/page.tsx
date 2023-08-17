import ProfileDashboard from "@/components/pages/profile/ProfileDashboard";
import PageNavigationHeader from "@/components/shared/PageNavigationHeader";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | UGETPAID",
  description: "NextJs Template",
};

const Page = () => {
  return (
    <>
      <PageNavigationHeader title="Profile" items={["Home", "Profile"]} />
      <ProfileDashboard />
      <SocialSection />
    </>
  );
};

export default Page;
