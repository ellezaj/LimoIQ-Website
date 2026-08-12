/**
 * Live-tracking illustration for the hero.
 * Redesigned to be self-explanatory: a labeled mini map card showing a
 * vehicle moving from Pickup to Drop-off, with a "Live" status chip —
 * rather than an unlabeled abstract line.
 */
export default function RouteLine() {
  return (
    <svg
      viewBox="0 0 480 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md"
      role="img"
      aria-label="Live tracking preview: a map card showing a vehicle en route from pickup to drop-off, with an ETA of 12 minutes"
    >
      {/* card background */}
      <rect x="1" y="1" width="478" height="358" rx="20" fill="#121D30" stroke="#223049" strokeWidth="1" />

      {/* header bar: live status + eta */}
      <circle cx="34" cy="34" r="4" fill="#C89B3C">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
      </circle>
      <text x="46" y="38" fontSize="13" fontWeight="600" fill="#F5F3EC" fontFamily="system-ui, sans-serif">
        Live Tracking
      </text>
      <rect x="382" y="22" width="76" height="24" rx="12" fill="#0B1220" stroke="#223049" />
      <text x="420" y="38" fontSize="11" fill="#8B93A7" fontFamily="system-ui, sans-serif" textAnchor="middle">
        ETA 12 min
      </text>

      {/* map surface */}
      <rect x="24" y="66" width="432" height="248" rx="14" fill="#0B1220" />

      {/* road path */}
      <path
        d="M64 280 C 140 280, 150 180, 230 180 S 340 110, 420 130"
        stroke="#223049"
        strokeWidth="3"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
      <path
        d="M64 280 C 140 280, 150 180, 230 180 S 340 110, 420 130"
        stroke="#C89B3C"
        strokeWidth="3"
        strokeDasharray="6 999"
        strokeLinecap="round"
        opacity="0.9"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 999;420 999"
          dur="3s"
          begin="0.3s"
          fill="freeze"
        />
      </path>

      {/* pickup marker + label */}
      <circle cx="64" cy="280" r="6" fill="#F5F3EC" />
      <circle cx="64" cy="280" r="11" stroke="#8B93A7" strokeWidth="1" opacity="0.5" />
      <text x="64" y="304" fontSize="11" fill="#8B93A7" fontFamily="system-ui, sans-serif" textAnchor="middle">
        Pickup
      </text>

      {/* drop-off marker + label */}
      <circle cx="420" cy="130" r="6" fill="#C89B3C" />
      <circle cx="420" cy="130" r="11" stroke="#C89B3C" strokeWidth="1" opacity="0.5" />
      <text x="420" y="112" fontSize="11" fill="#C89B3C" fontFamily="system-ui, sans-serif" textAnchor="middle">
        Drop-off
      </text>

      {/* moving vehicle */}
      <g>
        <animateMotion
          dur="3s"
          begin="0.3s"
          fill="freeze"
          path="M64 280 C 140 280, 150 180, 230 180 S 340 110, 420 130"
        />
        <circle r="9" fill="#0B1220" stroke="#C89B3C" strokeWidth="2" />
        <circle r="3" fill="#C89B3C" />
      </g>

      {/* footer caption */}
      <text x="240" y="342" fontSize="11" fill="#8B93A7" fontFamily="system-ui, sans-serif" textAnchor="middle">
        Chauffeur en route — updates every few seconds
      </text>
    </svg>
  );
}
