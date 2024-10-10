import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

export default function Projects({ projects }) {
  return (
    <section>
      <ul className="grid w-full grid-cols-1 gap-10 mx-auto sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <MotionWrapper
            key={project._id}
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            whileHover={{
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative flex flex-col items-start justify-center gap-6 p-5 shadow-sm rounded-2xl hover:bg-opacity-80 hover:bg-gray-100 hover:border hover:border-dashed hover:border-slate-400"
          >
            <div className="relative flex items-center justify-center w-12 h-12 border rounded-full ">
              <Image
                src={project.imageUrl}
                alt="Project image"
                width={36}
                height={36}
                className="object-contain rounded-full"
              />
            </div>

            <div className="">
              <h2 className="mb-4 font-bold">{project.title}</h2>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </div>

            <Link href={project.link} target="_blank">
              <span className="absolute -inset-x-0 -inset-y-0 sm:rounded-2xl" />
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground ">
                <p>{new URL(project.link).host}</p>
                <ExternalLink className="size-4" />
              </div>
            </Link>
          </MotionWrapper>
        ))}
      </ul>
    </section>
  );
}
