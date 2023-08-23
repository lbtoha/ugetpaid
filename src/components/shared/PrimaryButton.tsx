import btnIcon from "@/public/images/icon/btn-icon-1.png";
import Image from "next/image";

type Prop = {
  buttonText: string;
};
const PrimaryButton = ({ buttonText }: Prop) => {
  return (
    <button className="shadow-[0px 4px 16px 0px rgba(0, 0, 0, 0.25)] custom-transition-button flex w-fit cursor-pointer   items-center gap-x-2 rounded-xl  border border-transparent bg-C09B65E px-5  py-[10px] text-base font-bold text-C282F41  hover:border hover:border-C09B65E hover:bg-opacity-10 hover:text-white">
      <Image src={btnIcon} alt="btn icon" />
      <span>{buttonText}</span>
    </button>
  );
};

export default PrimaryButton;
