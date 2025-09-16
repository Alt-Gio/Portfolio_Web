'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const skillCategories = [
    {
      title: 'Network Security',
      icon: '🌐',
      skills: ['Firewalls', 'IDS/IPS', 'VPN', 'Network Monitoring', 'SIEM', 'Traffic Analysis']
    },
    {
      title: 'Penetration Testing',
      icon: '🔍',
      skills: ['Vulnerability Assessment', 'Ethical Hacking', 'Web App Security', 'Network Pentesting', 'Social Engineering', 'Red Team Operations']
    },
    {
      title: 'Security Tools',
      icon: '🛠️',
      skills: ['Wireshark', 'Nmap', 'Metasploit', 'Burp Suite', 'Kali Linux', 'Splunk']
    },
    {
      title: 'Compliance & Frameworks',
      icon: '📋',
      skills: ['ISO 27001', 'NIST', 'PCI DSS', 'GDPR', 'SOX', 'Risk Assessment']
    }
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Enhanced animations for skills section
    const skillCards = sectionRef.current?.querySelectorAll('.skill-card')
    
    if (skillCards) {
      // Initial setup - hide cards
      gsap.set(skillCards, { 
        y: 100, 
        opacity: 0, 
        scale: 0.8,
        rotationY: 45
      })

      // Animate cards on scroll
      gsap.to(skillCards, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        }
      })

      // Add hover animations to each card
      skillCards.forEach((card) => {
        const cardElement = card as HTMLElement
        
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -10,
            scale: 1.05,
            rotationY: 5,
            duration: 0.4,
            ease: 'power2.out'
          })
        })

        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.4,
            ease: 'power2.out'
          })
        })
      })
    }

    // Animate section title
    gsap.from(sectionRef.current?.querySelector('h2'), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    // Animate section description
    gsap.from(sectionRef.current?.querySelector('p'), {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out'
    })
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="content-max-width">
        <div className="text-center-perfect mb-24">
          <div className="inline-block px-4 py-2 bg-cyber-green/15 border border-cyber-green/40 rounded-full mb-8 shadow-lg shadow-cyber-green/20">
            <span className="text-cyber-green font-mono text-sm font-semibold tracking-wider">CORE EXPERTISE</span>
          </div>
          <h2 className="heading-large font-heading text-gradient mb-10">
            Core Expertise
          </h2>
          <p className="paragraph-enhanced text-xl font-body">
            Comprehensive <span className="text-cyber-blue font-semibold">security skills</span> covering all aspects of 
            <span className="text-cyber-green font-semibold"> cybersecurity</span> and 
            <span className="text-cyber-purple font-semibold"> network protection</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="card-professional p-10 h-full text-center">
                <div className="text-6xl mb-8 filter drop-shadow-lg">{category.icon}</div>
                <h3 className="text-xl font-heading mb-8 text-gradient">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyber-green rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-cool-gray text-sm font-body">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
