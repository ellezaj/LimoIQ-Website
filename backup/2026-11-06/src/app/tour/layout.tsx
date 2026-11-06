import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LIMO IQ — Product Tour",
  robots: { index: false, follow: false }, // embed-only page, not a public landing page
};

export default function TourLayout({ children }: { children: React.ReactNode }) {
  return children;
}
