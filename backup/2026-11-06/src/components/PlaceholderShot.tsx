type Props = {
  label: string;
  aspect?: string; // tailwind aspect-ratio class
};

/**
 * Temporary placeholder for a product screenshot.
 * Swap the parent's <PlaceholderShot /> for a real <img> or <video>
 * once final marketing screenshots are ready — see README.
 */
export default function PlaceholderShot({ label, aspect = "aspect-[4/3]" }: Props) {
  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-panelLine bg-ink/40`}
    >
      <div className="flex flex-col items-center gap-2 px-6 text-center">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-slate/50"
        >
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 15l4.5-4 3 3 4-5L21 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="8" cy="8.5" r="1.25" fill="currentColor" />
        </svg>
        <span className="text-xs font-medium text-slate/70">{label}</span>
        <span className="text-[10px] uppercase tracking-wide text-slate/40">
          Real screenshot coming soon
        </span>
      </div>
    </div>
  );
}
