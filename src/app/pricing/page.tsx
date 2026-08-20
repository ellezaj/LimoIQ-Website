import type { Metadata } from "next";
import { Suspense } from "react";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing | LIMO IQ",
  description:
    "The full LIMO IQ pricing plans.",
};

export default function PricingPage() {
  return (
    <main className="pricing-scrollbar relative flex h-screen w-screen flex-col overflow-y-auto bg-[#0E0E11]">
      <Pricing showTitle={false}/>
    </main>
  );
}
