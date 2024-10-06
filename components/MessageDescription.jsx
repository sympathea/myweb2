"use client";

import { CardDescription, CardTitle } from "./ui/card";
import { motion } from "framer-motion";

export default function MessageDescription() {
  return (
    <motion.div initial={{ y: 30 }} animate={{ y: 0 }}>
      <CardTitle className="text-4xl">Message Board</CardTitle>
      <CardDescription>Leave me A Message!</CardDescription>
    </motion.div>
  );
}
