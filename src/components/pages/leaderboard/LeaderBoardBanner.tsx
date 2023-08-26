import priceBox from "@/public/images/price-box-icon.png";
import Image from "next/image";

const LeaderBoardBanner = () => {
  return (
    <div className="leaderboard mt-S15 xl:mt-S30">
      <div className="pt-S80">
        <div className="leaderboard__priceing mx-auto flex w-5/6 items-center justify-center text-center lg:w-3/4 xxl:w-1/2 ">
          <div>
            <Image src={priceBox} alt="Price box" className="mx-auto block" />
            <div className="flex justify-center gap-5 pb-S70 text-lg max-md:flex-wrap  lg:text-xl">
              <button className="rounded-[10px] bg-C02835B px-5 py-5 text-center font-bold leading-[150%] lg:px-S30">
                $500.00 Daily
              </button>
              <button className="rounded-[10px] bg-C02835B px-5 py-5 text-center font-bold leading-[150%] lg:px-S30">
                $10,000.00 Monthly
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardBanner;
