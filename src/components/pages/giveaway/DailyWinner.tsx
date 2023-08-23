"use client";
import { topDailyWinnersData, winnerList } from "@/public/data/giveaway";
import crown2 from "@/public/images/icon/crown-kings-2.png";
import Image from "next/image";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import TopDailyWinnersCard from "./TopDailyWinnersCard";
import TopWinnersSidebarCard from "./TopWinnersSidebarCard";
import WinnerListCard from "./WinnerListCard";

const DailyWinner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="section-gap">
      <div className="relative rounded-3xl border-C475377 lg:border lg:pb-S60">
        <h2 className="text-center text-2xl font-semibold leading-[41.60px] md:text-[32px] lg:pt-[120px]">
          Top Daily Winners
        </h2>

        <div className="flex items-center px-20 py-[81px] pt-S60">
          <Swiper
            slidesPerView={1}
            spaceBetween={3}
            pagination={{
              dynamicBullets: true,
              el: ".custom-pagination",
              clickable: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation]}
            className="mySwiper"
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
            {topDailyWinnersData.map(({ position }) => (
              <SwiperSlide key={uuidv4()}>
                <TopDailyWinnersCard position={position} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute top-[190px] inline-flex w-full items-center justify-between gap-3.5 px-[30px] lg:top-[297px]">
          <button
            ref={prevRef}
            className="flex h-[30px] w-[30px] items-center justify-center rounded-[15px] bg-C2A3247 p-2 hover:bg-C206C55"
          >
            <i className="icon-b-arrow-second" aria-hidden="true"></i>
          </button>
          <button
            ref={nextRef}
            className="flex h-[30px] w-[30px] rotate-180 items-center justify-center rounded-[15px] bg-C2A3247 p-2 hover:bg-C206C55"
          >
            <i className="icon-b-arrow-second" aria-hidden="true"></i>
          </button>
        </div>
        <div className="grid-cols-12 gap-6 rounded-[20px] shadow max-4xl:space-y-6 sm:bg-[#262D3E] sm:p-5 lg:mx-[30px] 4xl:grid">
          <div className="col-span-3 rounded-[20px] border border-[#556593] bg-[#2D354A] p-5">
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center gap-2.5 self-stretch rounded-[15px] bg-[#394159] px-2.5 py-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-[30px] bg-[#373F56] py-[3.94px] pl-px pr-0.5">
                  <Image
                    alt="Image"
                    width={37}
                    height={37}
                    className="h-[32.11px] w-[37px]"
                    src={crown2}
                  />
                </div>
                <p className="text-xl font-semibold leading-7">Top Winners</p>
              </div>
            </div>
            <TopWinnersSidebarCard value={3726.0} text="Won" />
            <TopWinnersSidebarCard value={2123} text="Winner" />
            <TopWinnersSidebarCard value={1.75} text="Average Reward" />
          </div>
          <div className="col-start-4 col-end-13 grid-cols-2 gap-6 max-xl:space-y-6 xl:grid">
            <div>
              <div className="gap-[15px] space-y-[15px] rounded-[10px] border border-[#556593] bg-[#2D354A] p-[15px]">
                {winnerList.map(({ winnerImage, winnerName, reward }) => (
                  <WinnerListCard
                    key={uuidv4()}
                    winnerImage={winnerImage}
                    winnerName={winnerName}
                    reward={reward}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="gap-[15px] space-y-[15px] rounded-[10px] border border-[#556593] bg-[#2D354A] p-[15px]">
                {winnerList.map(({ winnerImage, winnerName, reward }) => (
                  <WinnerListCard
                    key={uuidv4()}
                    winnerImage={winnerImage}
                    winnerName={winnerName}
                    reward={reward}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyWinner;
