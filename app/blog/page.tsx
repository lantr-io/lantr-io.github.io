import { FeaturedPosts } from 'app/components/featured-posts'
import { Breadcrumb } from 'app/components/breadcrumb'
import { baseUrl } from 'app/sitemap'

export const metadata = {
  title: 'Cardano Development Blog | Smart Contracts, Governance & DeFi',
  description: "Discover expert insights on blockchain development, Cardano smart contracts, Bitcoin infrastructure, and decentralized applications. Learn from our R&D team's deep technical experience.",
  openGraph: {
    title: 'Cardano Development Blog | Smart Contracts, Governance & DeFi',
    description: 'Deep technical insights on blockchain development, Cardano smart contracts, Bitcoin infrastructure, and cutting-edge web3 protocols from our expert R&D team.',
    url: `${baseUrl}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardano Development Blog | Smart Contracts, Governance & DeFi',
    description: 'Deep technical insights on blockchain development, Cardano smart contracts, and web3 protocols from our expert team.',
  },
}

export default function Page() {
  return (
    <section>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Blog' }
      ]} />
      <h1 className="font-bold text-3xl md:text-4xl mb-10 tracking-tight">Our Blockchain Insights</h1>
      <FeaturedPosts />
    </section>
  )
}
