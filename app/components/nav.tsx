import Link from 'next/link'
import Image from 'next/image'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/products': {
    name: 'products',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Link href="/">
            <Image
              src="/lantr-logo.png"
              alt="Lantr Engineering"
              width={120}
              height={40}
              className="dark:hidden"
            />
            <Image
              src="/lantr-logo-dark.png"
              alt="Lantr Engineering"
              width={120}
              height={40}
              className="hidden dark:block"
            />
          </Link>
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-1 m-1 text-lg"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
