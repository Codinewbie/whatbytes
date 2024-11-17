const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/whatbytes/' : '',
  basePath: isProd ? '/whatbytes' : '',
  output: 'export'
};

export default nextConfig;