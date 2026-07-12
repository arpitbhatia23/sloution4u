import { defineQuery } from "next-sanity";

/**
 * Paginated blog posts.
 *
 * Pass:
 * {
 *   start: 0,
 *   end: 6
 * }
 */
export const POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current)
  ]
  | order(publishedAt desc)
  [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    image {
      asset,
      hotspot,
      crop
    }
  }
`);

/**
 * Total number of posts used for pagination.
 */
export const POSTS_COUNT_QUERY = defineQuery(`
  count(
    *[
      _type == "post" &&
      defined(slug.current)
    ]
  )
`);

/**
 * Fetch one complete blog post using its slug.
 *
 * Pass:
 * {
 *   slug: "your-post-slug"
 * }
 */
export const POST_BY_SLUG_QUERY = defineQuery(`
  *[
    _type == "post" &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    image {
      asset,
      hotspot,
      crop
    },
    body
  }
`);

/**
 * Get every valid post slug.
 * Used by generateStaticParams().
 */
export const POST_SLUGS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current)
  ] {
    "slug": slug.current
  }
`);

/**
 * Related posts.
 *
 * Because your schema has no category field,
 * this returns the latest three posts excluding
 * the currently opened post.
 *
 * Pass:
 * {
 *   slug: "current-post-slug"
 * }
 */
export const RELATED_POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    slug.current != $slug
  ]
  | order(publishedAt desc)
  [0...3] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    image {
      asset,
      hotspot,
      crop
    }
  }
`);