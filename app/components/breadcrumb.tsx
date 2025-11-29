import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-neutral-500 dark:text-neutral-500">
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-neutral-900 dark:hover:text-neutral-100">
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-700 dark:text-neutral-400">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  )
}
