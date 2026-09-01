import Image from "next/image"
import Reveal from "@/components/ui/reveal"
import { THE_PROBLEM } from "@/lib/constants"
import { AlertTriangle, Sparkles, TrendingDown, Clock, BookOpen, FileQuestion, HelpCircle, CheckCircle2 } from "lucide-react"

const STRUGGLE_NOTES = [
  {
    time: "11:30 PM — The Night Before",
    title: "Surrounded by notes & highlighters",
    quote: "“They read. They re-read until the words blur. They tell you, ‘I know this.’”",
    photo: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Student studying late at night surrounded by notes",
    rotation: "-rotate-1",
    tag: "Phase 1: The Long Night",
    tagColor: "#D65108",
  },
  {
    time: "The Next Morning — 8:45 AM",
    title: "The False Sense of Security",
    quote: "“Cramming feels like studying, but it only sits in temporary working memory.”",
    photo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Student holding head trying to remember notes",
    rotation: "rotate-1",
    tag: "Phase 2: The Illusion",
    tagColor: "#B34407",
  },
  {
    time: "Exam Room — 9:15 AM",
    title: "The Exam Blank-Out",
    quote: "“The exam is in front of them — and it feels like they never studied at all.”",
    photo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Student struggling with exam question",
    rotation: "-rotate-2",
    tag: "Phase 3: The Blank",
    tagColor: "#361D2E",
  },
]

export default function TheProblem() {
  return (
    <section
      id="the-problem"
      className="scroll-mt-20 bg-[#FBF5ED] py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background ambient decorative shapes */}
      <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-[#D65108]/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-[#EFA00B]/10 blur-3xl pointer-events-none" />

      <div className="wrap max-w-6xl mx-auto relative z-10">
        
        {/* ════════ Header ════════ */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D65108]/20 bg-[#D65108]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] mb-4 shadow-sm">
              <AlertTriangle className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
              {THE_PROBLEM.kicker}
            </div>
            <p className="font-hand text-3xl sm:text-4xl font-bold text-[#D65108] mb-2">
              {THE_PROBLEM.eyebrow}
            </p>
            <h2 className="font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.3rem] lg:leading-[1.1]">
              <span className="block">{THE_PROBLEM.headlineTop}</span>
              <span className="relative inline-block mt-2 pb-3 sm:pb-4 italic text-[#D65108]">
                {THE_PROBLEM.headlineAccent}
                <svg
                  className="absolute bottom-0 left-0 w-full h-3 sm:h-4 pointer-events-none"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>
        </Reveal>

        {/* ════════ 3 Polaroid / Note Cards: The Struggling Student Journey ════════ */}
        <div className="mt-14 grid gap-8 md:grid-cols-3 items-stretch">
          {STRUGGLE_NOTES.map((note, i) => (
            <Reveal key={note.title} delay={i * 100} className="h-full">
              <div
                className={`group flex h-full flex-col overflow-hidden rounded-3xl border-2 border-[#E5D7C9] bg-white p-4 shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:rotate-0 ${note.rotation}`}
              >
                {/* Visual Polaroid Photo with Pin/Tape Header */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black/5">
                  <Image
                    src={note.photo}
                    alt={note.photoAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  
                  {/* Phase pill */}
                  <span
                    className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md"
                    style={{ background: note.tagColor }}
                  >
                    {note.tag}
                  </span>

                  {/* Time chip */}
                  <span className="absolute bottom-3 left-3 right-3 text-xs font-extrabold text-white/90 drop-shadow flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#EFA00B]" />
                    {note.time}
                  </span>
                </div>

                {/* Note Description */}
                <div className="p-4 flex flex-1 flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-heading text-xl font-extrabold text-ink leading-tight">
                      {note.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-ink/75 leading-relaxed italic">
                      {note.quote}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ════════ Empathetic Insight Callout Box ════════ */}
        <Reveal delay={250}>
          <div className="mt-12 rounded-3xl border-2 border-[#EFA00B]/40 bg-white p-8 sm:p-10 shadow-lg text-center max-w-4xl mx-auto relative overflow-hidden">
            <p className="font-hand text-3xl sm:text-4xl font-bold text-[#D65108] leading-snug">
              &ldquo;{THE_PROBLEM.reassurance}&rdquo;
            </p>
            <p className="mt-4 text-base sm:text-lg font-bold text-ink/80 leading-relaxed max-w-2xl mx-auto">
              {THE_PROBLEM.rootCause}
            </p>
          </div>
        </Reveal>

        {/* ════════ Master Forgetting Curve Visual Infographic ════════ */}
        <Reveal delay={350}>
          <div className="mt-12 rounded-3xl border-2 border-[#D65108]/30 bg-[#1E0E1A] p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
            
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-white/15">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#D65108]/20 px-3.5 py-1 text-xs font-black text-[#EFA00B] mb-2 border border-[#EFA00B]/30">
                  <TrendingDown className="h-4 w-4 text-[#EFA00B]" />
                  Cognitive Science Blueprint
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  The Forgetting Curve: Why cramming always disappears
                </h3>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold bg-white/10 px-4 py-2 rounded-2xl border border-white/15">
                <span className="inline-flex items-center gap-2 text-[#EFA00B]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#EFA00B] shadow-[0_0_8px_#EFA00B]" />
                  With AURA (Spaced &amp; Visual)
                </span>
                <span className="inline-flex items-center gap-2 text-red-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#EF4444]" />
                  Traditional Cramming
                </span>
              </div>
            </div>

            {/* SVG Chart */}
            <div className="relative mt-8 h-56 sm:h-64 w-full">
              <svg viewBox="0 0 600 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                {/* Horizontal Guide Lines */}
                <line x1="0" y1="20" x2="600" y2="20" stroke="rgba(255,255,255,0.08)" strokeDasharray="3" />
                <line x1="0" y1="65" x2="600" y2="65" stroke="rgba(255,255,255,0.08)" strokeDasharray="3" />
                <line x1="0" y1="110" x2="600" y2="110" stroke="rgba(255,255,255,0.08)" strokeDasharray="3" />
                <line x1="0" y1="155" x2="600" y2="155" stroke="rgba(255,255,255,0.08)" strokeDasharray="3" />

                {/* Shaded Area under Cramming Decay */}
                <path
                  d="M 10 25 C 70 45, 140 140, 260 165 C 380 180, 520 185, 590 190 L 590 200 L 10 200 Z"
                  fill="rgba(239, 68, 68, 0.08)"
                />

                {/* 1. Traditional Cramming Curve (Steep Collapse) */}
                <path
                  d="M 10 25 C 70 45, 140 140, 260 165 C 380 180, 520 185, 590 190"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* 2. AURA Spaced Recall Curve (Reinforcement Waves & 90%+ Retention) */}
                <path
                  d="M 10 25 C 60 28, 90 35, 120 20 C 180 22, 240 28, 280 18 C 360 20, 440 22, 520 18 C 560 19, 580 20, 590 20"
                  fill="none"
                  stroke="#EFA00B"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* High Retention Pin */}
                <circle cx="590" cy="20" r="6" fill="#EFA00B" />
                <rect x="470" y="35" width="115" height="24" rx="12" fill="#EFA00B" />
                <text x="527" y="51" fill="#361D2E" fontSize="11" fontWeight="900" textAnchor="middle">
                  90%+ LOCKED IN
                </text>

                {/* Lost Memory Pin */}
                <circle cx="590" cy="190" r="6" fill="#EF4444" />
                <rect x="470" y="150" width="115" height="24" rx="12" fill="#EF4444" />
                <text x="527" y="166" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle">
                  -80% FORGOTTEN
                </text>

                {/* Spaced Review Nodes on AURA line */}
                <circle cx="120" cy="20" r="4" fill="#ffffff" stroke="#EFA00B" strokeWidth="2" />
                <circle cx="280" cy="18" r="4" fill="#ffffff" stroke="#EFA00B" strokeWidth="2" />
                <circle cx="520" cy="18" r="4" fill="#ffffff" stroke="#EFA00B" strokeWidth="2" />
              </svg>
            </div>

            {/* Time Axis Labels */}
            <div className="mt-4 flex justify-between text-[11px] sm:text-xs font-extrabold text-white/55 border-t border-white/10 pt-3">
              <span>Study Night (100%)</span>
              <span>24 Hours Later</span>
              <span>Day 3</span>
              <span>Week 2</span>
              <span>Exam Day (1 Month)</span>
            </div>

            {/* Bottom Insight Takeaway */}
            <div className="mt-8 rounded-2xl bg-white/10 border border-white/15 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <p className="text-sm sm:text-base font-bold text-white/90">
                {THE_PROBLEM.forgettingCurveNote}
              </p>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#EFA00B] px-4 py-2 text-xs font-black text-[#361D2E]">
                <CheckCircle2 className="h-4 w-4" />
                AURA Fixes This
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
