import Link from 'next/link'
import { Breadcrumb } from 'app/components/breadcrumb'
import { baseUrl } from 'app/sitemap'

export const metadata = {
  title: 'Products',
  description: 'Explore cutting-edge blockchain solutions: Scalus for Cardano dApps, Binocular/Bifrost Bitcoin-Cardano bridge, Cosmex L2 DEX, and Adastream decentralized storage. Open-source tools powering the next generation of web3.',
  openGraph: {
    title: 'Lantr Engineering Products',
    description: 'Open-source blockchain solutions: Scalus (Cardano dApp platform), Binocular/Bifrost (trustless BTC-ADA bridge), Cosmex (L2 orderbook DEX), and Adastream (decentralized storage).',
    url: `${baseUrl}/products`,
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=${encodeURIComponent('Our Products')}`,
        width: 1200,
        height: 630,
        alt: 'Lantr Engineering Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lantr Engineering Products',
    description: 'Open-source blockchain tools: Scalus, Binocular/Bifrost, Cosmex, and Adastream powering Cardano and Bitcoin ecosystems.',
    images: [`${baseUrl}/og?title=${encodeURIComponent('Our Products')}`],
  },
}

type Product = {
  name: string
  description: string
  url: string
  tags: string[]
}

const products: Product[] = [
  {
    name: 'Scalus',
    description: 'A Scala 3-based Cardano dApps development platform that enables developers to write smart contracts and dApps using modern functional programming practices with native Plutus support.',
    url: 'https://scalus.org',
    tags: ['Cardano', 'Smart contracts', 'Dev tooling'],
  },
  {
    name: 'Binocular / Bifrost',
    description: 'A trustless Bitcoin-Cardano bridge infrastructure secured by Cardano Stake Pool Operators (SPOs), enabling seamless cross-chain asset transfers between Bitcoin and Cardano networks.',
    url: 'https://github.com/lantr-io/binocular',
    tags: ['Bitcoin', 'Cardano', 'Bridge'],
  },
  {
    name: 'Cosmex',
    description: 'A high-performance Cardano Layer 2 Order Book Exchange that provides fast, low-cost trading while maintaining security through Cardano blockchain settlement.',
    url: 'https://github.com/lantr-io/cosmex',
    tags: ['L2', 'Orderbook', 'Cardano'],
  },
  {
    name: 'Adastream',
    description: 'A decentralized file hosting and streaming service incentivized through Cardano Ada payments, offering censorship-resistant storage with native cryptocurrency integration.',
    url: 'https://github.com/lantr-io/adastream',
    tags: ['Cardano', 'Storage', 'Availability'],
  },
]

export default function Page() {
  return (
    <section>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Products' }
      ]} />
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Our Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.name} className="flex flex-col space-y-1 mb-6">
            <div className="w-full flex flex-col space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2>
                  <Link
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-100 text-lg font-semibold tracking-tight border-b-2 border-[#FF8C00] inline-block"
                  >
                    {product.name}
                  </Link>
                </h2>
                <div className="flex gap-1.5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-center">
        <h2 className="text-2xl font-semibold mb-4 tracking-tight">Interested in our Products?</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
          Have questions about our products or want to collaborate? We'd love to discuss how we can work together.
        </p>
        <Link
          href="mailto:contact@lantr.io"
          className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
