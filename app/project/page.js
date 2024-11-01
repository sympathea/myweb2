import Projects from "@/components/Projects";
import { client } from "@/lib/sanity";

import Description from "@/components/Description";
import MotionDivWrapper from "@/components/MotionDivWrapper";
import { revalidatePath } from "next/cache";

export default async function ProjectPage() {
  revalidatePath("/project");
  const query = `*[_type == 'project'] | order(_updatedAt desc) {
        title,
          _id,
          link,
          description,
          tags,
          "imageUrl": image.asset->url
    }`;

  const projects = await client.fetch(query);

  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-20"
    >
      <Description
        page="Project"
        description="Showcase my exploration and experimentation in the computer science field. Progressing...."
      />
      <Projects projects={projects} />
    </MotionDivWrapper>
  );
}
