type Prop = {
  badgeRank: number;
};
const RankBadge = ({ badgeRank }: Prop) => {
  return (
    <p className="left-[19px] w-[50px] h-[50px] bg-contain flex justify-center items-center  top-[20px]  text-white text-[12.93px] font-normal  rank-bg">
      {badgeRank}
    </p>
  );
};

export default RankBadge;
