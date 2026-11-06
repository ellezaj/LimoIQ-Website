import type { ReactNode } from "react";

type Props = {
  /** Words rendered in white before the gold part of the title. */
  lead?: string;
  /** Words rendered in gold. */
  title?: string;
  subtitle?: ReactNode;
  as?: "h1" | "h2";
};

export default function SectionHeading({ lead, title, subtitle, as: Tag = "h2" }: Props) {
  return (
    <div className="iq-container text-center">
      <Tag className="font-iq-display text-[34px] font-semibold leading-[1.3] tracking-[-0.05em] text-iq-gold sm:text-[44px] lg:text-[48px]">
        {lead && <span className="text-white">{lead}</span>}
        {lead && title ? " " : null}
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-1 font-iq text-[14px] font-light text-iq-muted sm:text-[15px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageTitle({ title, subtitle }: { title: string; subtitle?: ReactNode }) {
  return (
    <div className="border-b border-iq-line py-6 sm:py-7">
      <SectionHeading as="h1" title={title} subtitle={subtitle} />
    </div>
  );
}
