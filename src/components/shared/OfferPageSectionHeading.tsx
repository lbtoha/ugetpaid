type Props = {
  heading: string;
  subHeading: string;
};

const OfferPageSectionHeading = ({ heading, subHeading }: Props) => {
  return (
    <div className="text-center">
      <h2 className="mt-[-10px] text-4xl">{heading}</h2>
      <p className="mx-auto mt-S10 max-w-[374px] text-sm text-CBDC4DA">
        {subHeading}
      </p>
    </div>
  );
};

export default OfferPageSectionHeading;
