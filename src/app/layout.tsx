import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { env } from "@/lib/env";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Mushahid Raza",
  },
  description: siteConfig.description,

  verification: {
    google: "oY37QphzpjlCYKx3-D-ypOYniA2NCrYpwIeTa91XSWo",
  },

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Mushahid Raza",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,

  applicationName: "Mushahid Portfolio",

  category: "Technology",

  robots: {
    index: env.isProduction,
    follow: env.isProduction,
  },

  openGraph: {
    title: siteConfig.title,

    description: siteConfig.description,

    url: siteConfig.url,

    siteName: "Mushahid Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mushahid Raza Portfolio",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.title,

    description: siteConfig.description,

    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        ></script>
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
    </html>
  );
}
