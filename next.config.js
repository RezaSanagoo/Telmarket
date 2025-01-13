/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Telmarket',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/Telmarket/',
}

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA(nextConfig)