import Image from "next/image"
import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import { THE_REVEAL, SITE } from "@/lib/constants"
import { Trophy, Sparkles, Image as ImageIcon, Clock, LayoutGrid, Mic, ArrowRight } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"

const ICONS = {
  Image: ImageIcon,
  Clock: Clock,
  LayoutGrid: LayoutGrid,
  Mic: Mic,
}

export default function TheReveal() {
  return (
    <section
      id="the-reveal"
      className="scroll-mt-20 gradient-mesh-ink py-20 lg:py-28 text-white relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 h-96 w-96 rounded-full bg-[#EFA00B]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-[#D65108]/20 blur-3xl pointer-events-none" />

      <div className="wrap max-w-6xl mx-auto relative z-10">
        {/* Header & The Big Revelation */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#EFA00B] backdrop-blur-md mb-4">
              <Trophy className="h-4 w-4 text-[#EFA00B]" strokeWidth={2.5} />
              {THE_REVEAL.kicker}
            </div>
            <h2 className="font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              The World Champion{" "}
              <span className="text-[#EFA00B] relative inline-block">
                Connection
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 font-hand text-2xl font-bold text-white/90">
              {THE_REVEAL.intro}
            </p>
          </div>
        </Reveal>

        {/* The Memory Athlete Insight Box with Photo */}
        <Reveal delay={120}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#EFA00B]/20 px-3 py-1 text-xs font-black text-[#EFA00B]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Not a Genetic Gift · Pure Technique
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  {THE_REVEAL.championStory}
                </h3>
                <blockquote className="rounded-2xl bg-black/30 border-l-4 border-[#EFA00B] p-4 text-base sm:text-lg font-bold text-white/95 italic">
                  {THE_REVEAL.championQuote}
                </blockquote>
              </div>

              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                  alt="Mental athlete and cards memory technique"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#EFA00B]">World Memory Athlete Method</span>
                  <p className="font-heading text-lg font-bold">52 Cards in 60s · 100s of Numbers</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4 Core Principles Cards with Photos */}
        <div className="mt-16">
          <Reveal delay={200}>
            <div className="text-center mb-10">
              <h3 className="font-heading text-2xl sm:text-3xl text-white font-extrabold">
                {THE_REVEAL.principlesHeading}
              </h3>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {THE_REVEAL.principles.map((p, i) => {
              const Icon = ICONS[p.icon as keyof typeof ICONS] ?? Sparkles
              return (
                <Reveal key={p.num} delay={240 + i * 80} className="h-full">
                  <TiltCard maxTilt={4} className="h-full">
                    <div className="flex h-full flex-col rounded-3xl border border-white/20 bg-white/10 overflow-hidden shadow-lg transition-all duration-300 hover:border-[#EFA00B]/60 hover:bg-white/15 hover:-translate-y-1">
                      {/* Photo on card */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={p.photo}
                          alt={p.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[#D65108] font-heading text-base font-bold shadow-md">
                          0{p.num}
                        </span>
                        <div className="absolute bottom-2.5 left-3 right-3 text-white">
                          <h4 className="font-heading text-lg font-bold leading-tight drop-shadow">{p.title}</h4>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="p-5 flex flex-1 flex-col justify-between">
                        <p className="text-sm font-semibold leading-relaxed text-white/80">
                          {p.desc}
                        </p>
                        <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-2 text-xs font-extrabold text-[#EFA00B]">
                          <Icon className="h-4 w-4" />
                          Principle 0{p.num}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* The Bridge to AURA Callout */}
        <Reveal delay={450}>
          <div className="mt-14 rounded-3xl bg-white p-8 sm:p-10 text-ink shadow-2xl text-center max-w-3xl mx-auto border-2 border-[#EFA00B]">
            <p className="text-xl sm:text-2xl font-extrabold text-[#D65108] leading-snug">
              {THE_REVEAL.bridge}
            </p>
            <p className="mt-3 text-base sm:text-lg font-semibold text-ink/75 leading-relaxed">
              {THE_REVEAL.closer}
            </p>
            <div className="mt-6">
              <CtaLink
                href={SITE.joinUrl}
                ctaId="reveal_join"
                className="btn-primary shimmer-badge px-8 py-3.5 text-sm font-extrabold shadow-lg inline-flex items-center gap-2"
              >
                Learn These 4 Principles Live
                <ArrowRight className="h-4 w-4" strokeWidth={2.75} />
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
