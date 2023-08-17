import counterIcon1 from "@/public/images/icon/counter-icon-1.png";
import counterIcon2 from "@/public/images/icon/counter-icon-2.png";
import profitableIllus1 from "@/public/images/profitable-illus-1.png";
import profitableIllus2 from "@/public/images/profitable-illus-2.png";
import profitableIllus3 from "@/public/images/profitable-illus-3.png";
import Image from "next/image";
import HomeHeading from "../../shared/HomeHeading";
import Icon from "../../shared/Icon";

const TopPlayingSurvey = () => {
  return (
    <section className="section-gap">
      <div className="mx-auto max-w-[615px] text-center">
        <HomeHeading
          subHeading="Why is ugetpaid profitable"
          heading="Be the First to Know About Top Paying Survey Opportunities"
          paragraph="Our Survey is so easy to use that a 16-year-old can start making a steady income online right away."
          paragraphWidth={534}
        />
      </div>
      <div className="mt-S60 grid-cols-12 grid-rows-2 items-center gap-5 max-xl:space-y-5 xl:grid xxl:gap-6">
        <div className="col-start-1 col-end-7 row-span-2 grid-cols-3 items-center rounded-[20px] bg-C2E3549 pt-S70 max-xl:py-S30 sm:max-xl:grid xl:h-full xxl:col-end-6 3xl:col-start-2 3xl:col-end-6">
          <Image
            src={profitableIllus1}
            alt="Profitable Illustration"
            className="col-span-1 max-sm:mx-auto max-sm:block"
          />
          <div className="col-start-2 col-end-4 max-sm:pt-10 xl:mt-S50">
            <div className="gap-x-S30 px-S15 pb-S30 max-xl:items-center xl:flex xxl:px-10">
              <Icon iconImage={counterIcon2} />
              <div>
                <p className="text-2xl max-xl:mt-S30 xl:text-2.3xl">
                  Highest payouts
                </p>
                <p className="mt-5">
                  Nec sed enim vel dolor pellentesque feugiat scelerisque
                  sodales. Risus morbi imperdiet mauris sit tempor. Quis nulla
                  sed scelerisque ridiculus tellus massa quam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-7 col-end-13 row-start-1 row-end-2 grid-cols-3 items-center  gap-x-S30 rounded-[20px] bg-C2E3549 py-S30 pe-5 max-sm:px-S15 sm:grid xl:h-full xxl:col-start-6 3xl:col-start-6 3xl:col-end-12">
          <Image
            src={profitableIllus2}
            alt="Profitable Illustration"
            className="col-span-1 max-sm:mx-auto max-sm:block"
          />
          <div className="col-start-2 col-end-4 max-sm:pt-10">
            <Icon iconImage={counterIcon1} />
            <div>
              <p className="mt-S30 text-2xl xl:text-2.3xl">Highest payouts</p>
              <p className="mt-5">
                Nec sed enim vel dolor pellentesque feugiat scelerisque sodales.
                Risus morbi imperdiet mauris sit tempor. Quis nulla sed
                scelerisque ridiculus tellus massa quam.
              </p>
            </div>
          </div>
        </div>
        <div className="col-start-7 col-end-13 row-start-2 row-end-3 grid-cols-3 items-center gap-x-S30 rounded-[20px] bg-C2E3549 py-S30 pb-10 pe-5 max-sm:px-S15 sm:grid xl:h-full xxl:col-start-6 3xl:col-start-6 3xl:col-end-12">
          <Image
            src={profitableIllus3}
            width={280}
            alt="Profitable Illustration"
            className="col-span-1 max-sm:mx-auto max-sm:block"
          />

          <div className="col-start-2 col-end-4 max-sm:pt-10">
            <Icon iconImage={counterIcon1} />
            <div>
              <p className="mt-S30 text-2xl xl:text-2.3xl">Highest payouts</p>
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
