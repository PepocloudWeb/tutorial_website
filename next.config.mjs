/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // This is to not go to 404 page after clicking back button after publishing in aws
};

export default nextConfig;
