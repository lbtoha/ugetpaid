const RewardsCountDown = ({ hours, minutes, seconds }: any) => {
  return (
    <span className="text-C00FF8B">
      {hours}H : {minutes}M : {seconds}S
    </span>
  );
};

export default RewardsCountDown;
