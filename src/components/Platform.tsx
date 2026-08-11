type Tier = "Basic" | "Plus" | "Premium";

type Feature = {
  name: string;
  tier: Tier;
};

type Group = {
  label: string;
  title: string;
  features: Feature[];
};

const tierStyles: Record<Tier, string> = {
  Basic: "border-slate/40 text-slate",
  Plus: "border-brass/50 text-brass",
  Premium: "border-brass bg-brass/10 text-brass",
};

const groups: Group[] = [
  {
    label: "Customer App",
    title: "Booking that doesn't lose the customer.",
    features: [
      { name: "24/7 online reservation", tier: "Basic" },
      { name: "One-way, round trip & hourly booking", tier: "Basic" },
      { name: "Multi-stop trips", tier: "Basic" },
      { name: "Secure payment gateway & saved cards", tier: "Basic" },
      { name: "Instant confirmations", tier: "Basic" },
      { name: "Automated flight tracking", tier: "Plus" },
      { name: "Automated pricing rules", tier: "Plus" },
      { name: "Saved passenger profiles", tier: "Plus" },
      { name: "Ride history & rebooking", tier: "Plus" },
      { name: "Live trip status tracking", tier: "Plus" },
    ],
  },
  {
    label: "Driver App",
    title: "One app, full visibility.",
    features: [
      { name: "Scheduling & availability", tier: "Premium" },
      { name: "Trip offer accept/decline", tier: "Premium" },
      { name: "Real-time tracking", tier: "Premium" },
      { name: "Digital vehicle inspections", tier: "Premium" },
      { name: "Vehicle maintenance management", tier: "Premium" },
      { name: "In-app messaging (dispatch & passenger)", tier: "Premium" },
      { name: "Payouts & earnings dashboard", tier: "Premium" },
      { name: "Driver profile & support", tier: "Premium" },
    ],
  },
  {
    label: "Admin Dashboard",
    title: "Run the business, not the spreadsheets.",
    features: [
      { name: "Comprehensive reservation management", tier: "Plus" },
      { name: "Automated dispatch & management", tier: "Plus" },
      { name: "Trip request queue", tier: "Plus" },
      { name: "Detailed reporting & analytics", tier: "Plus" },
      { name: "CRM & maintenance tracking", tier: "Plus" },
      { name: "Driver & vehicle management", tier: "Plus" },
      { name: "Notification templates", tier: "Plus" },
      { name: "Service area & financial settings", tier: "Plus" },
      { name: "Settlement & payouts", tier: "Premium" },
      { name: "Event packages", tier: "Premium" },
      { name: "Alert rules", tier: "Premium" },
      { name: "Integration settings", tier: "Premium" },
      { name: "Security & user management", tier: "Premium" },
    ],
  },
];

export default function Platform() {
  return (
    <section id="platform" className="border-t border-panelLine/60 bg-panel py-20 md:py-28">
      <div className="container-content">
        <p className="eyebrow mb-4">The platform</p>
        <h2 className="max-w-lg text-3xl text-cream md:text-4xl">
          Everything an operator needs, none of what gets in the way.
        </h2>
        <p className="mt-4 max-w-lg text-sm text-slate">
          See{" "}
          <a href="#pricing" className="text-brass underline underline-offset-4">
            full pricing
          </a>{" "}
          for a side-by-side breakdown.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-panelLine/60 bg-panelLine/60 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label} className="bg-panel p-8">
              <span className="eyebrow">{group.label}</span>
              <h3 className="mt-4 text-xl text-cream">{group.title}</h3>

              <ul className="mt-5 space-y-3">
                {group.features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-start justify-between gap-3 text-sm leading-relaxed text-slate"
                  >
                    <span className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brass" />
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}