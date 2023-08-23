type Props = {
  number: number;
  title: string;
};
const GiveawayPriceModalButton = ({ number, title }: Props) => {
  return (
    <div className="w-full border-[#414E74] bg-[#2E354A]  p-2.5 last-of-type:border-none md:border-e ">
      <p className="text-center text-[28px] font-semibold leading-9 text-C00D675">
        {number}
      </p>
      <div className="text-center">{title}</div>
    </div>
  );
};

export default GiveawayPriceModalButton;
