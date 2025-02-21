'use client'

import { useEffect } from 'react'
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/theme";

import "./globals.css";

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
    })
  }
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    registerServiceWorker()
  }, [])

  return (
      <html lang="fa" dir="rtl">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />
        </head>
        <body>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </body>
      </html>
  )
}
