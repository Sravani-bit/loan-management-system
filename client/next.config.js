/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Match any API route
        destination: "https://loan-management-system-n1qm.onrender.com/api/:path*", // Proxy to your API server
      },
    ];
  },
};

module.exports = nextConfig;
