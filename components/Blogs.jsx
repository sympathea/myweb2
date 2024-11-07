import Image from "next/image";
import Link from "next/link";

export default function Blogs({ blogs }) {
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.slug} className="mb-10">
          <Link href={`/blog/${blog.slug}`}>
            <div
              className={`flex w-full items-center gap-6 rounded-2xl  p-3 opacity-90 hover:opacity-100`}
            >
              <div
                href={`/blog/${blog.slug}`}
                className="relative aspect-[48/27] w-80 rounded-2xl shrink-0"
              >
                <Image
                  src={blog.image}
                  alt="Blog image"
                  fill
                  className="object-cover "
                />
              </div>

              <div className="p-4 rounded-lg backdrop-blur-md">
                <h2 className="mb-2 font-bold">{blog.title}</h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  {blog.publishedAt ?? ""} | {blog.tag}
                </p>
                <p className="text-sm ">{blog.summary}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
