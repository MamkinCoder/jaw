/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: 'export',
  assetPrefix: './',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
