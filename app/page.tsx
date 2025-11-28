import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="mb-8">
        <Image
          src="/img/lantr-logo-500.png"
          alt="Lantr Engineering"
          width={150}
          height={150}
          priority
        />
      </div>
      <h1 className='mb-4 text-xl font-semibold tracking-tighter'>
        <span className="sr-only">Lantr Engineering – </span>
        Blockchain R&D lab
      </h1>
      <p className="mb-4">
        Lantr Engineering is a blockchain R&D lab specialising in Cardano, Bitcoin and Midnight. We design protocols, build robust smart-contracts and mission-critical systems. Our team has deep expertise in zero-knowledge cryptography and L2 scaling, working with languages such as Scala, Haskell, Rust, TypeScript and Aiken.
      </p>
      <div className="mb-8">
        We can help with:
        <ul className="mb-4">
          <li>— blockchain dApp architecture and development</li>
          <li>— protocol and business-solution design and implementation</li>
          <li>— Cardano smart-contract development and security audits</li>
          <li>— Bitcoin and Lightning infrastructure solutions</li>
        </ul>
      </div>
      <h2 className="mb-4 text-xl font-semibold tracking-tighter"> 
        Recent posts
      </h2>
      <div className="my-4">
        <BlogPosts limit={2} />
      </div>
    </section>
  )
}
