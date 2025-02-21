'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import MainAppBar from '@/components/MainAppBar'
import BottomNav from '@/components/BottomNavigation'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { App } from '@capacitor/app';


export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const showAppBar = !pathname.includes('/courses/')

  const router = useRouter()

  useEffect(() => {
    const handleBackButton = async () => {
      App.addListener('backButton', () => {
        // Check if we're on the home page
        if (window.location.pathname === '/') {
          App.exitApp();
        } else {
          // Otherwise, go back to previous page
          router.back();
        }
      });
    };

    handleBackButton();

    // Cleanup listener on unmount
    return () => {
      App.removeAllListeners();
    };
  }, [router]);

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
