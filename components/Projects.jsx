import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import MotionDivWrapper from "./MotionDivWrapper";

export default function Projects({ projects }) {
  return (
    <section>
      <ul className="grid w-full grid-cols-1 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <MotionDivWrapper
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.5 },
              y: { duration: 0.2 },
            }}
          >
            <Link href={project.link} target="_blank">
              <div className="relative flex flex-col items-start justify-center gap-6 p-5 shadow-sm rounded-2xl hover:bg-opacity-80 ">
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
                  <h2 className="mb-4 font-semibold">{project.title}</h2>
                  <p className="text-sm font-light">{project.description}</p>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm">
                  <p>{new URL(project.link).host}</p>
                  <ExternalLink className="size-4" />
                </div>
              </div>
            </Link>
          </MotionDivWrapper>
        ))}
      </ul>
    </section>
  );
}
