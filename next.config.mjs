/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate" : "commonjs utf-8-validate",
      bufferutil: "commonjs buffterutil"
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/*",
      },
    ],
  },
};

export default nextConfig;
