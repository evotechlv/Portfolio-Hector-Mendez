import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Hector Mendez | Construction Operations & Design Specialist',
  description: 'Professional portfolio of Hector Mendez - Construction Operations & Design Specialist integrating hardware, software, and DevOps principles with construction expertise.',
  keywords: ['Construction Operations', 'Design Specialist', 'Software Engineer', 'Estimations', 'Las Vegas'],
}

export const viewport: Viewport = {
  themeColor: '#1A1A1B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
