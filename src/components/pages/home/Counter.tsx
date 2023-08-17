import Icon from "@/components/shared/Icon";
import { counterSectionData } from "@/public/data/home";

const Counter = () => {
  return (
    <div className="section-gap">
      <div className="gap-5 max-sm:space-y-5 sm:grid sm:max-md:grid-cols-2 lg:grid-cols-2 xxl:grid-cols-3 3xl:grid-cols-4 3xl:gap-6">
        {counterSectionData.map(({ id, icon, heading, subHeading }) => (
          <div
            key={id}
            className="border-gradient-second flex items-center gap-6 p-5 sm:p-S30 4xl:gap-S30"
          >
            <Icon iconImage={icon} />
            <div>
              <p className="text-xl text-C00FF8B sm:max-md:text-xl md:text-2.3xl">
                {heading}
              </p>
              <p className="max-w-[220px] md:mt-4">{subHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
