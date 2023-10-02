/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dummyimage.com'], // Corrected domain name here
  },
  resolve: {
    fallback: {
      fs: false,
    },
  },
});
