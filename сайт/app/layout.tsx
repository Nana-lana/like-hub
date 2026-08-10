import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Comfortaa, Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin', 'cyrillic'], variable: '--font-nunito' })
const comfortaa = Comfortaa({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-comfortaa',
})

export const metadata: Metadata = {
  title: 'Довідник мережі перукарень',
  description:
    'Єдиний хаб мережі перукарень: шаблони документів, задачі, довідник ремонту, відкриття точок, контакти та стандарти.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#eef7f0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className={`bg-background ${nunito.variable} ${comfortaa.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
