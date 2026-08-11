const faqs = [
  {
    q: "Does LIMO IQ integrate with my existing fleet or accounting software?",
    a: "Integrations are on the roadmap and shaped directly by beta feedback. Tell us what you currently run and we'll factor it into what we build next.",
  },
  {
    q: "Do chauffeurs need to download a separate app?",
    a: "Yes — the chauffeur app is where live tracking, flight tracking, and availability/payout information live. It's built to be simple enough to use without training.",
  },
  {
    q: "Is there a setup fee?",
    a: "No. Pricing starts at $99/month with optional add-ons. Final beta pricing and any onboarding support will be confirmed before general availability.",
  },
  {
    q: "When can I actually start using it?",
    a: "We're onboarding a limited number of operators through the beta program now. Request access above and we'll reach out with next steps and a realistic timeline.",
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
