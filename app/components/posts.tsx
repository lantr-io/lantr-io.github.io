import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts({ limit }: { limit?: number } = {}) {
  let allBlogs = getBlogPosts()
  const TitleTag = limit ? 'p' : 'h2'

  return (
    <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
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
            className="flex items-baseline py-3 group"
            href={`/blog/${post.slug}`}
          >
            <p className="text-neutral-500 dark:text-neutral-400 w-[130px] shrink-0">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <TitleTag className="text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-[#FF8C00] transition-colors">
              {post.metadata.title}
            </TitleTag>
          </Link>
        ))}
    </div>
  )
}
