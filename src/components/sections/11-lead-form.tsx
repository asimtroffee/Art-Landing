import { ArrowRight, CheckCircle2, Sparkles, MessageCircle, ShieldCheck } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import { CLOSING_CTA, SITE, FOOTER } from "@/lib/constants"

export default function ClosingCta() {
  return (
    <section id="closing-cta" className="scroll-mt-20 gradient-mesh-ink py-20 text-[#FFF9EF] sm:py-28 relative overflow-hidden">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-0 right-1/4 h-80 w-80 rounded-full bg-[#EFA00B]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-[#D65108]/20 blur-3xl pointer-events-none" />

      <div className="wrap max-w-4xl mx-auto text-center relative z-10">
        {/* Sparkle Icon */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md mb-6">
            <Sparkles className="h-4 w-4 text-[#EFA00B]" strokeWidth={2.5} />
            Start Learning Today
          </div>
        </Reveal>

        {/* Main Headline */}
        <Reveal delay={80}>
          <h2 className="font-heading text-4xl font-extrabold sm:text-5xl lg:text-[3.8rem] lg:leading-[1.05] text-white">
            Your child&apos;s first memory trick is{" "}
            <span className="relative inline-block text-[#EFA00B]">
              one click away.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
        </Reveal>

        {/* Subhead */}
        <Reveal delay={140}>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#FFF9EF]/80 max-w-2xl mx-auto font-medium">
            {CLOSING_CTA.subheadline}
          </p>
        </Reveal>

        {/* WhatsApp Preview Notification Card */}
        <Reveal delay={200}>
          <div className="my-10 mx-auto max-w-md rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur-md text-left shadow-2xl">
            <div className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-md">
                <MessageCircle className="h-6 w-6 fill-current" />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between text-xs text-white/60 mb-0.5">
                  <span className="font-extrabold text-white">AURA Workshops Community</span>
                  <span>Just now</span>
                </div>
                <p className="text-sm font-semibold text-white/90 leading-snug">
                  🎉 Welcome! Your spot for Workshop 1 is reserved. Here are 2 simple memory tips to try with your child today...
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Benefits Pill List */}
        <Reveal delay={260}>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-[#FFF9EF]/90">
            {[
              "Memory technique tips you can use today",
              "Early reminders before every live session",
              "A complete memory system by the end",
            ].map((tip) => (
              <span key={tip} className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#EFA00B] shrink-0" strokeWidth={2.5} />
                {tip}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Large CTA Button */}
        <Reveal delay={340}>
          <div className="mt-10">
            <CtaLink
              href={SITE.joinUrl}
              ctaId="closing_join"
              className="btn-primary shimmer-badge px-10 py-5 text-lg font-black shadow-2xl transition-transform hover:scale-105 active:scale-95 inline-flex items-center gap-3 bg-[#EFA00B] !text-[#361D2E] hover:bg-white"
            >
              <MessageCircle className="h-6 w-6 fill-current text-[#25D366]" />
              {CLOSING_CTA.ctaLabel}
              <ArrowRight className="h-5 w-5" strokeWidth={2.75} />
            </CtaLink>
          </div>
        </Reveal>

        {/* Reassurance Badge & Attribution */}
        <Reveal delay={400}>
          <div className="mt-8 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold text-white/90">
              <ShieldCheck className="h-4 w-4 text-[#EFA00B]" />
              {CLOSING_CTA.badge}
            </p>
            <p className="font-hand text-2xl font-bold text-white/80">
              {FOOTER.tagline}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}