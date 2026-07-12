import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;

      const imageUrl = urlFor(value)
        .width(1200)
        .auto("format")
        .fit("max")
        .url();

      return (
        <figure className="my-10">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog image"}
              width={1200}
              height={700}
              sizes="(max-width: 768px) 100vw, 900px"
              className="h-auto w-full object-cover"
            />
          </div>

          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },

  block: {
    normal: ({ children }) => (
      <p className="my-5 text-lg leading-8 text-gray-700">
        {children}
      </p>
    ),

    h2: ({ children }) => (
      <h2 className="mb-4 mt-12 text-3xl font-bold text-gray-950">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mb-3 mt-10 text-2xl font-semibold text-gray-950">
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="mb-3 mt-8 text-xl font-semibold text-gray-950">
        {children}
      </h4>
    ),

    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-blue-600 bg-blue-50 px-6 py-5 text-xl italic text-gray-700">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-6 list-disc space-y-2 pl-7 text-lg leading-8 text-gray-700">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="my-6 list-decimal space-y-2 pl-7 text-lg leading-8 text-gray-700">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-950">
        {children}
      </strong>
    ),

    em: ({ children }) => <em>{children}</em>,

    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm text-red-600">
        {children}
      </code>
    ),

    link: ({ value, children }) => {
      const href = value?.href || "#";
      const isInternal = href.startsWith("/");

      if (isInternal) {
        return (
          <Link
            href={href}
            className="font-medium text-blue-600 underline underline-offset-4"
          >
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          target={
            value?.openInNewTab ? "_blank" : undefined
          }
          rel={
            value?.openInNewTab
              ? "noopener noreferrer"
              : undefined
          }
          className="font-medium text-blue-600 underline underline-offset-4"
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextContent({ value }) {
  if (!value?.length) {
    return (
      <p className="text-gray-600">
        No content has been added to this article.
      </p>
    );
  }

  return (
    <div className="portable-text">
      <PortableText value={value} components={components} />
    </div>
  );
}