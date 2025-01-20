import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')
  
  if (!token) {
    return NextResponse.redirect(new URL('/Telmarket/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/prices',
    '/explore',
    '/profile',
    '/wallet',
    '/settings',
    '/notifications',
    '/transactions',
    '/market'
  ]
}