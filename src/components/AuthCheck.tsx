'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next'

export default function AuthCheck() {
  const router = useRouter()

  useEffect(() => {
    const token = getCookie('token')
    if (!token) {
      router.push('/login')
    }
  }, [])

  return null
}
