/** @type {import('next').NextConfig} */

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
  i18n: {
    locales: ['uz', 'ru'],
    defaultLocale: 'uz',
    localePath: './src/locales',
  },
};

module.exports = nextConfig;
