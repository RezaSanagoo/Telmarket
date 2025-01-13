'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import MainAppBar from '@/components/MainAppBar'
import BottomNav from '@/components/BottomNavigation'

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const showAppBar = !pathname.includes('/courses/')

  return (
    <div className="main-layout">
      {showAppBar && <MainAppBar />}
      <main className={`${showAppBar ? 'pt-[56px]' : 'pt-[77px]'} pb-[92px]`}>
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
