import { revalidatePath } from "next/cache";
import { client } from "./sanity";

export async function getProjects() {
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

  return projects;
}
