"use client";
import { latestActiveSliderData } from "@/public/data/home";
import Image from "next/image";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

const LatestActiveSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={"auto"}
      spaceBetween={3}
      speed={5000}
      loop={true}
      autoplay={{
        delay: 0,
        // disableOnInteraction: false,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },

        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
        1650: {
          slidesPerView: 6,
        },
      }}
    >
      {latestActiveSliderData.map(
        ({ id, thumbnail, offerWall, offerName, reward }) => (
          <SwiperSlide key={uuidv4()}>
            <div className="">
              <div className="flex items-center justify-between gap-x-2 rounded-xl bg-C333A4E px-[10px] py-[15px]">
                <div>
                  <div className="flex items-center gap-x-[15px]">
                    <div className="border-gradient rounded-bl-md rounded-br-xl rounded-tl-xl rounded-tr-md">
                      <Image
                        src={thumbnail}
                        alt="Active image 1"
                        className="min-w-[40px]"
                      />
                    </div>

                    <div>
                      <p className="text-xs text-CBBC2FA">{offerWall}</p>
                      <p className=" text-ellipsis text-CE0E4FF">{offerName}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-C5DDA1D bg-opacity-10 p-[15px] text-lg text-C5DDA1D">
                  <p>580</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
};

export default LatestActiveSlider;
