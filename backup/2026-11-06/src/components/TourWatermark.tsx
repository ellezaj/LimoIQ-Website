const positions = [
  { top: "-4%", left: "-6%", rotate: -10 },
  { top: "-6%", left: "34%", rotate: -8 },
  { top: "2%", left: "74%", rotate: -12 },
  { top: "30%", left: "-8%", rotate: -9 },
  { top: "34%", left: "36%", rotate: -10 },
  { top: "28%", left: "78%", rotate: -8 },
  { top: "64%", left: "-6%", rotate: -11 },
  { top: "68%", left: "34%", rotate: -9 },
  { top: "62%", left: "76%", rotate: -10 },
];

export default function TourWatermark() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {positions.map((p, i) => (
        <span
          key={i}
          className="absolute select-none whitespace-nowrap font-display text-[9rem] font-semibold leading-none md:text-[11rem]"
          style={{
            top: p.top,
            left: p.left,
            transform: `rotate(${p.rotate}deg)`,
            color: "transparent",
            WebkitTextStroke: "1px rgba(200,155,60,0.14)",
          }}
        >
          LIMO
        </span>
      ))}
    </div>
  );
}
