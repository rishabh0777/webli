/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: [
      "http://192.168.31.154:3000",
      "http://localhost:3000",
      "https://ztj82y-3000.csb.app/",
    ],
  },
};

export default nextConfig;
