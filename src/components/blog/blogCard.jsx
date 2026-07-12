import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

function formatDate(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogCard({ post }) {
  const imageUrl = post.featuredImage?.asset
    ? urlFor(post.featuredImage)
        .width(800)
        .height(500)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/blogs/${post.slug}`}>
        <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.featuredImage?.alt || post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              No image
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-sm">
          {post.category && (
            <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
              {post.category.replaceAll("-", " ")}
            </span>
          )}

          {post.publishedAt && (
            <time
              dateTime={post.publishedAt}
              className="text-gray-500"
            >
              {formatDate(post.publishedAt)}
            </time>
          )}
        </div>

        <h2 className="text-xl font-semibold leading-snug text-gray-900">
          <Link
            href={`/blogs/${post.slug}`}
            className="transition hover:text-blue-600"
          >
            {post.title}
          </Link>
        </h2>

        {post.excerpt && (
          <p className="mt-3 line-clamp-3 leading-7 text-gray-600">
            {post.excerpt}
          </p>
        )}

        <Link
          href={`/blogs/${post.slug}`}
          className="mt-5 inline-flex font-semibold text-blue-600 hover:text-blue-800"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}