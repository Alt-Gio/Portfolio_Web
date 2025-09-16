import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://alexchen-security.com'),
  title: 'Alex Chen | Cybersecurity Expert & Network Specialist',
  description: 'Professional cybersecurity consultant specializing in network security, threat detection, and infrastructure protection. Available for enterprise security consulting.',
  keywords: 'cybersecurity expert, network security specialist, penetration testing, security consultant, CISSP, infrastructure protection',
  authors: [{ name: 'Alex Chen' }],
  creator: 'Alex Chen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexchen-security.com',
    siteName: 'Alex Chen - Cybersecurity Expert',
    title: 'Alex Chen | Cybersecurity Expert & Network Specialist',
    description: 'Professional cybersecurity consultant specializing in network security and infrastructure protection.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Chen | Cybersecurity Expert',
    description: 'Professional cybersecurity consultant specializing in network security.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6366f1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-neutral-900 text-warm-white font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
