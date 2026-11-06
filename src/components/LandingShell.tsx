"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { ProductId } from "@/lib/content";

const PRODUCT_IDS: ProductId[] = ["customer", "driver", "admin", "dispatch", "addons"];
const PAGE_IDS = ["about", "contact", "privacy", "terms"] as const;
const HOME_ANCHORS = ["features", "experience", "pricing"];

type PageId = (typeof PAGE_IDS)[number];
export type ViewKey = "home" | PageId | ProductId;
type Route = { key: ViewKey; anchor?: string };

function parseHash(hash: string): Route {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if ((PRODUCT_IDS as string[]).includes(id)) return { key: id as ProductId };
  if ((PAGE_IDS as readonly string[]).includes(id)) return { key: id as PageId };
  if (HOME_ANCHORS.includes(id)) return { key: "home", anchor: id };
  return { key: "home" };
}

/** Product tabs share one view, so switching tabs doesn't re-animate or scroll. */
function groupOf(key: ViewKey) {
  return (PRODUCT_IDS as string[]).includes(key) ? "products" : key;
}

type Props = {
  header: ReactNode;
  footer: ReactNode;
  views: Record<ViewKey, ReactNode>;
};

export default function LandingShell({ header, footer, views }: Props) {
  const [route, setRoute] = useState<Route>({ key: "home" });
  const prevGroup = useRef<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const next = parseHash(window.location.hash);
      setRoute((cur) => (cur.key === next.key && cur.anchor === next.anchor ? cur : next));
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    const group = groupOf(route.key);
    const prev = prevGroup.current;
    prevGroup.current = group;

    if (route.anchor) {
      const switched = prev !== null && prev !== group;
      document
        .getElementById(route.anchor)
        ?.scrollIntoView({ behavior: switched ? "instant" : "smooth", block: "start" });
      return;
    }
    if (prev === null) return;
    if (prev !== group || group === "home") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-iq-bg font-iq text-iq-text">
      {header}
      <main key={groupOf(route.key)} className="animate-iq-fade">
        {views[route.key]}
      </main>
      {footer}
    </div>
  );
}
