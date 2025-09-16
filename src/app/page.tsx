'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// Header removed per new design
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NetworkBackground from './components/NetworkBackground'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initialize smooth scrolling and animations
    const ctx = gsap.context(() => {
      // Animate elements on page load
      gsap.from('.animate-on-load', {
        duration: 0.8,
        y: 24,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.2
      })

      // Set up scroll-triggered animations for sections
      const sections = gsap.utils.toArray('.section-animate')
      sections.forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-neutral-900">
      <NetworkBackground />
      <div className="relative z-10 grid lg:grid-cols-[20rem_1fr]">
        <Sidebar />
        <main className="min-h-screen px-6 md:px-10 lg:px-12">
          <section className="max-w-4xl mx-auto space-y-24 py-12">
            <Hero />
            <About />
            <Expertise />
            <Experience />
            <Projects />
            <Contact />
          </section>
        </main>
      </div>
    </div>
  )
}
