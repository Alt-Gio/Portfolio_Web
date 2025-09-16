'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const NetworkVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Enhanced network nodes with more properties
    const nodes: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      connections: number[]
      pulse: number
      pulseSpeed: number
      glowIntensity: number
      originalRadius: number
    }> = []

    // Create nodes with enhanced properties
    for (let i = 0; i < 80; i++) {
      const radius = Math.random() * 4 + 2
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: radius,
        originalRadius: radius,
        color: `rgba(0, 245, 255, ${Math.random() * 0.9 + 0.1})`,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        glowIntensity: Math.random() * 0.5 + 0.5
      })
    }

    // Add mouse interaction
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }
    canvas.addEventListener('mousemove', handleMouseMove)

    // Enhanced animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Mouse interaction - nodes are attracted to mouse
        const mouseDistance = Math.sqrt(
          Math.pow(node.x - mouseX, 2) + Math.pow(node.y - mouseY, 2)
        )
        if (mouseDistance < 200) {
          const attraction = (200 - mouseDistance) / 200
          node.vx += (mouseX - node.x) * attraction * 0.001
          node.vy += (mouseY - node.y) * attraction * 0.001
        }

        // Bounce off edges with some damping
        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -0.8
          node.x = Math.max(0, Math.min(canvas.width, node.x))
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -0.8
          node.y = Math.max(0, Math.min(canvas.height, node.y))
        }

        // Update pulse
        node.pulse += node.pulseSpeed
        node.radius = node.originalRadius + Math.sin(node.pulse) * 1.5

        // Draw connections with enhanced effects
        nodes.forEach((otherNode, j) => {
          if (i < j) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            )
            
            if (distance < 200) {
              const opacity = (200 - distance) / 200
              const gradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y)
              gradient.addColorStop(0, `rgba(0, 245, 255, ${opacity * 0.4})`)
              gradient.addColorStop(0.5, `rgba(57, 255, 20, ${opacity * 0.2})`)
              gradient.addColorStop(1, `rgba(179, 0, 255, ${opacity * 0.4})`)
              
              ctx.strokeStyle = gradient
              ctx.lineWidth = opacity * 2
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.stroke()
            }
          }
        })

        // Draw node with enhanced effects
        ctx.save()
        
        // Outer glow
        ctx.shadowColor = node.color
        ctx.shadowBlur = 20 * node.glowIntensity
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 245, 255, 0.1)`
        ctx.fill()
        
        // Inner glow
        ctx.shadowBlur = 10 * node.glowIntensity
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()
        
        // Core
        ctx.shadowBlur = 0
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
        ctx.fill()
        
        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 opacity-20">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

export default NetworkVisualization
