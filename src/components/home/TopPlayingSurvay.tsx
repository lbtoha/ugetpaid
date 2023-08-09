import React from "react";
import HomeHeading from "../shared/HomeHeading";
import Image from "next/image";
import profitableIllus1 from "@/public/images/profitable-illus-1.png";
import profitableIllus2 from "@/public/images/profitable-illus-2.png";
import profitableIllus3 from "@/public/images/profitable-illus-3.png";
import counterIcon1 from "@/public/images/icon/counter-icon-1.png";
import counterIcon2 from "@/public/images/icon/counter-icon-2.png";
import Icon from "../shared/Icon";

const TopPlayingSurvey = () => {
  return (
    <section className="section-gap">
      <div className="text-center max-w-[615px] mx-auto">
        <HomeHeading
          subHeading="Why is ugetpaid profitable"
          heading="Be the First to Know About Top Paying Survey Opportunities"
          paragraph="Our Survey is so easy to use that a 16-year-old can start making a steady income online right away."
          paragraphWidth={534}
        />
      </div>
      <div className="grid grid-cols-12 grid-rows-2 items-center mt-S60 gap-6">
        <div className="col-start-2 col-end-6 bg-C2E3549 rounded-[20px] pt-S70 row-span-2 ">
          <Image src={profitableIllus1} alt="Profitable Illustration" />
          <div className="mt-S50">
            <div className="flex gap-x-S30 ps-10 pe-10 pb-S30">
              <Icon iconImage={counterIcon2} />
              <div>
                <p className="text-2.3xl ">Highest payouts</p>
                <p className="mt-5">
                  Nec sed enim vel dolor pellentesque feugiat scelerisque
                  sodales. Risus morbi imperdiet mauris sit tempor. Quis nulla
                  sed scelerisque ridiculus tellus massa quam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-6 col-end-12 bg-C2E3549 rounded-[20px] row-start-1 row-end-2 py-S30 pe-5 flex  gap-x-S30">
          <Image src={profitableIllus2} alt="Profitable Illustration" />
          <div>
            <div className="border-gradient rounded-full items-center h-fit justify-center flex p-5 min-h-[80px] min-w-[80px] w-fit ">
              <Image src={counterIcon1} alt="Counter icon 1" />
            </div>
            <div>
              <p className="text-2.3xl mt-S30">Highest payouts</p>
              <p className="mt-5">
                Nec sed enim vel dolor pellentesque feugiat scelerisque sodales.
                Risus morbi imperdiet mauris sit tempor. Quis nulla sed
                scelerisque ridiculus tellus massa quam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-start-6 col-end-12 bg-C2E3549 rounded-[20px] row-start-2 row-end-3 pb-10 pe-5 flex items-center gap-x-S30">
          <Image src={profitableIllus3} alt="Profitable Illustration" />
          <div>
            <div className="border-gradient rounded-full items-center h-fit justify-center flex p-5 min-h-[80px] min-w-[80px] w-fit ">
              <Image src={counterIcon1} alt="Counter icon 1" />
            </div>
            <div>
              <p className="text-2.3xl mt-S30">Highest payouts</p>
              <p className="mt-5">
                Nec sed enim vel dolor pellentesque feugiat scelerisque sodales.
                Risus morbi imperdiet mauris sit tempor. Quis nulla sed
                scelerisque ridiculus tellus massa quam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPlayingSurvey;
