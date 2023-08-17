import SupportFAQ from "@/components/pages/support/SupportFAQ";
import SupportGetInTouch from "@/components/pages/support/SupportGetInTouch";
import PageNavigationHeader from "@/components/shared/PageNavigationHeader";
import SocialSection from "@/components/shared/SocialSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | UGETPAID",
  description: "NextJs Template",
};

const Page = () => {
  return (
    <>
      <PageNavigationHeader title="Support" items={["Home", "Support"]} />
      <SupportGetInTouch />
      <SupportFAQ />
      <SocialSection />
    </>
  );
};

export default Page;
