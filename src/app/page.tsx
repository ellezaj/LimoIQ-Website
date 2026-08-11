import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Platform from "@/components/Platform";
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
            <Platform />
            <Pricing />
            {/* <FAQ /> */}
            <Contact />
            <Footer />
        </main>
    );
}
