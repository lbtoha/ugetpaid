import { Inter, Jost } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/fontawesome.min.css";
import "@/styles/arafat-font.css";
import "material-symbols";
// import { Footer } from "@/components/shared/Footer";
// import { Navbar } from "@/components/shared/navbar/Navbar";
import { Suspense } from "react";
// import ScrollBackToTop from "@/components/scrollBackToTop/ScrollBackToTop";
import Loading from "./loading";
// import "material-symbols";
import { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative ${jost.variable} ${inter.variable}  relative font-inter text-base text-CFFFFFF bg-slate-400`}
      >
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {/* <Footer /> */}
        {/* <ScrollBackToTop /> */}
      </body>
    </html>
  );
}
