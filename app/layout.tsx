import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Digital Marketer Portfolio | Free Shadcn UI Template',
    template: '%s | Shadcn Template'
  },
  description: 'Download this free digital marketer portfolio template built with Shadcn UI and Next.js. A premium, high-performance template for marketing strategists and growth experts.',
  keywords: [
    'shadcn template', 
    'free template', 
    'digital marketer template', 
    'next.js portfolio', 
    'marketing strategy template', 
    'shadcn ui portfolio',
    'free nextjs template'
  ],
  authors: [{ name: 'Alex Chen' }],
  creator: 'Alex Chen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexchen.tech',
    siteName: 'Digital Marketer Portfolio Template',
    title: 'Free Digital Marketer Portfolio | Shadcn UI Template',
    description: 'A premium, free portfolio template for digital marketers. Built with Next.js and Shadcn UI.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free Digital Marketer Portfolio Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Digital Marketer Portfolio | Shadcn UI Template',
    description: 'Download this high-performance portfolio template for digital marketers. Free and open source.',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
