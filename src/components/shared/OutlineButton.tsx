import React from "react";

type Prop = {
  buttonText: string;
};

const OutlineButton = ({ buttonText }: Prop) => {
  return (
    <button className="cursor-pointer text-sm font-bold text-C09B65E bg-C09B65E bg-opacity-10 border border-C09B65E px-5 py-[10px] w-fit rounded-xl">
      <span>{buttonText}</span>
    </button>
  );
};

export default OutlineButton;
