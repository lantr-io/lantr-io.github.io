import './global.css'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Blockchain R&D Lab | Cardano, Bitcoin & Midnight | Lantr Engineering',
    template: '%s | Lantr Engineering',
  },
  description: 'Building innovative blockchain infrastructure and solutions. Specializing in Cardano, Bitcoin and Midnight development tools, cross-chain bridges, and decentralized applications.',
  openGraph: {
    title: 'Blockchain R&D Lab | Cardano, Bitcoin & Midnight | Lantr Engineering',
    description: 'Building innovative blockchain infrastructure and solutions. Specializing in Cardano, Bitcoin and Midnight development tools, cross-chain bridges, and decentralized applications.',
    url: baseUrl,
    siteName: 'Lantr.io',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain R&D Lab | Cardano, Bitcoin & Midnight | Lantr Engineering',
    description: 'Building innovative blockchain infrastructure and solutions. Specializing in Cardano, Bitcoin and Midnight development tools, cross-chain bridges, and decentralized applications.',
    creator: '@lantr_io',
    site: '@lantr_io',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistMono.variable
      )}
      style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}
    >
      <body className="antialiased max-w-4xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
