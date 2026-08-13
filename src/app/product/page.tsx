import Image from "next/image";
import type { Metadata } from "next";
import { Suspense } from "react";
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
      <Suspense fallback={<div className="border-t border-panelLine/60 bg-panel py-20 md:py-28" /> }>
        <PlatformTabs
          id="platform"
          eyebrow="Full feature list"
          heading="Every feature, every app."
        />
      </Suspense>

      {/* Demo video */}
      <section className="border-t border-panelLine/60 py-16 md:py-20">
        <div className="container-content">
          <p className="eyebrow mb-4">Demo</p>
          <h2 className="text-2xl text-cream md:text-3xl">See it work, end to end.</h2>

          <div className="mt-8 flex aspect-video w-full max-w-3xl items-center justify-center rounded-2xl border border-dashed border-panelLine bg-ink/40">
            <div className="flex flex-col items-center gap-3 px-6 text-center">
					    <video src="./videos/customer-create-trip.mkv" autoPlay preload="auto" loop playsInline disablePictureInPicture disableRemotePlayback muted></video>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="border-t border-panelLine/60 bg-panel py-16 md:py-20">
        <div className="container-content">
          <p className="eyebrow mb-4">Gallery</p>
          <h2 className="text-2xl text-cream md:text-3xl">The platform, in a glimpse.</h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* {galleryShots.map((label) => (
              <PlaceholderShot key={label} label={label} aspect="aspect-[4/3]" />
            ))} */}
            <div className="aspect-[4/3]">
					    <video src="./videos/customer-pages-overview.mkv" autoPlay preload="auto" loop playsInline disablePictureInPicture disableRemotePlayback muted></video>
            </div>  
            <div className="aspect-[4/3]">
					    <video src="./videos/admin-pages-overview.mkv" autoPlay preload="auto" loop playsInline disablePictureInPicture disableRemotePlayback muted></video>
            </div>  
            <div className="aspect-[4/3]">
					    <video src="./videos/admin-trip-assignment.mkv" autoPlay preload="auto" loop playsInline disablePictureInPicture disableRemotePlayback muted></video>
            </div>
            <div className="aspect-[4/3]">
					    <img
                src="./screenshots/driver/home.png"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="aspect-[4/3]">
					    <img
                src="./screenshots/driver/review-trip.png"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="aspect-[4/3]">
					    <img
                src="./screenshots/driver/vehicle-inspection.png"
                className="w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
