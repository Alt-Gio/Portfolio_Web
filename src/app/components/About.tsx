// app/components/About.tsx
'use client'

const About = () => {
  return (
    <section id="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Dedicated cybersecurity professional with proven expertise in protecting enterprise infrastructure
        </p>
      </div>
      
      <div className="grid-2">
        <div>
          <p className="text-cool-gray mb-4" style={{fontSize: '1.125rem', lineHeight: '1.7'}}>
            I'm a dedicated cybersecurity professional with over 7 years of experience 
            protecting enterprise digital infrastructure. My expertise spans network security 
            architecture, threat detection, and incident response, with a proven track record 
            of reducing security incidents by up to 75% for Fortune 500 companies.
          </p>
          
          <p className="text-cool-gray mb-8" style={{fontSize: '1.125rem', lineHeight: '1.7'}}>
            Specialized in designing and implementing comprehensive security frameworks that 
            balance robust protection with business efficiency. I stay ahead of emerging threats 
            through continuous learning and hands-on research in cybersecurity trends.
          </p>
          
          <div className="stats">
            <div className="stat">
              <span className="stat-number">CISSP</span>
              <span className="stat-label">Certified</span>
            </div>
            <div className="stat">
              <span className="stat-number">CISM</span>
              <span className="stat-label">Certified</span>
            </div>
          </div>
        </div>

        <div>
          <div className="card text-center">
            <div className="card-icon">🛡️</div>
            <h3 className="card-title">Alex Chen</h3>
            <p className="card-description">Senior Cybersecurity Consultant</p>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div className="flex justify-between">
                <span>Response Time:</span>
                <span className="text-cyber-green">{'<'} 2 hours</span>
              </div>
              <div className="flex justify-between">
                <span>Availability:</span>
                <span className="text-cyber-green">24/7 monitoring</span>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-cool-gray">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About