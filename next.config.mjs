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
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'static/fonts/',
                },
            },
        });

        return config;
    },
}

export default nextConfig;
