/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.elsoldepuebla.com.mx",
      },
      {
        protocol: "https",
        hostname: "tecolotito.elsiglodetorreon.com.mx",
      },
      {
        protocol: "https",
        hostname: "palabrasclaras.mx",
      },
      {
        protocol: "https",
        hostname: "diarioistmo.blob.core.windows.net",
      },
    ],
  },
};
export default nextConfig;
