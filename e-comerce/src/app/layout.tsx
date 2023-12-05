import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'
import clsx from 'clsx' //utilizar para agrupar os estilos no body
import { ClerkProvider } from '@clerk/nextjs' // garante que todas as paginas passem por aqui antes
import { ptBR } from "@clerk/localizations"; // tradução do menu de loguin

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
    <ClerkProvider localization={ptBR} > 
      <html lang="en">
        <body className={clsx(inter.className, 'bg-slate-700')}>
          <Navbar />
          <main className=' h-screen p-16'>{children}</main>
        
        </body>
      </html>
    </ClerkProvider>

  )

}


