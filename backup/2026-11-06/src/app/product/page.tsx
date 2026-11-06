import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlatformTabs from "@/components/PlatformTabs";

export const metadata: Metadata = {
  title: "Product | LIMO IQ",
  description:
    "The full LIMO IQ feature list, demo video, and screenshot gallery — Customer App, Driver App, Admin Dashboard, Dispatch App, and Add-on Modules.",
};

export default function ProductPage() {
  return (
    <main>
      <Header />

      {/* Intro */}
      <section className="pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="container-content max-w-2xl">
          <p className="eyebrow mb-4">Our Products</p>
          <h1 className="text-4xl leading-[1.1] text-cream md:text-5xl">
            Everything LIMO IQ, in one place.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate">
            Pick an app below for its 
            {" "}
            <a href="#feature" className="text-brass underline underline-offset-4">
              full feature list
            </a>
            , 
            {" "}
            <a href="#video" className="text-brass underline underline-offset-4">
            demo video
            </a>
            , and
            {" "}
            <a href="#gallery" className="text-brass underline underline-offset-4">
            screenshot gallery
            </a>
            . For pricing by tier, see the{" "}
            <a href="/#pricing" className="text-brass underline underline-offset-4">
              pricing page
            </a>
            .
          </p>
        </div>
      </section>

      {/* Full feature list, demo, and gallery — all switch together per app */}
      <Suspense fallback={null}>
        <PlatformTabs
          id="platform"
          eyebrow="Full feature list"
          heading="Every feature, every app."
          showDemo
          showGallery
        />
      </Suspense>

      <Footer />
    </main>
  );
}
