import Image from "next/image"
import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import { WHO_IS_THIS_FOR, SITE } from "@/lib/constants"
import CtaLink from "@/components/ui/cta-link"

const CAT_IMAGES = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="scroll-mt-20 py-20 bg-white">
      <div className="wrap">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="kicker">Who it&apos;s for</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Built for every school student, <span className="italic text-cobalt">7 to 17</span>
            </h2>
            <p className="mt-3 text-lg text-[#361D2E]/80 font-semibold">{WHO_IS_THIS_FOR.subheadline}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {WHO_IS_THIS_FOR.categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 110}>
              <TiltCard className="rounded-[32px] overflow-hidden shadow-xl" maxTilt={6}>
                <div className="circle-overlay-card group relative aspect-[3/4] w-full">
                  <Image
                    src={CAT_IMAGES[i]}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  
                  {/* Dark vignette gradient for photo clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

                  {/* Translucent Amber/Tangerine Circle Overlay with breathing effect */}
                  <div className="absolute inset-4 sm:inset-6 flex items-center justify-center">
                    <div className="circle-badge-center flex h-72 w-72 flex-col items-center justify-center p-6 text-center text-white shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(239,160,11,0.3)]">
                      <p className="font-hand text-2xl font-bold text-white/90">Category {cat.id}</p>
                      <h3 className="font-heading text-3xl text-white mt-1 leading-none">{cat.name}</h3>
                      <span className="mt-2 rounded-full bg-white/20 px-3.5 py-0.5 text-xs font-black uppercase tracking-wider text-white backdrop-blur-sm">
                        {cat.age} Years Old
                      </span>
                      <p className="mt-3 text-xs leading-relaxed text-white/90 max-w-[200px] line-clamp-3">
                        {cat.body}
                      </p>
                      <CtaLink
                        href={SITE.joinUrl}
                        ctaId={`cat_register_${cat.id}`}
                        className="btn-sketch-crayon mt-4 px-4 py-1.5 text-xs text-[#361D2E] transition-transform hover:scale-110 active:scale-95"
                      >
                        Join Free
                      </CtaLink>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}