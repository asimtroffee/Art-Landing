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
              {THE_SHIFT.headline.split(" ")[0]}{" "}
              <span className="relative inline-block text-[#D65108]">
                {THE_SHIFT.headline.split(" ").slice(1).join(" ")}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 font-hand text-2xl font-bold text-ink/75">
              {THE_SHIFT.intro}
            </p>
          </div>
        </Reveal>

        {/* Comparison Table Header */}
        <div className="mt-14 overflow-hidden rounded-3xl border-2 border-[#E5D7C9] bg-white shadow-xl">
          <div className="hidden md:grid grid-cols-12 bg-[#361D2E] text-white p-4 font-heading text-lg font-bold">
            <div className="col-span-5 pl-4 flex items-center gap-2 text-red-300">
              <XCircle className="h-5 w-5" />
              Before Learning the Technique
            </div>
            <div className="col-span-7 pl-6 flex items-center gap-2 text-[#EFA00B]">
              <CheckCircle2 className="h-5 w-5" />
              After Learning AURA
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#E5D7C9]">
            {THE_SHIFT.comparisons.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="grid md:grid-cols-12 items-stretch transition-colors hover:bg-[#FAF8F5]">
                  {/* Before */}
                  <div className="md:col-span-5 p-5 sm:p-6 bg-red-50/30 border-b md:border-b-0 md:border-r border-[#E5D7C9] flex items-center gap-3.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 md:hidden">
                      <XCircle className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-red-600 block md:hidden mb-1">
                        Before AURA
                      </span>
                      <p className="text-sm sm:text-[15px] font-bold text-ink/70 leading-snug">
                        {item.before}
                      </p>
                    </div>
                  </div>

                  {/* After */}
                  <div className="md:col-span-7 p-5 sm:p-6 bg-white flex items-center justify-between gap-3.5">
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FDF3DD] text-[#D65108] md:hidden">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#D65108] block md:hidden mb-1">
                          After AURA
                        </span>
                        <p className="text-base sm:text-lg font-extrabold text-[#361D2E] leading-snug">
                          {item.after}
                        </p>
                      </div>
                    </div>
                    <span className="hidden lg:inline-flex shrink-0 rounded-full bg-[#FBF5ED] px-3 py-1 text-[11px] font-black text-[#D65108] border border-[#E5D7C9]">
                      {item.area}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Conclusion Card */}
        <Reveal delay={400}>
          <div className="mt-12 rounded-3xl border-2 border-[#EFA00B]/40 bg-[#FBF5ED] p-8 sm:p-10 text-center shadow-md">
            <Lightbulb className="h-8 w-8 text-[#D65108] mx-auto mb-3" />
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#361D2E]">
              {THE_SHIFT.conclusion}
            </h3>
            <p className="mt-3 text-base sm:text-lg font-bold text-[#D65108] max-w-xl mx-auto">
              {THE_SHIFT.reassurance}
            </p>
            <div className="mt-6">
              <CtaLink
                href={SITE.joinUrl}
                ctaId="shift_table_join"
                className="btn-primary shimmer-badge px-8 py-3.5 text-sm font-extrabold shadow-lg inline-flex items-center gap-2"
              >
                Teach My Child These Techniques Free
                <ArrowRight className="h-4 w-4" strokeWidth={2.75} />
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
