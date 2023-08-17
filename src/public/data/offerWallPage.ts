import offerWall1 from "@/public/images/offer-walls-img-1.png";
import offerWall2 from "@/public/images/offer-walls-img-2.png";
import offerWall3 from "@/public/images/offer-walls-img-3.png";
import offerWall4 from "@/public/images/offer-walls-img-4.png";
import offerWall5 from "@/public/images/offer-walls-img-5.png";
import offerWall6 from "@/public/images/offer-walls-img-6.png";
import offerWall7 from "@/public/images/offer-walls-img-7.png";
import usaFlag from "@/public/images/icon/usa-flag.png";
import surveys1 from "@/public/images/survery-img-1.png";
import surveys2 from "@/public/images/survery-img-2.png";
import surveys3 from "@/public/images/survery-img-3.png";
import surveys4 from "@/public/images/survery-img-4.png";

export const sideCardData = [
  {
    id: "55801",
    cardImage: offerWall1,
    top: true,
    heading: "Hexagon",
    popularity: 80,
    countryFlag: usaFlag,
  },
  {
    id: "55802",
    cardImage: offerWall2,
    top: true,
    heading: "Connect People",
    countryFlag: usaFlag,
    popularity: 60,
  },
  {
    id: "558022",
    cardImage: offerWall3,
    top: true,
    heading: "Flamefire",
    countryFlag: usaFlag,
    popularity: 50,
  },
  {
    id: "558052",
    top: true,
    cardImage: offerWall4,
    heading: "Spybats",
    countryFlag: usaFlag,
    popularity: 90,
  },
  {
    id: "55804454",
    cardImage: offerWall5,
    top: true,
    heading: "Triangle",
    countryFlag: usaFlag,
    popularity: 40,
  },
  {
    id: "55802454",
    cardImage: offerWall6,
    top: true,
    heading: "Spybats",
    countryFlag: usaFlag,
    popularity: 80,
  },
  {
    id: "55802535",
    cardImage: offerWall7,
    top: true,
    heading: "Phoenix",
    countryFlag: usaFlag,
    popularity: 65,
  },
];

export const categoryArray = [
  { id: 455201, option: "Most Popular" },
  { id: 455202, option: "Popular" },
  { id: 455203, option: "Most Sell" },
];

export const orderByArray = [
  { id: 455201, option: "Recommended" },
  { id: 455202, option: "Most Popular" },
  { id: 455203, option: "Most Sell" },
];

export const deviceArray = [
  { id: 455201, option: "Device" },
  { id: 455202, option: "Option1" },
  { id: 455203, option: "Option2" },
  { id: 455204, option: "Option3" },
];

export const countryByArray = [
  { id: 455201, option: "USA" },
  { id: 455202, option: "UK" },
  { id: 455203, option: "JPN" },
];

export const offerWallCardData = [
  {
    id: 545401,
    cardImage: surveys1,
    cardTitle: "Your Surveys",
    category: "Most Popular",
    orderBy: "Recommended",
    device: "Option1",
    country: "USA",
    detailText:
      "You earn 6,250 points per survey and you can complete multiple surveys per day. Complete the survey until you reach the &quot;Thank you&quot; page.",
    offerPoint: 4000,
  },
  {
    id: 545402,
    cardImage: surveys2,
    cardTitle: "CPX Research",
    category: "Most Popular",
    orderBy: "Most Popular",
    device: "Option2",
    country: "UK",
    detailText:
      "Answer profiling questions and start doing matching surveys. Check back daily for new surveys.",
    offerPoint: 5000,
  },
  {
    id: 545403,
    cardImage: surveys3,
    cardTitle: "Speak Up",
    category: "Most Sell",
    orderBy: "Most Sell",
    device: "Option1",
    country: "UK",
    detailText:
      "Speak Up asks you a few questions and redirects you to a survey that matches your profile. You can complete multiple surveys per day with Speak Up!",
    offerPoint: 3500,
  },
  {
    id: 545404,
    cardImage: surveys4,
    cardTitle: "TheoremReach",
    category: "Popular",
    orderBy: "Recommended",
    device: "Option1",
    country: "JPN",
    detailText:
      "TheoremReach lets you choose between multiple surveys that match your profile. New surveys are added every day!",
    offerPoint: 4000,
  },
  {
    id: 545405,
    cardImage: surveys1,
    cardTitle: "Abstract",
    category: "Popular",
    orderBy: "Recommended",
    device: "Option1",
    country: "USA",
    detailText:
      "Abstract shows you a variety of surveys which match your profile. Make sure to check back frequently as new surveys are added every day.",
    offerPoint: 3000,
  },
  {
    id: 545406,
    cardImage: surveys3,
    cardTitle: "phoenix",
    category: "Most sell",
    orderBy: "Most sell",
    device: "Option2",
    country: "JPN",
    detailText:
      "Verify your email, complete your profiler and get access to different surveys. New surveys are added on a daily basis!",
    offerPoint: 4500,
  },
  {
    id: 545407,
    cardImage: surveys2,
    cardTitle: "Dragon",
    category: "Most Popular",
    orderBy: "Recommended",
    device: "Option3",
    country: "UK",
    detailText:
      "Answer a few profiler questions and get access to a variety of different surveys. New surveys are added every day!",
    offerPoint: 4000,
  },
];
