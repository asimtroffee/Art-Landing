import { BadgeCheck, Brain, HandCoins } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import { FACILITATORS } from "@/lib/constants"

const PILLAR_ICONS = {
  cost: HandCoins,
  trust: BadgeCheck,
  competence: Brain,
}

export default function Facilitators() {
  return (
    <section id="facilitators" className="scroll-mt-20 py-20 lg:py-28 bg-white">
      <div className="wrap">
        <Reveal>
          <div className="max-w-3xl">
            <p className="kicker">{FACILITATORS.kicker}</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              {FACILITATORS.headline.split(" ").slice(0, -3).join(" ")}{" "}
              <span className="wavy-underline inline-block">
                {FACILITATORS.headline.split(" ").slice(-3).join(" ")}
              </span>
            </h2>
            <p className="mt-4 text-lg text-ink/70">{FACILITATORS.subheadline}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {FACILITATORS.pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[p.doubt as keyof typeof PILLAR_ICONS]
            return (
              <Reveal key={p.title} delay={i * 110} className="h-full">
                <div className="sketch-card flex h-full flex-col items-start p-8 bg-[#F8FAFC]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cobalt-soft text-cobalt">
                    <Icon className="h-7 w-7" strokeWidth={2.25} />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-extrabold text-ink">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{p.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
