import { AlarmClock } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import { HOW_IT_WORKS } from "@/lib/constants"

export default function HowItWorks() {
  return (
    <section id="how-to-join" className="scroll-mt-20 border-y border-line bg-paper-deep py-20 lg:py-24">
      <div className="wrap">
        <Reveal>
          <div className="max-w-2xl">
            <p className="kicker">{HOW_IT_WORKS.kicker}</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              {HOW_IT_WORKS.headline.split(" ").slice(0, -3).join(" ")}{" "}
              <span className="wavy-underline inline-block">
                {HOW_IT_WORKS.headline.split(" ").slice(-3).join(" ")}
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-10 lg:grid-cols-3">
          <div
            aria-hidden
            className="hidden lg:absolute lg:top-8 lg:left-[15%] lg:right-[15%] lg:block lg:border-t-2 lg:border-dashed lg:border-line"
          />
          {HOW_IT_WORKS.steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 130}>
              <div className="relative text-center lg:px-6">
                <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-tangerine text-white font-heading text-xl font-extrabold shadow-lg">
                  {step.num}
                </span>
                <h3 className="mt-6 font-heading text-xl font-extrabold text-ink">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3.5 rounded-2xl border border-tangerine/20 bg-tangerine-soft/30 px-6 py-5 shadow-sm">
            <AlarmClock className="h-5.5 w-5.5 text-tangerine" strokeWidth={2.25} />
            <p className="font-heading text-lg font-extrabold text-ink">{HOW_IT_WORKS.deadline}</p>
          </div>
          <p className="mt-6 text-center text-sm font-bold text-ink/60">
            Free to join. No payment needed. Just join the WhatsApp group and we&apos;ll guide you through every step.
          </p>
        </Reveal>
      </div>
    </section>
  )
}