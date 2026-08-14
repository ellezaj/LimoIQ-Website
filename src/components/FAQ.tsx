const faqs = [
  {
    q: "Is there a setup fee?",
    a: "No. There are no setup fees. You can start with a 2-week free trial and explore the full platform before choosing a plan. Pricing starts at $99/month, with optional add-ons available.",
  },
  {
    q: "Is live customer support available?",
    a: "Yes. Our customer and technical support team is available 24/7 to help with questions, troubleshooting, and platform-related concerns.",
  },
  {
    q: "Do drivers need to download a separate app?",
    a: "Yes. Drivers use a dedicated mobile app to manage trips, view schedules, receive trip updates, access flight information, and share their location for live tracking. The app is designed to be simple and easy to use with minimal training.",
  },
  {
    q: "Can I manage my bookings and drivers in one place?",
    a: "Yes. The platform gives you a centralized dashboard where you can manage bookings, assign drivers, track trips, and monitor your operations in real time.",
  },
  {
    q: "Does the platform support flight tracking?",
    a: "Yes. Flight tracking helps you monitor airport pickups and stay informed about flight delays or changes, making it easier to coordinate drivers and provide a better experience for your passengers.",
  },
  {
    q: "Does the platform support live trip tracking?",
    a: "Yes. The driver app can share live location information so dispatchers and administrators can monitor trips and better coordinate pickups and drop-offs.",
  },
  {
    q: "Is the platform suitable for small limousine companies?",
    a: "Absolutely. Whether you're an independent operator or manage a growing limousine fleet, the platform is designed to simplify booking, dispatching, driver management, and day-to-day operations.",
  },
  {
    q: "Can I try the platform before subscribing?",
    a: "Yes. You can start with a 2-week free trial with access to the full platform, giving you time to see how it fits your business before committing to a subscription.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-panelLine/60 py-20 md:py-28">
      <div className="container-content max-w-2xl">
        <p className="eyebrow mb-4">FAQ</p>
        <h2 className="text-3xl text-cream md:text-4xl">Questions, answered.</h2>

        <div className="mt-10 divide-y divide-panelLine">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-cream">
                <span className="pr-6 text-base font-medium">{item.q}</span>
                <span className="shrink-0 text-brass transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
