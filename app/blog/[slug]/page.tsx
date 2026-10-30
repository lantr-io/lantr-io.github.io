import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl, postUrl } from 'app/sitemap'
import { Breadcrumb } from 'app/components/breadcrumb'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata

  // A page's openGraph and twitter objects replace the layout's, not extend them,
  // so the site-wide fields from layout.tsx are repeated here.
  return {
    title,
    description,
    keywords: post.metadata.tags?.split(/,\s*|[\s]+/).filter(Boolean),
    alternates: { canonical: postUrl(post.slug) },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: postUrl(post.slug),
      siteName: 'Lantr.io',
      locale: 'en_US',
      ...(post.metadata.author && { authors: [post.metadata.author] }),
      ...(image && {
        images: [
          {
            url: image,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@lantr_io',
      creator: post.metadata.authorTwitter || '@lantr_io',
      ...(image && { images: [image] }),
    },
  }
}

export default async function Blog({ params }) {
  const { slug } = await params
  let post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/opengraph-image.png`,
            url: postUrl(post.slug),
            mainEntityOfPage: postUrl(post.slug),
            keywords: post.metadata.tags?.split(/,\s*|[\s]+/).filter(Boolean).join(', '),
            articleSection: post.metadata.tags?.split(/,\s*|[\s]+/)[0] || 'Technology',
            author: {
              '@type': 'Person',
              name: post.metadata.author || 'Lantr Engineering',
              ...(post.metadata.authorTwitter && {
                sameAs: `https://x.com/${post.metadata.authorTwitter.replace(/^@/, '')}`,
              }),
            },
            publisher: {
              '@type': 'Organization',
              name: 'Lantr Engineering',
              url: baseUrl,
            },
          }),
        }}
      />
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: post.metadata.title }
      ]} />
      <h1 className="title font-bold text-3xl md:text-4xl tracking-tight leading-tight">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-6 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {post.metadata.author && <span>{post.metadata.author} — </span>}
          <span className="post-date">{formatDate(post.metadata.publishedAt)}</span>
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
