/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static HTML export
  experimental: {
    appDir: true, // keep app directory enabled
  },
};

module.exports = nextConfig;
