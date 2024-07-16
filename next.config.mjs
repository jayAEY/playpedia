/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "howlongtobeat.com",
        port: "",
        //     // pathname: "/media/games/**",
      },
    ],
  },
};

export default nextConfig;
