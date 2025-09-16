'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 })
      
      tl.from(titleRef.current, {
        duration: 1,
        y: 40,
        opacity: 0,
        ease: 'power3.out'
      })
      .from(subtitleRef.current, {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.hero-cta', {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.3')
      .from('.hero-stats', {
        duration: 0.6,
        y: 20,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.2')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative grid min-h-[70vh] place-items-center overflow-hidden px-0 py-10">
      <div ref={heroRef} className="w-full max-w-3xl mx-auto">
        <div className="text-center card-professional p-8 md:p-12">
          <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight"
        >
          <span className="block text-warm-white">Cybersecurity</span>
          <span className="block text-gradient text-cyber-glow">Expert</span>
          </h1>
        
          <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-cool-gray mb-8 md:mb-10 leading-relaxed text-balance"
        >
          Protecting digital infrastructure through advanced network security, 
          threat intelligence, and enterprise-grade security solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="hero-cta px-8 py-4 btn-primary"
            >
              Schedule Consultation
            </button>
            
            <button 
              onClick={scrollToProjects}
              className="hero-cta px-8 py-4 btn-secondary"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
