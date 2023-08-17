import Image from "next/image";
import React from "react";
import payment1 from "@/public/images/payment-icon-1.png";
import payment10 from "@/public/images/payment-icon-10.png";
import payment15 from "@/public/images/payment-icon-15.png";
import payment20 from "@/public/images/payment-icon-20.png";
import payment2 from "@/public/images/payment-icon-2.png";
import payment19 from "@/public/images/payment-icon-19.png";

const WithdrawSkins = () => {
  return (
    <div className="mt-10 rounded-[20px] border border-C525C79 bg-C242938 px-S30 py-10">
      <h2 className="text-3xl pb-5">Withdraw Cash</h2>
      <div className="pt-S30 border-t border-C53659A flex items-center  gap-x-S15 flex-wrap gap-y-S15">
        <Image src={payment1} width={300} alt="Payment" />
        <Image src={payment10} width={300} alt="Payment" />
        <Image src={payment15} width={300} alt="Payment" />
        <Image src={payment19} width={300} alt="Payment" />
        <Image src={payment20} width={300} alt="Payment" />
      </div>
    </div>
  );
};

export default WithdrawSkins;
