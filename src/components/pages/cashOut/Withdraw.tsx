"use client";
import { closeIcon } from "@/components/shared/ModalCloseIcon";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Modal from "react-responsive-modal";
import { v4 as uuidv4 } from "uuid";
import WithdrawModal from "./WithdrawModal";

type Props = {
  imageArray: Array<{ id: string | number; image: StaticImageData }>;
  titleText: string;
};

const Withdraw = ({ imageArray, titleText }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-5 rounded-[20px] border border-C525C79 bg-C242938 px-S30 py-5 md:mt-8 md:py-8 lg:mt-10 lg:py-10">
      <h2 className="pb-5 text-2xl sm:text-3xl">{titleText}</h2>
      <div className="flex flex-wrap items-center justify-around gap-x-S15 gap-y-S15 border-t border-C53659A pt-S30">
        {imageArray.map(({ id, image }) => (
          <div
            onClick={() => setOpen(true)}
            key={uuidv4()}
            className="cursor-pointer"
          >
            <Image src={image} width={300} alt="Payment" />
          </div>
        ))}
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "customModal",
        }}
        closeIcon={closeIcon}
      >
        <WithdrawModal />
      </Modal>
    </div>
  );
};

export default Withdraw;
