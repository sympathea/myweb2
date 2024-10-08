import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, Undo2 } from "lucide-react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Post({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, summary, image, publishedAt } = metadata;

  return (
    <section className="flex px-4 mx-auto max-w-7xl md:px-8">
      <aside className="relative">
        <Link
          href="/blog"
          className="sticky left-0 inline-flex items-center p-2 mt-4 font-light transition-colors rounded-full shadow-lg top-10 text-muted-foreground hover:text-foreground"
        >
          <Undo2 className="w-8 h-8" />
        </Link>
      </aside>

      <article className="max-w-4xl mx-auto">
        <header>
          {image && (
            <div className="relative w-full mb-6 overflow-hidden rounded-lg h-96">
              <Image
                src={image}
                alt={title || ""}
                className="object-cover"
                fill
              />
            </div>
          )}

          <p className="mb-6 text-sm text-muted-foreground ">
            {publishedAt ?? ""}
          </p>

          <h1 className="mb-6 text-4xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{summary}</p>
        </header>

        <main className="mt-16 prose dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </main>
      </article>
    </section>
  );
}

async function getPostBySlug(slug) {
  const rootDirectory = path.join(process.cwd(), "content", "blog");
  const filePath = path.join(rootDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

  const { data, content } = matter(fileContent);

  return { metadata: { ...data, slug }, content };
}
