/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  transpilePackages: ['antd'],
  swcMinify: false,
}

module.exports = nextConfig
