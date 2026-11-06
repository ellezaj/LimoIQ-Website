"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { tourSlides } from "@/lib/content";

export default function TourShowcase() {
  const [active, setActive] = useState(0);
  const count = tourSlides.length;
  const next = () => setActive((i) => (i + 1) % count);
  const prev = () => setActive((i) => (i - 1 + count) % count);

  return (
    <div>
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-iq-line text-iq-slate transition-colors hover:border-iq-gold hover:text-iq-gold"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-iq-gold/60 text-iq-gold transition-colors hover:bg-iq-gold hover:text-iq-deep"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="relative mt-5">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-iq-line bg-iq-bg sm:aspect-[16/10] sm:rounded-3xl">
          {tourSlides.map((s, i) => (
            <Image
              key={s.image}
              src={s.image}
              alt={s.title}
              fill
              sizes="(min-width: 1128px) 1080px, 100vw"
              className={`object-contain transition-opacity duration-500 sm:object-cover sm:object-top ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-iq-deep via-iq-deep/10 to-transparent sm:block" />
        </div>

        <div className="grid pt-4 sm:pointer-events-none sm:absolute sm:bottom-0 sm:left-0 sm:max-w-2xl sm:p-6">
          {tourSlides.map((s, i) => (
            <div
              key={s.title}
              aria-hidden={i !== active}
              className={`self-start [grid-area:1/1] sm:self-end ${
                i === active ? "visible animate-iq-fade" : "invisible"
              }`}
            >
              <p className="font-iq-display text-2xl font-bold leading-tight text-white sm:text-4xl">
                {s.title}
              </p>
              <p className="mt-2 font-iq text-sm leading-relaxed text-iq-muted md:text-base">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {tourSlides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-iq-gold" : "w-1.5 bg-iq-line hover:bg-iq-slate"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
