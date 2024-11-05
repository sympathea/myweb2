import Socials from "./Socials";

export default function Hero() {
  return (
    <>
      <div className="lg:text-[46px] font-semibold mb-4 text-[40px]">
        <span className="text-transparent sm:bg-gradient-to-l to-muted-foreground bg-gradient-to-t to-70% from-foreground bg-clip-text">
          {"<Developer/>,"}
        </span>
        <span className="relative inline-block px-2 py-1 text-transparent border border-dashed bg-muted sm:bg-gradient-to-r bg-gradient-to-b to-muted-foreground from-foreground bg-clip-text">
          {"Explorer"}
          <div className="absolute w-2 h-2 border border-dashed bg-background border-muted-foreground -top-1 -left-1"></div>
          <div className="absolute w-2 h-2 -top-1 -right-1 bg-muted-foreground"></div>
          <div className="absolute w-2 h-2 -bottom-1 -left-1 bg-muted-foreground"></div>
          <div className="absolute w-2 h-2 border border-dashed -bottom-1 -right-1 bg-background border-muted-foreground"></div>
        </span>
      </div>

      <p className="flex gap-3 mb-8 text-xl font-normal tracking-tight text-green-200 sm:text-2xl opacity-60">
        <span>#Zephyr</span>
        <span>#Zhihao</span>
        <span>#智昊</span>
      </p>

      <p className="mb-4 text-sm sm:text-base text-transparent bg-gradient-to-b to-muted-foreground to-70% from-foreground bg-clip-text">
        Hi, I&apos;m Zephyr, an undergraduate student at University of Minnesota
        Twin Cities majoring in Computer Science. I&apos;m passionate about
        developing applications that merge aesthetics with purpose.
      </p>

      <Socials />
    </>
  );
}
