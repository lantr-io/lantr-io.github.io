import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Lantr Engineering
      </h1>
      <h2 className='mb-4 text-xl font-semibold tracking-tighter'> 
        Blockchain R&D lab
      </h2>
      <p className="mb-4">
        We specialize in Cardano, Bitcoin and Midnight blockchains, with deep expertise in protocols design and robust smart contracts development. Our team excels in zero-knowledge cryptography and L2 scaling solutions, working with cutting-edge technologies including Scala, Haskell, Rust, TypeScript, and Aiken.
      </p>
      <p className="mb-4">
        Our services include blockchain dApp development, protocols and business solutions design and implementation, Cardano smart contracts development and security audits, and Bitcoin and Lightning solutions.
      </p>
      <br/>
      <h2 className="mb-4 text-xl font-semibold tracking-tighter"> 
        Recent posts
      </h2>
      <div className="my-4">
        <BlogPosts limit={2} />
      </div>
    </section>
  )
}
