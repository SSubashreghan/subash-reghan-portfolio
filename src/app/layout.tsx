import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, Cinzel } from 'next/font/google';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://reghan.in';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Subash Reghan | Digital Marketer & Python Full Stack Developer',
    template: '%s | Subash Reghan'
  },
  description:
    'Subash Reghan is a Digital Marketer and Python Full Stack Developer focused on technology, digital growth, creative work, and building toward AI-driven technology businesses.',
  keywords: [
    'Subash Reghan',
    'Digital Marketer',
    'Python Full Stack Developer',
    'Web Developer',
    'Django Developer',
    'Digital Marketing Puducherry',
    'Website Development',
    'Web Application Development',
    'Puducherry',
    'Pondicherry',
    'Reghan Empire'
  ],
  authors: [{ name: 'Subash Reghan', url: 'https://linkedin.com/in/subash-reghan-893a752a7/' }],
  creator: 'Subash Reghan',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Subash Reghan | Digital Marketer & Python Full Stack Developer',
    description:
      'Subash Reghan is a Digital Marketer and Python Full Stack Developer focused on technology, digital growth, creative work, and building toward AI-driven technology businesses.',
    siteName: 'Subash Reghan Portfolio',
    images: [
      {
        url: '/assets/images/logo_reghan.png',
        width: 512,
        height: 512,
        alt: 'Subash Reghan • REGHAN EMPIRE Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subash Reghan | Digital Marketer & Python Full Stack Developer',
    description:
      'Digital Marketer & Python Full Stack Developer based in Puducherry. Building at the intersection of Technology, Digital Growth & Business.',
    images: ['/assets/images/logo_reghan.png'],
  },
  icons: {
    icon: [
      { url: '/assets/images/logo_reghan.png', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/images/logo_reghan.png', type: 'image/png' },
    ],
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
};

export const viewport: Viewport = {
  themeColor: '#08090D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Subash Reghan',
        jobTitle: 'Digital Marketer & Python Full Stack Developer',
        url: siteUrl,
        worksFor: {
          '@type': 'Organization',
          name: 'SHA Innovative Technologies',
          url: 'https://shainnovativetechnologies.com/',
        },
        sameAs: [
          'https://linkedin.com/in/subash-reghan-893a752a7/',
          'https://github.com/SSubashreghan',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Puducherry',
          addressRegion: 'Puducherry',
          addressCountry: 'IN',
        },
        knowsAbout: [
          'Python',
          'Django',
          'Digital Marketing',
          'Search Engine Optimization',
          'Meta Ads',
          'Google Ads',
          'Full Stack Web Development',
          'Video Production',
          'Artificial Intelligence',
        ],
      },
      {
        '@type': 'WebSite',
        name: 'Subash Reghan Portfolio',
        url: siteUrl,
        author: {
          '@type': 'Person',
          name: 'Subash Reghan',
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`scroll-smooth dark ${inter.variable} ${spaceGrotesk.variable} ${cinzel.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian text-titanium-light antialiased selection:bg-gold/30 selection:text-white overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
