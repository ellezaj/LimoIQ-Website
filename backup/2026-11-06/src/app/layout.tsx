import type { Metadata } from "next";
import { Fraunces, Inter, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://limoiq.app"),
  title: "LIMO IQ | Reservation, Dispatch & CRM Software for Limousine Operators",
  description:
    "LIMO IQ is reservation, dispatch, and chauffeur management software built by limousine operators. Live tracking, AI-assisted dispatching, and an intuitive back office — all in one platform.",
  openGraph: {
    title: "LIMO IQ | Limousine Reservation Software, Reimagined",
    description:
      "Reservation management, AI-assisted dispatching, and a chauffeur app built for limousine operators.",
    url: "https://limoiq.app",
    siteName: "LIMO IQ",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LIMO IQ | Limousine Reservation Software, Reimagined",
    description:
      "Reservation management, AI-assisted dispatching, and a chauffeur app built for limousine operators.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${playfairDisplay.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
