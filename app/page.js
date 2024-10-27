import MotionDivWrapper from "@/components/MotionDivWrapper";
import IntroScrollMouse from "@/components/IntroScrollMouse";
import SocialMediaLink from "@/components/SocialMediaLink";
import { Github, Linkedin, Mail, Newspaper } from "lucide-react";
import Blogs from "@/components/Blogs";
import { getBlogs } from "@/lib/blog";

export default async function Page() {
  const blogs = await getBlogs();
  const recentBlogs = blogs.slice(0, 3);

  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <section className="w-full mt-40 lg:w-2/3">
        <div className="text-[42px] font-semibold mb-8">
          <span>{"<Developer/>,"}</span>
          <span className="relative inline-block px-2 py-1 border border-dashed bg-muted">
            {"Explorer"}
            <div className="absolute w-2 h-2 border border-dashed bg-background border-muted-foreground -top-1 -left-1"></div>
            <div className="absolute w-2 h-2 -top-1 -right-1 bg-muted-foreground"></div>
            <div className="absolute w-2 h-2 -bottom-1 -left-1 bg-muted-foreground"></div>
            <div className="absolute w-2 h-2 border border-dashed -bottom-1 -right-1 bg-background border-muted-foreground"></div>
          </span>
        </div>

        <p className="flex gap-3 mb-12 text-3xl font-normal tracking-tight text-green-200 opacity-60">
          <span>#Zephyr</span>
          <span>#智昊</span>
          <span>#Zhihao</span>
        </p>

        <p className="text-[18px] text-muted-foreground mb-10">
          I am an undergraduate student at University of Minnesota Twin Cities
          majoring in Computer Science. I am passionate about developing
          applications that merge aesthetics with purpose.
        </p>

        <div className="flex gap-6 ">
          <SocialMediaLink link="https://github.com/eurooooo/">
            <Github />
          </SocialMediaLink>
          <SocialMediaLink link="https://www.linkedin.com/in/zhihao-lin1/">
            <Linkedin />
          </SocialMediaLink>
          <SocialMediaLink link="mailto:lzh910954163@gmail.com">
            <Mail />
          </SocialMediaLink>
        </div>
      </section>

      <section className="flex items-center justify-center w-full h-52">
        <IntroScrollMouse />
      </section>

      <section>
        <div className="flex items-center justify-start gap-3 mb-10">
          <Newspaper />
          <span className="text-lg font-semibold">Recent Update</span>
        </div>

        <div>
          <Blogs blogs={recentBlogs} isHome={true} />
        </div>
      </section>
    </MotionDivWrapper>
  );
}
