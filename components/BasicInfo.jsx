export default function BasisInfo() {
  return (
    <div className="w-full  rounded-lg shadow-[0_0px_1.2px_rgb(140,140,140)] p-6">
      <h2 className="mb-6 text-xl text-green-200 opacity-60">About Me</h2>
      <ul className="flex flex-col gap-5 pl-6 text-sm list-disc opacity-80">
        <li>
          👋 You can call me <span className="font-bold">Zephyr</span>,{" "}
          <span className="font-bold">Zhihao</span> or{" "}
          <span className="font-bold">智昊</span>.
        </li>

        <li>
          🌎 Current Location:{" "}
          <span className="font-bold">Amherst, MA, US</span>.
        </li>
        <li>
          ✈️ Lived in{" "}
          <a
            className="font-bold"
            href="https://en.wikipedia.org/wiki/Minneapolis"
            target="_blank"
          >
            Minneapolis
          </a>
          ,{" "}
          <a
            className="font-bold"
            href="https://en.wikipedia.org/wiki/Wuhan"
            target="_blank"
          >
            Wuhan
          </a>
          ,{" "}
          <a
            className="font-bold"
            href="https://en.wikipedia.org/wiki/Changsha"
            target="_blank"
          >
            Changsha
          </a>{" "}
          in the past.
        </li>
      </ul>
    </div>
  );
}
