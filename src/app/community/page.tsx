import SocialMedia from "@/components/community/SocialMedia";
import PageNavigationHeader from "@/components/shared/PageNavigationHeader";
import SocialSection from "@/components/shared/SocialSection";
import Tips from "@/components/shared/SurveysTips";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | UGETPAID",
  description: "NextJs Template",
};

const Page = () => {
  return (
    <>
      <PageNavigationHeader title="Community" items={["Home", "Community"]} />
      <Tips
        title="Be a member of our community!"
        tipsList={[
          {
            listItem:
              "Join, like and follow us. Never miss any future announcements, giveaways and updates.",
          },
        ]}
      />
      <SocialMedia />
      <SocialSection />
    </>
  );
};

export default Page;
