import usersIcon from "@/public/images/icon/counter-icon-4.png";
import Image from "next/image";
type Prop = { point: number };

const AffiliatesReferredCard = ({ point }: Prop) => {
  return (
    <div className="flex grow basis-0 items-center  justify-center gap-[15px] rounded-[15px] bg-C2E3549 p-5">
      <div className="flex h-[60px] w-[60px] items-center justify-center  rounded-[30px] border-C3F4C70 bg-C3F4C70 p-[18px]">
        <Image src={usersIcon} alt="users" className="w-6" />
      </div>
      <div className="inline-flex flex-col justify-center gap-[5px]">
        <p className="text-xl font-semibold leading-7">{point}</p>
        <p className="text-xs leading-[18px] text-CBDC4DA">Users Referred</p>
      </div>
    </div>
  );
};

export default AffiliatesReferredCard;
