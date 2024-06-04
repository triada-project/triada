/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "triada-photos.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};
export default nextConfig;
