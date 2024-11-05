export default function Aboutme() {
  return (
    <div className="w-full mb-16 rounded-lg">
      <h2 className="pl-2 mb-2 text-xl font-bold text-green-200 opacity-60">
        About Me
      </h2>
      <ul className="flex flex-col opacity-80">
        <li>
          👋 You can call me <span className="font-bold ">Zephyr</span>,{" "}
          <span className="font-bold">Zhihao</span> or{" "}
          <span className="font-bold">智昊</span>.
        </li>

        <li>
          🌎 Current Location: <span className="font-bold">Amherst, MA</span>.
        </li>
        <li>
          ✈️ I lived in{" "}
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
        <li>
          🎧 I&apos;m a music lover, especially drawn to Chinese R&B. Favorites
          musicians are Khalil Fong and Coldplay.
        </li>
      </ul>
    </div>
  );
}
