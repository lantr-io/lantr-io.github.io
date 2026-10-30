import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://lantr.io'
export const dynamic = 'force-static'

// The canonical URL of a post. next.config.mjs sets trailingSlash, so the URL without
// the slash answers 301, and sitemaps, feeds and structured data must not point at it.
export const postUrl = (slug: string) => `${baseUrl}/blog/${slug}/`

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: postUrl(post.slug),
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/blog', '/products'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
