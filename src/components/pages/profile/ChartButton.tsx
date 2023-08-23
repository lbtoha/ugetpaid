type Props = {
  number: number;
  heading: string;
};
const ChartButton = ({ number, heading }: Props) => {
  return (
    <div className="inline-flex w-full flex-col items-center justify-center gap-[5px] rounded-[15px] bg-C2E3549 p-5">
      <p className="self-stretch text-center text-2xl font-semibold leading-[33.60px] text-C109F5A">
        {number}
      </p>
      <p className="self-stretch text-center ">{heading}</p>
    </div>
  );
};

export default ChartButton;
