'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import MainAppBar from '@/components/MainAppBar'
import BottomNav from '@/components/BottomNavigation'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const showAppBar = !pathname.includes('/courses/')

  const router = useRouter()
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
    }
  }, [])

  return (
    <div className="main-layout">
      {showAppBar && <MainAppBar />}
      <main className={`${showAppBar ? 'pt-[56px]' : 'pt-[71px]'} pb-[92px]`}>
        {children}
      </main>
      <BottomNav />
    </div>
  )
}
