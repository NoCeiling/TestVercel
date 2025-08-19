/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/guides',
        destination: '/guides/',
        permanent: true,
      },
      {
        source: '/varieties',
        destination: '/varieties/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
