import Blogs from "@/components/Blogs";
import Description from "@/components/Description";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="px-4 mx-auto mt-16 max-w-7xl md:px-8">
      <Description
        page="Blog"
        description="Welcome to my blog! I will post some articles about my life, my work, and my thoughts here."
      />
      {/* <Blogs /> */}
      <Link href={"/blog/introduction-to-mdx"}>To</Link>
    </div>
  );
}
