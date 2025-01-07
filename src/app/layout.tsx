'use client'

import { ReactNode } from 'react'
import './globals.css'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/theme/theme'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}