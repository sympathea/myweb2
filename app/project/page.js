import Projects from "@/components/Projects";
import { client } from "@/lib/sanity";
import { revalidatePath } from "next/cache";

import Description from "@/components/Description";

export default async function ProjectPage() {
  revalidatePath("/project");
  const query = `*[_type == 'project'] | order(_createdAt desc) {
        title,
          _id,
          link,
          description,
          tags,
          "imageUrl": image.asset->url
    }`;

  const projects = await client.fetch(query, { cache: "no-cache" });

  return (
    <div className="flex flex-col gap-20 mt-16 ">
      <Description
        page="Project"
        description="Showcasing my exploration and experimentation in the tech field. Progressing...."
      />
      <Projects projects={projects} />
    </div>
  );
}
