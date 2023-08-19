"use client";
import "@/styles/arafat-font.css";
import "@/styles/fontawesome.min.css";
import "@/styles/globals.css";
import "material-symbols";
import { Inter, Jost } from "next/font/google";
import { Suspense, createContext, useState } from "react";
// import ScrollBackToTop from "@/components/scrollBackToTop/ScrollBackToTop";
import Loading from "./loading";
// import "material-symbols";
import FeatureOfferSurveysModal from "@/components/earn1/FeatureOfferSurveysModal";
import WithdrawModal from "@/components/pages/cashOut/WithdrawModal";
import LeaderBoardModal from "@/components/pages/leaderboard/LeaderboardTopEarners/LeaderBoardModal";
import OfferWallPageModal from "@/components/pages/offerwalls/OfferWallPageModal";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import "@/styles/main.scss";
import "@smastrom/react-rating/style.css";
import { Metadata } from "next";
import "react-range-slider-input/dist/style.css";
import "swiper/css/bundle";

const inter = Inter({ subsets: ["latin"], variable: "--body-font" });
const jost = Jost({
  subsets: ["latin"],
  variable: "--sub-font",
  weight: ["300", "400", "600", "700"],
});
export const metadata: Metadata = {
  title: "Home | UGETPAID",
  description: "NextJs Template",
};

interface MenuContextValue {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalContextValue {
  featureOfferSurveysModalOpen: boolean;
  setFeatureOfferSurveysModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  offerWallsOpen: boolean;
  setOfferWallOpen: React.Dispatch<React.SetStateAction<boolean>>;

  cashOutModalOpen: boolean;
  setCashOutModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

  leaderBoardModalOpen: boolean;
  setLeaderBoardModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// menu default value for the context (empty object)
const defaultMenuContextValue: MenuContextValue = {
  menuOpen: false,
  setMenuOpen: () => {},
};

//  modal default value for the context (empty object)
const defaultModalContextValue: ModalContextValue = {
  featureOfferSurveysModalOpen: false,
  setFeatureOfferSurveysModalOpen: () => {},

  offerWallsOpen: false,
  setOfferWallOpen: () => {},

  cashOutModalOpen: false,
  setCashOutModalOpen: () => {},

  leaderBoardModalOpen: false,
  setLeaderBoardModalOpen: () => {},
};

// context with the defined type and default value
export const MenuIsOpenOrNot = createContext<MenuContextValue>(
  defaultMenuContextValue,
);

export const ModalIsOpenOrNot = createContext(defaultModalContextValue);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(true);
  const [featureOfferSurveysModalOpen, setFeatureOfferSurveysModalOpen] =
    useState(false);
  const [offerWallsOpen, setOfferWallOpen] = useState(false);
  const [cashOutModalOpen, setCashOutModalOpen] = useState(false);
  const [leaderBoardModalOpen, setLeaderBoardModalOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`relative ${jost.variable} ${inter.variable} relative bg-C1A1F2C  font-inter text-base text-CFFFFFF `}
      >
        <ModalIsOpenOrNot.Provider
          value={{
            featureOfferSurveysModalOpen,
            setFeatureOfferSurveysModalOpen,
            offerWallsOpen,
            setOfferWallOpen,
            cashOutModalOpen,
            setCashOutModalOpen,
            leaderBoardModalOpen,
            setLeaderBoardModalOpen,
          }}
        >
          <MenuIsOpenOrNot.Provider value={{ menuOpen, setMenuOpen }}>
            <Navbar />
            <div
              className={`custom-transition px-2 pt-20 sm:px-5 md:pt-[100px] ${
                menuOpen
                  ? "md:ml-[240px] md:w-[calc(100%-240px)]"
                  : "md:ml-[150px] md:w-[calc(100%-150px)]"
              }`}
            >
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <Footer />
            </div>
            {/* <ScrollBackToTop /> */}
          </MenuIsOpenOrNot.Provider>
          {featureOfferSurveysModalOpen && <FeatureOfferSurveysModal />}
          {offerWallsOpen && <OfferWallPageModal />}
          {cashOutModalOpen && <WithdrawModal />}
          {leaderBoardModalOpen && <LeaderBoardModal />}
        </ModalIsOpenOrNot.Provider>
      </body>
    </html>
  );
}
