"use client";

import { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/theme/theme";


import AuthCheck from '@/components/AuthCheck'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="manifest" href="/Telmarket/manifest.json" />
        <meta name="theme-color" content="#fff" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <AuthCheck />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
