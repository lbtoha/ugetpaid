import AllSurveys from "@/components/pages/surveys/AllSurveys";
import PageNavigationHeader from "@/components/shared/PageNavigationHeader";
import SocialSection from "@/components/shared/SocialSection";
import Tips from "@/components/shared/SurveysTips";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surveys | UGETPAID",
  description: "NextJs Template",
};

const Page = () => {
  const tipsList = [
    { listItem: "1. Answer questions honestly and consistently" },
    {
      listItem:
        "2. It's normal to get rejected from some surveys, don't let it discourage you",
    },
    {
      listItem: "3. New surveys are added every day, so check back frequently",
    },
  ];
  return (
    <>
      <PageNavigationHeader
        title="Surveys"
        items={["Home", "Earn", "Surveys"]}
      />
      <Tips title="Tips for answering surveys" tipsList={tipsList} />
      <AllSurveys />
      <SocialSection />
    </>
  );
};

export default Page;
