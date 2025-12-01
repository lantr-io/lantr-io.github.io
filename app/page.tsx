import { BlogPosts } from 'app/components/posts'
import { baseUrl } from './sitemap'

export const metadata = {
  //title: 'Home',
  description: 'Blockchain R&D lab specialising in Cardano, Bitcoin and Midnight. We design and build robust smart-contracts, web3 protocols, mission-critical applications and blockchain infrastructure. Deep expertise in zero-knowledge cryptography and L2 scaling.',
  openGraph: {
    title: 'Lantr Engineering - Blockchain Infrastructure & Solutions',
    description: 'Blockchain R&D lab specialising in Cardano, Bitcoin and Midnight. We design and build robust smart-contracts, web3 protocols, mission-critical applications and blockchain infrastructure.',
    url: baseUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lantr Engineering - Blockchain Infrastructure & Solutions',
    description: 'Blockchain R&D lab specialising in Cardano, Bitcoin and Midnight. We design and build robust smart-contracts, web3 protocols, and blockchain infrastructure.',
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
      Blockchain Infrastructure & Solutions
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
