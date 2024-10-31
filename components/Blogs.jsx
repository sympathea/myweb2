import Image from "next/image";
import Link from "next/link";

export default function Blogs({ blogs, isHome }) {
  return (
    <ul
      className={`grid grid-cols-1 gap-10 w-full ${isHome ? "" : "lg:grid-cols-2"}`}
    >
      {blogs.map((blog) => (
        <div key={blog.slug}>
          <Link href={`/blog/${blog.slug}`}>
            <div
              className={`relative rounded-2xl ${isHome ? "shadow-[0_0px_1.2px_rgb(140,140,140)]" : ""}`}
            >
              <div
                href={`/blog/${blog.slug}`}
                className="relative aspect-[240/135] w-full opacity-70 hover:opacity-90"
              >
                <Image
                  src={blog.image}
                  alt="Blog image"
                  fill
                  className="object-cover rounded-2xl "
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 rounded-lg opacity-90 backdrop-blur-md">
                <h2 className="mb-2 font-bold">{blog.title}</h2>
                <p className="mb-4 text-sm text-muted-foreground ">
                  {blog.publishedAt ?? ""} | {blog.tag}
                </p>
                <p className="text-sm">{blog.summary}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </ul>
  );
}
