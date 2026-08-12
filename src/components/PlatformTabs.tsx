"use client";

import { useState, type ReactNode } from "react";
import { featureGroups, type Tier } from "@/lib/features";
import { BookUser, BrickWallShield, UsersRound } from 'lucide-react';

const tierStyles: Record<Tier, string> = {
  Basic: "border-slate/40 text-slate",
  Plus: "border-brass/50 text-brass",
  Premium: "border-brass bg-brass/10 text-brass",
};

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
  const group = featureGroups[active];
  const tabIcons = [UsersRound, BookUser, BrickWallShield];

  return (
    <section id={id} className="border-t border-panelLine/60 bg-panel py-20 md:py-28">
      <div className="container-content">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="max-w-lg text-3xl text-cream md:text-4xl">{heading}</h2>
        {intro && <div className="mt-4 max-w-lg text-sm text-slate">{intro}</div>}

        <div className="mt-14 grid gap-10">
          {/* Tab nav — horizontal scroll on mobile, vertical list on desktop   
          className="mt-14 grid gap-10 md:grid-cols-[220px_1fr] md:gap-12">
          className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0"
          */}
          <div
            role="tablist"
            aria-label="Platform apps"
            className="flex gap-2 overflow-x-auto pb-2"
          >
            {featureGroups.map((g, i) => {
              const Icon = tabIcons[i] ?? UsersRound;

              return (
                <button
                  key={g.label}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors md:shrink ${
                    i === active
                      ? "border-brass/60 bg-brass/10 text-brass"
                      : "border-transparent text-slate hover:border-panelLine hover:text-cream"
                  }`}
                >
                  <Icon className="mr-2 inline" />
                  {g.label}
                </button>
              );
            })}
          </div>

          {/* Active tab content */}
          <div
            className={`grid gap-10 items-center ${showShot ? "md:grid-cols-2 md:gap-12" : ""}`}
          >
            <div>
              <h3 className="text-2xl text-cream"> {group.title}</h3>
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
            </div>
            {showShot && (
              <img
                src={group.image}
                alt={`${group.label} preview`}
                className="w-full rounded-xl object-cover"
                // className="w-full rounded-xl border border-panelLine/60 object-cover shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              />
            )}
            {outro && (
                      <a
                href="/product"
                className="mr-auto rounded-full border border-brass/60 px-4 py-2 text-sm font-medium text-brass transition-colors hover:bg-brass hover:text-ink"
              >
                Learn More
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
