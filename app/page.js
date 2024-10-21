import { DescriptionAnimation } from "@/components/HeroAnimation";
import MotionDivWrapper from "@/components/MotionDivWrapper";

export default function Page() {
  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col w-2/3 gap-10 mt-40"
    >
      <div className="text-4xl font-semibold">
        <span className="inline-block mb-5">i&apos;m zephyr ✌️</span>
        <br />
        <DescriptionAnimation />
      </div>

      <div className="text-muted-foreground">
        I am an undergraduate student at University of Minnesota Twin Cities
        majoring in Computer Science. I am passionate about crafting application
        that merge aesthetics with purpose
      </div>
    </MotionDivWrapper>
  );
}
