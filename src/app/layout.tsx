import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import CursorEffect from "@/components/layout/CursorEffect";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Abdullah Al Mamun | Full Stack & MERN Stack Developer";
const description = "Professional portfolio of Abdullah Al Mamun (aamamunszone), a skilled MERN Stack Developer specializing in creating modern web applications with React, Next.js, Node.js, and MongoDB.";

export const viewport: Viewport = {
  themeColor: "#00d4ff",
};

export const metadata: Metadata = {
  title,
  description,
  keywords: ["aamamunszone", "Abdullah Al Mamun", "MERN Stack Developer", "Full Stack Developer", "React Developer", "Next.js Developer", "Portfolio", "Web Development", "Bangladesh"],
  authors: [{ name: "Abdullah Al Mamun", url: "https://github.com/aamamunszone" }],
  creator: "Abdullah Al Mamun",
  publisher: "Abdullah Al Mamun",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aamamunszone.vercel.app",
    title,
    description,
    siteName: "Abdullah Al Mamun Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Al Mamun Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@aamamunszone",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdullah Al Mamun',
  url: 'https://aamamunszone.vercel.app',
  sameAs: [
    'https://github.com/aamamunszone',
    'https://linkedin.com/in/aamamunszone',
    'https://twitter.com/aamamunszone',
    'https://facebook.com/aamamunszone',
  ],
  jobTitle: 'MERN Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Self Employed',
  },
  knowsAbout: ['Web Development', 'MERN Stack', 'React', 'Next.js', 'Node.js', 'MongoDB'],
  email: 'mailto:aamamunszone@gmail.com',
  telephone: '+8801973289703',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorEffect />
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
