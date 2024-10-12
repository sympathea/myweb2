import { notFound } from "next/navigation";
import Link from "next/link";
import { Undo2 } from "lucide-react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug } from "@/lib/blog";

export default async function Blog({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const { metadata, content } = blog;
  const { title, summary, image, author, publishedAt, tag } = metadata;

  return (
    <section className="flex gap-6 px-4 mx-auto max-w-7xl md:px-8">
      <aside className="relative pt-14">
        <Link
          href="/blog"
          className="sticky flex items-center p-2 font-light transition-colors rounded-full shadow-lg top-10 text-muted-foreground hover:text-foreground"
        >
          <Undo2 className="w-5 h-5" />
        </Link>
      </aside>

      <article className="max-w-4xl mx-auto mt-16">
        <header>
          {image && (
            <div className="relative w-full mb-10 overflow-hidden rounded-lg h-96">
              <Image
                src={image}
                alt={title || ""}
                className="object-cover"
                fill
              />
            </div>
          )}

          <p className="mb-2 text-sm text-muted-foreground ">
            {publishedAt ?? ""} | {tag}
          </p>

          <h1 className="mb-2 text-4xl font-bold">{title}</h1>

          <p className="mb-6 text-muted-foreground">{author}</p>

          <p className="">{summary}</p>
        </header>

        <hr className="mt-10 border border-gray-400" />

        <main className="mt-16 prose dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </main>
      </article>
    </section>
  );
}
