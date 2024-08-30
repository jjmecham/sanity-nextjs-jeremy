/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
},
ignoreBuildErrors: true
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};
