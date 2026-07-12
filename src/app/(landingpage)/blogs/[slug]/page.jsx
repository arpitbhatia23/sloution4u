import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/blog/blogCard";
import { notFound } from "next/navigation";
import PortableTextContent from "@/components/blog/PortableTextContent";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  POST_BY_SLUG_QUERY,
  POST_SLUGS_QUERY,
  RELATED_POSTS_QUERY,
} from "@/sanity/lib/queries";

export const revalidate = 60;
export const dynamicParams = true;

function formatDate(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

async function getPost(slug) {
  return client.fetch(
    POST_BY_SLUG_QUERY,
    { slug },
    {
      next: {
        revalidate: 30,
        tags: [`post-${slug}`, "posts"],
      },
    }
  );
}

export async function generateStaticParams() {
  const posts = await client.fetch(
    POST_SLUGS_QUERY
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Solution4U",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const imageUrl = post.featuredImage?.asset
    ? urlFor(post.featuredImage)
        .width(1200)
        .height(630)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  const title =
    post.metaTitle ||
    `${post.title} | Solution4U`;

  const description =
    post.metaDescription || post.excerpt;

  return {
    title,
    description,

    keywords: post.keywords || post.tags,

    alternates: {
      canonical:
        post.canonicalUrl || `/blogs/${post.slug}`,
    },

    robots: {
      index: !post.noIndex,
      follow: !post.noIndex,
    },

    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : [],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt:
                post.featuredImage?.alt ||
                post.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const featuredImageUrl = post.featuredImage?.asset
    ? urlFor(post.featuredImage)
        .width(1400)
        .height(800)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  const relatedPosts = post
    ? await client.fetch(
        RELATED_POSTS_QUERY,
        {
          slug,
          category: post,
        },
        {
          next: {
            revalidate: 30,
            tags: ["posts"],
          },
        }
      )
    : [];


    console.log(relatedPosts)
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://solution4u.co.in";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author || "Solution4U",
    },
    publisher: {
      "@type": "Organization",
      name: "Solution4U",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blogs/${post.slug}`,
    },
    image: featuredImageUrl
      ? [featuredImageUrl]
      : undefined,
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <article>
        <header className=" px-6 py-16 text-black md:py-24">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blogs"
              className="mb-8 inline-flex text-blue-600 "
            >
              ← Back to blogs
            </Link>

            {post.category && (
              <p className="mb-4 font-semibold uppercase tracking-wider text-blue-600">
                {post.category.replaceAll("-", " ")}
              </p>
            )}

            <h1 className="text-xl font-bold leading-tight md:text-3xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-6 text-xl leading-8 text-black">
                {post.excerpt}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-4 text-black">
             

              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              )}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6">
          {featuredImageUrl && (
            <figure className="-mt-10 mb-12">
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
                <Image
                  src={featuredImageUrl}
                  alt={
                    post.featuredImage?.alt ||
                    post.title
                  }
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
              </div>

             
            </figure>
          )}

          <div className="mx-auto max-w-3xl pb-16">
          
            <PortableTextContent value={post.body} />

           
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-bold text-gray-950">
              Related articles
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <BlogCard
                  key={relatedPost._id}
                  post={relatedPost}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}