import bitcoin from "@/public/images/icon/bitcoin-icon.png";
import Image from "next/image";

const WithdrawModal = () => {
  return (
    <div className=" rounded-[20px] bg-C202534 p-5 md:p-S30">
      <div className="rounded-[15px] bg-C272C3E p-5">
        <div>
          <Image src={bitcoin} alt="bitcoin" />
          <p className="leading-[150% mt-5 text-sm text-CBDC4DA">
            Crypto withdrawals take a few minutes to be sent. New users have to
            earn $2.00 in order to make their first withdrawal.
          </p>
        </div>
      </div>
      <div className="mt-S30 rounded-[15px] bg-C272C3E p-5">
        <div>
          <p>BTC Address</p>
          <input
            placeholder="Enter your address..."
            className="mt-S15 rounded-[15px] bg-C212737 px-5 py-S15 placeholder:text-sm placeholder:text-CBDC4DA md:px-S30"
          />
          <p className="mt-S10 text-xs leading-[150%] text-C00D675">
            The Bitcoin Address for your Bitcoin Wallet.
          </p>
        </div>
        <div className="mt-S30">
          <p>Amount</p>
          <input
            placeholder="Enter Coin amount..."
            className="mt-S15 rounded-[15px] bg-C212737 px-5 py-S15 placeholder:text-sm placeholder:text-CBDC4DA md:px-S30"
          />
          <p className="mt-S10 text-xs leading-[150%] text-C00D675">
            Minimum: 5,000 coins ($5.00).
          </p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-5 rounded-[15px] border border-dashed bg-transparent p-5 max-md:flex-wrap md:gap-S30 md:p-S30">
        <div className="w-full rounded-[10px] bg-C2E3549 px-0 py-S10 shadow-CSHADOW md:px-S30">
          <p className="text-center text-xs">BTC Rate</p>
          <p className="mt-S5 text-center font-bold leading-[150%]">
            $19,165.41
          </p>
        </div>
        <div className="w-full rounded-[10px] bg-C2E3549 px-S30 py-S10 shadow-CSHADOW">
          <p className="text-center text-xs">Free</p>
          <p className="mt-S5 text-center font-bold leading-[150%]">
            441 Coins
          </p>
        </div>
        <div className="w-full rounded-[10px] bg-C2E3549 px-S30 py-S10 shadow-CSHADOW">
          <p className="text-center text-xs">You’ll Receive</p>
          <p className="mt-S5 text-center font-bold leading-[150%]">
            00.00 BTC
          </p>
        </div>
      </div>
      <button className="mt-S30 w-full rounded-[10px] bg-C09B65E px-10 py-S10 text-center font-bold leading-[150%] text-C282F41 shadow-CSHADOW">
        Withdraw
      </button>
    </div>
  );
};

export default WithdrawModal;
