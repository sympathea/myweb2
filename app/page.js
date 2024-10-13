import {
  DescriptionAnimation,
  NameAnimation,
} from "@/components/HeroAnimation";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-40 max-w-7xl">
      <div className="text-4xl font-semibold">
        <span className="inline-block mb-5">i'm zephyr ✌️</span>
        <br />
        <DescriptionAnimation />
      </div>
    </div>
  );
}
