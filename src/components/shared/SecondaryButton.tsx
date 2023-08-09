import React from "react";

type Prop = {
  buttonText: string;
};

const SecondaryButton = ({ buttonText }: Prop) => {
  return (
    <button className="cursor-pointer  font-bold text-C282F41 text-sm shadow-[0px 4px 16px 0px rgba(0, 0, 0, 0.25)]  bg-C09B65E px-5 py-[10px] w-fit rounded-xl">
      <span>{buttonText}</span>
    </button>
  );
};

export default SecondaryButton;
