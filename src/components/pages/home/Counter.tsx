"use client";
import Icon from "@/components/shared/Icon";
import { counterSectionData } from "@/public/data/home";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const Counter = () => {
  return (
    <div className="section-gap">
      <div className="gap-3 max-sm:space-y-5 sm:grid sm:max-md:grid-cols-2 md:gap-5 lg:grid-cols-2 xxl:grid-cols-3 3xl:grid-cols-4 3xl:gap-6">
        {counterSectionData.map(({ id, icon, heading, subHeading }) => (
          <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
            key={uuidv4()}
            className="border-gradient-second flex items-center gap-4 self-auto p-5 md:gap-6 md:p-S30 4xl:gap-S30"
          >
            <Icon iconImage={icon} />
            <div>
              <p className=" text-xl text-C00FF8B md:text-2.3xl">{heading}</p>
              <p className="max-w-[220px] md:mt-4">{subHeading}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
