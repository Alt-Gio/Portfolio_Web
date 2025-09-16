'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      title: 'Senior Security Consultant',
      company: 'SecureVault Technologies',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Leading enterprise security transformations for Fortune 500 companies. Designed and implemented comprehensive security architectures resulting in 75% reduction in security incidents.',
      achievements: [
        'Led security assessment for 50+ enterprise clients',
        'Implemented zero-trust architecture for 10,000+ user environment',
        'Reduced mean time to detection (MTTD) from 200+ days to under 24 hours',
        'Managed $2M+ annual security technology budget'
      ],
      technologies: ['Palo Alto', 'CrowdStrike', 'Splunk', 'AWS Security', 'Azure Sentinel']
    },
    {
      title: 'Network Security Engineer',
      company: 'CyberGuard Solutions',
      period: '2019 - 2022',
      location: 'San Francisco, CA',
      description: 'Architected and maintained enterprise network security infrastructure. Specialized in firewall management, intrusion detection, and network monitoring for high-availability environments.',
      achievements: [
        'Designed secure network architecture for 5,000+ users',
        'Achieved 99.97% network uptime across all monitored systems',
        'Implemented automated threat response reducing incident response time by 60%',
        'Trained and mentored 8 junior security engineers'
      ],
      technologies: ['Cisco ASA', 'pfSense', 'Wireshark', 'Nessus', 'ELK Stack']
    },
    {
      title: 'Cybersecurity Analyst',
      company: 'TechSecure Inc.',
      period: '2018 - 2019',
      location: 'Oakland, CA',
      description: 'Performed security monitoring, incident response, and vulnerability assessments. Developed security policies and conducted security awareness training programs.',
      achievements: [
        'Identified and remediated 200+ critical vulnerabilities',
        'Developed incident response playbooks adopted company-wide',
        'Conducted security training for 500+ employees',
        'Achieved 100% compliance with SOC 2 Type II requirements'
      ],
      technologies: ['Metasploit', 'Nmap', 'Burp Suite', 'OSSIM', 'Kali Linux']
    }
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      gsap.from('.experience-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="section-animate py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            A proven track record of protecting organizations from evolving cyber threats
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="bg-white rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">{exp.title}</h3>
                      <p className="text-lg font-semibold text-primary mb-1">{exp.company}</p>
                      <p className="text-sm text-neutral-500">{exp.location}</p>
                    </div>
                    <div className="bg-primary/10 px-4 py-2 rounded-lg">
                      <span className="text-sm font-mono text-primary">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-neutral-600 text-sm leading-relaxed">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-lg text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

