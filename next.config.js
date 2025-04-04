/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // Ignoring type errors during build due to an issue in @portabletext/editor
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
