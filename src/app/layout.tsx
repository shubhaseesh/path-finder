import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientThemeWrapper from '@/libs/context/themeContext/ThemeWrapper'
import { ThemeContextProvider } from '@/libs/context/themeContext/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Path Finder App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter} bg-slate-400`}>
        <ThemeContextProvider>
          <ClientThemeWrapper>
            {children}
          </ClientThemeWrapper>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
