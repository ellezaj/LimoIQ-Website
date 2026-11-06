import LandingShell from "@/components/LandingShell";
import LandingHeader from "@/components/LandingHeader";
import LandingFooter from "@/components/LandingFooter";
import HomeView from "@/components/HomeView";
import ProductsView from "@/components/ProductsView";
import { AboutView, ContactView, LegalView } from "@/components/InfoViews";
import { privacySections, termsSections } from "@/lib/content";

export default function Home() {
  return (
    <LandingShell
      header={<LandingHeader />}
      footer={<LandingFooter />}
      views={{
        home: <HomeView />,
        customer: <ProductsView active="customer" />,
        driver: <ProductsView active="driver" />,
        admin: <ProductsView active="admin" />,
        dispatch: <ProductsView active="dispatch" />,
        addons: <ProductsView active="addons" />,
        about: <AboutView />,
        contact: <ContactView />,
        privacy: <LegalView title="Privacy Policy" sections={privacySections} />,
        terms: <LegalView title="Terms & Conditions" sections={termsSections} />,
      }}
    />
  );
}
