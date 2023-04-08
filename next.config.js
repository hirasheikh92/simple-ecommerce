/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "6ea3hz5idu8e",
    CONTENTFUL_ACCESS_KEY: "1kCPEI58pxEAPSr9JC1ilHBI2MJDmzCn3PLo6dtxumc",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
