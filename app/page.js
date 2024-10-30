import MotionDivWrapper from "@/components/MotionDivWrapper";
import { Newspaper } from "lucide-react";
import Blogs from "@/components/Blogs";
import { getBlogs } from "@/lib/blog";
import Link from "next/link";
import Hero from "@/components/Hero";
import OpenToWork from "@/components/OpenToWork";
import SkillsBar from "@/components/SkillsBar";

export default async function Page() {
  const blogs = await getBlogs();
  const recentBlogs = blogs.slice(0, 3);

  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <section className="w-full mt-40 mb-20 lg:w-2/3">
        <Hero />
      </section>

      <section className="relative flex flex-col justify-between w-full gap-10 lg:flex-row">
        <div>
          <OpenToWork />

          <div className="flex items-center justify-start gap-3 mb-10">
            <Newspaper />
            <span className="text-lg font-semibold">Recent Update</span>
          </div>
          <Blogs blogs={recentBlogs} isHome={true} />
        </div>

        <div className="lg:pt-[266px] lg:w-[610px] w-full">
          <SkillsBar />
        </div>
      </section>
    </MotionDivWrapper>
  );
}
