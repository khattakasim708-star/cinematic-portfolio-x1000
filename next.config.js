/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
  // REMOVE experimental.appDir, Next.js 14 uses App Router by default
};

module.exports = nextConfig;
