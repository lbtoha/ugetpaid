"use client";
import { Inter, Jost } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/fontawesome.min.css";
import "@/styles/arafat-font.css";
import "material-symbols";
import { Suspense, createContext, useState } from "react";
// import ScrollBackToTop from "@/components/scrollBackToTop/ScrollBackToTop";
import Loading from "./loading";
// import "material-symbols";
import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import "@/styles/main.scss";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import Footer from "@/components/shared/Footer";
import FeaturedOfferModal from "@/components/earn1/FeaturedOfferModal";
import FeatureOfferSurveysModal from "@/components/earn1/FeatureOfferSurveysModal";

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
  featureOfferModalOpen: boolean;
  setFeatureOfferModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  featureOfferSurveysModalOpen: boolean;
  setFeatureOfferSurveysModalOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

// menu default value for the context (empty object)
const defaultMenuContextValue: MenuContextValue = {
  menuOpen: false,
  setMenuOpen: () => {},
};

//  modal default value for the context (empty object)
const defaultModalContextValue: ModalContextValue = {
  featureOfferModalOpen: false,
  setFeatureOfferModalOpen: () => {},
  featureOfferSurveysModalOpen: false,
  setFeatureOfferSurveysModalOpen: () => {},
};

// context with the defined type and default value
export const MenuIsOpenOrNot = createContext<MenuContextValue>(
  defaultMenuContextValue
);

export const ModalIsOpenOrNot = createContext(defaultModalContextValue);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(true);
  const [featureOfferModalOpen, setFeatureOfferModalOpen] = useState(false);
  const [featureOfferSurveysModalOpen, setFeatureOfferSurveysModalOpen] =
    useState(false);

  return (
    <html lang="en">
      <body
        className={`relative ${jost.variable} ${inter.variable}  relative font-inter text-base text-CFFFFFF bg-C1A1F2C`}
      >
        <ModalIsOpenOrNot.Provider
          value={{
            featureOfferModalOpen,
            setFeatureOfferModalOpen,
            featureOfferSurveysModalOpen,
            setFeatureOfferSurveysModalOpen,
          }}
        >
          <MenuIsOpenOrNot.Provider value={{ menuOpen, setMenuOpen }}>
            <Navbar />
            <div
              className={`pl-5 pr-5 pt-[100px] ${
                menuOpen
                  ? "md:w-[calc(100%-240px)] md:ml-[240px]"
                  : "md:w-[calc(100%-150px)] md:ml-[150px]"
              }`}
            >
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <Footer />
            </div>
            {/* <ScrollBackToTop /> */}
          </MenuIsOpenOrNot.Provider>
          {featureOfferSurveysModalOpen && <FeatureOfferSurveysModal />}
          {featureOfferModalOpen && <FeaturedOfferModal />}
        </ModalIsOpenOrNot.Provider>
      </body>
    </html>
  );
}
