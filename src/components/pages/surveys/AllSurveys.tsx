import PrimaryButton from "@/components/shared/PrimaryButton";
import Image from "next/image";
import React from "react";
import androidIcon from "@/public/images/icon/android.png";
import appleIcon from "@/public/images/icon/apple.png";
import pc from "@/public/images/icon/pc.png";
import modalImage from "@/public/images/featured-img-6.png";
import officeWall from "@/public/images/offer-walls-img-9.png";
import surveys1 from "@/public/images/survery-img-1.png";
import surveys2 from "@/public/images/survery-img-2.png";
import surveys3 from "@/public/images/survery-img-3.png";
import surveys4 from "@/public/images/survery-img-4.png";
import clock from "@/public/images/icon/clock-icon.png";
import prize from "@/public/images/icon/price-icon.png";
import coins from "@/public/images/icon/coin-icon.png";
import SurveysCardDetails from "@/components/shared/SurveysCardDetails";

const AllSurveys = () => {
  const allSurveysCardData = [
    {
      id: 545401,
      cardImage: surveys1,
      cardTitle: "Your Surveys",
      detailText:
        "You earn 6,250 points per survey and you can complete multiple surveys per day. Complete the survey until you reach the &quot;Thank you&quot; page.",
    },
    {
      id: 545402,
      cardImage: surveys2,
      cardTitle: "CPX Research",
      detailText:
        "Answer profiling questions and start doing matching surveys. Check back daily for new surveys.",
    },
    {
      id: 545403,
      cardImage: surveys3,
      cardTitle: "Speak Up",
      detailText:
        "Speak Up asks you a few questions and redirects you to a survey that matches your profile. You can complete multiple surveys per day with Speak Up!",
    },
    {
      id: 545404,
      cardImage: surveys4,
      cardTitle: "TheoremReach",
      detailText:
        "TheoremReach lets you choose between multiple surveys that match your profile. New surveys are added every day!",
    },
    {
      id: 545405,
      cardImage: surveys1,
      cardTitle: "Abstract",
      detailText:
        "Abstract shows you a variety of surveys which match your profile. Make sure to check back frequently as new surveys are added every day.",
    },
    {
      id: 545406,
      cardImage: surveys3,
      cardTitle: "phoenix",
      detailText:
        "Verify your email, complete your profiler and get access to different surveys. New surveys are added on a daily basis!",
    },
    {
      id: 545407,
      cardImage: surveys2,
      cardTitle: "Dragon",
      detailText:
        "Answer a few profiler questions and get access to a variety of different surveys. New surveys are added every day!",
    },
  ];
  return (
    <div className="mt-10 space-y-6">
      {allSurveysCardData.map(({ id, cardImage, cardTitle, detailText }) => (
        <SurveysCardDetails
          key={id}
          cardImage={cardImage}
          cardTitle={cardTitle}
          detailText={detailText}
        />
      ))}
    </div>
  );
};

export default AllSurveys;
