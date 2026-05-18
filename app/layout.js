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
    title: 'Aakshiv - Professional AI/ML Development Services',
    description:
      'Professional freelance AI/ML developer and data scientist. Transform your business with cutting-edge AI solutions, machine learning models, and data analytics.',
    images: [
      {
        url: 'https://portfolio.aakshiv.com/',
        width: 1200,
        height: 630,
        alt: 'Aakshic - Freelance Full Stack AI/ML Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aakshiv - Professional Full Stack AI/ML Development Services',
    description:
      'Professional freelance AI/ML developer and data scientist. Transform your business with cutting-edge AI solutions.',
    images: ['https://aakshiv.com/twitter-image.jpg'],
    creator: '@aakshiv',
  },
  alternates: {
    canonical: 'https://portfolio.aakshiv.com/',
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio.aakshiv.com/'),
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
