/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {} // ✅ empty object or just remove if not using
  }
};

export default nextConfig;
