import HeroAnimation from "./HeroAnimation";
import Socials from "./Socials";

export default function Hero() {
  return (
    <div>
      <p className="mb-8 font-semibold">
        <span className="text-transparent sm:bg-gradient-to-l to-muted-foreground bg-gradient-to-t to-50% from-foreground bg-clip-text lg:text-5xl text-[40px]">
          Hi, I&apos;m Zephyr
        </span>
      </p>
      <div className="h-10 mb-8">
        <HeroAnimation text1={"<Developer />"} text2="<Student />" />
      </div>
      <p className="mb-8 text-xl text-transparent sm:text-2xl bg-gradient-to-r from-green-200 via-green-100 opacity-60 to-green-200 bg-clip-text w-fit">
        #Zephyr #Zhihao #智昊
      </p>

      <p className="mb-4 text-sm sm:text-base text-transparent bg-gradient-to-b to-muted-foreground to-80% from-foreground bg-clip-text">
        I&apos;m an undergraduate student at University of Minnesota Twin Cities
        majoring in Computer Science. Passionate about developing applications
        that merge purpose with aesthetics.
      </p>

      <Socials />
    </div>
  );
}
