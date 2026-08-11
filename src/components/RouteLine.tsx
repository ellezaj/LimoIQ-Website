export default function RouteLine() {
  return (
    <svg
      viewBox="0 0 640 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xl"
      role="img"
      aria-label="Animated route line showing a live vehicle tracking from pickup to drop-off"
    >
      <path
        id="route-path"
        d="M40 260 C 140 260, 150 120, 260 120 S 380 40, 460 60 S 560 180, 600 100"
        stroke="#223049"
        strokeWidth="2"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
      <path
        d="M40 260 C 140 260, 150 120, 260 120 S 380 40, 460 60 S 560 180, 600 100"
        stroke="#C89B3C"
        strokeWidth="2"
        strokeDasharray="6 999"
        strokeLinecap="round"
        opacity="0.9"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 999;520 999"
          dur="3.2s"
          begin="0.2s"
          fill="freeze"
        />
      </path>

      {/* pickup marker */}
      <circle cx="40" cy="260" r="6" fill="#F5F3EC" />
      <circle cx="40" cy="260" r="10" stroke="#8B93A7" strokeWidth="1" opacity="0.5" />

      {/* drop-off marker */}
      <circle cx="600" cy="100" r="6" fill="#C89B3C" />
      <circle cx="600" cy="100" r="10" stroke="#C89B3C" strokeWidth="1" opacity="0.5" />

      {/* moving vehicle dot */}
      <circle r="5" fill="#C89B3C">
        <animateMotion
          dur="3.2s"
          begin="0.2s"
          fill="freeze"
          path="M40 260 C 140 260, 150 120, 260 120 S 380 40, 460 60 S 560 180, 600 100"
        />
      </circle>
    </svg>
  );
}
