"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import Countdown from "@/components/ui/countdown"
import FloatingDoodles from "@/components/ui/floating-doodles"
import { HERO, SITE } from "@/lib/constants"

const SLIDES = [
  { src: "/images/hero-slide-1.jpg", alt: "Children's creative art workshop" },
  { src: "/images/hero-slide-2.jpg", alt: "Kids learning through art" },
  { src: "/images/hero-slide-3.jpg", alt: "Creative workshop activities" },
  { src: "/images/hero-slide-4.jpg", alt: "Young artists at work" },
  { src: "/images/hero-slide-5.jpg", alt: "Art studio workshop session" },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), [])

  /* auto-advance every 6 s */
  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section
      id="top"
      className="relative overflow-hidden text-white"
      style={{ minHeight: "100vh" }}
    >
      {/* ── Slide images with Ken-Burns scale effect ── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === current ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover object-center pointer-events-none transition-transform duration-[6000ms] ease-out ${
              i === current ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* ── Ambient Floating Creative Doodles ── */}
      <FloatingDoodles className="z-[2] hidden sm:block" />

      {/* ── Dark contrast overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35 pointer-events-none z-[1]" />

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 cursor-pointer shadow-lg"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 cursor-pointer shadow-lg"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      {/* ── Slide Indicators ── */}
      <div className="absolute bottom-16 right-8 z-20 hidden md:flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current ? "w-8 bg-[#EFA00B]" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Text content on top ── */}
      <div className="wrap relative z-10 flex flex-col justify-center py-32 lg:py-40" style={{ minHeight: "100vh" }}>
        <Reveal>
          <h1 className="mt-4 font-heading text-4xl font-normal leading-[1.08] text-white sm:text-5xl lg:text-[4.2rem] drop-shadow-lg">
            <span className="block">{HERO.headlineTop}</span>
            <span className="block text-[#EFA00B] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {HERO.headlineMiddle}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-6 max-w-xl text-xl leading-relaxed font-bold text-white/95 drop-shadow">
            {HERO.subheadline}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/80">
            {HERO.description}
          </p>
        </Reveal>

        <Reveal delay={270}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaLink
              href={SITE.joinUrl}
              ctaId="hero_join"
              className="btn-primary shimmer-badge px-8 py-4 text-base font-extrabold shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              Join the WhatsApp Group
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </CtaLink>
            <CtaLink
              href={SITE.registerUrl}
              ctaId="hero_register"
              className="btn-sketch-crayon px-7 py-3.5 text-base border-white bg-white/90 text-[#361D2E] shadow-xl hover:bg-white transition-transform hover:scale-105"
            >
              Get the Faber-Castell Kit · RM10
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-8">
            <Countdown target={HERO.countdownTarget} title="Next workshop starts in" />
          </div>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-white/90 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-[#EFA00B]" strokeWidth={2.5} />
            An official programme by Faber-Castell Malaysia · trusted since 1761
          </p>
        </Reveal>
      </div>

      {/* ── Cloud Scallop SVG Divider at bottom ── */}
      <div className="cloud-scallop-divider absolute bottom-0 left-0 right-0 z-10 pointer-events-none" />
    </section>
  )
}