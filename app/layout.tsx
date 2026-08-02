import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "61STSEC — The 61st Second",
  description:
    "Every minute has 60 seconds. The best moments happen in the 61st. Something extraordinary is coming — join the first 61.",
  openGraph: {
    title: "61STSEC — The 61st Second",
    description:
      "Something extraordinary is coming. The 61st second represents breaking limits, going beyond ordinary.",
    url: "https://61stsec.com",
    siteName: "61STSEC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "61STSEC — The 61st Second",
    description:
      "Every minute has 60 seconds. The best moments happen in the 61st.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        {/* Noise overlay for texture */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
