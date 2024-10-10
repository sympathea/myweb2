import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "./MotionWrapper";

export default function Blogs({ blogs }) {
  return (
    <section>
      <ul className="grid w-full grid-cols-1 gap-10 mx-auto md:grid-cols-2">
        {blogs.map((blog) => (
          <MotionWrapper
            key={blog._id}
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            whileHover={{
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative border shadow-sm rounded-2xl hover:bg-opacity-80 hover:bg-gray-100 hover:border-dashed hover:border-slate-400"
          >
            <Link href={`/blog/${blog.slug}`}>
              <div
                href={`/blog/${blog.slug}`}
                className="relative aspect-[240/135] w-full"
              >
                <Image
                  src={blog.image}
                  alt="Blog image"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-2 bg-black rounded-lg bg-opacity-30 backdrop-blur-sm text-background">
                <h2 className="mb-4 font-bold">{blog.title}</h2>
                <p className="text-sm ">{blog.summary}</p>
              </div>
            </Link>
          </MotionWrapper>
        ))}
      </ul>
    </section>
  );
}
