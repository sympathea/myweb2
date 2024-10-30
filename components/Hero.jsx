import Socials from "./Socials";

export default function Hero() {
  return (
    <>
      <div className="text-[42px] font-semibold mb-4">
        <span>{"<Developer/>,"}</span>
        <span className="relative inline-block px-2 py-1 border border-dashed bg-muted">
          {"Explorer"}
          <div className="absolute w-2 h-2 border border-dashed bg-background border-muted-foreground -top-1 -left-1"></div>
          <div className="absolute w-2 h-2 -top-1 -right-1 bg-muted-foreground"></div>
          <div className="absolute w-2 h-2 -bottom-1 -left-1 bg-muted-foreground"></div>
          <div className="absolute w-2 h-2 border border-dashed -bottom-1 -right-1 bg-background border-muted-foreground"></div>
        </span>
      </div>

      <p className="flex gap-3 mb-8 text-2xl font-normal tracking-tight text-green-200 opacity-60">
        <span>#Zephyr</span>
        <span>#智昊</span>
        <span>#Zhihao</span>
      </p>

      <p className="text-[16px] text-muted-foreground mb-4">
        I am an undergraduate student at University of Minnesota Twin Cities
        majoring in Computer Science. I am passionate about developing
        applications that merge aesthetics with purpose.
      </p>

      <Socials />
    </>
  );
}
