import Image from "next/image";
import Link from "next/link";
import MotionDivWrapper from "./MotionDivWrapper";

export default function Blogs({ blogs }) {
  return (
    <section>
      <ul className="grid w-full grid-cols-1 gap-10 mx-auto lg:grid-cols-2">
        {blogs.map((blog) => (
          <MotionDivWrapper
            key={blog.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.5 },
              y: { duration: 0.2 },
            }}
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="relative shadow-sm rounded-2xl ">
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
          </MotionDivWrapper>
        ))}
      </ul>
    </section>
  );
}
