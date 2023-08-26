import modalImage from "@/public/images/featured-img-6.png";
import androidIcon from "@/public/images/icon/android.png";
import appleIcon from "@/public/images/icon/apple.png";
import pc from "@/public/images/icon/pc.png";
import Image from "next/image";
import SecondaryButton from "../shared/SecondaryButton";

const FeaturedOfferModal = () => {
  return (
    <div className=" rounded-[20px] bg-C3C3E5C p-5 md:p-S30 ">
      <div className="items-center justify-between max-3xl:space-y-6 3xl:flex ">
        <div className="flex items-center gap-x-5 ">
          <Image src={modalImage} alt="Modal Image" />
          <p className="text-2xl">Hexagon</p>
        </div>
        <div className="flex gap-3 max-md:flex-wrap sm:gap-5">
          <div className="flex items-center gap-S10 max-md:flex-wrap">
            <div className="flex items-center gap-x-S10  rounded-[10px] border border-C0E311F border-opacity-80 bg-C09B65E bg-opacity-10 px-S10 py-[5px] ">
              <Image
                src={androidIcon}
                alt="Android Icon"
                className="min-w-[16px] rounded-[5px] bg-C0E311F p-1"
              />
              <p className="font-bold text-C00FF7D">$0.10</p>
            </div>
            <div className="flex items-center gap-x-S10  rounded-[10px] border border-C0E311F border-opacity-80 bg-C09B65E bg-opacity-10 px-S10 py-[5px] ">
              <Image
                src={appleIcon}
                alt="Android Icon"
                className="min-w-[16px] rounded-[5px] bg-C0E311F p-1"
              />
              <p className="font-bold text-C00FF7D">$0.10</p>
            </div>
            <div className="flex items-center gap-x-S10  rounded-[10px] border border-C0E311F border-opacity-80 bg-C09B65E bg-opacity-10 px-S10 py-[5px] ">
              <Image
                src={pc}
                alt="Android Icon"
                className="min-w-[16px] rounded-[5px] bg-C0E311F p-1"
              />
              <p className="font-bold text-C00FF7D">$0.10</p>
            </div>
          </div>
          <SecondaryButton buttonText="Start Offer" />
        </div>
      </div>
      <div className="content-box mt-5 rounded-[15px] border border-C575988 bg-C2F304A p-3 sm:mt-10 sm:p-S30">
        <p className="text-2xl">Description</p>
        <p className="mt-4 text-sm leading-[150%] text-CBDC4DA">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          feugiat id massa. Risus ultricies feugiat amet ut lectus aliquet.
          Vulputate interdum commodo enim ipsum cras aliquam. Viverra ut
          molestie nisl consectetur tristique.
        </p>
        <p className=" mt-5 text-2xl md:mt-S30">Requirements</p>
        <ul className="mt-S15 space-y-S10">
          <li className="relative flex items-center ps-S15 text-sm text-CBDC4DA before:absolute before:left-0 before:z-10 before:h-[6px] before:w-[6px] before:rounded-[50%] before:bg-[#397D15] before:content-['']">
            Sed eget feugiat id massa. Risus ultricies feugiat amet ut lectus
            aliquet.
          </li>
          <li className="relative flex items-center ps-S15 text-sm text-CBDC4DA before:absolute before:left-0 before:z-10 before:h-[6px] before:w-[6px] before:rounded-[50%] before:bg-[#397D15] before:content-['']">
            Sed eget feugiat id massa. Risus ultricies feugiat amet ut lectus
            aliquet.
          </li>
          <li className="relative flex items-center ps-S15 text-sm text-CBDC4DA before:absolute before:left-0 before:z-10 before:h-[6px] before:w-[6px] before:rounded-[50%] before:bg-[#397D15] before:content-['']">
            Sed eget feugiat id massa. Risus ultricies feugiat amet ut lectus
            aliquet.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturedOfferModal;
