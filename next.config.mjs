/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Trailing slash for better static hosting compatibility
  trailingSlash: true,
  // Dev-mode only: resolve directory-style URLs under /scalus-2026-proposal/
  // to their index.html in public/. Production (GitHub Pages) handles this
  // natively, so these rewrites are ignored at static export time.
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/scalus-2026-proposal/',
          destination: '/scalus-2026-proposal/index.html',
        },
        {
          source: '/scalus-2026-proposal/:path+/',
          destination: '/scalus-2026-proposal/:path+/index.html',
        },
      ],
    }
  },
}

export default nextConfig
