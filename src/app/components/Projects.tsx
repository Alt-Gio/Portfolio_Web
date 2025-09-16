'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: 'Enterprise Zero-Trust Implementation',
      client: 'Fortune 500 Financial Services',
      description: 'Complete zero-trust network architecture implementation for a global financial institution with 15,000+ employees across 45 countries.',
      challenge: 'Legacy infrastructure with complex compliance requirements across multiple jurisdictions.',
      solution: 'Designed and deployed comprehensive zero-trust framework with identity-based access controls.',
      results: [
        '87% reduction in potential attack surface',
        '99.98% network availability maintained',
        'Full compliance with SOX, PCI-DSS, and GDPR',
        '$2.3M annual savings in security operations'
      ],
      technologies: ['Palo Alto Prisma', 'Azure AD', 'CrowdStrike', 'Splunk Enterprise', 'Okta'],
      duration: '8 months',
      status: 'Completed'
    },
    {
      title: 'Advanced Threat Detection Platform',
      client: 'Healthcare Technology Startup',
      description: 'Custom SIEM solution with machine learning-based threat detection for protecting sensitive patient data.',
      challenge: 'Need for real-time threat detection while maintaining HIPAA compliance in cloud environment.',
      solution: 'Implemented AI-powered threat detection with automated response capabilities.',
      results: [
        '92% reduction in false positive alerts',
        'Sub-5-minute threat detection and response',
        '100% HIPAA compliance maintained',
        'Protected 2M+ patient records'
      ],
      technologies: ['Elastic Security', 'Python', 'TensorFlow', 'AWS Security Hub', 'Lambda'],
      duration: '6 months',
      status: 'Ongoing'
    },
    {
      title: 'Network Security Modernization',
      client: 'Manufacturing Conglomerate',
      description: 'Legacy network security infrastructure overhaul for industrial IoT environment with 10,000+ connected devices.',
      challenge: 'Securing legacy industrial systems while enabling digital transformation initiatives.',
      solution: 'Micro-segmentation strategy with specialized IoT security controls and monitoring.',
      results: [
        '78% improvement in threat visibility',
        'Zero industrial control system compromises',
        '45% faster incident response times',
        'Enabled safe digital transformation'
      ],
      technologies: ['FortiGate', 'Claroty', 'Wireshark', 'Nozomi Networks', 'Ansible'],
      duration: '12 months',
      status: 'Completed'
    }
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="section-animate py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Featured Case Studies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto text-balance">
            Real-world security implementations that delivered measurable business impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="bg-white rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-2 h-full overflow-hidden">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-neutral-500 mb-1">{project.client}</p>
                      <p className="text-sm text-neutral-400">{project.duration}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-success/20 text-success' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <p className="text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wider">
                        Challenge
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wider">
                        Solution
                      </h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 mb-3 uppercase tracking-wider">
                        Key Results
                      </h4>
                      <div className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-neutral-600 leading-relaxed">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-neutral-100">
                    <h4 className="text-sm font-bold text-neutral-900 mb-3 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-neutral-100 text-neutral-600 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
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

export default Projects
