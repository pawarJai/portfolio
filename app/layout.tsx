import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importing fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata
export const metadata: Metadata = {
  title: "Jayesh Pawar | Full-Stack Developer Portfolio",
  description:
    "Welcome to Jayesh Pawar's portfolio. A Full-Stack Developer with expertise in Python, Django, React, Next.js, and more. Explore projects, skills, and contact details.",
  keywords: [
    "Jayesh Pawar",
    "Full-Stack Developer",
    "Python Developer",
    "Django Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Jayesh Pawar", url: "https://yourportfolio.com" }],
  openGraph: {
    type: "website",
    title: "Jayesh Pawar | Full-Stack Developer Portfolio",
    description:
      "Explore the portfolio of Jayesh Pawar, showcasing skills, projects, and expertise in Full-Stack Development.",
    url: "https://yourportfolio.com",
    siteName: "Jayesh Pawar Portfolio",
    images: [
      {
        url: "/assets/portfolio-thumbnail.png", // Update with the actual image path
        width: 1200,
        height: 630,
        alt: "Jayesh Pawar Portfolio Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh Pawar | Full-Stack Developer Portfolio",
    description:
      "Explore the portfolio of Jayesh Pawar, showcasing skills, projects, and expertise in Full-Stack Development.",
    images: ["/assets/portfolio-thumbnail.png"], // Update with the actual image path
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
