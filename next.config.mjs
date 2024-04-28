/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [

          {
            protocol: "https",
            hostname: "**",
          
          },
         
          {
            protocol: 'https',
            hostname: 'media.valorant-api.com',
            pathname: '/agents/e370fa57-4757-3604-3648-499e1f642d3f/background.png',
            port:''
          },

        ],
      },

};




export default nextConfig;
