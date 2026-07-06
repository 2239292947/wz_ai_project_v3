/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Ensure CSS is properly handled
  compiler: {
    styledComponents: false,
  },
  // Disable x-powered-by header
  poweredByHeader: false,
}

module.exports = nextConfig
