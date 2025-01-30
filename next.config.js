const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    unoptimized: true,
    minimumCacheTTL: 60
  }
}

module.exports = withPWA(nextConfig)


