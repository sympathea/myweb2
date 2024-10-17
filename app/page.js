import { DescriptionAnimation } from "@/components/HeroAnimation";
import MotionDivWrapper from "@/components/MotionDivWrapper";

export default function Page() {
  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col mt-40"
    >
      <div className="text-4xl font-semibold">
        <span className="inline-block mb-5">i'm zephyr ✌️</span>
        <br />
        <DescriptionAnimation />
      </div>
    </MotionDivWrapper>
  );
}
