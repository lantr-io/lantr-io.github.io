import { FeaturedPosts } from 'app/components/featured-posts'
import { Breadcrumb } from 'app/components/breadcrumb'

export const metadata = {
  title: 'Blog',
  description: 'Read our blog.',
}

export default function Page() {
  return (
    <section>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Blog' }
      ]} />
      <h1 className="font-semibold text-4xl mb-4 tracking-tighter">Our Blog</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Long-form notes on Cardano, governance and blockchain infrastructure.
      </p>
      <FeaturedPosts />
    </section>
  )
}
