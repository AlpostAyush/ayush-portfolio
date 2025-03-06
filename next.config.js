/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure React strict mode
  reactStrictMode: true,
  
  // Example of how to add custom domains for images
  // images: {
  //   domains: ['example.com'],
  // },
  
  // Example of how to configure redirects
  // async redirects() {
  //   return [
  //     {
  //       source: '/old-path',
  //       destination: '/new-path',
  //       permanent: true,
  //     },
  //   ]
  // },
};

module.exports = nextConfig;
