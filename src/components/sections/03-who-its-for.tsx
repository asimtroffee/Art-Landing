import Image from "next/image"
import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import { WHO_IS_THIS_FOR, SITE } from "@/lib/constants"
import { Users, Sparkles, ArrowRight, Check } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"

const CAT_META = [
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    color: "#D65108",
    highlights: ["Visual doodle memory", "Simple recall tricks", "Confidence building"],
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    color: "#EFA00B",
    highlights: ["Multi-subject organization", "Commander's List", "Structured presentation"],
  },
  {
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    color: "#361D2E",
    highlights: ["Exam-ready recall algorithms", "Critical essay synthesis", "High-impact speaking"],
  },
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-20 py-20 lg:py-28 bg-[#FBF5ED]">
      <div className="wrap">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D65108]/20 bg-[#D65108]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] mb-4">
              <Users className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
              {WHO_IS_THIS_FOR.kicker}
            </div>
            <h2 className="font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Every student,{" "}
              <span className="italic text-[#D65108] relative inline-block pb-2 sm:pb-3">
                7 to 17
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
            <p className="mt-3 text-lg text-ink/75 font-semibold">{WHO_IS_THIS_FOR.subheadline}</p>
          </Reveal>
        </div>

        {/* 3 Categories */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {WHO_IS_THIS_FOR.categories.map((cat, i) => {
            const meta = CAT_META[i]
            return (
              <Reveal key={cat.id} delay={i * 110} className="h-full">
                <TiltCard className="rounded-[32px] overflow-hidden shadow-xl h-full" maxTilt={5}>
                  <div className="flex h-full flex-col rounded-[32px] bg-white border-2 border-[#E5D7C9] overflow-hidden transition-all duration-300 hover:border-[#D65108]/50 hover:shadow-2xl">
                    {/* Visual Image Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={meta.image}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-[#D65108] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
                          Category {cat.id}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between text-white">
                        <h3 className="font-heading text-2xl font-extrabold">{cat.name}</h3>
                        <span className="rounded-full bg-white/20 backdrop-blur-md px-2.5 py-0.5 text-xs font-bold">
                          {cat.age} Years
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 flex flex-1 flex-col justify-between">
                      <div>
                        <p className="text-[15px] leading-relaxed text-ink/80 font-semibold">
                          {cat.body}
                        </p>

                        <div className="mt-5 space-y-2 pt-4 border-t border-[#E5D7C9]">
                          {meta.highlights.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs font-bold text-ink/70">
                              <Check className="h-3.5 w-3.5 text-[#D65108] shrink-0" strokeWidth={3} />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#E5D7C9]">
                        <CtaLink
                          href={SITE.joinUrl}
                          ctaId={`cat_join_${cat.id}`}
                          className="btn-primary w-full justify-center text-xs py-3 font-extrabold"
                        >
                          Join for Category {cat.id}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </CtaLink>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}