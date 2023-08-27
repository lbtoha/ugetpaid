"use client";
import Footer from "@/components/shared/Footer";
import ScrollBackToTop from "@/components/shared/ScrollBackToTop";
import Navbar from "@/components/shared/navbar/Navbar";
import "@/styles/arafat-font.css";
import "@/styles/fontawesome.min.css";
import "@/styles/globals.css";
import "@/styles/main.scss";
import "@smastrom/react-rating/style.css";
import "material-symbols";
import { Inter, Jost } from "next/font/google";
import { Suspense, createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import "react-range-slider-input/dist/style.css";
import "react-responsive-modal/styles.css";
import "swiper/css/bundle";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"], variable: "--body-font" });
const jost = Jost({
  subsets: ["latin"],
  variable: "--sub-font",
  weight: ["300", "400", "600", "700"],
});

interface MenuContextValue {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// menu default value for the context (empty object)
const defaultMenuContextValue: MenuContextValue = {
  menuOpen: false,
  setMenuOpen: () => {},
};

// context with the defined type and default value
export const MenuIsOpenOrNot = createContext<MenuContextValue>(
  defaultMenuContextValue,
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <html lang="en">
      <head>
        <title>
          UGETPAID | online survey for get paid website html template | NextJs
          Template
        </title>
      </head>
      <body
        className={`relative ${jost.variable} ${inter.variable} relative bg-C1A1F2C  font-inter text-base text-CFFFFFF `}
      >
        <MenuIsOpenOrNot.Provider value={{ menuOpen, setMenuOpen }}>
          <Navbar />
          <div
            className={`custom-transition px-2 pt-[75px] sm:pt-[89px] md:px-3 ${
              menuOpen
                ? "md:ml-[240px] md:w-[calc(100%-240px)]"
                : "md:ml-[150px] md:w-[calc(100%-150px)]"
            }`}
          >
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer />
          </div>
        </MenuIsOpenOrNot.Provider>
        <Toaster />
        <ScrollBackToTop />
      </body>
    </html>
  );
}
