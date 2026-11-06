import { PageTitle } from "./SectionHeading";
import ContactForm from "./ContactForm";
import { aboutParagraphs, legalLastUpdated, type LegalSection } from "@/lib/content";

export function AboutView() {
  return (
    <>
      <PageTitle
        title="About Us"
        subtitle="We are the most popular limousine service in Boston."
      />
      <div className="iq-container py-12 sm:py-14">
        <div className="space-y-5 font-iq text-[14px] leading-[1.6] text-iq-muted">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export function ContactView() {
  return (
    <>
      <PageTitle
        title="Contact Us"
        subtitle="We'd love to hear from you — whether it's feedback on a past ride or a special request for an upcoming trip."
      />
      <div className="iq-container py-12 sm:py-14">
        <ContactForm />
      </div>
    </>
  );
}

export function LegalView({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <>
      <PageTitle title={title} />
      <div className="iq-container py-12 sm:py-14">
        <div className="mx-auto max-w-3xl space-y-6 font-iq">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-[16px] font-medium text-iq-text">{s.heading}</h2>
              <p className="mt-1.5 text-[15px] font-light leading-[1.6] text-iq-body">{s.body}</p>
            </div>
          ))}
          <p className="pt-4 text-sm font-light text-iq-muted">Last updated: {legalLastUpdated}</p>
        </div>
      </div>
    </>
  );
}
