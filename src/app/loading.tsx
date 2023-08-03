import "@/styles/preloder.css";

import React from "react";

const Loading = () => {
  return (
    <div className="custom-transition absolute left-0 top-0 z-[50000] flex h-screen w-full items-center justify-center bg-white transition-transform">
      <div className="loading ">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
