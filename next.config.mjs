/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images7.alphacoders.com',
            port: '',
            pathname: '/131/1315738.jpg',
          },

          {
            protocol: 'https',
            hostname: 'images4.alphacoders.com',
            port: '',
            pathname: '/130/1305421.jpg',
          },

          {
            protocol: 'https',
            hostname: 'images5.alphacoders.com',
            port: '',
            pathname: '/129/1293103.jpg',
          },

          {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
            port: '',
            pathname: '/media/GJcn6vUXUAEwtsZ.jpg:large',
          },

        
        ],
      },

};




export default nextConfig;
