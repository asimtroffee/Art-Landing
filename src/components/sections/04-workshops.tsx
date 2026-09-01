import Image from "next/image"
import { Calendar, Clock, Check, Pencil, Brain, Lightbulb, BookOpen, Mic, ArrowRight, Sparkles } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import TiltCard from "@/components/ui/tilt-card"
import { SITE, WORKSHOPS } from "@/lib/constants"

const WORKSHOP_META = [
  { icon: Pencil, color: "#D65108", bgSoft: "#FBE7DC", photo: "/images/hero-slide-1.jpg" },
  { icon: Brain, color: "#EFA00B", bgSoft: "#FDF3DD", photo: "/images/hero-slide-2.jpg" },
  { icon: Lightbulb, color: "#361D2E", bgSoft: "#E9E0E6", photo: "/images/hero-slide-3.jpg" },
  { icon: BookOpen, color: "#D65108", bgSoft: "#FBE7DC", photo: "/images/hero-slide-4.jpg" },
  { icon: Mic, color: "#EFA00B", bgSoft: "#FDF3DD", photo: "/images/hero-slide-5.jpg" },
]

const SHOWCASE = [
  { src: "/images/img-not-sure-how-to-start-2026.png", alt: "AURA workshop illustration" },
  { src: "/images/img-first-attempt-1.png", alt: "A student's first creative quiz attempt" },
  { src: "/images/img-next-top-student-2026-v4-scoreawithfc.jpg", alt: "Could your child be the next AURA Top Student?" },
]

export default function Workshops() {
  return (
    <section id="curriculum" className="scroll-mt-20 overflow-hidden bg-gradient-to-b from-white via-[#FBF5ED] to-white py-20 lg:py-28">
      <div className="wrap">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="kicker">The 5 free workshops</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Five memory skills that{" "}
              <span className="italic text-cobalt relative inline-block">
                outlast any exam
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 text-lg font-semibold text-ink/70">
              Five live workshops, 100% free to attend. From the first memory trick to Grand Finale-ready.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {WORKSHOPS.map((ws, i) => {
            const meta = WORKSHOP_META[i]
            const Icon = meta.icon
            return (
              <Reveal key={ws.num} delay={i * 80} className="h-full">
                <TiltCard maxTilt={4} className="h-full">
                  <article
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border-2 bg-white shadow-[0_12px_40px_rgba(54,29,46,0.08)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(54,29,46,0.16)]"
                    style={{ borderColor: `${meta.color}30` }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={meta.photo}
                        alt={ws.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <span
                        className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-white font-heading text-lg shadow-lg"
                        style={{ background: meta.color }}
                      >
                        {i + 1}
                      </span>
                      <span className="absolute bottom-3 right-4 inline-flex items-center gap-1.5 rounded-full bg-[#D65108] px-3 py-1 text-xs font-extrabold text-white shadow-md">
                        Free
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold text-ink/55">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" style={{ color: meta.color }} strokeWidth={2.5} />
                          {ws.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" style={{ color: meta.color }} strokeWidth={2.5} />
                          {ws.time}
                        </span>
                      </div>

                      <h3 className="mt-3 font-heading text-2xl font-extrabold leading-tight text-ink sm:text-[1.7rem]">
                        {ws.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{ws.body}</p>

                      <ul className="mt-4 space-y-2">
                        {ws.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm font-semibold text-ink/70">
                            <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: meta.color }} strokeWidth={3} />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6">
                        <CtaLink
                          href={SITE.joinUrl}
                          ctaId={`curriculum_register_${i}`}
                          className="btn-sketch-crayon w-full justify-center text-xs"
                        >
                          <Icon className="h-4 w-4" strokeWidth={2.2} />
                          Join this workshop free
                        </CtaLink>
                      </div>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            )
          })}

          <Reveal delay={400} className="h-full">
            <article className="flex h-full flex-col items-start justify-center rounded-3xl bg-[#D65108] p-8 text-white shadow-[0_12px_40px_rgba(214,81,8,0.25)]">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
                <Sparkles className="h-7 w-7 text-[#EFA00B]" strokeWidth={2.5} />
              </span>
              <h3 className="mt-5 font-heading text-2xl font-extrabold leading-tight">
                Complete all 5 and you&apos;re Olympiad-ready.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Every skill you need for the AURA Student Olympiad, taught live and free. Join the WhatsApp group to
                book your child&apos;s spot.
              </p>
              <CtaLink
                href={SITE.joinUrl}
                ctaId="roadmap_register_all"
                className="btn-primary mt-6 w-full justify-center border-2 border-white/20 bg-white text-[#D65108] !shadow-lg"
              >
                Join the WhatsApp Group
                <ArrowRight className="h-4 w-4" strokeWidth={2.75} />
              </CtaLink>
            </article>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SHOWCASE.map((img, i) => (
            <Reveal key={img.src} delay={i * 100}>
              <TiltCard maxTilt={5}>
                <figure className="overflow-hidden rounded-2xl border-2 border-line p-1.5 bg-white shadow-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={640}
                    height={420}
                    className="h-full w-full rounded-xl object-cover transition-transform duration-500 hover:scale-103"
                  />
                </figure>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 text-center font-hand text-2xl font-bold text-cobalt">
            Handwritten, colourful and full of personality, just like every student who makes one.
          </p>
        </Reveal>
      </div>
    </section>
  )
}