"use client";
import { motion } from "framer-motion";
import React from "react";
type Props = {
  children: React.ReactNode;
};
const MotionCardHoverEffect = ({ children }: Props) => {
  return <motion.div whileHover={{ scale: 1.02 }}>{children}</motion.div>;
};

export default MotionCardHoverEffect;
