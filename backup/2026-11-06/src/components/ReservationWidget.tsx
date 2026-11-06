/**
 * Static visual only — no state, no handlers. Purely a homepage display
 * element modeled on the reservation flow. Wire up real interactivity
 * later if this becomes a functional booking form.
 */
export default function ReservationWidget() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-graphite/10 bg-cream p-5 text-ink shadow-2xl shadow-black/30">
      {/* Trip type tabs */}
      <div className="grid grid-cols-3 gap-1 rounded-full bg-paper p-1">
        <span className="rounded-full bg-brass px-3 py-2 text-center text-xs font-semibold text-ink">
          One-way
        </span>
        <span className="rounded-full px-3 py-2 text-center text-xs font-medium text-graphite">
          Round Trip
        </span>
        <span className="rounded-full px-3 py-2 text-center text-xs font-medium text-graphite">
          Hourly
        </span>
      </div>

      {/* Date & time */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-graphite/15 bg-white px-3 py-2.5">
          <CalendarIcon />
          <span className="text-xs text-graphite/70">Date</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-graphite/15 bg-white px-3 py-2.5">
          <ClockIcon />
          <span className="text-xs text-graphite/70">Time</span>
        </div>
      </div>

      {/* Pickup */}
      <div className="mt-4 rounded-xl border border-graphite/10 bg-white p-4">
        <p className="text-xs font-semibold text-ink">Pickup Location</p>
        <div className="mt-2.5 inline-flex rounded-full bg-paper p-1">
          <span className="rounded-full bg-brass px-3 py-1.5 text-[11px] font-semibold text-ink">
            Address
          </span>
          <span className="rounded-full px-3 py-1.5 text-[11px] font-medium text-graphite">
            Airport
          </span>
        </div>
        <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-graphite/15 bg-white px-3 py-2.5">
          <PinIcon />
          <span className="text-xs text-graphite/50">
            Enter street address, place, or airport
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-[11px] font-medium text-brass">
          <span className="h-px flex-1 bg-graphite/10" />
          <span>+ Add Stop</span>
          <span className="h-px flex-1 bg-graphite/10" />
        </div>

        <p className="mt-3 text-xs font-semibold text-ink">Drop-off Location</p>
        <div className="mt-2.5 inline-flex rounded-full bg-paper p-1">
          <span className="rounded-full bg-brass px-3 py-1.5 text-[11px] font-semibold text-ink">
            Address
          </span>
          <span className="rounded-full px-3 py-1.5 text-[11px] font-medium text-graphite">
            Airport
          </span>
        </div>
        <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-graphite/15 bg-white px-3 py-2.5">
          <PinIcon />
          <span className="text-xs text-graphite/50">
            Enter street address, place, or airport
          </span>
        </div>
      </div>

      {/* Phone */}
      <div className="mt-4">
        <p className="text-xs font-semibold text-ink">Your Phone Number</p>
        <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-graphite/15 bg-white px-3 py-2.5">
          <span className="text-xs text-graphite/70">
            <svg viewBox="0 0 7410 3900" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
                <path stroke="#fff" stroke-width="300" d="M0 450h7410M0 1050h7410M0 1650h7410M0 2250h7410M0 2850h7410M0 3450h7410"></path>
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
            </svg> 
          </span>
          <span className="text-xs text-graphite/50">+1</span>
          <span className="h-4 w-px bg-graphite/15" />
          <span className="text-xs text-graphite/50">(555) 555-5555</span>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 rounded-lg bg-brass py-3 text-center text-xs font-semibold text-ink">
        Continue to Vehicle Selection
      </div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-brass">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-brass">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-brass">
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 105 9.5C5 14.8 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
