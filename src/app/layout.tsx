'use client'
import ContextProviderManager from '../contexts/ContextProviderManager'

import '../styles/globals.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ContextProviderManager>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ContextProviderManager>
  )
}
