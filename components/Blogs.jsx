import Image from "next/image";
import Link from "next/link";

export default function Blogs({ blogs }) {
  return (
    <ul>
      {blogs.map((blog, i) => (
        <li key={blog.slug} className="mb-5 sm:mb-10">
          <Link href={`/blog/${blog.slug}`}>
            <div
              className={`flex flex-col sm:flex-row w-full lg:w-4/5 items-stretch gap-6 rounded-2xl shadow-[0_0px_1.2px_rgb(140,140,140)] hover:shadow-[0_0px_2px_rgb(140,140,140)] p-3 opacity-90 hover:opacity-100 bg-[#0A0C0C] hover:bg-muted`}
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

              <div className="flex flex-col justify-between flex-grow p-4 rounded-lg">
                <div>
                  <h2 className="mb-2 font-bold">{blog.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {blog.publishedAt ?? ""} | {blog.tag}
                  </p>
                </div>
                <p className="text-sm ">{blog.summary}</p>
              </div>
            </div>
          </Link>
          {blogs.length - 1 != i && (
            <div className="w-full mt-5 border-[0.5px] sm:hidden border-muted-foreground"></div>
          )}
        </li>
      ))}
    </ul>
  );
}
