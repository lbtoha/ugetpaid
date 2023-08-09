"use client";
import React from "react";
import HomeHeading from "../shared/HomeHeading";
import Image from "next/image";
import activeImage1 from "@/public/images/activites-img-1.png";
import activeImage2 from "@/public/images/activites-img-2.png";
import activeImage3 from "@/public/images/activites-img-3.png";
import activeImage4 from "@/public/images/activites-img-4.png";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import quotation from "@/public/images/icon/quotation.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const WhatPeople = () => {
  const [rating, setRating] = useState(0); // Initial value
  const whatPeopleCardData = [
    {
      id: 5821,
      image: activeImage1,
      name: "John Doe",
      country: "Indonesia",
      heading: "“Great experience”",
      paragraph:
        "Great experience. Nice. Excellent survey. Without any interruption we can do. Legit site .",
      rating: 5,
      ratingTime: 1,
    },
    {
      id: 5822,
      image: activeImage2,
      name: "Alice Smith",
      country: "Vietnam",
      heading: "“Excellent survey panel”",
      paragraph:
        "Excellent survey panel I am always waiting for the task Thank you so much",
      rating: 4,
      ratingTime: 5,
    },
    {
      id: 5823,
      image: activeImage3,
      name: "Sophia Miller",
      country: "Canada",
      heading: "“Reputable survey site.”",
      paragraph:
        "Great experience. Nice. Excellent survey. Without any interruption we can do. Legit site .   ",
      rating: 5,
      ratingTime: 3,
    },
    {
      id: 5824,
      image: activeImage3,
      name: "John Doe",
      country: "Indonesia",
      heading: "“Great experience”",
      paragraph:
        "Great experience. Nice. Excellent survey. Without any interruption we can do. Legit site .",
      rating: 4,
      ratingTime: 2,
    },
    {
      id: 5824,
      image: activeImage3,
      name: "John Doe",
      country: "Indonesia",
      heading: "“Great experience”",
      paragraph:
        "Great experience. Nice. Excellent survey. Without any interruption we can do. Legit site .",
      rating: 4,
      ratingTime: 2,
    },
    {
      id: 5824,
      image: activeImage3,
      name: "John Doe",
      country: "Indonesia",
      heading: "“Great experience”",
      paragraph:
        "Great experience. Nice. Excellent survey. Without any interruption we can do. Legit site .",
      rating: 4,
      ratingTime: 2,
    },
    {
      id: 5824,
      image: activeImage3,
      name: "John Doe",
      country: "Indonesia",
      heading: "“Great experience”",
      paragraph:
        "Great experience. Nice. Excellent survey. Without any interruption we can do. Legit site .",
      rating: 4,
      ratingTime: 2,
    },
  ];

  return (
    <section className="section-gap">
      <div className="text-center max-w-[615px] mx-auto">
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
          spaceBetween={24}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
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
              <SwiperSlide key={id}>
                <div>
                  <div className="px-S30 py-10 bg-C2E3549 rounded-[15px] relative">
                    <div className="flex items-center gap-x-5">
                      <Image
                        src={image}
                        alt="active Image"
                        className="bg-C3E4762 h-S60 w-S60 rounded-full"
                      />
                      <div>
                        <p className="text-xl">{name}</p>
                        <p className="text-sm">{country}</p>
                      </div>
                    </div>
                    <div>
                      <p className="mt-6 text-2.3xl ">{heading}</p>
                      <p className="text-lg mt-S15 pb-6 border-b text-CBDC4DA border-b-C626F95">
                        {paragraph}
                      </p>
                    </div>
                    <div className="pt-6 flex items-center justify-between">
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
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatPeople;
