/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // required for static export with Netlify
  experimental: {
    appDir: true // optional, Next.js 14 uses App Router by default
  }
};

module.exports = nextConfig;
