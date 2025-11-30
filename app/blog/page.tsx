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
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Our Blog</h1>
      <FeaturedPosts />
    </section>
  )
}
