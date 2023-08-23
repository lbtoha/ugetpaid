type Props = {
  position: string;
};
const TopDailyWinnersCard = ({ position }: Props) => {
  return (
    <div className="group flex flex-col items-center justify-start gap-[15px] rounded-[15px] border border-C343D59 p-2.5 hover:bg-gradient-giveaway">
      <div className="relative flex  items-center justify-center overflow-hidden rounded-[55px] border border-[#58BA9C] bg-C263530 p-S15 shadow">
        <p className="inline-flex items-center justify-center rounded-[40px] bg-[#206C55] p-[25px] text-xl font-bold leading-[30px]">
          {position}
        </p>
        <div className="absolute left-[2px] top-[69px] inline-flex w-full items-center justify-center gap-2.5 bg-emerald-400 px-2.5 py-[5px]">
          <p className="text-xs leading-[18px] text-C1A1F2C">Closed</p>
        </div>
      </div>
      <button className="inline-flex items-center justify-center gap-2.5 rounded-[15px] bg-C373F56 px-5 py-2 text-xs font-bold leading-[18px] group-hover:bg-[#09B65E]  group-hover:text-[#282F41]">
        View Winners
      </button>
    </div>
  );
};

export default TopDailyWinnersCard;
