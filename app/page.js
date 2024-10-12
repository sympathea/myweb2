import {
  DescriptionAnimation,
  NameAnimation,
} from "@/components/HeroAnimation";

export default function Page() {
  return (
    <div className="flex items-center flex-col justify-center mx-auto max-w-7xl h-[calc(100vh-10rem)]">
      <div className="text-4xl font-semibold">
        <span className="inline-block mb-5">i'm zephyr ✌️</span>
        <br />
        <DescriptionAnimation />
      </div>
    </div>
  );
}
