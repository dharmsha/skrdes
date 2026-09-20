import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const SITE_URL = 'https://srkdesigner.in' // 👈 apna actual domain daalo
const SITE_NAME = 'SRK Designer'
const WHATSAPP = '+919528794938'

// ============================================
// 🎯 SEO METADATA — Fully Optimized
// ============================================
export const metadata = {
  metadataBase: new URL(SITE_URL),

  // 🏷️ Basic Meta
  title: {
    default: 'SRK Designer — Premium Logo, Theme, Banner & Voice Chat App Services',
    template: '%s | SRK Designer',
  },
  description:
    'SRK Designer — Premium design services for Logos, Themes, Banners, Frames, SVG Files & Customised GIFs. Trusted Voice Chat Application Manager, Super Admin & Admin Services for 2000+ clients and 10,000+ hosts.',

  // 🔑 Keywords (Google + Bing ke liye)
  keywords: [
    // Brand
    'SRK Designer',
    'SRK Design',
    'SRK Designer services',
    'srkdesigner',

    // Design Services
    'premium logo design',
    'custom logo design',
    'theme design',
    'premium themes',
    'banner design',
    'youtube banner design',
    'gaming banner design',
    'custom frame design',
    'photo frame design',
    'SVG files design',
    'customised GIF',
    'animated GIF design',
    'custom gif maker',

    // Voice Chat Services
    'voice chat application manager',
    'voice chat app admin',
    'super admin services',
    'voice chat app support',
    'voice chat host services',
    'app management services',
    'voice chat moderator',
    'voice chat application services India',

    // Location + General
    'design services India',
    'premium design studio',
    'best logo designer',
    'freelance designer India',
    'graphic design services',
    'custom design services online',
  ],

  // ✍️ Author & Creator
  authors: [{ name: 'SRK Designer', url: SITE_URL }],
  creator: 'SRK Designer',
  publisher: 'SRK Designer',

  // 🤖 Robots (Google ko batayein crawl karne ke liye)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 🌐 Canonical URL
  alternates: {
    canonical: SITE_URL,
  },

  // 📱 Open Graph (WhatsApp, Facebook, LinkedIn ke liye)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'SRK Designer — Premium Logo, Theme, Banner & Voice Chat App Services',
    description:
      'Premium Logos, Themes, Banners, Frames, SVG Files & GIFs. Trusted Voice Chat Application Management for 2000+ clients worldwide.',
    images: [
      {
        url: '/srk.jpeg', // 👈 public folder mein 1200x630 image daalo
        width: 1200,
        height: 630,
        alt: 'SRK Designer — Premium Design Services',
        type: 'image/jpeg',
      },
    ],
  },

  // 🐦 Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'SRK Designer — Premium Logo, Theme, Banner & Voice Chat App Services',
    description:
      'Premium Logos, Themes, Banners, Frames, SVG Files & GIFs. Trusted Voice Chat Application Management.',
    images: ['/srk-og.jpg'],
    creator: '@srkdesigner', // 👈 apna Twitter handle
  },

  // 📂 Icons
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-icon.png' }],
    shortcut: ['/favicon.ico'],
  },

  // 📲 PWA / App Meta
  applicationName: SITE_NAME,
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: 'black-translucent',
  },

  // 🏢 Business Info
  category: 'Design Services',
  classification: 'Graphic Design & Voice Chat Application Services',

  // ✅ Verification (Google Search Console)
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  //   yandex: 'YOUR_YANDEX_CODE',
  //   bing: 'YOUR_BING_CODE',
  // },

  // 👤 Other
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

// ============================================
// 🎯 VIEWPORT
// ============================================
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#000000' },
  ],
}

// ============================================
// 🎯 ROOT LAYOUT
// ============================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 🏢 Structured Data (JSON-LD) — Google Rich Results ke liye
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // 🏢 Organization
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'SRK Designer',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/srk.jpeg`,
          width: 512,
          height: 512,
        },
        description:
          'Premium design services & Voice Chat Application management. Trusted by 2000+ clients and 10,000+ hosts.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: WHATSAPP,
          contactType: 'Customer Service',
          availableLanguage: ['English', 'Hindi'],
          areaServed: 'Worldwide',
        },
        sameAs: [
          'https://wa.me/919528794938',
          'https://instagram.com/srkdesigner',
          'https://youtube.com/@srkdesigner',
          'https://t.me/srkdesigner',
        ],
      },

      // 🌐 Website
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'SRK Designer',
        description: 'Premium Design & Voice Chat Application Services',
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },

      // 💼 LocalBusiness / ProfessionalService
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#business`,
        name: 'SRK Designer',
        image: `${SITE_URL}/srk.jpeg`,
        url: SITE_URL,
        telephone: WHATSAPP,
        priceRange: '₹₹',
        description:
          'Premium Logo, Theme, Banner, Frame, SVG & GIF Design Services + Voice Chat Application Management.',
        areaServed: {
          '@type': 'Place',
          name: 'Worldwide',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'SRK Designer Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Logo Design',
                description: 'Custom premium logos for brand identity',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Banner Design',
                description: 'Premium banners for channels, business & events',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Theme Design',
                description: 'Exclusive premium themes for apps & profiles',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Frame Design',
                description: 'Stylish frames for photos, DP & gifts',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Customised GIF',
                description: 'Personalised GIFs for greetings & moments',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SVG Files',
                description: 'High-quality SVG files for designers',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Voice Chat Application Management',
                description:
                  'Super Admin, Admin & Host services for voice chat applications',
              },
            },
          ],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '2000',
          bestRating: '5',
          worstRating: '1',
        },
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 🎯 JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 🌐 Preconnect for speed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* 🌍 Hreflang (agar multi-language ho) */}
        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="hi" href={`${SITE_URL}/hi`} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  )
}