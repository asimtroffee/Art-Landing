import { Sparkles } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import { TRUST_STRIP } from "@/lib/constants"

export default function TrustStrip() {
  return (
    <section aria-label="Trust signals" className="border-b border-line bg-paper-deep">
      <div className="wrap py-10 sm:py-12">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <Sparkles className="h-5 w-5 text-[#EFA00B]" strokeWidth={2.5} />
            <p className="font-hand text-2xl font-bold text-cobalt sm:text-3xl">{TRUST_STRIP.band}</p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {TRUST_STRIP.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="text-center">
                <p className="font-heading text-4xl font-black text-ink lg:text-5xl">{stat.value}</p>
                <p className="mt-1 text-sm font-extrabold uppercase tracking-wider text-ink/55">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}