import coin from "@/public/images/icon/win-price-icon-1.png";
import Image from "next/image";

const TopWinner = () => {
  return (
    <section className="section-gap">
      <div className="w-full space-y-S30">
        <div className=" justify-between items-center  flex">
          <h2 className=" text-[32px] font-semibold leading-[41.60px]">
            Top winners last 24 hours
          </h2>
          <div className=" justify-center items-center gap-5 flex">
            <button className="w-[30px] h-[30px] p-2 hover:bg-C206C55 bg-C2A3247 rounded-[15px] justify-center items-center flex">
              <i className="icon-b-arrow-second" aria-hidden="true"></i>
            </button>
            <button className="w-[30px] h-[30px] p-2 bg-C2A3247 hover:bg-C206C55 rotate-180 rounded-[15px] justify-center items-center flex">
              <i className="icon-b-arrow-second" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="w-full justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 px-2.5 py-[30px] bg-C1F2432 hover:bg-gradient-giveaway  shadow-BSGiveaway rounded-[15px]  border border-C343D59 hover:border-C406152 flex-col justify-center items-center gap-5 inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-2.5 flex">
              <div className="w-[60px] h-[60px] p-S10 bg-C2A3247 rounded-[10px] justify-center items-center flex">
                <Image src={coin} width={40} alt="Coin" />
              </div>
              <div className="self-stretch text-center text-C00D675 text-sm leading-[21px]">
                $250.00
              </div>
            </div>
            <div className="self-stretch h-[0px] border border-C343D59"></div>
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="w-[18px] h-[18px] pl-[0.09px] pr-[0.26px] bg-CF1B1E7 rounded-xl justify-center items-center flex">
                <Image
                  alt="Image"
                  width={18}
                  height={18}
                  className="w-[17.65px] h-[17.65px] rounded-full"
                  src="https://via.placeholder.com/18x18"
                />
              </div>
              <p className="text-CBDC4DA text-xs leading-[18px]">lazy616</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopWinner;
