import { products } from "@/lib/content";

const productLinks = [
  ...products.map((p) => ({ label: p.label, href: `#${p.id}` })),
  { label: "Pricing", href: "#pricing" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-iq-display text-sm font-medium text-iq-text">{title}</h2>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-iq text-[13px] text-iq-muted transition-colors hover:text-iq-gold"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function LandingFooter() {
  return (
    <footer className="border-t border-iq-line">
      <div className="iq-container grid grid-cols-2 gap-x-6 gap-y-8 py-8 md:grid-cols-[2fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="font-iq-display text-[22px] font-bold text-iq-gold">
            LIMO IQ
          </a>
          <p className="mt-2 font-iq text-sm font-light leading-relaxed text-iq-muted">
            The smartest way to manage your livery business.
            <br />
            Combining AI technology with luxury service standards.
          </p>
        </div>
        <LinkColumn title="Product" links={productLinks} />
        <LinkColumn title="Company" links={companyLinks} />
      </div>

      <div className="border-t border-iq-line py-5">
        <p className="iq-container text-center font-iq text-sm font-light text-iq-muted">
          © {new Date().getFullYear()} LIMO IQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
