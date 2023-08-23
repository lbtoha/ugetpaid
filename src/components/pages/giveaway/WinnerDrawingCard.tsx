import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
type Props = {
  image: StaticImageData;
  price: number;
  children: ReactNode;
};

const WinnerDrawingCard = ({ image, price, children }: Props) => {
  return (
    <div className=" w-full space-y-S30 rounded-[20px] border border-[#566594] max-lg:px-5 max-lg:py-7 lg:px-[30px] lg:py-10">
      <div className="mx-auto w-fit rounded-[150px] bg-[#2E354A] px-[73px] py-[33px]">
        <Image alt="Image" width={153} height={234} src={image} />
      </div>
      <p className="mx-auto w-fit rounded-[30px] border border-[#ECAF16] bg-[#E6B85A] bg-opacity-20 px-[30px] py-[15px] text-center text-2xl font-semibold leading-[41.60px] md:text-[32px]">
        ${price}
      </p>
      <div>
        <p className="text-center text-xl font-semibold leading-7 text-C00D675">
          Winners Drawing In
        </p>
        <div className="mt-S15 text-center text-xl font-semibold leading-7 text-[#FFB600]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WinnerDrawingCard;
