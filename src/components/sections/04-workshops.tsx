import Image from "next/image"
import { Calendar, Clock, Pencil, Brain, Lightbulb, Map, Mic, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import { SITE, WORKSHOPS, WORKSHOPS_SECTION } from "@/lib/constants"

const WORKSHOP_META = [
  { icon: Pencil, color: "#D65108", bgSoft: "#FBE7DC", photo: "/images/hero-slide-1.jpg" },
  { icon: Brain, color: "#EFA00B", bgSoft: "#FDF3DD", photo: "/images/hero-slide-2.jpg" },
  { icon: Lightbulb, color: "#361D2E", bgSoft: "#E9E0E6", photo: "/images/hero-slide-3.jpg" },
  { icon: Map, color: "#D65108", bgSoft: "#FBE7DC", photo: "/images/hero-slide-4.jpg" },
  { icon: Mic, color: "#EFA00B", bgSoft: "#FDF3DD", photo: "/images/hero-slide-5.jpg" },
]

export default function Workshops() {
  return (
    <section id="workshops" className="scroll-mt-20 overflow-hidden bg-white py-20 lg:py-28">
      <div className="wrap">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D65108]/20 bg-[#D65108]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] mb-4">
              <Sparkles className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
              {WORKSHOPS_SECTION.kicker}
            </div>
            <h2 className="font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Free, live,{" "}
              <span className="italic text-[#D65108] relative inline-block pb-2 sm:pb-3">
                built for every age.
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
            <p className="mt-4 text-lg font-semibold text-ink/70">
              {WORKSHOPS_SECTION.subheadline}
            </p>
          </div>
        </Reveal>

        {/* 5 Workshop Cards */}
        <div className="mt-16 space-y-5 max-w-4xl mx-auto">
          {WORKSHOPS.map((ws, i) => {
            const meta = WORKSHOP_META[i]
            const Icon = meta.icon
            return (
              <Reveal key={ws.num} delay={i * 70}>
                <TiltCard maxTilt={2}>
                  <div
                    className="group flex flex-col sm:flex-row items-stretch overflow-hidden rounded-3xl border-2 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-opacity-80"
                    style={{ borderColor: `${meta.color}30` }}
                  >
                    {/* Visual Photo / Badge Box */}
                    <div className="relative w-full sm:w-56 h-48 sm:h-auto shrink-0 overflow-hidden">
                      <Image
                        src={meta.photo}
                        alt={ws.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 224px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent sm:bg-gradient-to-t" />

                      {/* Number Badge */}
                      <span
                        className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl text-white font-heading text-xl shadow-lg"
                        style={{ background: meta.color }}
                      >
                        WS {ws.num}
                      </span>

                      {/* Free Tag */}
                      <span className="absolute bottom-3 left-4 inline-flex items-center gap-1 rounded-full bg-[#D65108] px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
                        100% Free Live
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div>
                        {/* Date & Time Chips */}
                        <div className="flex flex-wrap items-center gap-3 text-xs font-extrabold text-ink/60 mb-2.5">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBF5ED] px-3 py-1 border border-[#E5D7C9]">
                            <Calendar className="h-3.5 w-3.5" style={{ color: meta.color }} strokeWidth={2.5} />
                            {ws.date}
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FBF5ED] px-3 py-1 border border-[#E5D7C9]">
                            <Clock className="h-3.5 w-3.5" style={{ color: meta.color }} strokeWidth={2.5} />
                            {ws.time}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-2xl sm:text-[1.75rem] font-extrabold text-ink leading-tight">
                          {ws.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-base text-ink/75 font-semibold leading-relaxed">
                          {ws.body}
                        </p>
                      </div>

                      {/* Bottom Footer with Icon & CTA */}
                      <div className="mt-5 pt-4 border-t border-[#E5D7C9] flex items-center justify-between gap-4">
                        <span className="inline-flex items-center gap-2 text-xs font-black text-[#D65108]">
                          <CheckCircle2 className="h-4 w-4" />
                          Live Interactive Session with Master Facilitator
                        </span>
                        <span
                          className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                          style={{ background: meta.bgSoft }}
                        >
                          <Icon className="h-5 w-5" style={{ color: meta.color }} strokeWidth={2.2} />
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>

        {/* Closer & Call to Action */}
        <Reveal delay={400}>
          <div className="mt-16 text-center max-w-2xl mx-auto rounded-3xl bg-[#FBF5ED] border border-[#E5D7C9] p-8 sm:p-10 shadow-sm">
            <p className="font-hand text-3xl sm:text-4xl font-bold text-[#361D2E]">
              &ldquo;{WORKSHOPS_SECTION.closer}&rdquo;
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <CtaLink
                href={SITE.joinUrl}
                ctaId="workshops_join"
                className="btn-primary shimmer-badge px-9 py-4 text-base font-extrabold shadow-xl transition-transform hover:scale-105 active:scale-95 flex items-center gap-2.5"
              >
                Join the WhatsApp Group
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </CtaLink>
            </div>
            <p className="mt-3 text-xs font-bold text-ink/50">
              Free to join · No payment needed · Reserve your child&apos;s spot in seconds
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}