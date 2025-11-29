import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className='mb-8 text-4xl font-semibold tracking-tighter'>
        Lantr Engineering
      </h1>
      <h2 className='mb-4 text-2xl font-semibold tracking-tighter  inline-block'>
        Blockchain R&D lab
      </h2>
      <p className="mb-4">
        Lantr Engineering is a blockchain R&D lab specialising in Cardano, Bitcoin and Midnight. We design protocols, build robust smart-contracts and mission-critical systems. Our team has deep expertise in zero-knowledge cryptography and L2 scaling, working with languages such as Scala, Haskell, Rust, TypeScript and Aiken.
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
