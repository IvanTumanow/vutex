import type {NextConfig} from "next";
import {redirects} from "@/config/redirects.config";

const nextConfig: NextConfig = {
    output: 'standalone',
    compress: true,
    poweredByHeader: false,
    trailingSlash: true,

    images: {
        formats: ['image/webp'],
        unoptimized: true,
    },

    async redirects() {
        return [
            await redirects.Auth(),
            await redirects.Profile()
        ]
    },
};

module.exports = nextConfig;

export default nextConfig;