import light from "@/public/images/icon/light-icon.png";
import Image from "next/image";

const SurveysTips = () => {
  return (
    <div className="flex justify-start gap-x-5 border border-C515B78 p-S30 bg-transparent mt-10 rounded-[15px]">
      <div>
        <Image src={light} alt="Light" />
      </div>
      <div>
        <p className="text-2xl">Tips for answering surveys</p>
        <ul>
          <li className="text-lg mt-5">
            1. Answer questions honestly and consistently
          </li>
          <li className="text-lg mt-2">
            2. It&apos;s normal to get rejected from some surveys, don&apos;t
            let it discourage you
          </li>
          <li className="text-lg mt-2">
            3. New surveys are added every day, so check back frequently
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SurveysTips;
