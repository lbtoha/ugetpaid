"use client";
import giveawayIcon from "@/public/images/icon/giveaway-icon.png";
import lock from "@/public/images/icon/lock-icon.png";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {
  setPriceModalOpen: Dispatch<SetStateAction<boolean>>;
}

const GiveaWayPrice = ({ setPriceModalOpen }: IProps) => {
  const handleModal = (event: React.MouseEvent) => {
    setPriceModalOpen(false);
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
          <div className="w-[577px] px-[30px] py-10 bg-[#252C3F] rounded-[20px] shadow border border-[#475477] flex-col justify-start items-center gap-[30px] inline-flex">
            <div className=" pl-[45.50px] pr-[16.95px] pt-[46px] pb-[47px] bg-C206C55 rounded-[150px] justify-end items-center inline-flex">
              <Image
                width={237}
                height={207}
                alt="Price"
                className="w-[237.55px] h-[207px]"
                src={giveawayIcon}
              />
            </div>
            <div>
              <h2 className=" text-center text-[28px] font-semibold leading-9 mt-">
                $7500 Rolex Giveaway + 5x $500
              </h2>
              <p className="mt-S15 text-center text-CBDC4DA text-sm font-normal leading-[21px]">
                Good luck to everyone! There will be 6 winners in total.
                Cheating with the earn coins tasks will result in a re-roll.
              </p>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="w-full p-2.5 bg-[#2E354A]  border-e border-[#414E74] last-of-type:border-none ">
                  <p className="text-center text-C00D675 text-[28px] font-semibold leading-9">
                    0
                  </p>
                  <div className="text-center">Your Entries</div>
                </div>
                <div className="w-full p-2.5 bg-[#2E354A]  border-e border-[#414E74] last-of-type:border-none ">
                  <p className="text-center text-C00D675 text-[28px] font-semibold leading-9">
                    0
                  </p>
                  <div className="text-center">Your Entries</div>
                </div>
                <div className="w-full p-2.5 bg-[#2E354A]  border-e border-[#414E74] last-of-type:border-none ">
                  <p className="text-center text-C00D675 text-[28px] font-semibold leading-9">
                    0
                  </p>
                  <div className="text-center">Your Entries</div>
                </div>
              </div>
            </div>
            <button className="px-5 py-2 bg-[#343E59] hover:bg-C09B65E group-hover:text-C282F41 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
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
    </div>
  );
};

export default GiveaWayPrice;
