"use client";

import { useEffect, useState, useRef, useLayoutEffect, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { featureGroups, type Tier } from "@/lib/features";
import { UsersRound, BookUser, BrickWallShield, Navigation, Blocks, Play } from "lucide-react";
import PlaceholderShot from "./PlaceholderShot";

const tierStyles: Record<Tier, string> = {
  Basic: "border-slate/40 text-slate",
  Pro: "border-brass/50 text-brass",
  Enterprise: "border-brass bg-brass/10 text-brass",
  "Add-on": "border-dashed border-slate/50 text-slate",
};

const tabIcons = [UsersRound, BookUser, BrickWallShield, Navigation, Blocks];

type Props = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  intro?: ReactNode;
  showShot?: boolean;
  outro?: boolean;
  showDemo?: boolean;
  showGallery?: boolean;
  /** Truncate each tab's feature list to this many items, with a "+N more" toggle. Omit to always show the full list. */
  collapseFeaturesAt?: number;
};

export default function PlatformTabs({
  id = "platform",
  eyebrow = "The platform",
  heading = "Everything an operator needs, none of what gets in the way.",
  intro,
  showShot = true,
  outro,
  showDemo = false,
  showGallery = false,
  collapseFeaturesAt,
}: Props) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [height, setHeight] = useState<number | "auto">("auto");
  const carouselRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  // Dynamic height adjustment for carousel
  useLayoutEffect(() => {
    if (!carouselRef.current) return;
    
    const activeChild = carouselRef.current.children[active] as HTMLElement;
    if (activeChild) {
      setHeight(activeChild.offsetHeight);
    }
  }, [active]);

  // Deep-link support: /?tab=driver-app (or /product?tab=driver-app)
  // opens this section with the matching tab already selected.
  useEffect(() => {
    const requested = searchParams.get("tab");
    if (!requested) return;
    const index = featureGroups.findIndex((g) => g.slug === requested);
    if (index !== -1) setActive(index);
  }, [searchParams]);

  return (
    <section id={id} className="border-t border-panelLine/60 bg-panel py-20 md:py-28">
      <div className="container-content" id="feature">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="max-w-lg text-3xl text-cream md:text-4xl">{heading}</h2>
        {intro && <div className="mt-4 max-w-lg text-sm text-slate">{intro}</div>}

        <div className="mt-14 grid gap-10">
          {/* Tab nav */}
          <div
            role="tablist"
            aria-label="Platform apps"
            className="flex gap-2 overflow-x-auto pb-2"
          >
            {featureGroups.map((g, i) => {
              const Icon = tabIcons[i] ?? UsersRound;

              return (
                <button
                  key={g.slug}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors md:shrink ${
                    i === active
                      ? "border-brass/60 bg-brass/10 text-brass"
                      : "border-transparent text-slate hover:border-panelLine hover:text-cream"
                  }`}
                >
                  <Icon className="mr-2 inline h-4 w-4" />
                  {g.label}
                </button>
              );
            })}
          </div>

          {/* Sliding carousel of tab panels — video/gallery/features all switch together */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex items-start transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)`, height: typeof height === 'number' ? `${height}px` : 'auto' }}
            >
              {featureGroups.map((group, i) => {
                const isExpanded = expanded[i] ?? false;
                const visibleFeatures =
                  collapseFeaturesAt && !isExpanded
                    ? group.features.slice(0, collapseFeaturesAt)
                    : group.features;
                const hiddenCount = collapseFeaturesAt
                  ? group.features.length - collapseFeaturesAt
                  : 0;

                return (
                  <div key={group.slug} className="w-full shrink-0 pr-1">
                    <div
                      className={`grid items-center gap-10 ${
                        showShot ? "md:grid-cols-2 md:gap-12" : ""
                      }`}
                    >
                      <div>
                        <h3 className="text-2xl text-cream">{group.title}</h3>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate">
                          {group.description}
                        </p>
                        <ul className="mt-6 space-y-3">
                          {visibleFeatures.map((feature) => (
                            <li
                              key={feature.name}
                              className="flex items-start justify-between gap-3 text-sm leading-relaxed text-slate"
                            >
                              <span className="flex items-start gap-2.5">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                                <span className="text-cream">{feature.name}</span>
                              </span>
                              {/* <span
                                className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                                  tierStyles[feature.tier]
                                }`}
                              >
                                {feature.tier}
                              </span> */}
                            </li>
                          ))}
                        </ul>

                        {collapseFeaturesAt && hiddenCount > 0 && (
                          <button
                            type="button"
                            // onClick={() =>
                            //   setExpanded((prev) => ({ ...prev, [i]: !isExpanded }))
                            // }
                            className="mt-3 block text-xs font-medium text-brass hover:text-brass/80"
                          >
                            {isExpanded ? "Show fewer" : `+ ${hiddenCount} more features`}
                          </button>
                        )}

                        {outro && (
                          <a
                            href="/product"
                            className="mt-6 inline-block rounded-full border border-brass/60 px-4 py-2 text-sm font-medium text-brass transition-transform hover:-translate-y-0.5 hover:bg-brass hover:text-ink"
                          >
                            Learn More
                          </a>
                        )}
                      </div>

                      {showShot &&
                        (group.image ? (
                          <img
                            src={group.image}
                            alt={`${group.label} preview`}
                            className="w-full rounded-xl object-cover"
                          />
                        ) : (
                          <PlaceholderShot
                            label={`${group.label} — preview`}
                            aspect="aspect-[16/10]"
                          />
                        ))}
                    </div>

                    {showDemo && (
                      <div className="mt-14" id="video">
                        <p className="eyebrow mb-4">Demo</p>
                        <h4 className="text-xl text-cream">
                          {group.label} — see it work.
                        </h4>
                        <div className="mt-6 flex aspect-video w-full items-center justify-center rounded-2xl border border-dashed border-panelLine bg-ink/40">
                          {group.video.src ? (
                            <video
                              src={group.video.src}
                              controls
                              className="h-full w-full rounded-2xl"
                            />
                          ) : (
                            <div className="flex flex-col items-center gap-3 px-6 text-center">
                              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brass/50 text-brass">
                                <Play className="h-5 w-5" fill="currentColor" />
                              </div>
                              <span className="text-sm font-medium text-slate">
                                {group.video.label} coming soon
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {showGallery && (
                      <div className="mt-16 space-y-14" id="gallery">
                        <div>
                          <p className="eyebrow mb-4">In depth</p>
                          <h4 className="text-xl text-cream">
                            {group.label} — feature by feature.
                          </h4>
                        </div>

                        {group.highlights.map((highlight, hi) => (
                          <div
                            key={highlight.title}
                            className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                              hi % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                            }`}
                          >
                            <div>
                              <h5 className="text-lg text-cream">{highlight.title}</h5>
                              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate">
                                {highlight.description}
                              </p>
                            </div>

                            <div className="w-full">
                              {highlight.mediaType === "image" ? (
                                highlight.media.src ? (
                                  <img
                                    src={highlight.media.src}
                                    alt={highlight.media.label}
                                    className="m-auto rounded-xl object-contain max-h-[550px]"
                                  />
                                ) : (
                                  <PlaceholderShot
                                    label={highlight.media.label}
                                    aspect="aspect-video" 
                                  />
                                )
                              ) : (
                                <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-panelLine bg-ink/40">
                                  {highlight.media.src ? (
                                    <video
                                      src={highlight.media.src}
                                      controls
                                      className="h-full w-full rounded-xl"
                                    />
                                  ) : (
                                    <div className="flex flex-col items-center gap-2 px-6 text-center">
                                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brass/50 text-brass">
                                        <Play className="h-4 w-4" fill="currentColor" />
                                      </div>
                                      <span className="text-xs font-medium text-slate">
                                        {highlight.media.label}
                                      </span>
                                      <span className="text-[10px] uppercase tracking-wide text-slate/40">
                                        Short clip coming soon
                                      </span>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
