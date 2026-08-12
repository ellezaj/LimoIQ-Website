import PlaceholderShot from "./PlaceholderShot";

const stops = [
  {
    eyebrow: "Customer App",
    title: "Booking in under a minute.",
    description:
      "One-way, round trip, or hourly — customers book online in a few taps, with flight tracking and instant confirmation built in.",
    shotLabel: "Customer App — booking flow",
  },
  {
    eyebrow: "Driver App",
    title: "Everything a chauffeur needs, on the road.",
    description:
      "Trip offers, real-time tracking, digital vehicle inspections, and payouts — all in one app drivers actually want to use.",
    shotLabel: "Driver App — dashboard",
  },
  {
    eyebrow: "Admin Dashboard",
    title: "Run the whole business from one screen.",
    description:
      "Dispatch, reservations, reporting, and CRM in a back office built around how operators actually work day to day.",
    shotLabel: "Admin Dashboard — settings",
  },
];

export default function ProductTour() {
  return (
    <section id="product-tour" className="border-t border-panelLine/60 py-20 md:py-28">
      <div className="container-content">
        <p className="eyebrow mb-4">Product tour</p>
        <h2 className="max-w-lg text-3xl text-cream md:text-4xl">
          See LIMO IQ in action.
        </h2>
        <p className="mt-4 max-w-lg text-sm text-slate">
          A quick look at the three apps that make up the platform. Want the
          full walkthrough?{" "}
          <a href="/product" className="text-brass underline underline-offset-4">
            View the full product page
          </a>
          .
        </p>

        <div className="mt-16 space-y-20">
          {stops.map((stop, i) => (
            <div
              key={stop.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <span className="eyebrow">{stop.eyebrow}</span>
                <h3 className="mt-3 text-2xl text-cream">{stop.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate">
                  {stop.description}
                </p>
              </div>

              <PlaceholderShot label={stop.shotLabel} aspect="aspect-[16/10]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
