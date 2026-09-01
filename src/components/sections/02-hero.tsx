"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, MessageCircle, Clock, Users, Calendar, CheckCircle2 } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import Countdown from "@/components/ui/countdown"
import FloatingDoodles from "@/components/ui/floating-doodles"
import { HERO, SITE } from "@/lib/constants"

const SLIDES = [
  { src: "/images/hero-slide-1.jpg", alt: "Children's creative memory workshop" },
  { src: "/images/hero-slide-2.jpg", alt: "Kids learning through visual memory techniques" },
  { src: "/images/hero-slide-3.jpg", alt: "Creative workshop activities and sketch noting" },
  { src: "/images/hero-slide-4.jpg", alt: "Young students building mind maps" },
  { src: "/images/hero-slide-5.jpg", alt: "Art studio memory workshop session" },
]

const PILLS = [
  { label: "Ages 7–17", icon: Users },
  { label: "5 Live Sessions", icon: Calendar },
  { label: "100% Free Attendance", icon: CheckCircle2 },
  { label: "Proven Memory Science", icon: Sparkles },
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

      {/* ── Dark contrast overlay for maximum readability ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40 pointer-events-none z-[1]" />

      {/* ── Prev / Next arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 cursor-pointer shadow-lg border border-white/10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 cursor-pointer shadow-lg border border-white/10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* ── Slide Indicators ── */}
      <div className="absolute bottom-20 right-8 z-20 hidden md:flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current ? "w-8 bg-[#EFA00B]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Content on top ── */}
      <div className="wrap relative z-10 flex flex-col justify-center py-28 lg:py-36" style={{ minHeight: "100vh" }}>
        {/* Creator Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white/90 backdrop-blur-md shadow-sm mb-6">
            <Sparkles className="h-4 w-4 text-[#EFA00B]" strokeWidth={2.5} />
            {HERO.badge}
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={80}>
          <h1 className="font-heading text-4xl font-normal leading-[1.06] text-white sm:text-5xl lg:text-[4.2rem] drop-shadow-xl max-w-4xl">
            <span className="block">{HERO.headlineTop}</span>
            <span className="block text-[#EFA00B] drop-shadow-[0_2px_12px_rgba(239,160,11,0.4)]">
              {HERO.headlineAccent}
            </span>
          </h1>
        </Reveal>

        {/* Relatable Story Card */}
        <Reveal delay={160}>
          <div className="mt-6 max-w-2xl rounded-2xl border border-white/15 bg-black/35 p-6 backdrop-blur-md shadow-2xl">
            <div className="space-y-2.5">
              <p className="text-lg sm:text-xl font-bold leading-relaxed text-white">
                {HERO.paragraphs[0]}
              </p>
              <p className="text-lg sm:text-xl font-extrabold text-[#EFA00B] leading-relaxed">
                {HERO.paragraphs[1]}
              </p>
              <p className="text-sm sm:text-base font-semibold leading-relaxed text-white/80 border-t border-white/10 pt-2.5">
                {HERO.paragraphs[2]}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Solution Hook */}
        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed font-extrabold text-white drop-shadow">
            <span className="text-[#EFA00B]">AURA fixes that.</span> 5 free live workshops that teach a simple memory system your child can use for every exam, in every subject.
          </p>
        </Reveal>

        {/* Primary CTA + Reassurance */}
        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaLink
              href={SITE.joinUrl}
              ctaId="hero_join"
              className="btn-primary shimmer-badge px-8 py-4 text-base font-extrabold shadow-2xl transition-transform hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              <MessageCircle className="h-5 w-5 fill-current" />
              {HERO.ctaLabel}
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </CtaLink>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#EFA00B] animate-pulse" />
              {HERO.ctaSubtext}
            </span>
          </div>
        </Reveal>

        {/* Countdown & Feature Pills */}
        <Reveal delay={380}>
          <div className="mt-8 max-w-xl">
            <Countdown target={HERO.countdownTarget} title="Next live workshop starts in" />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {PILLS.map((pill) => {
              const Icon = pill.icon
              return (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-bold text-white/85 backdrop-blur-md"
                >
                  <Icon className="h-3.5 w-3.5 text-[#EFA00B]" strokeWidth={2.5} />
                  {pill.label}
                </span>
              )
            })}
          </div>
        </Reveal>
      </div>

      {/* ── Cloud Scallop SVG Divider at bottom ── */}
      <div className="cloud-scallop-divider absolute bottom-0 left-0 right-0 z-10 pointer-events-none" />
    </section>
  )
}