import Aboutme from "@/components/Aboutme";
import Description from "@/components/Description";
import Projects from "@/components/Projects";
import SkillsBar from "@/components/SkillsBar";
import { getProjects } from "@/lib/project";

export default async function About() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="pl-2 mb-16 text-4xl text-transparent to-muted-foreground bg-gradient-to-r to-70% from-foreground bg-clip-text font-bold">
        About
      </h1>

      <div>
        <Aboutme />
      </div>

      <div>
        <SkillsBar />
      </div>
    </div>
  );
}
