import Link from 'next/link'
import { Breadcrumb } from 'app/components/breadcrumb'
import { baseUrl } from 'app/sitemap'

export const metadata = {
  title: 'Cardano dApp Tools & Bitcoin Bridge Solutions',
  description: 'Explore cutting-edge blockchain solutions: Scalus for Cardano dApps, Binocular/Bifrost Bitcoin-Cardano bridge, Cosmex L2 DEX, and Adastream decentralized storage. Open-source tools powering the next generation of web3.',
  openGraph: {
    title: 'Cardano dApp Tools & Bitcoin Bridge Solutions',
    description: 'Open-source blockchain solutions: Scalus (Cardano dApp platform), Binocular/Bifrost (trustless BTC-ADA bridge), Cosmex (L2 orderbook DEX), and Adastream (decentralized storage).',
    url: `${baseUrl}/products`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardano dApp Tools & Bitcoin Bridge Solutions',
    description: 'Open-source blockchain tools: Scalus, Binocular/Bifrost, Cosmex, and Adastream powering Cardano and Bitcoin ecosystems.',
  },
}

type Product = {
  name: string
  subtitle: string
  description: string
  url: string
  tags: string[]
}

const products: Product[] = [
  {
    name: 'Scalus',
    subtitle: 'Cardano Smart Contract & dApps Platform',
    description: 'A Scala 3-based Cardano dApps development platform that enables developers to write smart contracts and dApps using modern functional programming practices with native Plutus support.',
    url: 'https://scalus.org',
    tags: ['Cardano', 'Smart contracts', 'Dev tooling'],
  },
  {
    name: 'Binocular / Bifrost',
    subtitle: 'Trustless Bitcoin-Cardano Bridge',
    description: 'A trustless Bitcoin-Cardano bridge infrastructure secured by Cardano Stake Pool Operators (SPOs), enabling seamless cross-chain asset transfers between Bitcoin and Cardano networks.',
    url: 'https://github.com/lantr-io/binocular',
    tags: ['Bitcoin', 'Cardano', 'Bridge'],
  },
  {
    name: 'Cosmex',
    subtitle: 'Cardano Layer 2 Order Book DEX',
    description: 'A high-performance Cardano Layer 2 Order Book Exchange that provides fast, low-cost trading while maintaining security through Cardano blockchain settlement.',
    url: 'https://github.com/lantr-io/cosmex',
    tags: ['L2', 'Orderbook', 'Cardano'],
  },
  {
    name: 'Adastream',
    subtitle: 'Decentralized File Storage on Cardano',
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
      <h1 className="font-bold text-3xl md:text-4xl mb-10 tracking-tight">Our Cardano & Bitcoin Products</h1>
      <div className="space-y-8">
        {products.map((product) => (
          <div key={product.name} className="flex flex-col space-y-2">
            <div className="w-full flex flex-col space-y-2">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h2 className="flex items-baseline gap-2">
                  <Link
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-100 text-xl font-semibold tracking-tight border-b-2 border-[#FF8C00] inline-block"
                  >
                    {product.name}
                  </Link>
                  <span className="text-neutral-500 dark:text-neutral-400 font-normal text-base">
                    — {product.subtitle}
                  </span>
                </h2>
                {/* <div className="flex gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 md:p-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Interested in our Products?</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Have questions about our products or want to collaborate? We'd love to discuss how we can work together.
        </p>
        <Link
          href="mailto:contact@lantr.io"
          className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
