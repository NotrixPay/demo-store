/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        serverActions: { allowedOrigins: ["demo.notrix.io"] },
    },
}

module.exports = nextConfig
