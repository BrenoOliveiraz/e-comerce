import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next E-Comerce',
  description: 'E-Comerce criada com Next.JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}
        <Navbar />
        <main className='bg-slate-700 h-screen p-16'>{children}</main>
      </body>
    </html>
  )
}


