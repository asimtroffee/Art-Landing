import Reveal from "@/components/ui/reveal"
import { THE_SHIFT, SITE } from "@/lib/constants"
import { Sparkles, XCircle, CheckCircle2, ArrowRight, Lightbulb } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"

export default function TheShift() {
  return (
    <section
      id="the-shift"
      className="scroll-mt-20 bg-white py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="wrap max-w-5xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EFA00B]/30 bg-[#FDF3DD] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#361D2E] mb-4">
              <Sparkles className="h-4 w-4 text-[#EFA00B]" strokeWidth={2.5} />
              {THE_SHIFT.kicker}
            </div>
            <h2 className="font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Memory is a skill.{" "}
              <span className="relative inline-block text-[#D65108]">
                It can be learned.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-5 text-lg sm:text-xl font-semibold leading-relaxed text-ink/80">
              {THE_SHIFT.intro}
            </p>
            <p className="mt-2 font-hand text-3xl font-bold text-[#D65108]">
              {THE_SHIFT.techniqueIntro}
            </p>
          </div>
        </Reveal>

        {/* 4 Transformation Comparison Cards */}
        <div className="mt-14 space-y-4">
          {THE_SHIFT.points.map((point, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="group overflow-hidden rounded-2xl border-2 border-[#E5D7C9] bg-[#FAF8F5] transition-all duration-300 hover:border-[#D65108]/40 hover:shadow-lg">
                <div className="grid md:grid-cols-12 items-stretch">
                  {/* Left (The Frustrating Old Way) */}
                  <div className="md:col-span-5 p-5 sm:p-6 bg-red-50/40 border-b md:border-b-0 md:border-r border-[#E5D7C9] flex items-center gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                      <XCircle className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-600/80 block">
                        The Old Rote Way
                      </span>
                      <p className="text-sm sm:text-[15px] font-bold text-ink/75 leading-snug">
                        {point.before}
                      </p>
                    </div>
                  </div>

                  {/* Right (The AURA Breakthrough) */}
                  <div className="md:col-span-7 p-5 sm:p-6 bg-white flex items-center gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FDF3DD] text-[#D65108]">
                      <CheckCircle2 className="h-5 w-5 text-[#D65108]" strokeWidth={2.5} />
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#D65108] block">
                        The AURA Method
                      </span>
                      <p className="text-base sm:text-lg font-extrabold text-ink leading-snug">
                        {point.after}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* The Golden Takeaway Quote Card */}
        <Reveal delay={400}>
          <div className="mt-10 rounded-3xl border border-[#EFA00B]/30 bg-gradient-to-r from-[#FDF3DD] to-[#FBE7DC] p-6 sm:p-8 text-center shadow-sm">
            <Lightbulb className="h-8 w-8 text-[#D65108] mx-auto mb-3" />
            <blockquote className="font-hand text-3xl sm:text-4xl font-bold text-[#361D2E] leading-snug max-w-2xl mx-auto">
              &ldquo;{THE_SHIFT.closer}&rdquo;
            </blockquote>
          </div>
        </Reveal>

        {/* Summary Banner & WhatsApp CTA */}
        <Reveal delay={480}>
          <div className="mt-8 rounded-3xl gradient-mesh-orange p-8 text-center text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-xl">
              <h3 className="font-heading text-2xl sm:text-3xl text-white font-extrabold">
                {THE_SHIFT.summary}
              </h3>
              <p className="mt-1 text-sm text-white/85 font-semibold">
                Give your child the lifelong superpower of knowing how to learn.
              </p>
            </div>
            <CtaLink
              href={SITE.joinUrl}
              ctaId="shift_join"
              className="btn-primary bg-[#EFA00B] !text-[#361D2E] font-black px-7 py-3.5 text-sm shadow-xl hover:bg-white shrink-0"
            >
              Join WhatsApp Group
              <ArrowRight className="h-4 w-4" strokeWidth={2.75} />
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
