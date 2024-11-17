module.exports = {
  basePath: '/whatbytes',
  assetPrefix: '/whatbytes/',
  output: 'export', // Ensure it's using the new export option for static sites
  experimental: {
    appDir: true, // Make sure App Directory is enabled for static export
  },
};
