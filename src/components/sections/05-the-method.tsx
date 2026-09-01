import Image from "next/image"
import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import { THE_METHOD, SITE } from "@/lib/constants"
import { Pencil, Brain, Lightbulb, Map, Mic, Sparkles, ArrowRight, Trophy } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"

const TECHNIQUE_ICONS = [Pencil, Brain, Lightbulb, Map, Mic]
const TECHNIQUE_COLORS = ["#D65108", "#EFA00B", "#361D2E", "#D65108", "#EFA00B"]

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
              <span className="italic text-[#D65108] relative inline-block pb-2 sm:pb-3">
                actually works
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
              Five world-class memory techniques adapted into simple, fun skills for school students.
            </p>
          </div>
        </Reveal>

        {/* 5 Technique Photo Cards + 1 Master System Card */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {THE_METHOD.techniques.map((tech, i) => {
            const Icon = TECHNIQUE_ICONS[i]
            const color = TECHNIQUE_COLORS[i]
            return (
              <Reveal key={tech.num} delay={i * 80} className="h-full">
                <TiltCard maxTilt={4} className="h-full">
                  <article
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-white shadow-[0_10px_35px_rgba(54,29,46,0.07)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(54,29,46,0.14)] hover:-translate-y-1.5"
                    style={{ borderColor: `${color}30` }}
                  >
                    {/* Photo Header Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={tech.photo}
                        alt={tech.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

                      {/* Number Badge */}
                      <span
                        className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl text-white font-heading text-xl shadow-lg"
                        style={{ background: color }}
                      >
                        0{tech.num}
                      </span>

                      {/* Floating Tag Badge */}
                      <span
                        className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md shadow-md"
                        style={{ background: "rgba(0, 0, 0, 0.6)" }}
                      >
                        <Icon className="h-3.5 w-3.5 text-[#EFA00B]" strokeWidth={2.5} />
                        {tech.tag}
                      </span>

                      {/* Bottom Title on Image */}
                      <div className="absolute bottom-3 left-4 right-4">
                        <h4 className="font-heading text-xl sm:text-2xl font-extrabold text-white leading-tight drop-shadow">
                          {tech.num}. {tech.title}
                        </h4>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-1 flex-col justify-between space-y-4">
                      {/* Body Description */}
                      <p className="text-[15px] leading-relaxed text-ink/80 font-semibold">
                        {tech.body}
                      </p>

                      {/* Champion Connection Box */}
                      <div className="rounded-2xl bg-[#FBF5ED] border border-[#E5D7C9] p-4 text-xs font-bold text-[#361D2E]/90 leading-relaxed">
                        <div className="flex items-center gap-1.5 text-[#D65108] font-black uppercase tracking-wider mb-1.5">
                          <Trophy className="h-3.5 w-3.5" />
                          Champion Connection
                        </div>
                        <p>{tech.championConnection}</p>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            )
          })}

          {/* 6th Card: Master System Card */}
          <Reveal delay={450} className="h-full sm:col-span-2 lg:col-span-1">
            <div className="relative h-full flex flex-col justify-between rounded-3xl overflow-hidden shadow-xl border-2 border-[#D65108]/40 group">
              {/* Background Photo */}
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                alt="Students mastering memory techniques together"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-108"
              />
              {/* Warm gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#361D2E] via-[#361D2E]/90 to-[#D65108]/85" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-between h-full text-white">
                <div>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 mb-5 shadow-inner backdrop-blur-sm">
                    <Trophy className="h-8 w-8 text-[#EFA00B]" strokeWidth={2.2} />
                  </span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#EFA00B] border border-white/20">
                    Complete Toolkit
                  </span>
                  <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                    Five techniques. One lifelong system.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90 font-medium">
                    All 5 techniques are taught live and free over 5 interactive workshops. By the end, your child has a proven routine for every subject.
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
