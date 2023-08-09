import React from "react";
type Props = {
  subHeading: string;
  heading: string;
  paragraph: string;
  paragraphWidth: number;
};

const HomeHeading = ({
  subHeading,
  heading,
  paragraph,
  paragraphWidth,
}: Props) => {
  return (
    <div>
      <p className="text-2xl text-C00FF8B">{subHeading}</p>
      <h2 className="text-4xl mt-[10px]">{heading}</h2>
      <p
        className={`text-sm mt-[10px] text-CBDC4DA max-w-[${paragraphWidth}px]`}
      >
        {paragraph}
      </p>
    </div>
  );
};

export default HomeHeading;
