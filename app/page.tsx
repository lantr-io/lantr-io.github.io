import { BlogPosts } from 'app/components/posts'
import { baseUrl } from './sitemap'

export const metadata = {
  title: 'Home',
  description: 'Expert blockchain R&D lab specializing in Cardano, Bitcoin, and Midnight. Build secure smart contracts, web3 protocols, and mission-critical blockchain infrastructure with deep expertise in ZK cryptography and L2 scaling.',
  openGraph: {
    title: 'Lantr Engineering - Blockchain R&D Lab',
    description: 'Transform your blockchain vision into reality. Expert team specializing in Cardano smart contracts, Bitcoin infrastructure, and cutting-edge web3 protocols.',
    url: baseUrl,
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Blockchain R&D Lab')}`,
        width: 1200,
        height: 630,
        alt: 'Lantr Engineering - Blockchain R&D Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lantr Engineering - Blockchain R&D Lab',
    description: 'Transform your blockchain vision into reality. Expert team specializing in Cardano smart contracts, Bitcoin infrastructure, and web3 protocols.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Blockchain R&D Lab')}`],
  },
}

export default function Page() {
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Lantr Engineering',
            alternateName: 'Lantr.io',
            url: baseUrl,
            logo: `${baseUrl}/img/lantr-logo.png`,
            description: 'Blockchain R&D lab specialising in Cardano, Bitcoin and Midnight. We design and build robust smart-contracts, web3 protocols, and blockchain infrastructure.',
            sameAs: [
              'https://x.com/lantr_io',
              'https://github.com/lantr-io',
              'https://discord.gg/B6tXmBzhTn',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'contact@lantr.io',
              contactType: 'Business Development',
            },
          }),
        }}
      />
      <h1 className='mb-8 text-4xl font-semibold tracking-tighter'>
        Lantr Engineering
      </h1>
      <h2 className='mb-4 text-2xl font-semibold tracking-tighter  inline-block'>
        Blockchain R&D lab
      </h2>
      <p className="mb-4">
        Lantr Engineering is a blockchain R&D lab specialising in Cardano, Bitcoin and Midnight. We design and build robust smart-contracts, web3 protocols, mission-critical applications and blockchain infrastructure. Our team has deep expertise in zero-knowledge cryptography and L2 scaling, working with languages such as Scala, Haskell, Rust, TypeScript and Aiken.
      </p>
      <div className="mb-4">
        <h2 className="mb-4 text-xl font-semibold tracking-tighter border-b-2 border-[#FF8C00] inline-block">
          We can help with:
        </h2>
        <ul className="mb-4">
          <li>— blockchain dApp architecture and development</li>
          <li>— protocol, business-solution design and implementation</li>
          <li>— Cardano & Midnight smart-contract development and security audits</li>
          <li>— Bitcoin & Lightning infrastructure solutions</li>
        </ul>
      </div>
      <h2 className="mb-2 text-xl font-semibold tracking-tighter border-b-2 border-[#FF8C00] inline-block">
        Recent posts:
      </h2>
      <div className="my-2">
        <BlogPosts limit={2} />
      </div>
    </section>
  )
}
