"use client";

import { motion } from "framer-motion";
export default function Description({ page, description }) {
  return (
    <section className="w-full">
      <h1 className="mb-10 text-4xl font-semibold">{page}</h1>
      <p
        className={`${page === "Blog" ? "lg:w-1/2" : "xl:w-2/3"} font-normal text-muted-foreground w-full`}
      >
        {description}
      </p>
    </section>
  );
}
