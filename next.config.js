/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    reactStrictMode: false,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/frontend/styles'), path.join(__dirname, 'src/public/images')]
    }
}

module.exports = nextConfig
