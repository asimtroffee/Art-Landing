import { ArrowRight, Check, Sparkles } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import AnimatedUnderline from "@/components/ui/animated-underline"
import { PRICING } from "@/lib/constants"

type PricingPlan = {
  title: string
  price: string
  unit: string
  badge?: string
  features: readonly string[]
  cta: string
  ctaId: string
  href: string
}

const plans: PricingPlan[] = [PRICING.free, PRICING.kit]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 gradient-mesh-ink py-16 text-[#FFF9EF] sm:py-24">
      <div className="wrap">
        <Reveal>
          <div className="max-w-2xl">
            <p className="kicker !text-tangerine">{PRICING.kicker}</p>
            <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl lg:text-[2.7rem] lg:leading-[1.1]">
              {PRICING.headline.split(" ").slice(0, -4).join(" ")}{" "}
              <span className="relative inline-block text-tangerine">
                {PRICING.headline.split(" ").slice(-4).join(" ")}
                <AnimatedUnderline color="#EFA00B" />
              </span>
            </h2>
            <p className="mt-4 text-lg text-[#FFF9EF]/70">{PRICING.subheadline}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2">
          {plans.map((plan, i) => {
            const featured = i === 0
            return (
              <Reveal key={plan.title} delay={i * 120} className="h-full">
                <TiltCard maxTilt={4} className="h-full">
                  <div
                    className={`relative flex h-full flex-col rounded-[24px] border p-8 transition-shadow duration-300 ${
                      featured
                        ? "border-tangerine bg-white text-ink shadow-[0_20px_50px_rgba(214,81,8,0.18)] ring-4 ring-tangerine/15"
                        : "border-white/10 bg-white/5 text-white shadow-xl hover:border-white/30"
                    }`}
                  >
                    {featured && (
                      <span className="shimmer-badge absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-tangerine px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-md flex items-center gap-1.5">
                        <Sparkles className="h-3 w-3 text-[#EFA00B]" />
                        {plan.badge}
                      </span>
                    )}
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-2xl font-extrabold">{plan.title}</h3>
                        <p className={`mt-1.5 text-sm font-semibold ${featured ? "text-ink/60" : "text-white/60"}`}>
                          {plan.unit}
                        </p>
                      </div>
                      <p className={`font-heading text-5xl font-black ${featured ? "text-tangerine" : "text-white"}`}>
                        {plan.price}
                      </p>
                    </div>

                    <ul className="mt-8 flex-1 space-y-4">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[15px] leading-relaxed">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-transform hover:scale-115 ${
                              featured ? "bg-cobalt-soft text-cobalt" : "bg-white/15 text-white"
                            }`}
                          >
                            <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <CtaLink
                      href={plan.href}
                      ctaId={plan.ctaId}
                      className={
                        featured
                          ? "btn-primary shimmer-badge mt-8 w-full px-6 py-4 text-base shadow-md transition-transform hover:scale-103 active:scale-95"
                          : "btn-outline-sketch mt-8 w-full border-white/30 px-6 py-3.5 text-base text-white hover:bg-white/10 hover:border-white transition-transform hover:scale-103"
                      }
                      ariaLabel={plan.cta}
                    >
                      {plan.cta}
                      <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                    </CtaLink>
                  </div>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={160}>
          <p className="mt-8 text-center text-sm text-[#FFF9EF]/60">{PRICING.footnote}</p>
        </Reveal>
      </div>
    </section>
  )
}