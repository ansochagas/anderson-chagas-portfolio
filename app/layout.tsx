import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

import {
  defaultSiteTitle,
  metadataBase,
  portfolioSiteName,
} from "@/lib/site-metadata";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: defaultSiteTitle,
    template: "%s | Anderson Chagas",
  },
  description:
    "Professional portfolio for Anderson Chagas, focused on product strategy, AI, SaaS, automation and technical execution.",
  keywords: [
    "Anderson Chagas",
    "Technical Product Manager",
    "Product Owner",
    "AI Product Strategy",
    "SaaS",
    "Process Automation",
    "Product Portfolio",
  ],
  openGraph: {
    siteName: portfolioSiteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
