import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

type Post = {
  slug: string
  metadata: {
    title: string
    publishedAt: string
    summary?: string
  }
}

function sortByDate(posts: Post[]) {
  return posts.sort((a, b) =>
    new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt) ? -1 : 1
  )
}

function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link
      className="flex flex-col space-y-3 mb-10 p-5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group"
      href={`/blog/${post.slug}`}
    >
      <div className="w-full flex flex-col space-y-2">
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          {formatDate(post.metadata.publishedAt, false)}
        </p>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-[#FF8C00] transition-colors">
          {post.metadata.title}
        </h2>
        {post.metadata.summary && (
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
            {post.metadata.summary}
          </p>
        )}
      </div>
    </Link>
  )
}

function RegularPost({ post }: { post: Post }) {
  return (
    <Link
      className="flex items-baseline py-3 group"
      href={`/blog/${post.slug}`}
    >
      <p className="text-neutral-500 dark:text-neutral-400 w-[130px] shrink-0">
        {formatDate(post.metadata.publishedAt, false)}
      </p>
      <p className="text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-[#FF8C00] transition-colors">
        {post.metadata.title}
      </p>
    </Link>
  )
}

export function FeaturedPosts({ limit }: { limit?: number } = {}) {
  const sortedBlogs = sortByDate(getBlogPosts()).slice(0, limit)
  const [featuredPost, ...otherPosts] = sortedBlogs

  return (
    <div>
      {featuredPost && <FeaturedPost post={featuredPost} />}
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {otherPosts.map((post) => (
          <RegularPost key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
