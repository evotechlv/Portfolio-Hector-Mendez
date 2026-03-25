import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
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
  description: 'Crystal Architect Portfolio - Construction Operations & Design Specialist bridging hardware, software, and DevOps principles with construction expertise.',
  keywords: ['Construction Operations', 'Design Specialist', 'Software Engineer', 'Estimations', 'Las Vegas'],
}

export const viewport: Viewport = {
  themeColor: '#F2F2F7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-gradient-studio dark:bg-gradient-dark texture-paper blueprint-grid transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
