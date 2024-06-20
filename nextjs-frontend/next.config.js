/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: true
      }
    ]
  },

  // informando para o next links de terceiros permitidos para acessar
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'http',
        hostname: 'localhost'
      },
    ]
  }

};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'source.unsplash.com',
//         port: '',
//         pathname: './src/*',
//       },
//     ],
//   },
// }
