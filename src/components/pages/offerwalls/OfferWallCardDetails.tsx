"use client";
import FeaturedOfferModal from "@/components/earn/FeaturedOfferModal";
import { closeIcon } from "@/components/shared/ModalCloseIcon";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Modal from "react-responsive-modal";

type Props = {
  cardImage: StaticImageData;
  cardTitle: string;
  detailText: string;
  offerPoint: number;
};

const OfferWallCardDetails = ({
  cardImage,
  cardTitle,
  detailText,
  offerPoint,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      className="flex items-center justify-between gap-x-5 rounded-[10px] bg-C2E3549 p-4 max-sm:flex-wrap sm:p-S30 xl:gap-x-[85px]"
    >
      <div className="flex gap-3 max-md:flex-wrap md:gap-5 xl:gap-S30">
        <div className="min-w-fit">
          <Image src={cardImage} alt="Surveys 1" />
        </div>
        <div>
          <p className="text-xl sm:text-2xl">{cardTitle}</p>
          <p className=" text-sm text-CBDC4DA sm:mt-2 md:mt-4 lg:mt-5">
            {detailText}
          </p>
        </div>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="shadow-[0px 4px 16px 0px rgba(0, 0, 0, 0.25)] cursor-pointer items-center gap-2 rounded-xl bg-C09B65E px-3 py-1 text-center text-sm font-bold text-C282F41 max-md:min-w-fit max-sm:mt-5 max-sm:flex sm:min-w-[120px] sm:px-5 sm:py-[10px] "
      >
        <span className="text-xl font-semibold sm:text-2xl xl:text-2.3xl">
          {offerPoint}
        </span>
        <span className="block font-bold"> Offer Point</span>
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "customModal",
        }}
        closeIcon={closeIcon}
      >
        <FeaturedOfferModal />
      </Modal>
    </motion.div>
  );
};

export default OfferWallCardDetails;
