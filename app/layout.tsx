import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
})

export const metadata: Metadata = {
  title: 'Ana Elena Pozo | Especialista en Seguridad y Salud Ocupacional',
  description: 'Profesional en Seguridad y Salud Ocupacional con amplia experiencia en empresas de alto riesgo. Servicios de asesoría, auditorías, capacitaciones y cumplimiento normativo.',
  keywords: ['seguridad ocupacional', 'salud ocupacional', 'auditorías', 'ISO 45001', 'reglamento 522-06', 'brigadas de emergencia', 'capacitación SST'],
  authors: [{ name: 'Ana Elena Pozo' }],
  openGraph: {
    title: 'Ana Elena Pozo | Especialista en Seguridad y Salud Ocupacional',
    description: 'Protegiendo vidas, fortaleciendo empresas y garantizando cumplimiento normativo.',
    type: 'website',
  },
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

export const viewport = {
  themeColor: '#1a365d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
