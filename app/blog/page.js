import Blogs from "@/components/Blogs";
import Description from "@/components/Description";
import { getBlogs } from "@/lib/blog";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-col gap-20 mt-16">
      <Description
        page="Blog"
        description="Welcome to my blog! I will post some articles about my life, my work, and my thoughts here."
      />

      <Blogs blogs={blogs} />
    </div>
  );
}
