import Reveal from "@/components/ui/reveal"
import { THE_PROBLEM } from "@/lib/constants"
import { AlertTriangle, BookOpen, HelpCircle, Brain, Sparkles, TrendingDown } from "lucide-react"

const PROBLEM_STEPS = [
  {
    icon: BookOpen,
    tag: "Phase 1: The Long Night",
    title: "Surrounded by notes for hours",
    body: "They read. They re-read until the words blur together. They put in the hard work and tell you: \"I've got this.\"",
    color: "#D65108",
    bg: "#FBE7DC",
  },
  {
    icon: HelpCircle,
    tag: "Phase 2: The Exam Day Shock",
    title: "Then the exam paper arrives...",
    body: "...and it feels like they never studied at all. The mind goes blank, panic sets in, and hard-earned confidence vanishes.",
    color: "#B34407",
    bg: "#FBE7DC",
  },
  {
    icon: Brain,
    tag: "Phase 3: The True Realization",
    title: "It's not about being 'smart enough'",
    body: "Schools teach children WHAT to learn, but never HOW to remember it. Cramming gives an illusion of knowing, then fades fast.",
    color: "#361D2E",
    bg: "#E9E0E6",
  },
]

export default function TheProblem() {
  return (
    <section
      id="the-problem"
      className="scroll-mt-20 bg-[#FBF5ED] py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background soft ambient shapes */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#D65108]/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#EFA00B]/10 blur-3xl pointer-events-none" />

      <div className="wrap max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D65108]/20 bg-[#D65108]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] mb-4">
              <AlertTriangle className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
              {THE_PROBLEM.kicker}
            </div>
            <h2 className="font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Every parent{" "}
              <span className="italic text-[#D65108] relative inline-block">
                recognizes this.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 font-hand text-2xl font-bold text-ink/75">
              You&apos;ve seen it happen. This isn&apos;t a lack of effort — it&apos;s a missing skill.
            </p>
          </div>
        </Reveal>

        {/* 3-Phase Story Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROBLEM_STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.tag} delay={i * 100} className="h-full">
                <div className="sketch-card flex h-full flex-col p-7 bg-white border border-[#E5D7C9] relative transition-transform duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm"
                      style={{ background: step.bg }}
                    >
                      <Icon className="h-6 w-6" style={{ color: step.color }} strokeWidth={2.25} />
                    </span>
                    <span className="rounded-full bg-[#FBF5ED] border border-[#E5D7C9] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-ink/60">
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-extrabold text-ink leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/70 font-semibold flex-1">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* The Forgetting Curve Infographic Card */}
        <Reveal delay={350}>
          <div className="mt-12 rounded-3xl border-2 border-[#D65108]/20 bg-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              {/* Left explanation */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#D65108]/10 px-3.5 py-1 text-xs font-extrabold text-[#D65108]">
                  <TrendingDown className="h-4 w-4" />
                  Cognitive Science Insight
                </div>
                <h3 className="font-heading text-3xl font-extrabold text-ink sm:text-4xl leading-tight">
                  The Forgetting Curve: Why cramming always fails
                </h3>
                <p className="text-[15px] leading-relaxed text-ink/75 font-semibold">
                  Without visual anchors and spaced recall, the brain treats text-heavy notes as temporary data. Up to{" "}
                  <strong className="text-[#D65108]">75% of crammed facts vanish within 48 hours</strong>.
                </p>
                <div className="rounded-2xl bg-[#FBF5ED] border border-[#E5D7C9] p-4 text-sm font-bold text-ink/80 flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-[#EFA00B] shrink-0" />
                  <span>
                    AURA replaces rote memorization with <strong className="text-[#D65108]">active dual-coding</strong> so knowledge stays locked for life.
                  </span>
                </div>
              </div>

              {/* Right Chart Visualization */}
              <div className="lg:col-span-6 rounded-2xl bg-[#361D2E] p-6 text-white shadow-inner">
                <div className="flex items-center justify-between text-xs font-bold text-white/70 mb-4 pb-2 border-b border-white/10">
                  <span className="text-white font-extrabold">Memory Retention Rate</span>
                  <span className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-[#EFA00B]">
                      <span className="h-2 w-2 rounded-full bg-[#EFA00B]" /> With AURA
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-white/50">
                      <span className="h-2 w-2 rounded-full bg-[#D65108]" /> Traditional Cramming
                    </span>
                  </span>
                </div>

                <div className="relative h-44 w-full">
                  <svg viewBox="0 0 500 160" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.08)" strokeDasharray="3" />
                    <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(255,255,255,0.08)" strokeDasharray="3" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.08)" strokeDasharray="3" />

                    {/* Traditional Cramming Curve (Steep drop) */}
                    <path
                      d="M 10 20 C 60 40, 120 120, 250 135 C 360 145, 440 148, 490 150"
                      fill="none"
                      stroke="#D65108"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* AURA Spaced Curve (High retention with reinforcement bumps) */}
                    <path
                      d="M 10 20 C 80 22, 120 15, 160 18 C 220 16, 280 20, 360 22 C 430 20, 470 22, 490 24"
                      fill="none"
                      stroke="#EFA00B"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* High retention annotation */}
                    <circle cx="490" cy="24" r="5" fill="#EFA00B" />
                    <text x="385" y="45" fill="#EFA00B" fontSize="11" fontWeight="800">
                      90%+ Retained
                    </text>

                    {/* Lost annotation */}
                    <circle cx="490" cy="150" r="5" fill="#D65108" />
                    <text x="395" y="142" fill="#D65108" fontSize="11" fontWeight="800">
                      20% Left (Lost)
                    </text>
                  </svg>
                </div>

                <div className="mt-3 flex justify-between text-[11px] font-bold text-white/50 border-t border-white/10 pt-2">
                  <span>Day 0 (Exam Prep)</span>
                  <span>Day 1</span>
                  <span>Day 3</span>
                  <span>Week 2</span>
                  <span>Exam Day</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
