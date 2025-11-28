import Link from 'next/link'
import { Breadcrumb } from 'app/components/breadcrumb'

export const metadata = {
  title: 'Products',
  description: 'Explore our products.',
}

type Product = {
  name: string
  description: string
  url: string
}

const products: Product[] = [
  {
    name: 'Scalus',
    description: 'A Scala 3-based Cardano dApps development platform that enables developers to write smart contracts and dApps using modern functional programming practices with native Plutus support.',
    url: 'https://scalus.org',
  },
  {
    name: 'Binocular / Bifrost',
    description: 'A trustless Bitcoin-Cardano bridge infrastructure secured by Cardano Stake Pool Operators (SPOs), enabling seamless cross-chain asset transfers between Bitcoin and Cardano networks.',
    url: 'https://github.com/lantr-io/binocular',
  },
  {
    name: 'Cosmex',
    description: 'A high-performance Cardano Layer 2 Order Book Exchange that provides fast, low-cost trading while maintaining security through Cardano blockchain settlement.',
    url: 'https://github.com/lantr-io/cosmex',
  },
  {
    name: 'Adastream',
    description: 'A decentralized file hosting and streaming service incentivized through Cardano Ada payments, offering censorship-resistant storage with native cryptocurrency integration.',
    url: 'https://github.com/lantr-io/adastream',
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
          <div key={product.name} className="flex flex-col space-y-1 mb-4">
            <div className="w-full flex flex-col space-y-1">
              <Link
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium hover:underline w-fit"
              >
                {product.name}
              </Link>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
