import { Trophy, Star, Sparkles } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import Countdown from "@/components/ui/countdown"
import CtaLink from "@/components/ui/cta-link"
import FloatingDoodles from "@/components/ui/floating-doodles"
import AnimatedUnderline from "@/components/ui/animated-underline"
import { COMPETITION, SITE } from "@/lib/constants"

type Prize = {
  place: string
  cash: string
  hamper: string
  featured?: boolean
}

const prizes: readonly Prize[] = COMPETITION.prizes

export default function Competition() {
  return (
    <section id="competition" className="relative scroll-mt-20 gradient-mesh-orange text-white pt-24 pb-20 overflow-hidden">
      {/* Lime Green Mountain Peak SVG Divider on Top */}
      <div className="mountain-peak-divider absolute -top-20 left-0 right-0 z-10 pointer-events-none" />

      {/* Floating ambient stars/sparks */}
      <FloatingDoodles
        items={[
          { icon: "star", top: "10%", left: "5%", size: 22, color: "#FFFFFF", duration: 5, delay: 0 },
          { icon: "sparkle", top: "35%", right: "6%", size: 26, color: "#EFA00B", duration: 6, delay: 1 },
          { icon: "star", bottom: "15%", left: "8%", size: 18, color: "#FFFFFF", duration: 4.5, delay: 0.5 },
          { icon: "sparkle", bottom: "30%", right: "10%", size: 22, color: "#EFA00B", duration: 5.5, delay: 1.5 },
        ]}
      />

      <div className="wrap relative z-20">
        <Reveal>
          <div className="max-w-3xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 justify-center">
              <Star className="h-5 w-5 fill-white text-white" />
              <p className="font-hand text-3xl font-bold text-white">Student Olympiad 2026</p>
            </div>
            <h2 className="mt-1 font-heading text-4xl text-white sm:text-5xl lg:text-[3.2rem]">
              TAKE ON THE{" "}
              <span className="relative inline-block text-[#EFA00B]">
                AURA OLYMPIAD
                <AnimatedUnderline color="#FFFFFF" />
              </span>
            </h2>
            <p className="mt-2 text-lg text-white/90 font-bold">{COMPETITION.subheadline}</p>
            <div className="mt-6 flex justify-center">
              <Countdown target={COMPETITION.countdownTarget} title="Mission 1 submissions close in" variant="dark" />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {COMPETITION.stages.map((stage, i) => (
            <Reveal key={stage.step} delay={i * 120} className="h-full">
              <TiltCard maxTilt={5} className="h-full">
                <div className="sketch-card h-full p-8 bg-white text-[#361D2E] border-2 border-white shadow-2xl transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center justify-between gap-3 border-b border-[#EFA00B]/30 pb-4">
                    <span className="font-heading text-3xl text-[#361D2E]">{stage.step}</span>
                    <span className="text-xs font-black uppercase tracking-wider text-[#D65108] bg-[#FBE7DC] px-3 py-1 rounded-full">
                      {stage.audience.split(" ")[1] ?? "Open"}
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-extrabold text-[#D65108]">{stage.dates}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#361D2E]/50">
                    {stage.audience}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl text-[#361D2E]">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#361D2E]/80">{stage.body}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
            <CtaLink
              href={SITE.joinUrl}
              ctaId="competition_join"
              className="btn-primary shimmer-badge px-8 py-4 text-base font-extrabold shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              Join the WhatsApp Group
              <Sparkles className="h-5 w-5" strokeWidth={2.5} />
            </CtaLink>
            <CtaLink
              href={SITE.registerUrl}
              ctaId="competition_kit"
              className="btn-sketch-crayon px-7 py-3.5 text-base border-white bg-white/90 text-[#361D2E] shadow-xl hover:bg-white transition-transform hover:scale-105"
            >
              Get the Kit · RM10
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-14 text-center">
            <div className="inline-flex items-center justify-center gap-3">
              <Trophy className="h-8 w-8 text-white transition-transform duration-500 hover:rotate-12 hover:scale-125" strokeWidth={2.25} />
              <h3 className="font-heading text-3xl text-white sm:text-4xl">
                {COMPETITION.prizeHeadline}
              </h3>
            </div>
            <p className="mt-2 text-base text-white/90 font-bold">Cash prizes + Gift hampers + trophies · per category</p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prizes.map((prize, i) => (
            <Reveal key={prize.place} delay={(i % 3) * 90}>
              <TiltCard maxTilt={4}>
                <div
                  className={`relative flex items-center justify-between gap-4 rounded-2xl border-2 p-5 bg-white text-[#361D2E] shadow-lg transition-all duration-300 hover:shadow-xl ${
                    prize.featured
                      ? "border-[#EFA00B] ring-4 ring-[#EFA00B]/30 shimmer-badge"
                      : "border-white"
                  }`}
                >
                  {prize.featured && (
                    <span className="absolute -top-3 right-4 rounded-full bg-[#EFA00B] px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#361D2E] shadow-sm flex items-center gap-1">
                      <Sparkles className="h-2.5 w-2.5" />
                      Grand Champion
                    </span>
                  )}
                  <div>
                    <p className={`font-heading text-2xl ${prize.featured ? "text-[#D65108] font-black" : "text-[#361D2E]"}`}>
                      {prize.cash}
                    </p>
                    <p className="text-xs font-bold text-[#361D2E]/60 mt-0.5">{prize.hamper}</p>
                  </div>
                  <p className="text-right text-xs font-black uppercase text-[#D65108] bg-[#FBE7DC] px-3 py-1.5 rounded-full">
                    {prize.place}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}