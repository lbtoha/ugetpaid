import React, { useContext } from "react";
import modalImage from "@/public/images/featured-img-6.png";
import Image from "next/image";
import androidIcon from "@/public/images/icon/android.png";
import appleIcon from "@/public/images/icon/apple.png";
import pc from "@/public/images/icon/pc.png";
import { ModalIsOpenOrNot } from "@/app/layout";
import SecondaryButton from "@/components/shared/SecondaryButton";

const OfferWallPageModal = () => {
  const { setOfferWallOpen } = useContext(ModalIsOpenOrNot);
  const handleModal = (event: React.MouseEvent) => {
    setOfferWallOpen(false);
  };

  return (
    <div>
      <div
        onClick={handleModal}
        className="bg-C000000 fixed z-40 h-screen w-screen bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-C3C3E5C p-S30 w-[1000px] h-auto rounded-[20px] fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-x-5 ">
              <Image src={modalImage} alt="Modal Image" />
              <p className="text-2xl">Hexagon</p>
            </div>
            <div className="flex gap-x-5">
              <div className="flex items-center gap-x-S10">
                <div className="flex items-center gap-x-S10  px-S10 py-[5px] border border-C0E311F border-opacity-80 rounded-[10px] bg-C09B65E bg-opacity-10 ">
                  <Image
                    src={androidIcon}
                    alt="Android Icon"
                    className="bg-C0E311F p-1 rounded-[5px] min-w-[16px]"
                  />
                  <p className="text-C00FF7D font-bold">$0.10</p>
                </div>
                <div className="flex items-center gap-x-S10  px-S10 py-[5px] border border-C0E311F border-opacity-80 rounded-[10px] bg-C09B65E bg-opacity-10 ">
                  <Image
                    src={appleIcon}
                    alt="Android Icon"
                    className="bg-C0E311F p-1 rounded-[5px] min-w-[16px]"
                  />
                  <p className="text-C00FF7D font-bold">$0.10</p>
                </div>
                <div className="flex items-center gap-x-S10  px-S10 py-[5px] border border-C0E311F border-opacity-80 rounded-[10px] bg-C09B65E bg-opacity-10 ">
                  <Image
                    src={pc}
                    alt="Android Icon"
                    className="bg-C0E311F p-1 rounded-[5px] min-w-[16px]"
                  />
                  <p className="text-C00FF7D font-bold">$0.10</p>
                </div>
              </div>
              <SecondaryButton buttonText="Start Offer   " />
            </div>
          </div>
          <div className="mt-10 bg-C2F304A border border-C575988 p-S30 rounded-[15px] content-box">
            <p className="text-2xl">Description</p>
            <p className="text-sm text-CBDC4DA mt-4 leading-[150%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              feugiat id massa. Risus ultricies feugiat amet ut lectus aliquet.
              Vulputate interdum commodo enim ipsum cras aliquam. Viverra ut
              molestie nisl consectetur tristique.
            </p>
            <p className="mt-S30 text-2xl">Requirements</p>
            <ul className="mt-S15 space-y-S10">
              <li className="text-sm text-CBDC4DA relative ps-S15 flex items-center before:absolute before:content-[''] before:rounded-[50%] before:left-0 before:z-10 before:w-[6px] before:h-[6px] before:bg-[#397D15]">
                Sed eget feugiat id massa. Risus ultricies feugiat amet ut
                lectus aliquet.
              </li>
              <li className="text-sm text-CBDC4DA relative ps-S15 flex items-center before:absolute before:content-[''] before:rounded-[50%] before:left-0 before:z-10 before:w-[6px] before:h-[6px] before:bg-[#397D15]">
                Sed eget feugiat id massa. Risus ultricies feugiat amet ut
                lectus aliquet.
              </li>
              <li className="text-sm text-CBDC4DA relative ps-S15 flex items-center before:absolute before:content-[''] before:rounded-[50%] before:left-0 before:z-10 before:w-[6px] before:h-[6px] before:bg-[#397D15]">
                Sed eget feugiat id massa. Risus ultricies feugiat amet ut
                lectus aliquet.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferWallPageModal;
