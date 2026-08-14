import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PlatformTabs from "@/components/PlatformTabs";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <About />
            <Suspense fallback={null}>
                <PlatformTabs
                    id="platform"
                    eyebrow="The platform"
                    heading="Everything an operator needs, none of what gets in the way."
                    intro={
                        <>
                            See{" "}
                            <a href="/#pricing" className="text-brass underline underline-offset-4">
                                full pricing
                            </a>{" "}
                            for a side-by-side breakdown.
                        </>
                    }
                    outro
                    collapseFeaturesAt={5}
                />
            </Suspense>
            <Pricing />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
}
