import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlaceholderShot from "@/components/PlaceholderShot";
import PlatformTabs from "@/components/PlatformTabs";

export const metadata: Metadata = {
  title: "Product | LIMO IQ",
  description:
    "The full LIMO IQ feature list, demo video, and screenshot gallery — Customer App, Driver App, and Admin Dashboard.",
};

const galleryShots = [
  "Customer App — booking flow",
  "Customer App — trip dashboard",
  "Driver App — today's assignment",
  "Driver App — vehicle inspection",
  "Admin Dashboard — dispatch board",
  "Admin Dashboard — reporting & analytics",
];

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
            The full feature list across all three apps, a demo walkthrough,
            and a gallery of the platform in use. For pricing by tier, see the{" "}
            <a href="/#pricing" className="text-brass underline underline-offset-4">
              pricing page
            </a>
            .
          </p>
        </div>
      </section>
      {/* Full feature list, by app */}
      <PlatformTabs
        id="platform"
        eyebrow="Full feature list"
        heading="Every feature, every app."
      />

      {/* Demo video */}
      <section className="border-t border-panelLine/60 py-16 md:py-20">
        <div className="container-content">
          <p className="eyebrow mb-4">Demo</p>
          <h2 className="text-2xl text-cream md:text-3xl">See it work, end to end.</h2>

          <div className="mt-8 flex aspect-video w-full max-w-3xl items-center justify-center rounded-2xl border border-dashed border-panelLine bg-ink/40">
            <div className="flex flex-col items-center gap-3 px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brass/50 text-brass">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate">
                Demo video coming soon
              </span>
              <span className="max-w-xs text-xs text-slate/60">
                
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-panelLine/60 bg-panel py-16 md:py-20">
        <div className="container-content">
          <p className="eyebrow mb-4">Gallery</p>
          <h2 className="text-2xl text-cream md:text-3xl">The platform, in screenshots.</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryShots.map((label) => (
              <PlaceholderShot key={label} label={label} aspect="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
