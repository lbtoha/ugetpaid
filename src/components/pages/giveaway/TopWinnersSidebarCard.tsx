type Props = {
  value: number;
  text: string;
};
const TopWinnersSidebarCard = ({ value, text }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[9px] self-stretch border-b border-[#414E74] bg-[#2D354A] p-2.5 py-5 last-of-type:border-none">
      <p className="self-stretch text-center text-[28px] font-semibold leading-9 text-C00D675">
        ${value}
      </p>
      <p className="self-stretch text-center">{text}</p>
    </div>
  );
};

export default TopWinnersSidebarCard;
