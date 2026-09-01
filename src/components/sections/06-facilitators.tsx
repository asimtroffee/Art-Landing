import { BadgeCheck, Brain, HandCoins, Sparkles, ShieldCheck } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import { TRUST } from "@/lib/constants"

const PILLAR_META = [
  {
    icon: HandCoins,
    color: "#D65108",
    bg: "#FBE7DC",
    tag: "Zero Risk",
    stat: "100% Free",
    statSub: "All 5 live sessions",
  },
  {
    icon: BadgeCheck,
    color: "#EFA00B",
    bg: "#FDF3DD",
    tag: "Trusted Educator",
    stat: "Troffee Education",
    statSub: "Pioneering learning how to learn",
  },
  {
    icon: Brain,
    color: "#361D2E",
    bg: "#E9E0E6",
    tag: "Evidence Backed",
    stat: "Memory Science",
    statSub: "Dual-coding & spaced recall",
  },
]

export default function TrustSection() {
  return (
    <section id="trust" className="scroll-mt-20 py-20 lg:py-28 bg-white relative">
      <div className="wrap">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D65108]/20 bg-[#D65108]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] mb-4">
              <ShieldCheck className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
              {TRUST.kicker}
            </div>
            <h2 className="font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Why parents{" "}
              <span className="relative inline-block text-[#D65108]">
                choose AURA
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 font-hand text-2xl font-bold text-ink/75">
              Clear answers to the three questions every thoughtful parent asks.
            </p>
          </div>
        </Reveal>

        {/* 3 Trust Pillars */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TRUST.pillars.map((p, i) => {
            const meta = PILLAR_META[i]
            const Icon = meta.icon
            return (
              <Reveal key={p.title} delay={i * 110} className="h-full">
                <TiltCard maxTilt={4} className="h-full">
                  <div className="sketch-card flex h-full flex-col justify-between p-8 bg-[#FAF8F5] border-2 border-[#E5D7C9] transition-all duration-300 hover:border-[#D65108]/40 hover:shadow-xl">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <span
                          className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                          style={{ background: meta.bg }}
                        >
                          <Icon className="h-7 w-7" style={{ color: meta.color }} strokeWidth={2.25} />
                        </span>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-wider text-ink/60 border border-[#E5D7C9]">
                          {meta.tag}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl font-extrabold text-ink leading-tight">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-ink/75 font-semibold">
                        {p.body}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-[#E5D7C9]">
                      <p className="font-heading text-xl font-black text-ink">{meta.stat}</p>
                      <p className="text-xs font-semibold text-ink/60">{meta.statSub}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
