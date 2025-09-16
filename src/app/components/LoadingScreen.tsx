'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const loadingRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // Initial setup
    gsap.set(loadingRef.current, { opacity: 1 })
    gsap.set(logoRef.current, { scale: 0, rotation: 180 })
    gsap.set(progressRef.current, { scaleX: 0 })
    gsap.set(textRef.current, { opacity: 0, y: 20 })

    // Logo animation
    tl.to(logoRef.current, {
      scale: 1,
      rotation: 0,
      duration: 1.5,
      ease: 'elastic.out(1, 0.3)'
    })

    // Text animation
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')

    // Progress bar animation
    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 2,
      ease: 'power2.inOut'
    }, '-=0.3')

    // Loading text animation
    const loadingTexts = ['Initializing Security Protocols...', 'Loading Threat Intelligence...', 'Establishing Secure Connection...']
    let currentText = 0

    const updateLoadingText = () => {
      if (textRef.current) {
        gsap.to(textRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          onComplete: () => {
            if (textRef.current) {
              textRef.current.textContent = loadingTexts[currentText]
              gsap.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.3
              })
            }
            currentText = (currentText + 1) % loadingTexts.length
          }
        })
      }
    }

    const textInterval = setInterval(updateLoadingText, 1000)

    // Complete loading after 4 seconds
    setTimeout(() => {
      clearInterval(textInterval)
      
      tl.to(loadingRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut',
        onComplete: () => {
          setIsLoading(false)
        }
      })
    }, 4000)

    return () => {
      clearInterval(textInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div 
      ref={loadingRef}
      className="fixed inset-0 bg-dark-bg z-[9999] flex flex-col items-center justify-center"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Logo */}
      <div ref={logoRef} className="text-center mb-8">
        <div className="text-6xl font-bold text-cyber-blue glow-text mb-4">
          &lt;/SecExpert&gt;
        </div>
        <div className="text-lg text-gray-300 font-mono">
          Cybersecurity Professional
        </div>
      </div>

      {/* Loading text */}
      <div ref={textRef} className="text-cyber-green font-mono text-sm mb-8 text-center">
        Initializing Security Protocols...
      </div>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-dark-border rounded-full overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-cyber-blue to-cyber-green rounded-full origin-left"
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${Math.random() * 10 + 10}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default LoadingScreen

