"use client";

import { CardDescription, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

export default function MessageDescription() {
  return (
    <motion.div initial={{ y: 30 }} animate={{ y: 0 }}>
      <h1 className="text-4xl font-semibold">Message Board</h1>
      <p className="font-light ">Leave me A Message!</p>
    </motion.div>
  );
}
