/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  disableStaticImages: true,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: [
      'localhost',
      'cdn.shopify.com',
      'staging.api.gipermart.uz',
      'api.gipermart.uz',
    ],
  },
  i18n
};

module.exports = nextConfig;
