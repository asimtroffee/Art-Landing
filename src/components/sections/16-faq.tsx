import FAQAccordion from "@/components/ui/accordion"
import Reveal from "@/components/ui/reveal"
import { FAQ } from "@/lib/constants"

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 bg-white">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <p className="kicker">FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.7rem] lg:leading-[1.1]">
              Good questions.
              <span className="block wavy-underline inline-block">Straight answers.</span>
            </h2>
            <p className="mt-4 text-lg text-ink/70">
              Still unsure? Join the WhatsApp group and the team will help you along. No payment needed.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-8">
          <FAQAccordion items={FAQ} />
        </Reveal>
      </div>
    </section>
  )
}