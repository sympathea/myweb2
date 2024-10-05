import Projects from "@/components/Projects";
import { client } from "@/lib/sanity";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage() {
  const projects = await getData();

  return (
    <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-28 md:px-8">
      <section className="w-full">
        <h1 className="mb-3 text-4xl font-semibold">Project</h1>
        <p className="w-1/2">
          Over the years, I have worked on various small projects, including
          open-source, experimental, and just-for-fun ones. The following is a
          curated selection of the projects I consider to be my best work,
          showcasing my exploration and experimentation in the tech field.
        </p>
      </section>

      <section className="grid w-full grid-cols-1 mx-auto mt-20 gap-28 md:grid-cols-2 ">
        {projects.map((project) => (
          <div className="relative w-full aspect-[240/135]" key={project._id}>
            <Image
              src={project.imageUrl}
              alt="Project image"
              fill
              className="object-contain rounded-3xl"
            />
          </div>
        ))}
      </section>
      {/* <Projects projects={projects} /> */}
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
