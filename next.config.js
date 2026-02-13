/** @type {import('next').NextConfig} */
const repoName = "my-dashboard";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  transpilePackages: ["@iconscout/react-unicons"],
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

module.exports = nextConfig;
