"use client";
import lock from "@/public/images/icon/lock-icon.png";
import winningPrice from "@/public/images/icon/win-price-icon-1.png";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const GiveaWayDailyCases = ({ setModalOpen }: IProps) => {
  const handleModal = (event: React.MouseEvent) => {
    setModalOpen(false);
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <div
      onClick={handleModal}
      className="bg-C000000 fixed z-40 bg-opacity-50 top-0 bottom-0 left-0 right-0"
    >
      <div className="w-full h-[100vh] fixed  overflow-y-auto  top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">
        <div
          onClick={(e) => e.stopPropagation()}
          className=" fixed rounded-[15px] shadow flex-col justify-start items-center gap-10 inline-flex  my-[120px] h-auto p-S30 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[724px]  p-[30px] bg-[#252C3F] rounded-[20px] shadow border border-slate-600 flex-col justify-start items-center gap-[30px] inline-flex">
            <div className="self-stretch h-[298px] flex-col justify-start items-center gap-10 flex">
              <p className=" text-[32px] font-semibold leading-[41.60px] text-center">
                Open Daily Cases
              </p>
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div className="grow shrink basis-0 p-2.5 rounded-[15px] border border-[#343E59] flex-col justify-start items-center group hover:bg-gradient-giveaway gap-[15px] inline-flex">
                  <div className="w-[110px] h-[110px] p-[15px] bg-C263530 rounded-[55px] shadow border border-[#58BA9C] justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch bg-C206C55 rounded-[40px] justify-center items-center inline-flex">
                      {/* <Image
                        width={89}
                        height={89}
                        alt="Image"
                        className="w-[89px] h-[89px]"
                        // src="https://via.placeholder.com/89x89"
                      /> */}
                    </div>
                  </div>
                  <p className="text-center font-semibold leading-snug">
                    Earn 0/1,000 coins
                  </p>
                  <button className="px-5 py-2 bg-[#343E59] group-hover:bg-C09B65E group-hover:text-C282F41 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
                    <Image
                      src={lock}
                      alt="Lock"
                      width={18}
                      height={18}
                      className="w-[18px] h-[18px]"
                    />
                    <span className=" text-xs font-bold leading-[18px]">
                      Open for free
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* contains section */}
            <div className="self-stretch justify-center items-center gap-5 inline-flex">
              <div className="grow shrink basis-0 h-[15px] rotate-180 justify-start items-center flex">
                <div className="w-[15px] h-[15px] rounded-full border border-[#495576]" />
                <div className="grow shrink basis-0 h-[1px] bg-gradient-giveaway-modal"></div>
              </div>
              <span className="text-C00D675  font-semibold leading-snug">
                Contains
              </span>
              <div className="grow shrink basis-0 h-[15px] justify-start items-center flex">
                <div className="w-[15px] h-[15px] rounded-full border border-[#495576]" />
                <div className="grow shrink basis-0 h-[1px] bg-gradient-giveaway-modal"></div>
              </div>
            </div>
            <div className="self-stretch  flex-col justify-start items-center gap-5 flex">
              <div className="self-stretch  flex-col justify-center items-center gap-2.5 flex">
                <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 px-2.5 py-[30px] bg-C1F2432 hover:bg-gradient-giveaway rounded-[15px] shadow border border-[#343E59] flex-col justify-center items-center gap-5 inline-flex">
                    <div className="self-stretch flex-col justify-start items-center gap-2.5 flex">
                      <div className="w-[60px] h-[60px] p-S10 bg-[#262D3E] rounded-[10px] justify-center items-center inline-flex">
                        <Image
                          width={40}
                          height={40}
                          src={winningPrice}
                          alt="Winning Price"
                        />
                      </div>
                      <div className="self-stretch text-center text-C00D675 text-sm  leading-[21px]">
                        $250.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveaWayDailyCases;
