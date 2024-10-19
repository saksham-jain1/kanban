// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  env: {
    UNSPLASH_CLIENT_ID: process.env.UNSPLASH_CLIENT_ID, // pulls from .env file
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
