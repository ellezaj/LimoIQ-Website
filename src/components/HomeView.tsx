import { ArrowRight, ChevronDown } from "lucide-react";
import CustomPricing from "@/components/CustomPricing";
import SectionHeading from "./SectionHeading";
import TourShowcase from "./TourShowcase";
import { features, type Feature } from "@/lib/content";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(rgba(9,9,11,0.44)_0%,#09090B_72%,#0E0E11_100%)]"
      />

      <div className="iq-container relative pb-10 pt-16 text-center sm:pt-20">
        <span className="inline-flex h-8 items-center rounded-full border border-iq-gold bg-iq-tint px-4 font-iq text-[11px] font-medium uppercase tracking-wide text-iq-gold">
          The Future of Dispatch
        </span>

        <h1 className="mt-8 font-iq-display font-semibold text-white">
          <span className="block text-[44px] leading-none sm:text-[64px] lg:text-[76px]">
            Intelligence Meets
          </span>
          <em className="block text-[44px] leading-[1.35] tracking-[-0.04em] text-iq-gold sm:text-[64px] lg:text-[76px]">
            Luxury
          </em>
        </h1>

        <p className="mx-auto mt-2 max-w-[760px] font-iq text-[16px] font-light leading-[1.4] text-iq-body sm:text-[18px]">
          Revolutionize your limousine business with LIMO IQ. AI-powered dispatch, smart lead
          generation, and seamless passenger experiences.
        </p>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-9">
          <a
            href="#contact"
            className="inline-flex h-12 w-full items-center justify-center rounded-md bg-iq-gold px-6 font-iq text-sm font-medium text-iq-deep transition duration-200 ease-out hover:scale-110 hover:brightness-110 sm:w-auto"
          >
            Start Your Free Trial
          </a>
          <a
            href="#features"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-iq-gold px-6 font-iq text-sm font-medium text-iq-gold transition duration-200 ease-out hover:scale-110 hover:bg-iq-gold/10 sm:w-auto"
          >
            View Features
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <a
          href="#features"
          aria-label="Scroll to features"
          className="mx-auto mt-9 flex h-6 w-6 items-center justify-center text-white transition-colors hover:text-iq-gold"
        >
          <ChevronDown className="h-5 w-5" strokeWidth={2.5} />
        </a>
      </div>
    </section>
  );
}

function FeatureCell({ feature, index }: { feature?: Feature; index: number }) {
  const divider =
    index > 0
      ? "border-t border-iq-line md:border-t-0 md:before:absolute md:before:inset-y-0 md:before:-left-[18px] md:before:w-px md:before:bg-iq-line"
      : "";

  if (!feature) {
    return <div aria-hidden className={`relative hidden md:block ${divider}`} />;
  }

  const Icon = feature.icon;
  return (
    <div className={`group relative py-7 text-center md:py-9 md:text-left ${divider}`}>
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-iq-gold/15 text-iq-gold transition duration-200 ease-out group-hover:scale-110 md:mx-0">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <h3 className="mt-3 font-iq-display text-[17px] font-bold text-iq-text">{feature.title}</h3>
      <p className="mx-auto mt-2 max-w-[340px] font-iq text-[13.5px] leading-[1.45] text-iq-muted md:mx-0">
        {feature.description}
      </p>
    </div>
  );
}

function Features() {
  const rows: (Feature | undefined)[][] = [];
  for (let i = 0; i < features.length; i += 3) {
    rows.push([features[i], features[i + 1], features[i + 2]]);
  }

  return (
    <section id="features" className="border-t border-iq-line pb-12 pt-8 sm:pt-10">
      <SectionHeading
        title="Powerful Features"
        subtitle="Everything you need to run a modern livery service, enhanced by artificial intelligence."
      />

      <div className="mt-8 space-y-4">
        {rows.map((row, r) => (
          <div key={r} className="bg-iq-card">
            <div className="iq-container grid md:grid-cols-3 md:gap-x-9">
              {row.map((feature, i) => (
                <FeatureCell key={i} feature={feature} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-t border-iq-line pb-14 pt-8 sm:pt-10">
      <SectionHeading
        lead="Experience the"
        title="Difference"
        subtitle="Take a closer look at the interface designed for efficiency and elegance."
      />
      <div className="iq-container mt-6">
        <TourShowcase />
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="border-t border-iq-line pb-14 pt-8 sm:pt-10">
      <SectionHeading
        lead="Transparent Pricing"
        subtitle="Start with the essentials and add exactly what your business needs. No hidden fees."
      />
      <div className="iq-container mt-8 font-body">
        <CustomPricing />
      </div>
    </section>
  );
}

export default function HomeView() {
  return (
    <>
      <Hero />
      <Features />
      <Experience />
      <PricingSection />
    </>
  );
}
