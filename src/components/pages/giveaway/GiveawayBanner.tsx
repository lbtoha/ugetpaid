"use client";
import giveaWayIllus1 from "@/public/images/giveaway-illus-1.png";
import giveaWayIllus2 from "@/public/images/giveaway-illus-2.png";
import giveaWayIllus3 from "@/public/images/giveaway-illus-3.png";
import priceBox from "@/public/images/icon/slider-icon.png";
import Image from "next/image";
import { useState } from "react";
// import "swiper/css/navigation";
import { closeIcon } from "@/components/shared/ModalCloseIcon";
import Modal from "react-responsive-modal";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GiveaWayDailyCases from "./GiveaWayDailyCases";
import GiveaWayPrice from "./GiveaWayPrice";

const GiveawayBanner = () => {
  const [openGiveaWayDailyCases, setOpenGiveaWayDailyCases] = useState(false);
  const [openEnterGiveawayModal, setOpenEnterGiveawayModal] = useState(false);

  const [priceModalOpen, setPriceModalOpen] = useState(false);
  return (
    <div className="giveawayBanner relative mt-5 md:mt-8 lg:mt-S30">
      <div className="pt-S60">
        <div>
          <p className="text-center text-2xl">You can win money</p>
          <h2 className="mt-2.5 text-center text-4xl font-semibold text-C00D675 sm:text-5xl md:mt-5 xl:text-[80px]">
            $100,000
          </h2>
          <div className="mx-10 mt-S30 flex flex-wrap justify-center gap-5">
            <button
              onClick={() => setOpenGiveaWayDailyCases(true)}
              className="flex items-center justify-start gap-2.5 rounded-[10px] bg-C09B65E px-3 py-[15px] font-bold text-C282F41 shadow sm:px-5"
            >
              Open Daily Cases
            </button>
            <button
              onClick={() => setOpenEnterGiveawayModal(true)}
              className="flex items-center justify-start gap-2.5 rounded-[10px] border border-C78A597 bg-C09B65E bg-opacity-20 px-3 py-[15px] font-bold sm:px-5"
            >
              Enter $10,000 Giveaway
            </button>
          </div>
        </div>
        <div className="giveawayBanner__priceing mx-auto mt-10 flex w-5/6 justify-center py-3 text-center sm:py-5 md:py-10 lg:mt-S60 lg:w-2/3 xxl:w-1/2 ">
          <Swiper
            pagination={{
              el: ".custom-pagination",
              type: "bullets",
              bulletClass: "banner-slider-bullet",
              bulletActiveClass: "banner-slider-bullet-active",
              clickable: true,
            }}
            navigation={{
              nextEl: ".banner-slider-next",
              prevEl: ".banner-slider-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <Image
                  src={priceBox}
                  alt="Price box"
                  className="mx-auto mt-5 block max-md:w-[200px] md:mt-10"
                />
                <p className=" mt-S30 text-lg font-semibold leading-7 md:text-xl">
                  The prizes you can win vary daily and range
                </p>
                <p className="mt-S15 text-xl font-semibold leading-[41.60px] sm:text-2xl md:text-[32px]">
                  From $0,25 to $599
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={priceBox}
                  alt="Price box"
                  className="mx-auto mt-5 block max-md:w-[200px] md:mt-10"
                />
                <p className=" mt-S30 text-lg font-semibold leading-7 md:text-xl">
                  The prizes you can win vary daily and range
                </p>
                <p className="mt-S15 text-xl font-semibold leading-[41.60px] sm:text-2xl md:text-[32px]">
                  From $0,25 to $599
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={priceBox}
                  alt="Price box"
                  className="mx-auto mt-5 block max-md:w-[200px] md:mt-10"
                />
                <p className=" mt-S30 text-lg font-semibold leading-7 md:text-xl">
                  The prizes you can win vary daily and range
                </p>
                <p className="mt-S15 text-xl font-semibold leading-[41.60px] sm:text-2xl md:text-[32px]">
                  From $0,25 to $599
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={priceBox}
                  alt="Price box"
                  className="mx-auto mt-5 block max-md:w-[200px] md:mt-10"
                />
                <p className=" mt-S30 text-lg font-semibold leading-7 md:text-xl">
                  The prizes you can win vary daily and range
                </p>
                <p className="mt-S15 text-xl font-semibold leading-[41.60px] sm:text-2xl md:text-[32px]">
                  From $0,25 to $599
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={priceBox}
                  alt="Price box"
                  className="mx-auto mt-5 block max-md:w-[200px] md:mt-10"
                />
                <p className=" mt-S30 text-lg font-semibold leading-7 md:text-xl">
                  The prizes you can win vary daily and range
                </p>
                <p className="mt-S15 text-xl font-semibold leading-[41.60px] sm:text-2xl md:text-[32px]">
                  From $0,25 to $599
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={priceBox}
                  alt="Price box"
                  className="mx-auto mt-5 block max-md:w-[200px] md:mt-10"
                />
                <p className=" mt-S30 text-lg font-semibold leading-7 md:text-xl">
                  The prizes you can win vary daily and range
                </p>
                <p className="mt-S15 text-xl font-semibold leading-[41.60px] sm:text-2xl md:text-[32px]">
                  From $0,25 to $599
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="relative mx-auto mt-10 flex max-w-[300px] items-center justify-center gap-5">
          <button className="banner-slider-prev flex min-h-[30px] min-w-[30px] items-center justify-center rounded-[15px] bg-C2A3247 hover:bg-C206C55">
            <i className="icon-b-arrow-second text-white"></i>
          </button>
          <div className="custom-pagination w-fit"></div>
          <button className="banner-slider-next flex min-h-[30px] min-w-[30px] rotate-180 items-center justify-center rounded-[15px] bg-C2A3247 hover:bg-C206C55">
            <i className="icon-b-arrow-second text-white"></i>
          </button>
        </div>
      </div>
      {/* {modalOpen && <GiveaWayDailyCases setModalOpen={setModalOpen} />} */}
      {/* {priceModalOpen && (
        <GiveaWayPrice setPriceModalOpen={setPriceModalOpen} />
      )} */}

      <div className="max-lg:hidden">
        <Image
          src={giveaWayIllus2}
          alt="Giveaway illustration"
          className="absolute max-xl:hidden xl:right-[4%] xl:top-[5%] xl:max-4xl:w-[300px]"
        />
        <Image
          src={giveaWayIllus1}
          alt="Giveaway illustration"
          className="absolute left-[5%] top-3 max-4xl:w-[200px] xl:left-[10%] xl:top-0"
        />
        <Image
          src={giveaWayIllus3}
          alt="Giveaway illustration"
          className="absolute left-[5%] top-[40%] max-4xl:w-[200px] xl:left-[5%] xl:top-[35%]"
        />
      </div>
      <Modal
        open={openGiveaWayDailyCases}
        onClose={() => setOpenGiveaWayDailyCases(false)}
        center
        classNames={{
          modal: "customModal giveaWayDailyCases",
        }}
        closeIcon={closeIcon}
      >
        <GiveaWayDailyCases />
      </Modal>
      <Modal
        open={openEnterGiveawayModal}
        onClose={() => setOpenEnterGiveawayModal(false)}
        center
        classNames={{
          modal: "customModal",
        }}
        closeIcon={closeIcon}
      >
        <GiveaWayPrice />
      </Modal>
    </div>
  );
};

export default GiveawayBanner;
