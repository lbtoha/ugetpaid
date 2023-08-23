const ShowCountDown = ({ days, hours, minutes, seconds }: any) => {
  return (
    <span className=" text-xl">
      {days}D : {hours}H : {minutes}M : {seconds}S
    </span>
  );
};

export default ShowCountDown;
