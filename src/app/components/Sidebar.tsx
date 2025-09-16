'use client'

import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'expertise', label: 'Expertise', icon: '🛡️' },
  { id: 'experience', label: 'Experience', icon: '📈' },
  { id: 'projects', label: 'Projects', icon: '🧪' },
  { id: 'contact', label: 'Contact', icon: '✉️' },
]

export default function Sidebar() {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + window.innerHeight / 3
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (!el) continue
        const top = el.offsetTop
        const bottom = top + el.offsetHeight
        if (scrollY >= top && scrollY < bottom) {
          setActive(s.id)
          break
        }
      }
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <aside className="hidden lg:flex sticky top-0 h-screen w-80 flex-col border-r border-neutral-800 bg-neutral-900/80 backdrop-blur-sm">
      <div className="p-8 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-12 w-12 rounded-full bg-neutral-800 flex items-center justify-center text-warm-white font-semibold">AC</div>
          <div>
            <div className="text-lg font-semibold text-warm-white">Alex Chen</div>
            <div className="text-sm text-muted">Cybersecurity Consultant</div>
          </div>
        </div>

        <div className="text-xl font-bold text-warm-white leading-tight">Enterprise Security</div>
        <div className="text-xl font-bold text-gradient mb-4">Expert</div>
      </div>

      <nav className="grid grid-rows-6 gap-0 flex-1 min-h-0">
        {sections.map((s) => {
          const isActive = active === s.id
          return (
            <button
              key={s.id}
              onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              aria-current={isActive ? 'true' : undefined}
              className={`group relative flex h-full items-center justify-start px-6 text-warm-white font-medium transition-all ${isActive ? 'bg-neutral-800' : 'bg-neutral-900'} hover:bg-neutral-800`}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-xl translate-y-[1px] group-active:scale-95 transition-transform" aria-hidden>{s.icon}</span>
                <span className="opacity-90 group-hover:opacity-100">{s.label}</span>
              </span>
              <span className={`absolute left-0 top-0 h-full w-1 ${isActive ? 'bg-primary' : 'bg-transparent'} transition-colors`} />
            </button>
          )
        })}
      </nav>

      <div className="px-8 py-4 text-xs text-muted border-t border-neutral-800">© {new Date().getFullYear()} Alex Chen</div>
    </aside>
  )
}


