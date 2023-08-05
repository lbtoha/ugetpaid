import React from "react";
type Props = {
  subHeading: string;
  heading: string;
  paragraph: string;
};

const HomeHeading = ({ subHeading, heading, paragraph }: Props) => {
  return (
    <div>
      <p className="text-2xl text-C00FF8B">{subHeading}</p>
      <h2 className="text-4xl">{heading}</h2>
      <p className="text-sm text-CBDC4DA max-w-[374px]">{paragraph}</p>
    </div>
  );
};

export default HomeHeading;
