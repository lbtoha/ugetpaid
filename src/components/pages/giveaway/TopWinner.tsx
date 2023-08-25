"use client";
import { giveawayTopWinnerLast24HoursData } from "@/public/data/giveaway";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import TopWinnersLast24HoursCard from "./TopWinnersLast24HoursCard";
const TopWinner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="section-gap">
      <div className="w-full space-y-S30">
        <div className=" flex items-center  justify-between">
          <h2 className="text-2xl font-semibold leading-[41.60px] md:text-[32px]">
            Top winners last 24 hours
          </h2>
          <div className=" flex items-center justify-center gap-5">
            <button className="custom-button-prev flex h-[30px] w-[30px] items-center justify-center rounded-[15px] bg-C2A3247 p-2 hover:bg-C206C55">
              <i className="icon-b-arrow-second" aria-hidden="true"></i>
            </button>
            <button className="custom-button-next flex h-[30px] w-[30px] rotate-180 items-center justify-center rounded-[15px] bg-C2A3247 p-2 hover:bg-C206C55">
              <i className="icon-b-arrow-second" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={3}
            navigation={{
              nextEl: ".custom-button-next",
              prevEl: ".custom-button-prev",
            }}
            className="mySwiper"
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },

              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
              1650: {
                slidesPerView: 9,
                spaceBetween: 10,
              },
            }}
          >
            {giveawayTopWinnerLast24HoursData.map(
              ({ prizeImage, prizePrice, userName, userImage }) => (
                <SwiperSlide key={uuidv4()}>
                  <TopWinnersLast24HoursCard
                    prizeImage={prizeImage}
                    prizePrice={prizePrice}
                    userName={userName}
                    userImage={userImage}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopWinner;
