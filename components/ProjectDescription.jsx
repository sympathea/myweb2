"use client";

import { motion } from "framer-motion";
export default function ProjectDescription() {
  return (
    <motion.section className="w-full" initial={{ y: 30 }} animate={{ y: 0 }}>
      <h1 className="mb-10 text-4xl font-semibold">Project</h1>
      <p className="w-2/3 font-normal">
        Showcasing my exploration and experimentation in the tech field.
      </p>
    </motion.section>
  );
}
