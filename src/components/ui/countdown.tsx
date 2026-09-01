"use client"

import { useEffect, useState } from "react"

type CountdownProps = {
  target: string
  title?: string
  variant?: "light" | "dark"
}

function diffTo(target: string, now: number) {
  const delta = new Date(target).getTime() - now
  if (delta <= 0) return null
  const s = Math.floor(delta / 1000)
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  }
}

function pad(n: number) {
  return n.toString().padStart(2, "0")
}

export default function Countdown({ target, title, variant = "light" }: CountdownProps) {
  const [now, setNow] = useState(() => Date.now())
  const t = diffTo(target, now)

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const dark = variant === "dark"
  const tile = dark
    ? "rounded-xl bg-white/10 border border-white/20 text-white"
    : "rounded-xl bg-white/90 border border-line text-ink shadow-md"
  const tileNum = dark ? "text-white" : "text-ink"
  const tileLabel = dark ? "text-white/60" : "text-ink/50"

  return (
    <div>
      {title && (
        <p className={`font-heading text-base font-extrabold ${dark ? "text-white/90" : "text-ink"}`}>
          {title}
        </p>
      )}
      {t ? (
        <div className="mt-2.5 inline-flex items-center gap-2">
          {[
            { v: t.days, l: "days" },
            { v: t.hours, l: "hrs" },
            { v: t.minutes, l: "min" },
            { v: t.seconds, l: "sec" },
          ].map((unit) => (
            <div
              key={unit.l}
              className={`flex min-w-[3.5rem] flex-col items-center rounded-xl px-3 py-2 backdrop-blur-sm ${tile}`}
            >
              <span className={`font-heading text-2xl font-black leading-none tabular-nums ${tileNum}`}>
                {pad(unit.v)}
              </span>
              <span className={`mt-1 text-[10px] font-bold uppercase tracking-wider ${tileLabel}`}>
                {unit.l}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className={`mt-2 font-heading text-lg font-extrabold ${dark ? "text-[#EFA00B]" : "text-tangerine"}`}>
          Happening now!
        </p>
      )}
    </div>
  )
}
