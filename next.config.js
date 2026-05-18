/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production domain configuration
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Image optimization for production
  images: {
    domains: [
      'localhost',
      'pawarjay',
      'pawarjay',
      'images.unsplash.com',
      'res.cloudinary.com',
      'github.com',
      'raw.githubusercontent.com',
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Production redirects and rewrites
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/hire',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },

  // SEO and metadata configuration
  env: {
    SITE_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://portfolio.aakshiv.com'
        : 'http://localhost:3000',
    SITE_NAME: 'Skyline Ways - Freelance AI/ML Developer',
    SITE_DESCRIPTION:
      'Professional AI/ML development services by Aakshiv. Specializing in machine learning, data science, and Python development for businesses worldwide.',
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    });

    // Optimize for production
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },

  // Output configuration for static export if needed
  trailingSlash: false,

  // Compression and optimization
  compress: true,

  // PoweredByHeader removal for security
  poweredByHeader: false,
};

module.exports = nextConfig;
