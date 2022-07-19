/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  paths: {
    '@/components/*': ['components/*'],
  },
}

module.exports = nextConfig
