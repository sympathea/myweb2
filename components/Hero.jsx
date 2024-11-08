import { HeroAnimation } from "./HeroAnimation";
import Socials from "./Socials";

export default function Hero() {
  return (
    <div>
      <p className="mb-8 font-semibold">
        <span className="text-transparent sm:bg-gradient-to-l to-muted-foreground bg-gradient-to-t to-70% from-foreground bg-clip-text lg:text-5xl text-[40px]">
          Hi, I&apos;m Zephyr
        </span>
      </p>

      <p className="flex gap-3 mb-8 text-xl font-normal tracking-tight text-green-200 sm:text-2xl opacity-60">
        <span>#Zephyr</span>
        <span>#Zhihao</span>
        <span>#智昊</span>
      </p>

      <p className="mb-4 text-sm sm:text-base text-transparent bg-gradient-to-b to-muted-foreground to-70% from-foreground bg-clip-text">
        I&apos;m an undergraduate student at University of Minnesota Twin Cities
        majoring in Computer Science. Passionate about developing applications
        that merge purpose with aesthetics.
      </p>

      <Socials />
    </div>
  );
}
