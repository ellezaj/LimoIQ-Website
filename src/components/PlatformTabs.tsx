"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { featureGroups, type Tier } from "@/lib/features";
import { UsersRound, BookUser, BrickWallShield, Navigation, Blocks } from "lucide-react";
import PlaceholderShot from "@/components/PlaceholderShot";

const tierStyles: Record<Tier, string> = {
  Basic: "border-slate/40 text-slate",
  Plus: "border-brass/50 text-brass",
  Premium: "border-brass bg-brass/10 text-brass",
  "Add-on": "border-dashed border-slate/50 text-slate",
};

const tabIcons = [UsersRound, BookUser, BrickWallShield, Navigation, Blocks];
const galleryShots = [
  "Customer App — booking flow",
  "Customer App — trip dashboard",
  "Driver App — today's assignment",
  "Driver App — vehicle inspection",
  "Admin Dashboard — dispatch board",
  "Admin Dashboard — reporting & analytics",
];

type Props = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  intro?: ReactNode;
  showShot?: boolean;
  outro?: boolean;
};

export default function PlatformTabs({
  id = "platform",
  eyebrow = "The platform",
  heading = "Everything an operator needs, none of what gets in the way.",
  intro,
  showShot = true,
  outro,
}: Props) {
  const [active, setActive] = useState(0);
  const searchParams = useSearchParams();

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
      <div className="container-content">
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

          {/* Sliding carousel of tab panels */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {featureGroups.map((group) => (
                <div
                  key={group.slug}
                  className={`grid w-full shrink-0 items-center gap-10 pr-1 ${
                    showShot ? "md:grid-cols-2 md:gap-12" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-2xl text-cream">{group.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-slate">
                      {group.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {group.features.map((feature) => (
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

                    {outro && (
                      <a
                        href="/product"
                        className="mt-6 inline-block rounded-full border border-brass/60 px-4 py-2 text-sm font-medium text-brass transition-colors transition-transform hover:-translate-y-0.5 hover:bg-brass hover:text-ink"
                      >
                        Learn More
                      </a>
                    )}
                  </div>

                  {showShot && (
                    <img
                      src={group.image}
                      alt={`${group.label} preview`}
                      className="w-full rounded-xl object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
