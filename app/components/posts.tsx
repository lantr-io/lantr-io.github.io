import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts({ limit }: { limit?: number } = {}) {
  let allBlogs = getBlogPosts()
  const TitleTag = limit ? 'p' : 'h2'

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .slice(0, limit)
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 group"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-3">
              <p className="text-xm1 text-neutral-500 dark:text-neutral-500 md:w-[120px]">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <TitleTag className="text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-[#FF8C00] transition-colors">
                {post.metadata.title}
              </TitleTag>
            </div>
          </Link>
        ))}
    </div>
  )
}
