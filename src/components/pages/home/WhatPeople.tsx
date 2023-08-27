"use client";
import MotionCardHoverEffect from "@/components/shared/MotionCardHoverEffect";
import { whatPeopleCardData } from "@/public/data/home";
//@ts-ignore
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import HomeHeading from "../../shared/HomeHeading";
import WhatPeopleSliderCard from "./WhatPeopleSliderCard";

const WhatPeople = () => {
  return (
    <section className="section-gap">
      <div className="mx-auto max-w-[615px] text-center">
        <HomeHeading
          subHeading="We want to hear from You!"
          heading="What people say about us"
          paragraph="ugetpaid is a community of over 5,000,000 members from all over the world"
          paragraphWidth={534}
        />
      </div>
      <div className="mt-3 md:mt-8">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            992: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1600: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1850: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1880: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          onSlideChange={() => console.log()}
          onSwiper={(swiper) => console.log()}
        >
          {whatPeopleCardData.map(
            ({
              id,
              image,
              name,
              country,
              heading,
              paragraph,
              rating,
              ratingTime,
            }) => (
              <SwiperSlide key={uuidv4()} className="my-5">
                <MotionCardHoverEffect>
                  <WhatPeopleSliderCard
                    image={image}
                    name={name}
                    country={country}
                    heading={heading}
                    paragraph={paragraph}
                    rating={rating}
                    ratingTime={ratingTime}
                  />
                </MotionCardHoverEffect>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatPeople;
