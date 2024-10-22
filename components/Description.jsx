"use client";

import { motion } from "framer-motion";
export default function Description({ page, description }) {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="mb-10 text-4xl font-semibold">{page}</h1>
      <p
        className={`${page === "Blog" ? "md:w-1/2" : "sm:w-2/3"} font-normal text-muted-foreground w-full`}
      >
        {description}
      </p>
    </motion.section>
  );
}
