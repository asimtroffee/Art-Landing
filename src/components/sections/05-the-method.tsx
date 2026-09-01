import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import { THE_METHOD, SITE } from "@/lib/constants"
import { Pencil, Brain, Lightbulb, Map, Mic, Sparkles, ArrowRight, Check } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"

const TECHNIQUE_META = [
  {
    icon: Pencil,
    color: "#D65108",
    bg: "#FBE7DC",
    tag: "Visual Memory",
    outcome: "Effortless revision through pictures and structure",
  },
  {
    icon: Brain,
    color: "#EFA00B",
    bg: "#FDF3DD",
    tag: "Spaced Retention",
    outcome: "Facts move into permanent long-term memory",
  },
  {
    icon: Lightbulb,
    color: "#361D2E",
    bg: "#E9E0E6",
    tag: "Exam Thinking",
    outcome: "Deep, structured answers that score top marks",
  },
  {
    icon: Map,
    color: "#D65108",
    bg: "#FBE7DC",
    tag: "Topic Synthesis",
    outcome: "Messy chapters become one clear, colourful map",
  },
  {
    icon: Mic,
    color: "#EFA00B",
    bg: "#FDF3DD",
    tag: "Expressive Recall",
    outcome: "Clear articulation, public speaking & zero stage fright",
  },
]

export default function TheMethod() {
  return (
    <section
      id="the-method"
      className="scroll-mt-20 bg-gradient-to-b from-[#FBF5ED] via-white to-[#FBF5ED] py-20 lg:py-28"
    >
      <div className="wrap">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D65108]/20 bg-[#D65108]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] mb-4">
              <Sparkles className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
              {THE_METHOD.kicker}
            </div>
            <h2 className="font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              How AURA{" "}
              <span className="italic text-[#D65108] relative inline-block">
                actually works
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 font-hand text-2xl font-bold text-ink/75">
              Five proven memory superpowers taught step-by-step in live workshops.
            </p>
          </div>
        </Reveal>

        {/* 5 Techniques + 1 Master System Card */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THE_METHOD.techniques.map((tech, i) => {
            const meta = TECHNIQUE_META[i]
            const Icon = meta.icon
            return (
              <Reveal key={tech.num} delay={i * 80} className="h-full">
                <TiltCard maxTilt={4} className="h-full">
                  <article
                    className="group flex h-full flex-col rounded-3xl border-2 bg-white p-7 shadow-[0_8px_30px_rgba(54,29,46,0.06)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(54,29,46,0.12)] hover:-translate-y-1"
                    style={{ borderColor: `${meta.color}25` }}
                  >
                    {/* Header with pill tag & icon */}
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="flex h-13 w-13 items-center justify-center rounded-2xl text-white font-heading text-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{ background: meta.color }}
                      >
                        0{tech.num}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider"
                        style={{ background: meta.bg, color: meta.color }}
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                        {meta.tag}
                      </span>
                    </div>

                    {/* Technique title */}
                    <h3 className="mt-5 font-heading text-2xl font-extrabold leading-tight text-ink sm:text-[1.6rem]">
                      {tech.title}
                    </h3>

                    {/* Parent-friendly body */}
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/75 font-semibold">
                      {tech.body}
                    </p>

                    {/* Child benefit chip */}
                    <div className="mt-6 pt-4 border-t border-[#E5D7C9] flex items-start gap-2 text-xs font-extrabold text-[#D65108]">
                      <Check className="h-4 w-4 shrink-0 mt-0.5" strokeWidth={3} />
                      <span>{meta.outcome}</span>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            )
          })}

          {/* 6th Card: Master System Showcase */}
          <Reveal delay={450} className="h-full sm:col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-between rounded-3xl gradient-mesh-orange p-8 text-white shadow-xl">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 mb-5 shadow-inner">
                  <Brain className="h-8 w-8 text-[#EFA00B]" strokeWidth={2.2} />
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#EFA00B]">
                  Complete Toolkit
                </span>
                <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                  One simple system for every subject.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90 font-medium">
                  Five skills that build on each other. By the end of the workshops, your child has an intuitive memory routine for life.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <CtaLink
                  href={SITE.joinUrl}
                  ctaId="method_join"
                  className="btn-primary w-full justify-center bg-[#EFA00B] !text-[#361D2E] font-black text-sm py-3.5 shadow-lg hover:bg-white transition-all"
                >
                  Join the Free Workshops
                  <ArrowRight className="h-4 w-4" strokeWidth={2.75} />
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
