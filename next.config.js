/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.plugins.unshift(
      new webpack.DefinePlugin({
        NICE_FEATURE: JSON.stringify('FEATURESSS'),
        'resources.title': JSON.stringify('WEBBY TITLE'),
      })
    );
    return config;
  },
};

module.exports = nextConfig;
