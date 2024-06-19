/** @type {import('next').NextConfig} */
const nextConfig = {
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
