type Tier = {
  name: string;
  price: string;
  tagline: string;
  featured?: boolean;
  groups: { label: string; items: string[] | null }[];
};

const tiers: Tier[] = [
  {
    name: "Basic",
    price: "$99",
    tagline: "Get bookings online",
    groups: [
      {
        label: "Customer App",
        items: [
          "24/7 online reservation",
          "One-way, round trip & hourly booking",
          "Multi-stop trips",
          "Secure payment gateway & saved cards",
          "Instant confirmations",
        ],
      },
      { label: "Admin Dashboard", items: null },
      { label: "Driver App", items: null },
    ],
  },
  {
    name: "Plus",
    price: "$249",
    tagline: "Run day-to-day operations",
    featured: true,
    groups: [
      {
        label: "Customer App",
        items: [
          "Everything in Basic",
          "Automated flight tracking",
          "Automated pricing rules",
          "Saved passenger profiles",
          "Ride history & rebooking",
          "Live trip status tracking",
        ],
      },
      {
        label: "Admin Dashboard",
        items: [
          "Comprehensive reservation management",
          "Automated dispatch & management",
          "Trip request queue",
          "Detailed reporting & analytics",
          "CRM & maintenance tracking",
          "Driver & vehicle management",
          "Notification templates",
          "Service area & financial settings",
        ],
      },
      { label: "Driver App", items: null },
    ],
  },
  {
    name: "Premium",
    price: "$549",
    tagline: "Full-service fleets with drivers on the road",
    groups: [
      { label: "Customer App", items: ["Everything in Plus"] },
      {
        label: "Admin Dashboard",
        items: [
          "Everything in Plus, plus:",
          "Settlement & payouts",
          "Event packages",
          "Alert rules",
          "Integration settings",
          "Security & user management",
        ],
      },
      {
        label: "Driver App",
        items: [
          "Scheduling & availability",
          "Trip offer accept/decline",
          "Real-time tracking",
          "Digital vehicle inspections",
          "Vehicle maintenance management",
          "In-app messaging (dispatch & passenger)",
          "Payouts & earnings dashboard",
          "Driver profile & support",
        ],
      },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-panelLine/60 py-20 md:py-28">
      <div className="container-content">
        <p className="eyebrow mb-4">Pricing</p>
        <h2 className="max-w-lg text-3xl text-cream md:text-4xl">
          Three tiers. Upgrade as your fleet grows.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                tier.featured
                  ? "border-brass bg-panel md:-translate-y-3 md:shadow-xl md:shadow-brass/5"
                  : "border-panelLine bg-panel"
              }`}
            >
              {tier.featured && (
                <span className="mb-4 w-fit rounded-full bg-brass px-3 py-1 text-xs font-semibold text-ink">
                  Most popular
                </span>
              )}

              <h3 className="font-display text-xl text-cream">{tier.name}</h3>
              <p className="mt-1 text-sm text-slate">{tier.tagline}</p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-3xl text-cream">{tier.price}</span>
                <span className="text-sm text-slate">/month</span>
              </div>

              <div className="mt-7 flex-1 space-y-6">
                {tier.groups.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs uppercase tracking-wide text-slate">
                      {group.label}
                    </p>
                    {group.items ? (
                      <ul className="mt-2.5 space-y-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-cream"
                          >
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-2.5 text-sm text-slate/50">Not included</p>
                    )}
                  </div>
                ))}
              </div>

              
              <a  href="#beta"
                className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  tier.featured
                    ? "bg-brass text-ink"
                    : "border border-panelLine text-cream hover:border-brass"
                }`}
              >
                Request a Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}