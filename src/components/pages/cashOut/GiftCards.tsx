import payment1 from "@/public/images/payment-icon-1.png";
import payment10 from "@/public/images/payment-icon-10.png";
import payment13 from "@/public/images/payment-icon-13.png";
import payment14 from "@/public/images/payment-icon-14.png";
import payment15 from "@/public/images/payment-icon-15.png";
import payment16 from "@/public/images/payment-icon-16.png";
import payment19 from "@/public/images/payment-icon-19.png";
import payment2 from "@/public/images/payment-icon-2.png";
import payment3 from "@/public/images/payment-icon-3.png";
import Image from "next/image";

const GiftCards = () => {
  return (
    <div className="mt-10 rounded-[20px] border border-C525C79 bg-C242938 px-S30 py-10">
      <h2 className="text-3xl pb-5">Withdraw Giftcards</h2>
      <div className="pt-S30 border-t border-C53659A flex items-center  gap-x-S15 flex-wrap gap-y-S15">
        <Image src={payment16} width={300} alt="Payment" />
        <Image src={payment10} width={300} alt="Payment" />
        <Image src={payment2} width={300} alt="Payment" />
        <Image src={payment1} width={300} alt="Payment" />
        <Image src={payment19} width={300} alt="Payment" />
        <Image src={payment15} width={300} alt="Payment" />
        <Image src={payment3} width={300} alt="Payment" />
        <Image src={payment13} width={300} alt="Payment" />
        <Image src={payment14} width={300} alt="Payment" />
        <Image src={payment14} width={300} alt="Payment" />
      </div>
    </div>
  );
};

export default GiftCards;
