'use client'
import ContextProviderManager from '../contexts/ContextProviderManager'
import { Roboto } from 'next/font/google'
import '../styles/globals.scss'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContextProviderManager>
      <html lang="en" className={roboto.className}>
        <body>{children}</body>
      </html>
    </ContextProviderManager>
  )
}
