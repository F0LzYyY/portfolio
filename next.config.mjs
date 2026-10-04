/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export works on Vercel as well
  // basePath removed – Vercel serves from root
  // trailingSlash removed – not needed on Vercel
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
};

export default nextConfig;
