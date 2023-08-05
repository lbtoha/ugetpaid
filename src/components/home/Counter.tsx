import Image from "next/image";
import counterIcon1 from "@/public/images/icon/counter-icon-1.png";
import counterIcon2 from "@/public/images/icon/counter-icon-2.png";
import counterIcon3 from "@/public/images/icon/counter-icon-3.png";
import counterIcon4 from "@/public/images/icon/counter-icon-4.png";

const Counter = () => {
  const counterSectionData = [
    {
      id: 87501,
      icon: counterIcon1,
      heading: "0h 17m 16s",
      subHeading: "Average time until user makes first cashout",
    },
    {
      id: 87502,
      icon: counterIcon2,
      heading: "$9.19",
      subHeading: "Average money earned by users yesterday",
    },
    {
      id: 87503,
      icon: counterIcon3,
      heading: "$20,063,652",
      subHeading: "Total USD earned on ugetpaid ",
    },
    {
      id: 87504,
      icon: counterIcon4,
      heading: "Total Members",
      subHeading: "Average time until user makes first cashout",
    },
  ];
  return (
    <div className="section-gap">
      <div className="grid grid-cols-4 gap-x-6">
        {counterSectionData.map(({ id, icon, heading, subHeading }) => (
          <div key={id}>
            <div className="flex items-center gap-x-[30px] border-gradient-second  p-[30px]">
              <div className="border-gradient rounded-full items-center flex p-5 h-[80px] w-[80px]">
                <Image src={icon} alt="Counter icon 1" />
              </div>
              <div>
                <p className="text-2.3xl text-C00FF8B">{heading}</p>
                <p className="max-w-[220px] mt-[15px]">{subHeading}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
