/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agency.teamrabbil.com",
        port: "",
        pathname: "/files/**",
      },
    ],
  },
};

module.exports = nextConfig
