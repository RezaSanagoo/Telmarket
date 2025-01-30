import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: 'موج',
  description: 'پلتفرم آموزشی موج - دسترسی به دوره‌های آموزشی با کیفیت',
  keywords: 'آموزش, دوره آنلاین, موج, یادگیری',
  authors: [{ name: 'موج' }],
  robots: {
    index: false,
    follow: false
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}


import ClientLayout from './ClientLayout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
