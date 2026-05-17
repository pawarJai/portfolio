import './globals.css';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: {
    default: 'Portfolio - Pawar Jayesh  Full Stack Developer',
    template: '%s | Skyline Ways - AI/ML Development Services',
  },
  description:
    'Professional freelance AI/ML developer and data scientist. Specializing in machine learning, artificial intelligence, Python development, and data analytics. Transform your business with cutting-edge AI solutions.',
  keywords: [
    'freelance AI developer',
    'machine learning consultant',
    'data scientist',
    'Python developer',
    'AI/ML services',
    'artificial intelligence',
    'data analytics',
    'predictive modeling',
    'deep learning',
    'computer vision',
    'NLP',
    'freelancer',
    'pawarjay',
    'pawarjay',
  ].join(', '),
  authors: [{ name: 'pawarjay', url: 'https://pawarjay.com' }],
  creator: 'pawarjay',
  publisher: 'Skyline Ways',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pawarjay',
    siteName: 'Skyline Ways',
    title: 'SkylineWays - Professional AI/ML Development Services',
    description:
      'Professional freelance AI/ML developer and data scientist. Transform your business with cutting-edge AI solutions, machine learning models, and data analytics.',
    images: [
      {
        url: 'https://skylineways.site/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Skyline Ways - Freelance AI/ML Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkylineWays - Professional AI/ML Development Services',
    description:
      'Professional freelance AI/ML developer and data scientist. Transform your business with cutting-edge AI solutions.',
    images: ['https://skylineways.site/twitter-image.jpg'],
    creator: '@skylineways',
  },
  alternates: {
    canonical: 'https://skylineways.site',
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://skylineways.site'),
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${poppins.variable}`}>
      <body className='font-sans antialiased bg-black text-white'>
        {children}
      </body>
    </html>
  );
}
