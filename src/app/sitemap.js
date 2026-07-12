// app/sitemap.js
import { services } from "@/data/services";
import { client } from "@/sanity/lib/client";
export default async function sitemap() {
  const baseUrl = "https://www.solution4u.co.in";

  const blogs = await client.fetch(`
    *[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }
  `);

  const staticLastModified = new Date("2026-06-20");

  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/blogs", priority: 0.8, changeFrequency: "daily" },
    { path: "/contact", priority: 0.3, changeFrequency: "yearly" },
    { path: "/services", priority: 0.3, changeFrequency: "yearly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  ].map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: staticLastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
  const serviceRoutes = Array.isArray(services)
    ? services.map((s) => ({
        url: `${baseUrl}/${s.slug}`,
        lastModified: new Date().toISOString(),
      }))
    : [];

  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog._updatedAt),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  return [...pages, ...serviceRoutes, ...blogPages];
}
