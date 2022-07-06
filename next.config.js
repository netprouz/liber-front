/** @type {import('next').NextConfig} */

// eslint-disable-next-line import/extensions, @typescript-eslint/no-var-requires
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
