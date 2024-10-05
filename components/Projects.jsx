import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/lib/utils";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <li key={project._id} className="relative group">
          <Link href={`/`}>
            {project.image && (
              <div className="w-full overflow-hidden h-72 bg-muted sm:h-60">
                <Image
                  src={project.imageUrl}
                  alt={""}
                  fill
                  className="object-cover object-center transition-transform duration-500 rounded-lg group-hover:scale-105"
                />
              </div>
            )}

            <div className="absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="absolute inset-x-0 bottom-0 px-6 py-5 transition-all duration-500 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <h2 className="text-xl no-underline title line-clamp-1">
                {project.title}
              </h2>
              <p className="text-sm line-clamp-1 text-muted-foreground">
                {project.discription}
              </p>
              {/* <p className="text-xs font-light text-muted-foreground">
                {formatDate(project.publishedAt ?? "")}
              </p> */}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
