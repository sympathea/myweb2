import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export default function Projects({ projects }) {
  return (
    <section>
      <ul className="grid w-full grid-cols-1 gap-10 mx-auto mt-20 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <Card key={project._id} className="relative">
            <CardHeader>
              <div className="relative flex items-center justify-center w-12 h-12 border rounded-full">
                <Image
                  src={project.imageUrl}
                  alt="Project image"
                  width={36}
                  height={36}
                  className="object-contain rounded-full"
                />
              </div>
            </CardHeader>

            <CardContent>
              <div>
                <h2 className="mb-4 font-bold">{project.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </CardContent>

            <CardFooter>
              <Link href={project.link} target="_blank">
                <span className="absolute z-20 -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl" />
                <span className="relative z-10">
                  {new URL(project.link).host}
                </span>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </section>
  );
}
