/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn1.iconfinder.com',
                pathname: '/data/icons/**',
            },
            {
                protocol: 'https',
                hostname: 'th.bing.com',
                pathname: '/th/id/**',
            },
            {
                protocol: 'https',
                hostname: 'pngimg.com',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'purepng.com',
                pathname: '/public/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'www.5paisa.com',
                pathname: '/finschool/wp-content/uploads/**',
            },
        ],
    },
}

export default nextConfig;
