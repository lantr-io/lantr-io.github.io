import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-neutral-900 dark:hover:text-neutral-100">
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-900 dark:text-neutral-100">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  )
}
