import light from "@/public/images/icon/light-icon.png";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

type Props = {
  title: string;
  tipsList: { listItem: string }[];
};

const Tips = ({ title, tipsList }: Props) => {
  return (
    <div className="mt-S30 flex justify-start gap-3 rounded-[15px] border border-C515B78 bg-transparent p-S30 max-sm:flex-wrap sm:gap-5 md:mt-10">
      <div className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-[30px] bg-C2E3549 p-[15px]">
        <Image src={light} alt="Light" width={30} className="min-w-[30px]" />
      </div>
      <div>
        <p className="text-2xl">{title}</p>
        <ul className="mt-3 md:mt-5">
          {tipsList.map(({ listItem }) => (
            <li key={uuidv4()} className="mt-2 text-lg">
              {listItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tips;
