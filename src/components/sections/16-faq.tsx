import FAQAccordion from "@/components/ui/accordion"
import Reveal from "@/components/ui/reveal"
import { FAQ, SITE } from "@/lib/constants"
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 lg:py-28 bg-white">
      <div className="wrap grid gap-12 lg:grid-cols-12 items-start">
        {/* Left Header & Help Box */}
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D65108]/20 bg-[#D65108]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108]">
              <HelpCircle className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
              Frequently Asked Questions
            </div>
            <h2 className="font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.2rem] lg:leading-[1.05]">
              Good questions.{" "}
              <span className="block relative inline-block text-[#D65108]">
                Straight answers.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-lg font-semibold text-ink/75 leading-relaxed">
              Still have questions? Join the WhatsApp group and our friendly facilitators will help you directly.
            </p>

            <div className="rounded-3xl border-2 border-[#E5D7C9] bg-[#FBF5ED] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="h-5 w-5 text-[#D65108]" />
                <h4 className="font-heading text-xl font-bold text-ink">Have a quick question?</h4>
              </div>
              <p className="text-sm font-semibold text-ink/70 mb-4">
                Our team is active on WhatsApp to guide you and answer any questions about the sessions.
              </p>
              <CtaLink
                href={SITE.joinUrl}
                ctaId="faq_whatsapp"
                className="btn-primary w-full justify-center text-xs py-3 font-extrabold flex items-center gap-2"
              >
                Ask on WhatsApp
                <ArrowRight className="h-3.5 w-3.5" />
              </CtaLink>
            </div>
          </div>
        </Reveal>

        {/* Right Accordion List */}
        <Reveal delay={120} className="lg:col-span-7">
          <FAQAccordion items={FAQ} />
        </Reveal>
      </div>
    </section>
  )
}