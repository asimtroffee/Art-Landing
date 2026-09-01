import Image from "next/image"
import { BadgeCheck, Brain, HandCoins, ShieldCheck } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import { TRUST } from "@/lib/constants"

const PILLAR_ICONS = [HandCoins, BadgeCheck, Brain]
const PILLAR_TAGS = ["Zero Risk", "Trusted Educator", "Champion Science"]
const PILLAR_COLORS = ["#D65108", "#EFA00B", "#361D2E"]

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
              <span className="relative inline-block pb-2 sm:pb-3 text-[#D65108]">
                trust AURA
                <svg
                  className="absolute bottom-0 left-0 w-full h-2.5 sm:h-3.5 pointer-events-none"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 font-hand text-2xl font-bold text-ink/75">
              Clear answers to the three questions every thoughtful parent asks.
            </p>
          </div>
        </Reveal>

        {/* 3 Trust Pillars with Photos */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TRUST.pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[i]
            const tag = PILLAR_TAGS[i]
            const color = PILLAR_COLORS[i]
            return (
              <Reveal key={p.title} delay={i * 110} className="h-full">
                <TiltCard maxTilt={4} className="h-full">
                  <div className="sketch-card flex h-full flex-col overflow-hidden rounded-3xl bg-[#FAF8F5] border-2 border-[#E5D7C9] transition-all duration-300 hover:border-[#D65108]/40 hover:shadow-2xl">
                    {/* Photo Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={p.photo}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                      <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-black uppercase tracking-wider text-[#361D2E] shadow-sm">
                        {tag}
                      </span>
                      <span
                        className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md"
                        style={{ background: color }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2.5} />
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-2xl font-extrabold text-ink leading-tight">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-ink/75 font-semibold">
                          {p.body}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#E5D7C9] flex items-center justify-between text-xs font-bold text-[#D65108]">
                        <span>Verified by Troffee Education</span>
                        <BadgeCheck className="h-4 w-4" />
                      </div>
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
