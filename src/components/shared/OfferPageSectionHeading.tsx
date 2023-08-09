import React from "react";

type Props = {
  heading: string;
  subHeading: string;
};

const OfferPageSectionHeading = ({ heading, subHeading }: Props) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl">{heading}</h2>
      <p className="max-w-[374px] text-sm text-CBDC4DA mx-auto mt-S10">
        {subHeading}
      </p>
    </div>
  );
};

export default OfferPageSectionHeading;
