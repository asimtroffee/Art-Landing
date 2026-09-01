import Image from "next/image"
import { Quote } from "lucide-react"
import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import AnimatedUnderline from "@/components/ui/animated-underline"
import { TESTIMONIALS } from "@/lib/constants"

const TESTIMONIAL_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80"
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-white py-20">
      <div className="wrap">
        <Reveal>
          <div className="max-w-3xl">
            <p className="kicker">What families say</p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-ink sm:text-4xl lg:text-[2.7rem] lg:leading-[1.1]">
              Loved by parents.{" "}
              <span className="text-cobalt relative inline-block">
                Loved by students.
                <AnimatedUnderline color="#EFA00B" />
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 110} className="h-full">
              <TiltCard maxTilt={4} className="h-full">
                <figure className="sketch-card flex h-full flex-col p-8 bg-[#F8FAFC] transition-all duration-300 hover:shadow-xl">
                  <Quote className="h-8 w-8 text-tangerine transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                  <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-ink/80 italic font-medium">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3.5 border-t border-line pt-4">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border border-line shadow-sm">
                      <Image
                        src={TESTIMONIAL_AVATARS[i]}
                        alt={t.name}
                        fill
                        sizes="44px"
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-ink">{t.name}</p>
                      <p className="text-xs font-semibold text-tangerine">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}