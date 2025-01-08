'use client'

import { ReactNode } from 'react'
import MainAppBar from '@/components/MainAppBar'
import BottomNav from '@/components/BottomNavigation'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="main-layout">
      <MainAppBar />
      <main style={{ paddingTop: '56px', paddingBottom: '92px' }}>
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
