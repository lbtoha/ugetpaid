"use client";
import { whatPeopleCardData } from "@/public/data/home";
import quotation from "@/public/images/icon/quotation.png";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import { useState } from "react";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import HomeHeading from "../../shared/HomeHeading";

const WhatPeople = () => {
  const [rating, setRating] = useState(0); // Initial value

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
      <div className="mt-S60 ">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          // }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },

            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1850: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1880: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
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
              <SwiperSlide
                key={uuidv4()}
                className="relative rounded-[15px] bg-C2E3549 px-S15 py-10 xl:px-S30 "
              >
                <div className="flex items-center gap-x-5">
                  <Image
                    src={image}
                    alt="active Image"
                    className="h-S60 w-S60 rounded-full bg-C3E4762"
                  />
                  <div>
                    <p className="text-xl">{name}</p>
                    <p className="text-sm">{country}</p>
                  </div>
                </div>
                <div>
                  <p className="mt-6 text-2xl xxl:text-2.3xl" title={heading}>
                    {heading}
                  </p>
                  <p className="mt-1 border-b border-b-C626F95 pb-6 text-base text-CBDC4DA xl:mt-S15 xl:text-lg">
                    {paragraph.length > 70
                      ? paragraph.substring(0, 70) + "..."
                      : paragraph}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-6">
                  <div>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={rating}
                      onChange={setRating}
                    />
                  </div>
                  <p className="text-sm">{ratingTime} hour ago</p>
                </div>
                <Image
                  src={quotation}
                  alt="Quotation"
                  className="absolute right-[3%] top-[4%] w-[76px]"
                />
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatPeople;
