/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  distDir: '.next',
  reactStrictMode: true,
  swcMinify: true
};

export default nextConfig;
