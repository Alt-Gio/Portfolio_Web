'use client'

import Link from 'next/link'

type Crumb = { href: string; label: string }

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
      <ol className="flex items-center gap-2">
        {items.map((item, idx) => (
          <li key={item.href} className="flex items-center gap-2">
            {idx > 0 && <span className="opacity-60">/</span>}
            {idx < items.length - 1 ? (
              <Link href={item.href} className="hover:text-warm-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-warm-white">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}


