"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, LayoutDashboard } from "lucide-react";
import TourWatermark from "@/components/TourWatermark";

type Slide = {
  title: string;
  description: string;
  image?: string;
};

const slides: Slide[] = [
  {
    title: "Customer App",
    description:
      "One-way, round trip, or hourly — customers book online in a few taps, with flight tracking, saved payment methods, and instant confirmation built in.",
    image: "/screenshots/customer-overview.png"
  },
  {
    title: "Driver App",
    description:
      "Trip offers, real-time tracking, digital vehicle inspections, and payouts — everything a chauffeur needs on the road, in one app they'll actually want to use.",
    image: "/screenshots/driver-overview.png"
  },
  {
    title: "Admin Dashboard",
    description:
      "Dispatch, reservations, reporting, and CRM — a back office built around how operators actually work day to day, not retrofitted from generic taxi software.",
    image: "/screenshots/admin-overview.png"
  },
  {
    title: "Dispatch App",
    description:
      "A live dispatch board that matches drivers to trips, flags conflicts before they happen, and lets dispatchers reassign in real time — even across multiple locations.",
    image: "/screenshots/dispatch-overview.png"
  },
  {
    title: "Add-on Modules",
    description:
      "Optional modules you can add to any plan — pick what your business actually needs, skip what it doesn't.",
    image: "/screenshots/addons-overview.png"
  },
];

export default function TourPage() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((i) => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const slide = slides[active];

  return (
    <main className="relative flex h-screen w-screen flex-col overflow-hidden bg-[#0E0E11] px-6 py-6 text-cream md:px-12 md:py-10">
      {/* <TourWatermark /> */}

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between">
        <p className="max-w-md text-sm text-slate md:text-base">
        </p>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-panelLine text-slate transition-colors hover:border-brass hover:text-brass"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brass/60 text-brass transition-colors hover:bg-brass hover:text-ink"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Slide card */}
      <div className="relative z-10 flex flex-1 items-center justify-center py-6">
        <div className="relative aspect-[16/10] w-full max-w-6xl overflow-hidden rounded-3xl border border-panelLine/60 bg-[#0E0E11]">
          <div key={active} className="animate-fade-in absolute inset-0">
            {/* Full-bleed screenshot */}
            {slide.image ? (
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate/40">
                <LayoutDashboard className="h-8 w-8" />
                <span className="text-xs font-medium">Screenshot coming soon</span>
              </div>
            )}

            {/* Gradient scrim so the caption stays legible over any image */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

            {/* Caption, overlaid bottom-left */}
            <div className="absolute bottom-0 left-0 p-3 md:p-4">
              <div className="font-tour-title text-3xl leading-tight font-bold text-white md:text-4xl">
                {slide.title}
              </div>
              <p className="font-tour-body mt-3 text-sm leading-relaxed text-[#A1A1AA] md:text-base">
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="relative z-10 flex items-center justify-center gap-2 pb-1">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-brass" : "w-1.5 bg-panelLine hover:bg-slate"
            }`}
          />
        ))}
      </div>
    </main>
  );
}