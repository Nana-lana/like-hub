const bubbles = [
  { size: 140, top: "8%", left: "6%", color: "oklch(0.85 0.09 158)", dur: "13s", delay: "0s" },
  { size: 90, top: "18%", left: "82%", color: "oklch(0.82 0.09 300)", dur: "15s", delay: "1.5s" },
  { size: 200, top: "55%", left: "-4%", color: "oklch(0.86 0.07 300)", dur: "18s", delay: "0.8s" },
  { size: 70, top: "70%", left: "70%", color: "oklch(0.84 0.1 158)", dur: "11s", delay: "2s" },
  { size: 120, top: "78%", left: "35%", color: "oklch(0.83 0.08 260)", dur: "16s", delay: "0.4s" },
  { size: 60, top: "40%", left: "48%", color: "oklch(0.85 0.09 300)", dur: "10s", delay: "1.2s" },
  { size: 110, top: "30%", left: "30%", color: "oklch(0.87 0.07 158)", dur: "14s", delay: "2.4s" },
  { size: 80, top: "60%", left: "90%", color: "oklch(0.82 0.09 300)", dur: "12s", delay: "0.6s" },
]

export function BubblesBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={
            {
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              background: b.color,
              "--dur": b.dur,
              "--delay": b.delay,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
