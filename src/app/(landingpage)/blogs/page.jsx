import { notFound, redirect } from "next/navigation";
import Pagination from "@/components/blog/Pagination";
import { client } from "@/sanity/lib/client";
import BlogCard from "@/components/blog/blogCard";
import {
  POSTS_COUNT_QUERY,
  POSTS_QUERY,
} from "@/sanity/lib/queries";

export const metadata = {
  title: "IT Insights and Technology Blog | Solution4U",
  description:
    "Read Solution4U articles about cloud services, cybersecurity, data backup, IT support and business technology.",
  alternates: {
    canonical: "/blogs",
  },
};

// export const revalidate = 60;

const POSTS_PER_PAGE = 6;

export default async function BlogsPage({ searchParams }) {
  // Next.js 15/16 provides searchParams as a Promise.
  const resolvedSearchParams = await searchParams;

  const requestedPage = Number(
    resolvedSearchParams?.page || 1
  );

  if (
    !Number.isInteger(requestedPage) ||
    requestedPage < 1
  ) {
    redirect("/blogs?page=1");
  }

  const totalPosts = await client.fetch(
    POSTS_COUNT_QUERY,
    {},
    {
      next: {
        revalidate: 60,
        tags: ["posts"],
      },
    }
  );

  const totalPages = Math.max(
    1,
    Math.ceil(totalPosts / POSTS_PER_PAGE)
  );

  if (requestedPage > totalPages && totalPosts > 0) {
    notFound();
  }

  const start = (requestedPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const posts = await client.fetch(
    POSTS_QUERY,
    {
      start,
      end,
    },
    {
      next: {
        revalidate: 30,
        tags: ["posts"],
      },
    }
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <section className=" px-6 py-20 text-black">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            Solution4U Blog
          </p>

          <h1 className="text-xl font-bold md:text-3xl">
            Technology insights for modern businesses
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black">
            Practical articles about cloud infrastructure,
            cybersecurity, backup solutions and IT support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {posts.length > 0 ? (
          <>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>

            <Pagination
              currentPage={requestedPage}
              totalPages={totalPages}
            />
          </>
        ) : (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <h2 className="text-2xl font-semibold">
              No blog posts published
            </h2>

            <p className="mt-3 text-black">
              Publish your first post from Sanity Studio.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}