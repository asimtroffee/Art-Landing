import { ArrowRight, MessageCircle, Video, CheckCircle2, Sparkles } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import { HOW_TO_JOIN, SITE } from "@/lib/constants"

export default function HowToJoin() {
  return (
    <section id="how-to-join" className="scroll-mt-20 border-y border-[#E5D7C9] bg-[#FBF5ED] py-20 lg:py-28 relative">
      <div className="wrap max-w-5xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D65108]/20 bg-[#D65108]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] mb-4">
              <Sparkles className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
              {HOW_TO_JOIN.kicker}
            </div>
            <h2 className="font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Two simple steps{" "}
              <span className="relative inline-block pb-2 sm:pb-3 text-[#D65108]">
                to get started.
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
            <p className="mt-3 text-lg text-ink/75 font-semibold">
              No complicated registrations. Get direct access to the live workshop links in seconds.
            </p>
          </div>
        </Reveal>

        {/* 2 Big Steps Grid */}
        <div className="relative mt-16 grid gap-8 md:grid-cols-2">
          {/* Animated Connecting Line on desktop */}
          <div
            aria-hidden
            className="hidden md:block absolute top-12 left-[25%] right-[25%] border-t-4 border-dashed border-[#D65108]/30 z-0"
          />

          {/* Step 1 */}
          <Reveal delay={100}>
            <div className="sketch-card relative z-10 flex flex-col h-full p-8 bg-white border-2 border-[#D65108]/30 shadow-md text-center items-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D65108] text-white font-heading text-3xl font-black shadow-xl mb-6">
                01
              </span>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FDF3DD] px-3.5 py-1 text-xs font-black text-[#D65108] mb-3">
                <MessageCircle className="h-4 w-4 fill-current" />
                Instant Access
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink">
                {HOW_TO_JOIN.steps[0].title}
              </h3>
              <p className="mt-3 text-base text-ink/75 font-semibold leading-relaxed max-w-sm">
                {HOW_TO_JOIN.steps[0].body}
              </p>
              <div className="mt-6 pt-5 border-t border-[#E5D7C9] w-full text-xs font-bold text-ink/60 flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#D65108]" />
                Takes less than 10 seconds
              </div>
            </div>
          </Reveal>

          {/* Step 2 */}
          <Reveal delay={200}>
            <div className="sketch-card relative z-10 flex flex-col h-full p-8 bg-white border-2 border-[#EFA00B]/40 shadow-md text-center items-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#361D2E] text-white font-heading text-3xl font-black shadow-xl mb-6">
                02
              </span>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E9E0E6] px-3.5 py-1 text-xs font-black text-[#361D2E] mb-3">
                <Video className="h-4 w-4" />
                Live Online
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink">
                {HOW_TO_JOIN.steps[1].title}
              </h3>
              <p className="mt-3 text-base text-ink/75 font-semibold leading-relaxed max-w-sm">
                {HOW_TO_JOIN.steps[1].body}
              </p>
              <div className="mt-6 pt-5 border-t border-[#E5D7C9] w-full text-xs font-bold text-ink/60 flex items-center justify-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#EFA00B]" />
                5 interactive sessions with master facilitators
              </div>
            </div>
          </Reveal>
        </div>

        {/* Footnote & Direct Button */}
        <Reveal delay={300}>
          <div className="mt-14 text-center max-w-xl mx-auto">
            <p className="text-base font-bold text-ink/80 leading-relaxed">
              {HOW_TO_JOIN.footnote}
            </p>
            <div className="mt-6">
              <CtaLink
                href={SITE.joinUrl}
                ctaId="how_join"
                className="btn-primary shimmer-badge px-9 py-4 text-base font-extrabold shadow-xl transition-transform hover:scale-105 active:scale-95 inline-flex items-center gap-3"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                Join the WhatsApp Group Now
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}