/** @type {import('next').NextConfig} */
const nextConfig = {
  // informando para o next links de terceiros permitidos para acessar
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
