"use client";

import { motion } from "framer-motion";

export default function MotionDivWrapper({
  children,
  key,
  initial,
  animate,
  whileHover,
  transition,
}) {
  return (
    <motion.div
      key={key}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
