/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: false,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: ['zukko-mobile-app-file-handler.s3.amazonaws.com'],
  },
  i18n,
};

module.exports = nextConfig;
