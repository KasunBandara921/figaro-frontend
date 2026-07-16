import type { Metadata } from 'next'
import './globals.css'
import LayoutNav from '@/src/components/LayoutNav'
import Footer from '@/src/components/Footer'

export const metadata: Metadata = {
  title: 'Figaro - Premium Hair Salon',
  description: 'Figaro is a premium hair salon template designed with such details to give you the most professional and modern style for both beauty and hair salons.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LayoutNav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
