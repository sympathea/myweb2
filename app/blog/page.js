import Blogs from "@/components/Blogs";
import Description from "@/components/Description";
import { getBlogs } from "@/lib/blog";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-col gap-20 mt-16">
      <Description
        page="Blog"
        description="Welcome to my blog, where I share articles about  tech, my interests, and reflections on life. This is a space for exploring and documenting my journey as a developer and beyond."
      />
      <Blogs blogs={blogs} />
    </div>
  );
}
