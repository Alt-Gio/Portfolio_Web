'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Initial animation for navigation
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from(logoRef.current, {
      x: -50,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'power3.out'
    })

    gsap.from(menuRef.current?.children || [], {
      y: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.5,
      ease: 'power3.out'
    })

    // Scroll-triggered animations
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top -50px',
      end: 'bottom bottom',
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false)
    })

    // Animate navigation background on scroll
    gsap.to(navRef.current, {
      backgroundColor: 'rgba(10, 10, 10, 0.9)',
      backdropFilter: 'blur(20px)',
      borderBottomColor: '#333333',
      duration: 0.3,
      scrollTrigger: {
        trigger: 'body',
        start: 'top -50px',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      gsap.to(window, { 
        duration: 1.5, 
        scrollTo: element, 
        ease: 'power3.inOut',
        onComplete: () => {
          // Add a subtle bounce effect to the target section
          gsap.from(element, {
            scale: 0.98,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      })
    }
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    
    if (!isMenuOpen) {
      // Open menu animation
      gsap.to(hamburgerRef.current?.children || [], {
        rotation: 45,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power2.out'
      })
    } else {
      // Close menu animation
      gsap.to(hamburgerRef.current?.children || [], {
        rotation: 0,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power2.out'
      })
    }
  }

  const handleNavItemHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      color: '#00f5ff',
      textShadow: '0 0 10px #00f5ff',
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleNavItemLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      color: '#d1d5db',
      textShadow: 'none',
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  return (
    <nav ref={navRef} className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div ref={logoRef} className="text-xl font-display text-gradient cursor-pointer">
            &lt;/SecExpert&gt;
          </div>
          
          <div ref={menuRef} className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                onMouseEnter={handleNavItemHover}
                onMouseLeave={handleNavItemLeave}
                className="text-readable capitalize relative group font-body font-medium"
              >
                {item}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          <div 
            ref={hamburgerRef}
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-cyber-blue transition-all duration-300"></div>
              <div className="w-full h-0.5 bg-cyber-blue transition-all duration-300"></div>
              <div className="w-full h-0.5 bg-cyber-blue transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-dark-border">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 capitalize text-left py-2 hover:text-cyber-blue transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
