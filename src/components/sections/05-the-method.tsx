import Image from "next/image"
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
    photo: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Student creating colourful sketch notes with icons and arrows",
  },
  {
    icon: Brain,
    color: "#EFA00B",
    bg: "#FDF3DD",
    tag: "Spaced Retention",
    outcome: "Facts move into permanent long-term memory",
    photo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Student practicing active spaced recall memory techniques",
  },
  {
    icon: Lightbulb,
    color: "#361D2E",
    bg: "#E9E0E6",
    tag: "Exam Thinking",
    outcome: "Deep, structured answers that score top marks",
    photo: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Student writing structured, in-depth exam answers with confidence",
  },
  {
    icon: Map,
    color: "#D65108",
    bg: "#FBE7DC",
    tag: "Topic Synthesis",
    outcome: "Messy chapters become one clear, colourful map",
    photo: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Colourful hand-drawn mind map with structured branches and ideas",
  },
  {
    icon: Mic,
    color: "#EFA00B",
    bg: "#FDF3DD",
    tag: "Expressive Recall",
    outcome: "Clear articulation, public speaking & zero stage fright",
    photo: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    photoAlt: "Student standing up and presenting ideas clearly with confidence",
  },
]

export default function TheMethod() {
  return (
    <section
      id="the-method"
      className="scroll-mt-20 bg-gradient-to-b from-[#FBF5ED] via-white to-[#FBF5ED] py-20 lg:py-28"
    >
      <div className="wrap">
        {/* Header */}
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
              Five visual memory superpowers taught step-by-step in live workshops.
            </p>
          </div>
        </Reveal>

        {/* 5 Technique Photo Cards + 1 Master System Card */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {THE_METHOD.techniques.map((tech, i) => {
            const meta = TECHNIQUE_META[i]
            const Icon = meta.icon
            return (
              <Reveal key={tech.num} delay={i * 80} className="h-full">
                <TiltCard maxTilt={4} className="h-full">
                  <article
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-white shadow-[0_10px_35px_rgba(54,29,46,0.07)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(54,29,46,0.14)] hover:-translate-y-1.5"
                    style={{ borderColor: `${meta.color}30` }}
                  >
                    {/* Photo Header Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={meta.photo}
                        alt={meta.photoAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                      {/* Number Badge */}
                      <span
                        className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl text-white font-heading text-xl shadow-lg"
                        style={{ background: meta.color }}
                      >
                        0{tech.num}
                      </span>

                      {/* Floating Tag Badge */}
                      <span
                        className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md shadow-md"
                        style={{ background: "rgba(0, 0, 0, 0.55)" }}
                      >
                        <Icon className="h-3.5 w-3.5 text-[#EFA00B]" strokeWidth={2.5} />
                        {meta.tag}
                      </span>

                      {/* Bottom Title on Image for immediate visual context */}
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[11px] font-black uppercase tracking-wider text-[#EFA00B] block">
                          Superpower 0{tech.num}
                        </span>
                        <h4 className="font-heading text-xl sm:text-2xl font-extrabold text-white leading-tight drop-shadow">
                          {tech.title}
                        </h4>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-1 flex-col justify-between">
                      <p className="text-[15px] leading-relaxed text-ink/80 font-semibold">
                        {tech.body}
                      </p>

                      {/* Outcome chip */}
                      <div className="mt-6 pt-4 border-t border-[#E5D7C9] flex items-start gap-2 text-xs font-extrabold text-[#D65108]">
                        <Check className="h-4 w-4 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{meta.outcome}</span>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            )
          })}

          {/* 6th Card: Master System Showcase with Photo Background */}
          <Reveal delay={450} className="h-full sm:col-span-2 lg:col-span-1">
            <div className="relative h-full flex flex-col justify-between rounded-3xl overflow-hidden shadow-xl border-2 border-[#D65108]/40 group">
              {/* Background Photo */}
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                alt="Students learning together"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              {/* Warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#361D2E] via-[#361D2E]/90 to-[#D65108]/85" />

              {/* Content on top */}
              <div className="relative z-10 p-8 flex flex-col justify-between h-full text-white">
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 mb-5 shadow-inner backdrop-blur-sm">
                    <Brain className="h-8 w-8 text-[#EFA00B]" strokeWidth={2.2} />
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#EFA00B] border border-white/20">
                    Complete Toolkit
                  </span>
                  <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                    One simple system for every subject.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90 font-medium">
                    Five skills that build on each other. By the end of the workshops, your child has an intuitive memory routine for life.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <CtaLink
                    href={SITE.joinUrl}
                    ctaId="method_join"
                    className="btn-primary w-full justify-center bg-[#EFA00B] !text-[#361D2E] font-black text-sm py-3.5 shadow-xl hover:bg-white transition-all flex items-center gap-2"
                  >
                    Join the Free Workshops
                    <ArrowRight className="h-4 w-4" strokeWidth={2.75} />
                  </CtaLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
