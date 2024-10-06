import Projects from "@/components/Projects";
import { client } from "@/lib/sanity";
import { revalidatePath } from "next/cache";

import ProjectDescription from "@/components/ProjectDescription";

export default async function ProjectPage() {
  const projects = await getData();

  return (
    <div className="px-4 mx-auto mt-16 max-w-7xl md:px-8">
      <ProjectDescription />
      <Projects projects={projects} />
    </div>
  );
}

async function getData() {
  revalidatePath("/project");
  const query = `*[_type == 'project'] | order(_createdAt desc) {
        title,
          _id,
          link,
          description,
          tags,
          "imageUrl": image.asset->url
    }`;

  const data = await client.fetch(query, { cache: "no-cache" });

  return data;
}
