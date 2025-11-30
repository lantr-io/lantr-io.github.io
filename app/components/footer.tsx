function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

const footerLinks = [
  { href: 'mailto:contact@lantr.io', label: 'contact' },
  { href: 'https://x.com/lantr_io', label: 'x (twitter)' },
  { href: 'https://github.com/lantr-io', label: 'github' },
  { href: 'https://discord.gg/B6tXmBzhTn', label: 'discord' },
  { href: '/rss', label: 'rss' },
]

export default function Footer() {
  return (
    <footer className="mb-12">
      <ul className="font-sm mt-12 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {footerLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href={href}
            >
              <ArrowIcon />
              <p className="ml-2 h-7">{label}</p>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Lantr Engineering
      </p>
    </footer>
  )
}
