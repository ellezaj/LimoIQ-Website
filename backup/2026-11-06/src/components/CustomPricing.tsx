"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";

const BASE_PRICE = 99;

type AddOn = {
  id: string;
  name: string;
  description: string;
  price: number;
  defaultOn: boolean;
};

const addOns: AddOn[] = [
  {
    id: "ai-dispatch",
    name: "AI Dispatch Management",
    description: "Automated assignment and routing",
    price: 49,
    defaultOn: false,
  },
  {
    id: "flight-tracking",
    name: "Flight Tracking",
    description: "Real-time updates for arrivals/departures",
    price: 29,
    defaultOn: false,
  },
  {
    id: "lead-gen",
    name: "Smart Lead Gen & Follow-up",
    description: "AI marketing automation",
    price: 39,
    defaultOn: false,
  },
  {
    id: "chauffeur-access",
    name: "Chauffeur App Access",
    description: "Per driver account",
    price: 19,
    defaultOn: false,
  },
  {
    id: "white-label",
    name: "White-label Passenger App",
    description: "Branded app for your clients",
    price: 99,
    defaultOn: false,
  },
  {
    id: "voting-rights",
    name: "Enterprise Voting Rights",
    description: "Vote on future roadmap features",
    price: 199,
    defaultOn: false,
  },
];

const coreFeatures = [
  "Basic Reservation Management",
  "Email & Push Notifications",
  "Client Database",
  "Vehicle Management",
  "Standard Reporting",
  "24/7 Support",
];

const everythingFeatures = [
  "Everything in Core Platform",
  "AI Dispatch Management",
  "Flight Tracking",
  "Smart Lead Gen & Follow-up",
  "Unlimited chauffeur accounts",
  "White-label Passenger App",
  "Enterprise Voting Rights",
  "Priority support & onboarding",
];

function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={onClick}
      className={`flex h-6 w-11 shrink-0 items-center rounded-full p-1 transition-colors ${
        on ? "bg-brass" : "bg-panelLine"
      }`}
    >
      <span
        className={`h-4 w-4 rounded-full bg-cream shadow transition-transform ${
          on ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function CustomPricing() {
  const [selected, setSelected] = useState<Record<string, boolean>>(
    Object.fromEntries(addOns.map((a) => [a.id, a.defaultOn]))
  );

  const total = useMemo(() => {
    return (
      BASE_PRICE +
      addOns.reduce((sum, a) => (selected[a.id] ? sum + a.price : sum), 0)
    );
  }, [selected]);

  function toggle(id: string) {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <section className="py-0">
      <div className="">

        <div className="mt-1 grid gap-3 lg:grid-cols-5">
          {/* Free Trial */}
          <div className="flex flex-col rounded-2xl border border-panelLine bg-ink/40 py-4 px-5 lg:col-span-1">
            <span className="mb-4 w-fit rounded-full border border-brass/50 px-3 py-1 text-xs font-semibold text-brass">
              No commitment
            </span>
            <h2 className="font-display text-xl text-cream">Free Trial</h2>
            <p className="mt-1 text-sm text-slate">Try the full platform</p>
            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="font-display text-3xl text-cream">$0</span>
            </div>
            <ul className="mt-7 flex-1 space-y-2.5">
              {["Full Customer App", "Full Driver App", "Full Admin Dashboard", "14 days included"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-cream">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <a
              href="#contact"
              className="mt-8 block rounded-full bg-brass px-6 py-3 text-center text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Try for Free
            </a>
          </div>

          {/* Basic */}
          <div className="flex flex-col rounded-2xl border border-panelLine bg-ink/40 py-4 px-5 lg:col-span-1">
            <span className="mb-4 w-fit rounded-full border border-brass/50 px-3 py-1 text-xs font-semibold text-brass">
              Starter
            </span>
            <h2 className="font-display text-xl text-cream">Basic Tier</h2>
            <p className="mt-1 text-sm text-slate">Everything you need to get started</p>
            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="font-display text-3xl text-cream">${BASE_PRICE}</span>
              <span className="text-sm text-slate">/month</span>
            </div>
            <ul className="mt-7 flex-1 space-y-2.5">
              {coreFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-cream">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 block rounded-full border border-brass/60 px-6 py-3 text-center text-sm font-medium text-brass transition-colors hover:bg-brass hover:text-ink"
            >
              Get Started
            </a>
          </div>

          {/* Build Your Plan — interactive */}
          <div className="flex flex-col rounded-2xl border border-brass/50 bg-panel py-4 px-5 lg:col-span-2">
            <span className="mb-4 w-fit rounded-full bg-brass/15 px-3 py-1 text-xs font-semibold text-brass">
              Custom
            </span>
            <h2 className="font-display text-xl text-cream">Build Your Plan</h2>
            <p className="mt-1 text-sm text-slate">
              Select premium features to supercharge your operations.
            </p>

            <div className="mt-7 flex-1 space-y-1">
              {addOns.map((addOn) => (
                <div
                  key={addOn.id}
                  className="flex items-center justify-between gap-4 border-b border-panelLine/60 py-3.5 last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <Toggle on={selected[addOn.id]} onClick={() => toggle(addOn.id)} />
                    <div>
                      <p className="text-sm font-medium text-cream">{addOn.name}</p>
                      <p className="text-xs text-slate">{addOn.description}</p>
                    </div>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-brass">
                    +${addOn.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-panelLine pt-6">
              <span className="text-sm text-slate">Estimated Total</span>
              <span className="font-display text-3xl text-cream">
                ${total}
                <span className="text-sm font-body text-slate">/month</span>
              </span>
            </div>

            <a
              href="#contact"
              className="mt-6 block rounded-full bg-brass px-6 py-3 text-center text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Start Free Trial with Selected Features
            </a>
          </div>

          {/* Top tier */}
          <div className="flex flex-col rounded-2xl border border-panelLine bg-ink/40 py-4 px-5 lg:col-span-1">
            <span className="mb-4 w-fit rounded-full border border-brass/50 px-3 py-1 text-xs font-semibold text-brass">
              Best value
            </span>
            <h2 className="font-display text-xl text-cream">Top Tier</h2>
            <p className="mt-1 text-sm text-slate">Full platform, one flat price</p>
            <div className="mt-5 flex items-baseline gap-1.5">
              <span className="font-display text-3xl text-cream">$299</span>
              <span className="text-sm text-slate">/month</span>
            </div>
            <ul className="mt-7 flex-1 space-y-2.5">
              {everythingFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-cream">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 block rounded-full border border-brass/60 px-6 py-3 text-center text-sm font-medium text-brass transition-colors hover:bg-brass hover:text-ink"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
