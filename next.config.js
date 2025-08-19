/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
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
