"use client";
import priceBox from "@/public/images/icon/slider-icon.png";
import Image from "next/image";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import GiveaWayDailyCases from "./GiveaWayDailyCases";
import GiveaWayPrice from "./GiveaWayPrice";

const GiveawayBanner = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [priceModalOpen, setPriceModalOpen] = useState(false);
  const swiper = useSwiper();
  return (
    <div className="giveawayBanner mt-S30">
      <div className="pt-S60">
        <div>
          <p className="text-center text-2xl">You can win money</p>
          <h2 className="text-center text-C00D675 text-[80px] font-semibold leading-[104px] mt-S10">
            $100,000
          </h2>
          <div className="justify-center gap-5 flex mt-S30">
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-[15px] bg-C09B65E rounded-[10px] shadow justify-start items-center gap-2.5 flex text-C282F41 font-bold"
            >
              Open Daily Cases
            </button>
            <button
              onClick={() => setPriceModalOpen(true)}
              className="px-5 py-[15px] bg-C09B65E bg-opacity-20 rounded-[10px] border border-C78A597 justify-start items-center gap-2.5 flex font-bold"
            >
              Enter $10,000 Giveaway
            </button>
          </div>
        </div>
        <div className="giveawayBanner__priceing text-center w-1/2 py-10 mx-auto flex justify-center mt-S60 ">
          <Swiper
            pagination={{
              dynamicBullets: true,
              el: ".pagination-area",
              bulletClass: ".swiper-pagination-bullet",
              clickable: true,
            }}
            navigation={{
              nextEl: ".navigation-area",
              prevEl: ".navigation-area",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <Image
                  src={priceBox}
                  alt="Price box"
                  className="block mx-auto mt-10"
                />
                <p className=" text-xl font-semibold leading-7 mt-S30">
                  The prizes you can win vary daily and range
                </p>
                <p className="mt-S15 text-[32px] font-semibold leading-[41.60px]">
                  From $0,25 to $599
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={priceBox}
                  alt="Price box"
                  className="block mx-auto mt-10"
                />
                <p className=" text-xl font-semibold leading-7 mt-S30">
                  The prizes you can win vary daily and range
                </p>
                <p className="mt-S15 text-[32px] font-semibold leading-[41.60px]">
                  From $0,25 to $599
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className=" justify-center items-center gap-5 flex mt-10">
            <button className="w-[30px] h-[30px] p-2 hover:bg-C206C55 bg-C2A3247 rounded-[15px] justify-center items-center flex">
              <i className="icon-b-arrow-second" aria-hidden="true"></i>
            </button>
            <div className="justify-start items-center gap-[5px] flex pagination-are w-20">
              <span className=" w-3 h-3 relative bg-C206C55 rounded-md swiper-pagination-bullet" />
            </div>
            <button
              onClick={() => swiper.slidePrev()}
              className="w-[30px] h-[30px] p-2 bg-C2A3247 hover:bg-C206C55 rotate-180 rounded-[15px] justify-center items-center flex"
            >
              <i className="icon-b-arrow-second" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      {modalOpen && <GiveaWayDailyCases setModalOpen={setModalOpen} />}
      {priceModalOpen && (
        <GiveaWayPrice setPriceModalOpen={setPriceModalOpen} />
      )}
    </div>
  );
};

export default GiveawayBanner;
