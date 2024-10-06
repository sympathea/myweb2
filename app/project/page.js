import Projects from "@/components/Projects";
import { client } from "@/lib/sanity";
import { revalidatePath } from "next/cache";

export default async function ProjectPage() {
  const projects = await getData();

  return (
    <div className="px-4 mx-auto mt-16 max-w-7xl md:px-8">
      <section className="w-full">
        <h1 className="mb-10 text-4xl font-semibold">Project</h1>
        <p className="w-2/3 font-normal">
          Showcasing my exploration and experimentation in the tech field.
        </p>
      </section>
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
