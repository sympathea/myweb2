import Image from "next/image";
import Link from "next/link";
import MotionDivWrapper from "./MotionDivWrapper";

export default function Blogs({ blogs }) {
  return (
    <section>
      <ul className="grid w-full grid-cols-1 gap-10 mx-auto md:grid-cols-2">
        {blogs.map((blog) => (
          <MotionDivWrapper
            key={blog._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.5 },
              y: { duration: 0.2 },
            }}
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="relative shadow-sm opacity-50 rounded-2xl hover:opacity-90">
                <div
                  href={`/blog/${blog.slug}`}
                  className="relative aspect-[240/135] w-full"
                >
                  <Image
                    src={blog.image}
                    alt="Blog image"
                    fill
                    className="object-cover rounded-2xl "
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-2 rounded-lg bg-opacity-30 backdrop-blur-sm">
                  <h2 className="mb-4 font-bold">{blog.title}</h2>
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
