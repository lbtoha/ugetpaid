"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import activeImage1 from "@/public/images/activites-img-1.png";
import activeImage2 from "@/public/images/activites-img-2.png";
import activeImage3 from "@/public/images/activites-img-3.png";
import activeImage4 from "@/public/images/activites-img-4.png";

const LatestActive = () => {
  const latestActiveSliderData = [
    {
      id: 12001,
      thumbnail: activeImage1,
      offerWall: "ugetpaid",
      offerName: "Lionel",
      reward: 580,
    },
    {
      id: 12001,
      thumbnail: activeImage2,
      offerWall: "lootably",
      offerName: "Perry32",
      reward: 580,
    },
    {
      id: 12001,
      thumbnail: activeImage3,
      offerWall: "labResearch",
      offerName: "Foster@3",
      reward: 580,
    },
    {
      id: 12001,
      thumbnail: activeImage4,
      offerWall: "withdrawal",
      offerName: "LTC",
      reward: 580,
    },
    {
      id: 12001,
      thumbnail: activeImage4,
      offerWall: "CPX Research",
      offerName: "Stevenson32",
      reward: 580,
    },
    {
      id: 12001,
      thumbnail: activeImage2,
      offerWall: "Timewalls",
      offerName: "Mathis32",
      reward: 580,
    },
    {
      id: 12001,
      thumbnail: activeImage3,
      offerWall: "CPX Research",
      offerName: "Stevenson32",
      reward: 580,
    },
  ];
  var settings = {
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
    variableWidth: true,
    infinite: true,
    slidesToShow: 6,
    // autoplaySpeed: 2000,
    // centerMode: false,
    swipeToSlide: true,
    focusOnSelect: true,
    // cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",

    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },

      {
        breakpoint: 768,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 6, slidesToScroll: 1 },
      },
    ],
  };
  return (
    <>
      {/* <Slider {...settings}>
        {latestActiveSliderData.map(
          ({ id, thumbnail, offerWall, offerName, reward }) => (
            <div key={id}>
              <div className="px-2">
                <div className="px-[10px] py-[15px] flex items-center justify-between gap-x-2 bg-C333A4E rounded-xl">
                  <div className="flex items-center gap-x-[15px]">
                    <div className="rounded-tr-md rounded-bl-md rounded-tl-xl rounded-br-xl border-gradient">
                      <Image
                        src={thumbnail}
                        alt="Active image 1"
                        className="min-w-[40px]"
                      />
                    </div>

                    <div>
                      <p className="text-CBBC2FA text-xs">{offerWall}</p>
                      <p className="text-CE0E4FF">{offerName}</p>
                    </div>
                  </div>
                  <div className="text-C5DDA1D text-lg bg-C5DDA1D bg-opacity-10 p-[15px] rounded-xl">
                    <p>580</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Slider> */}
    </>
  );
};

export default LatestActive;
