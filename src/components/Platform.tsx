import { featureGroups, type Tier } from "@/lib/features";

const tierStyles: Record<Tier, string> = {
  Basic: "border-slate/40 text-slate",
  Plus: "border-brass/50 text-brass",
  Premium: "border-brass bg-brass/10 text-brass",
 'Add-on': "border-brass bg-brass/10 text-brass",
};

export default function Platform() {
  return (
    <section id="platform" className="border-t border-panelLine/60 bg-panel py-20 md:py-28">
      <div className="container-content">
        <p className="eyebrow mb-4">The platform</p>
        <h2 className="max-w-lg text-3xl text-cream md:text-4xl">
          Everything an operator needs, none of what gets in the way.
        </h2>
        <p className="mt-4 max-w-lg text-sm text-slate">
          Every feature is tagged with the plan it&apos;s included in — see{" "}
          <a href="#pricing" className="text-brass underline underline-offset-4">
            full pricing
          </a>{" "}
          or the{" "}
          <a href="/product" className="text-brass underline underline-offset-4">
            full product page
          </a>{" "}
          for more detail.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-panelLine/60 bg-panelLine/60 md:grid-cols-3">
          {featureGroups.map((group) => (
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
                    <span
                      className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                        tierStyles[feature.tier]
                      }`}
                    >
                      {feature.tier}
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
