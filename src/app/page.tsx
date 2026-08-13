import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Platform from "@/components/Platform";
import ProductTour from "@/components/ProductTour";
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
            <Suspense fallback={<div className="border-t border-panelLine/60 bg-panel py-20 md:py-28" /> }>
                <PlatformTabs
                    id="platform"
                    eyebrow="The platform"
                    heading="Everything an operator needs, none of what gets in the way."
                    intro={
                        <>
                            See <a href="/#pricing" className="text-brass underline underline-offset-4">full pricing</a>{" "} for side-by-side breakdown.
                        </>
                    }
                    outro
                />
            </Suspense>
            <Pricing />
            {/* <FAQ /> */}
            <Contact />
            <Footer />
        </main>
    );
}
