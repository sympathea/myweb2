import { HeroAnimation } from "./HeroAnimation";
import Socials from "./Socials";

export default function Hero() {
  return (
    <div>
      <div className="font-semibold">
        <p className="mb-8 ">
          <span className="text-transparent sm:bg-gradient-to-l to-muted-foreground bg-gradient-to-t to-70% from-foreground bg-clip-text lg:text-5xl text-[40px]">
            Hi, I&apos;m Zephyr
          </span>
        </p>

        <p className="mb-6">
          <span className="text-transparent sm:bg-gradient-to-l to-muted-foreground bg-gradient-to-t to-70% from-foreground bg-clip-text text-3xl lg:text-[40px] ">
            <HeroAnimation />
          </span>
        </p>
        {/* <span className="relative inline-block px-2 py-1 text-transparent border border-dashed bg-muted sm:bg-gradient-to-r bg-gradient-to-b to-muted-foreground from-foreground bg-clip-text">
          {"Explorer"}
          <div className="absolute w-2 h-2 border border-dashed bg-background border-muted-foreground -top-1 -left-1"></div>
          <div className="absolute w-2 h-2 -top-1 -right-1 bg-muted-foreground"></div>
          <div className="absolute w-2 h-2 -bottom-1 -left-1 bg-muted-foreground"></div>
          <div className="absolute w-2 h-2 border border-dashed -bottom-1 -right-1 bg-background border-muted-foreground"></div>
        </span> */}
      </div>

      <p className="flex gap-3 mb-8 text-xl font-normal tracking-tight text-green-200 sm:text-2xl opacity-60">
        <span>#Zephyr</span>
        <span>#Zhihao</span>
        <span>#智昊</span>
      </p>

      <p className="mb-4 text-sm sm:text-base text-transparent bg-gradient-to-b to-muted-foreground to-70% from-foreground bg-clip-text">
        I am an undergraduate student at University of Minnesota Twin Cities
        majoring in Computer Science. I&apos;m passionate about developing
        applications that merge purpose with aesthetics.
      </p>

      <Socials />
    </div>
  );
}
