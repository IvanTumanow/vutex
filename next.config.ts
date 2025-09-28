import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    compress: true,
    poweredByHeader: false,
    trailingSlash: true,

    images: {
        formats: ['image/webp'],
        unoptimized: true,
    },
};

module.exports = nextConfig;

export default nextConfig;
