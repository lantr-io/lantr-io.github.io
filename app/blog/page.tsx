import { FeaturedPosts } from 'app/components/featured-posts'
import { Breadcrumb } from 'app/components/breadcrumb'
import { baseUrl } from 'app/sitemap'

export const metadata = {
  title: 'Blog',
  description: "Discover expert insights on blockchain development, Cardano smart contracts, Bitcoin infrastructure, and decentralized applications. Learn from our R&D team's deep technical experience.",
  openGraph: {
    title: 'Lantr Engineering Blog',
    description: 'Deep technical insights on blockchain development, Cardano smart contracts, Bitcoin infrastructure, and cutting-edge web3 protocols from our expert R&D team.',
    url: `${baseUrl}/blog`,
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Blog')}`,
        width: 1200,
        height: 630,
        alt: 'Lantr Engineering Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lantr Engineering Blog',
    description: 'Deep technical insights on blockchain development, Cardano smart contracts, and web3 protocols from our expert team.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Blog')}`],
  },
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
