import light from "@/public/images/icon/light-icon.png";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

type Props = {
  title: string;
  tipsList: { listItem: string }[];
};

const Tips = ({ title, tipsList }: Props) => {
  return (
    <div className="flex justify-start gap-x-5 border border-C515B78 p-S30 bg-transparent mt-10 rounded-[15px]">
      <div className="w-[60px] h-[60px] p-[15px] bg-C2E3549 rounded-[30px] justify-center items-center inline-flex">
        <Image src={light} alt="Light" />
      </div>
      <div></div>
      <div>
        <p className="text-2xl">{title}</p>
        <ul className="mt-5">
          {tipsList.map(({ listItem }) => (
            <li key={uuidv4()} className="text-lg mt-2">
              {listItem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tips;
