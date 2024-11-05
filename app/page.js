import MotionDivWrapper from "@/components/MotionDivWrapper";
import { Newspaper } from "lucide-react";
import Blogs from "@/components/Blogs";
import { getBlogs } from "@/lib/blog";
import Hero from "@/components/Hero";
import OpenToWork from "@/components/OpenToWork";
import SkillsBar from "@/components/SkillsBar";
import Aboutme from "@/components/Aboutme";

export default async function Page() {
  const blogs = await getBlogs();
  const recentBlogs = blogs.slice(0, 3);

  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="w-full mb-20 lg:w-2/3">
        <Hero />
      </section>

      <section className="relative flex flex-col justify-between w-full gap-10 lg:flex-row">
        <div className="w-full">
          {/* <Aboutme /> */}
          <div className="flex items-center justify-start w-full gap-3 mb-10">
            <Newspaper />
            <span className="text-lg font-semibold">Recent Update</span>
          </div>
          <Blogs blogs={recentBlogs} isHome={true} />
        </div>

        <aside className="lg:w-[680px] w-full lg:sticky lg:h-fit lg:-top-10">
          {/* <OpenToWork /> */}
          <SkillsBar />
        </aside>
      </section>
    </MotionDivWrapper>
  );
}
