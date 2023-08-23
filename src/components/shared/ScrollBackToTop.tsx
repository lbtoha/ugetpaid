"use client";
import { useEffect, useState } from "react";

const ScrollBackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowButton(scrollY > 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed right-5   z-[20000] translate-y-[100%] rounded-md bg-C09B65E px-2 py-1 text-white shadow-md shadow-green-200  ${
        showButton
          ? " custom-transition visible bottom-10 translate-y-[3%] lg:bottom-16"
          : " custom-transition invisible bottom-[-10px]"
      }`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-angles-up text-2xl  md:text-3xl"></i>
    </button>
  );
};

export default ScrollBackToTop;
