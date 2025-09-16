// app/components/Expertise.tsx
'use client'

const Expertise = () => {
  const expertiseAreas = [
    {
      title: 'Network Security',
      description: 'Advanced firewall configuration, IDS/IPS deployment, and network segmentation strategies.',
      icon: '🛡️',
      skills: ['Palo Alto Networks', 'Cisco ASA', 'pfSense', 'FortiGate', 'Network Segmentation', 'Zero Trust Architecture']
    },
    {
      title: 'Penetration Testing',
      description: 'Comprehensive vulnerability assessments and ethical hacking to identify security weaknesses.',
      icon: '🔍',
      skills: ['OWASP Top 10', 'Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Social Engineering']
    },
    {
      title: 'Incident Response',
      description: 'Rapid threat detection, containment, and recovery protocols for security incidents.',
      icon: '⚡',
      skills: ['SIEM Management', 'Forensic Analysis', 'Malware Analysis', 'Threat Hunting', 'Recovery Planning', 'Documentation']
    },
    {
      title: 'Compliance & Risk',
      description: 'Ensuring adherence to regulatory standards and comprehensive risk management.',
      icon: '📋',
      skills: ['ISO 27001', 'SOC 2', 'NIST Framework', 'PCI DSS', 'GDPR', 'Risk Assessment']
    }
  ]

  return (
    <section id="expertise">
      <div className="section-header">
        <h2 className="section-title">Core Expertise</h2>
        <p className="section-subtitle">
          Comprehensive cybersecurity solutions covering every aspect of digital infrastructure protection
        </p>
      </div>

      <div className="grid-4">
        {expertiseAreas.map((area, index) => (
          <div key={index} className="card">
            <div className="card-icon">{area.icon}</div>
            <h3 className="card-title">{area.title}</h3>
            <p className="card-description">{area.description}</p>
            
            <ul className="skill-list">
              {area.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Expertise
