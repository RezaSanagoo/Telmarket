/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Telmarket',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/Telmarket/',
}

module.exports = nextConfig