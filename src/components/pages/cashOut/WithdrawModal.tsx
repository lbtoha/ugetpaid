import { ModalIsOpenOrNot } from "@/app/layout";
import bitcoin from "@/public/images/icon/bitcoin-icon.png";
import Image from "next/image";
import React, { useContext } from "react";

const WithdrawModal = () => {
  const { setCashOutModalOpen } = useContext(ModalIsOpenOrNot);
  const handleModal = (event: React.MouseEvent) => {
    setCashOutModalOpen(false);
  };

  return (
    <div>
      <div
        onClick={handleModal}
        className="bg-C000000 fixed z-40 h-screen w-screen bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-C202534 p-S30 w-[800px] h-auto rounded-[20px] fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="bg-C272C3E p-5 rounded-[15px]">
            <div>
              <Image src={bitcoin} alt="bitcoin" />
              <p className="text-sm leading-[150% mt-5 text-CBDC4DA">
                Crypto withdrawals take a few minutes to be sent. New users have
                to earn $2.00 in order to make their first withdrawal.
              </p>
            </div>
          </div>
          <div className="bg-C272C3E p-5 rounded-[15px] mt-S30">
            <div>
              <p>BTC Address</p>
              <input
                placeholder="Enter your address..."
                className="placeholder:text-CBDC4DA placeholder:text-sm rounded-[15px] bg-C212737 px-S30 py-S15 mt-S15"
              />
              <p className="text-C00D675 text-xs leading-[150%] mt-S10">
                The Bitcoin Address for your Bitcoin Wallet.
              </p>
            </div>
            <div className="mt-S30">
              <p>Amount</p>
              <input
                placeholder="Enter Coin amount..."
                className="placeholder:text-CBDC4DA placeholder:text-sm rounded-[15px] bg-C212737 px-S30 py-S15 mt-S15"
              />
              <p className="text-C00D675 text-xs leading-[150%] mt-S10">
                Minimum: 5,000 coins ($5.00).
              </p>
            </div>
          </div>
          <div className="border border-dashed rounded-[15px] mt-5 p-S30 flex items-center justify-center gap-x-S30 bg-transparent">
            <div className="rounded-[10px] w-full shadow-CSHADOW bg-C2E3549 px-S30 py-S10">
              <p className="text-xs text-center">BTC Rate</p>
              <p className="text-center font-bold leading-[150%] mt-S5">
                $19,165.41
              </p>
            </div>
            <div className="rounded-[10px] w-full shadow-CSHADOW bg-C2E3549 px-S30 py-S10">
              <p className="text-xs text-center">Free</p>
              <p className="text-center font-bold leading-[150%] mt-S5">
                441 Coins
              </p>
            </div>
            <div className="rounded-[10px] w-full shadow-CSHADOW bg-C2E3549 px-S30 py-S10">
              <p className="text-xs text-center">You’ll Receive</p>
              <p className="text-center font-bold leading-[150%] mt-S5">
                00.00 BTC
              </p>
            </div>
          </div>
          <button className="bg-C09B65E shadow-CSHADOW w-full px-10 py-S10 rounded-[10px] mt-S30 text-center text-C282F41 font-bold leading-[150%]">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;
