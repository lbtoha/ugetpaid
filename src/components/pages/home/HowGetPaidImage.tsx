"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
type Props = {
  image: StaticImageData;
  selected: boolean;
};

const HowGetPaidImage = ({ image, selected }: Props) => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    setInProp(selected);
  }, [selected]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        ref={nodeRef}
        src={image}
        alt="how work"
        width={600}
        height={600}
        className={` mx-auto focus-visible:outline-none max-xl:w-[50%]`}
      />
    </motion.div>
  );
};

export default HowGetPaidImage;
