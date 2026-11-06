import { PageTitle } from "./SectionHeading";
import ProductSlideshow from "./ProductSlideshow";
import { products, type ProductId } from "@/lib/content";

export default function ProductsView({ active }: { active: ProductId }) {
  const product = products.find((p) => p.id === active) ?? products[0];

  return (
    <>
      <PageTitle title="Our Products" subtitle="Everything LIMO IQ, in one place." />

      <div className="iq-container pb-16 pt-6 sm:pt-8">
        <nav aria-label="Products" className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <ul className="flex w-max gap-2">
            {products.map((p) => {
              const Icon = p.icon;
              const isActive = p.id === product.id;
              return (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-flex h-10 items-center gap-2.5 whitespace-nowrap rounded-[9px] px-5 font-iq text-[11.5px] font-medium uppercase tracking-wide transition-colors ${
                      isActive
                        ? "bg-iq-tint text-iq-gold"
                        : "text-iq-slate hover:text-iq-text"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {p.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[400px_1fr] lg:gap-9">
          <div>
            <h2 className="font-iq-display text-lg font-bold text-iq-text">{product.label}</h2>
            <p className="mt-2 font-iq text-[13.5px] leading-[1.45] text-iq-muted">
              {product.lead && (
                <>
                  {product.lead}
                  <br />
                </>
              )}
              {product.description}
            </p>
            <ul className="mt-6 space-y-3">
              {product.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-iq text-[15px] font-light text-iq-text"
                >
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-iq-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ProductSlideshow key={product.id} images={product.images} label={product.label} />
        </div>
      </div>
    </>
  );
}
