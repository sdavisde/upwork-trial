import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const tacticSans = localFont({
  src: '../public/tactic-sans-medium.woff2',
  display: 'swap',
  variable: '--font-heading',
})

const volksans = localFont({
  src: '../public/volksansTest.otf',
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Upwork trial',
  description: 'Simple Next app for upwork proposal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${tacticSans.variable} ${volksans.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
