import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToasterProvider } from '@/components/ToasterProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI SAAS App',
  description: 'Collection of AI SaaS App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
