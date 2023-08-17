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
      <p className="text-lg text-C00FF8B md:text-xl xl:text-2xl">
        {subHeading}
      </p>
      <h2 className="mt-[10px] text-2xl md:text-2.3xl lg:text-3xl xl:text-4xl">
        {heading}
      </h2>
      <p
        className={`mt-[10px] text-sm text-CBDC4DA max-w-[${paragraphWidth}px]`}
      >
        {paragraph}
      </p>
    </div>
  );
};

export default HomeHeading;
