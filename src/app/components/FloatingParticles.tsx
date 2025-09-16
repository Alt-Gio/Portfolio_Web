'use client'

import { useEffect } from 'react'

const FloatingParticles = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + 'vw'
      particle.style.width = Math.random() * 4 + 2 + 'px'
      particle.style.height = particle.style.width
      particle.style.animationDuration = Math.random() * 10 + 10 + 's'
      
      document.body.appendChild(particle)
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 20000)
    }

    const interval = setInterval(createParticle, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return <div className="floating-particles" />
}

export default FloatingParticles

