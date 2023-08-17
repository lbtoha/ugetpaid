import crown2 from "@/public/images/icon/crown-kings-2.png";
import Image from "next/image";

const DailyWinner = () => {
  return (
    <section className="section-gap">
      <div className="relative pb-S60 rounded-3xl border border-C475377">
        <h2 className="pt-[120px] text-center text-[32px] font-semibold leading-[41.60px]">
          Top Daily Winners
        </h2>
        <div className="py-[81px] pt-S60 justify-center items-start gap-6 flex">
          <div className="p-2.5 rounded-[15px] border hover:bg-gradient-giveaway group border-C343D59 flex-col justify-start items-center gap-[15px] inline-flex">
            <div className="w-[110px] h-[110px] overflow-hidden relative p-S15 bg-C263530 rounded-[55px] shadow border border-[#58BA9C]">
              <p className="p-[25px] bg-[#206C55] rounded-[40px] justify-center text-xl font-bold leading-[30px] items-center inline-flex">
                1st
              </p>
              <div className="w-full px-2.5 py-[5px] left-[2px] top-[69px] absolute bg-emerald-400 justify-center items-center gap-2.5 inline-flex">
                <p className="text-C1A1F2C text-xs leading-[18px]">Closed</p>
              </div>
            </div>
            <div className="px-5 py-2 bg-C373F56 group-hover:bg-[#09B65E] group-hover:text-[#282F41] rounded-[15px] justify-center items-center gap-2.5 inline-flex">
              <button className="text-xs font-bold leading-[18px] ">
                View Winners
              </button>
            </div>
          </div>
        </div>
        <div className="w-full px-[30px] top-[297px] absolute justify-between items-center gap-3.5 inline-flex">
          <button className="w-[30px] h-[30px] p-2 hover:bg-C206C55 bg-C2A3247 rounded-[15px] justify-center items-center flex">
            <i className="icon-b-arrow-second" aria-hidden="true"></i>
          </button>
          <button className="w-[30px] h-[30px] p-2 bg-C2A3247 hover:bg-C206C55 rotate-180 rounded-[15px] justify-center items-center flex">
            <i className="icon-b-arrow-second" aria-hidden="true"></i>
          </button>
        </div>
        <div className=" p-5 mx-[30px]  bg-[#262D3E] rounded-[20px] shadow justify-start items-start gap-6 flex">
          <div className="grow shrink basis-0 p-5 bg-[#2D354A] rounded-[20px] border border-[#556593] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="self-stretch px-2.5 py-5 bg-[#394159] rounded-[15px] justify-center items-center gap-2.5 inline-flex">
              <div className="w-10 h-10 pl-px pr-0.5 py-[3.94px] bg-[#373F56] rounded-[30px] justify-center items-center flex">
                <Image
                  alt="Image"
                  width={37}
                  height={37}
                  className="w-[37px] h-[32.11px]"
                  src={crown2}
                />
              </div>
              <p className="text-xl font-semibold leading-7">Top Winners</p>
            </div>
            <div className="self-stretch h-[89px] p-2.5 bg-[#2D354A] flex-col justify-center items-center gap-[9px] flex border-b border-[#414E74] last-of-type:border-none">
              <p className="self-stretch text-center text-C00D675 text-[28px] font-semibold leading-9">
                $3,726.00
              </p>
              <p className="self-stretch text-center  ">Won</p>
            </div>
            <div className="self-stretch h-[89px] p-2.5 bg-[#2D354A] flex-col justify-center items-center gap-[9px] flex border-b border-[#414E74] last-of-type:border-none">
              <p className="self-stretch text-center text-C00D675 text-[28px] font-semibold leading-9">
                $3,726.00
              </p>
              <p className="self-stretch text-center  ">Won</p>
            </div>
          </div>
          <div className="justify-start items-start gap-6 flex">
            <div className="grow basis-0 p-[15px] bg-[#2D354A] rounded-[10px] border border-[#556593] flex-col justify-start items-center gap-[15px] inline-flex">
              <div className="self-stretch p-5 bg-[#3B445E] rounded-[10px] justify-start items-center gap-[103px] inline-flex">
                <div className="grow shrink basis-0 h-[60px] justify-start items-center gap-[15px] flex">
                  <Image
                    alt="Image"
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] bg-[#262D3E] rounded-[30px] justify-center items-center flex"
                    src="https://via.placeholder.com/60x60"
                  />
                  <div className="grow shrink basis-0">wolf227</div>
                </div>
                <p className="px-[15px] py-2.5   rounded-[10px] border border-neutral-700 justify-center items-center gap-2.5 flex text-C5DDA1D bg-C5DDA1D bg-opacity-20 text-lg leading-snug">
                  $375 Gucci wallet
                </p>
              </div>
            </div>
            <div className="grow basis-0 p-[15px] bg-[#2D354A] rounded-[10px] border border-[#556593] flex-col justify-start items-center gap-[15px] inline-flex">
              <div className="self-stretch p-5 bg-[#3B445E] rounded-[10px] justify-start items-center gap-[103px] inline-flex">
                <div className="grow shrink basis-0 h-[60px] justify-start items-center gap-[15px] flex">
                  <Image
                    alt="Image"
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] bg-[#262D3E] rounded-[30px] justify-center items-center flex"
                    src="https://via.placeholder.com/60x60"
                  />
                  <div className="grow shrink basis-0">wolf227</div>
                </div>
                <p className="px-[15px] py-2.5   rounded-[10px] border border-neutral-700 justify-center items-center gap-2.5 flex text-C5DDA1D bg-C5DDA1D bg-opacity-20 text-lg leading-snug">
                  $375 Gucci wallet
                </p>
              </div>
              <div className="self-stretch p-5 bg-[#3B445E] rounded-[10px] justify-start items-center gap-[103px] inline-flex">
                <div className="grow shrink basis-0 h-[60px] justify-start items-center gap-[15px] flex">
                  <Image
                    alt="Image"
                    width={60}
                    height={60}
                    className="w-[60px] h-[60px] bg-[#262D3E] rounded-[30px] justify-center items-center flex"
                    src="https://via.placeholder.com/60x60"
                  />
                  <div className="grow shrink basis-0">wolf227</div>
                </div>
                <p className="px-[15px] py-2.5   rounded-[10px] border border-neutral-700 justify-center items-center gap-2.5 flex text-C5DDA1D bg-C5DDA1D bg-opacity-20 text-lg leading-snug">
                  $375 Gucci wallet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyWinner;
