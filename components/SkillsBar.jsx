import CSSIcon from "@/assets/icons/CSSIcon";
import ExpressIcon from "@/assets/icons/ExpressIcon";
import HtmlIcon from "@/assets/icons/HtmlIcon";
import JavaIcon from "@/assets/icons/JavaIcon";
import JSIcon from "@/assets/icons/JSIcon";
import MongoIcon from "@/assets/icons/MongoIcon";
import MySQLIcon from "@/assets/icons/MySQLIcon";
import NextIcon from "@/assets/icons/NextIcon";
import NodeIcon from "@/assets/icons/NodeIcon";
import ReactIcon from "@/assets/icons/ReactIcon";
import SpringIcon from "@/assets/icons/SpringIcon";
import SupabaseIcon from "@/assets/icons/SupabaseIcon";
import TailwindIcon from "@/assets/icons/TailwindIcon";
import ViteIcon from "@/assets/icons/ViteIcon";

export default function SkillsBar() {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-6 p-6 mb-16 shadow-[0_0px_1.2px_rgb(140,140,140)] rounded-lg sticky top-10">
      {/* <IntroScrollMouse /> */}
      <h2 className="text-xl text-green-200 opacity-60">Tech Stacks</h2>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Frontend</h3>
        <ul>
          <li className="flex items-center gap-10 mb-2">
            <div className="flex gap-2 ">
              <HtmlIcon className="skillsIcon" />
              <CSSIcon className="skillsIcon" />
              <JSIcon className="skillsIcon" />
            </div>
            <div className="text-sm font-semibold text-muted-foreground">
              HTML + CSS + JS
            </div>
          </li>
          <li className="flex items-center gap-10 mb-2">
            <div className="flex gap-2 ">
              <ReactIcon className="skillsIcon" />
              <ViteIcon className="skillsIcon" />
              <TailwindIcon className="skillsIcon" />
            </div>
            <div className="text-sm font-semibold text-muted-foreground">
              React + Vite + Tailwind
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Backend</h3>
        <ul>
          <li className="flex items-center gap-10 mb-2">
            <div className="flex gap-2 ">
              <JavaIcon className="skillsIcon" />
              <SpringIcon className="skillsIcon" />
              <MySQLIcon className="skillsIcon" />
            </div>

            <div className="text-sm font-semibold text-muted-foreground">
              Java + Spring Boot + MySQL
            </div>
          </li>

          <li className="flex items-center gap-10 mb-2">
            <div className="flex gap-2 ">
              <NodeIcon className="skillsIcon" />
              <ExpressIcon className="skillsIcon" />
              <MongoIcon className="skillsIcon" />
            </div>
            <div className="text-sm font-semibold text-muted-foreground">
              Node.js + Express + MongoDB
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Fullstack</h3>
        <ul>
          <li className="flex items-center gap-20 mb-2">
            <div className="flex gap-2 ">
              <NextIcon className="skillsIcon" />
              <SupabaseIcon className="skillsIcon" />
            </div>
            <div className="text-sm font-semibold text-muted-foreground">
              Next.js + Supabase
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
