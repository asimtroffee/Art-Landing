"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, MessageCircle, Trophy, Users, Calendar, CheckCircle2, ShieldCheck } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import Countdown from "@/components/ui/countdown"
import FloatingDoodles from "@/components/ui/floating-doodles"
import { HERO, SITE } from "@/lib/constants"

const SLIDES = [
  { src: "/images/hero-slide-1.jpg", alt: "Children learning world memory champion techniques" },
  { src: "/images/hero-slide-2.jpg", alt: "Kids learning visual memory sketch notes" },
  { src: "/images/hero-slide-3.jpg", alt: "Creative workshop activities and mind maps" },
  { src: "/images/hero-slide-4.jpg", alt: "Young students building structured recall" },
  { src: "/images/hero-slide-5.jpg", alt: "Students presenting memory notes with confidence" },
]

const PILLS = [
  { label: "Ages 7–17 (Primary & Secondary)", icon: Users },
  { label: "5 Live 2-Hour Zoom Sessions", icon: Calendar },
  { label: "100% Free Attendance", icon: CheckCircle2 },
  { label: "World Memory Champion Methods", icon: Trophy },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), [])

  /* auto-advance background slides every 7 s */
  useEffect(() => {
    const id = setInterval(next, 7000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section
      id="top"
      className="relative overflow-hidden text-white min-h-screen flex flex-col justify-between"
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
            className={`object-cover object-center pointer-events-none transition-transform duration-[7000ms] ease-out ${
              i === current ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      ))}

      {/* ── Ambient Floating Creative Doodles ── */}
      <FloatingDoodles className="z-[2] hidden sm:block" />

      {/* ── High-Contrast Centered Dark Overlay for Maximum Readability ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E0E1A]/90 via-[#281323]/85 to-[#1E0E1A]/95 pointer-events-none z-[1]" />

      {/* ── Subtle Background Slide Arrows ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 cursor-pointer border border-white/10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 cursor-pointer border border-white/10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* ── Slide Indicators ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current ? "w-8 bg-[#EFA00B]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Centered Main Content Container ── */}
      <div className="wrap relative z-10 flex-1 flex flex-col justify-center items-center text-center py-28 lg:py-36">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* 1. Eyebrow Kicker */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md shadow-sm">
              <Trophy className="h-4 w-4 text-[#EFA00B]" strokeWidth={2.5} />
              <span>{HERO.badge}</span>
              <span className="text-white/40">·</span>
              <span className="text-[#EFA00B]">5 Free Live Workshops</span>
            </div>
          </Reveal>

          {/* 2. Primary Headline (Centered) */}
          <Reveal delay={80}>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[4.5rem] font-normal leading-[1.04] text-white drop-shadow-2xl">
              <span className="block">{HERO.headlineTop}</span>
              <span className="block text-[#EFA00B] drop-shadow-[0_2px_20px_rgba(239,160,11,0.5)]">
                {HERO.headlineAccent}
              </span>
            </h1>
          </Reveal>

          {/* 3. Clarifying Subheadline (Centered) */}
          <Reveal delay={160}>
            <div className="max-w-2xl mx-auto rounded-3xl border border-white/15 bg-black/45 p-6 sm:p-7 backdrop-blur-md shadow-2xl">
              <p className="text-base sm:text-xl font-bold leading-relaxed text-white">
                {HERO.subheadline}
              </p>
              <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold text-[#EFA00B]">
                <Sparkles className="h-4 w-4 shrink-0" />
                <span>{HERO.hook}</span>
              </div>
            </div>
          </Reveal>

          {/* 4. Action CTA Zone (Centered) */}
          <Reveal delay={240}>
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CtaLink
                  href={SITE.joinUrl}
                  ctaId="hero_join"
                  className="btn-primary shimmer-badge px-9 py-4 text-base sm:text-lg font-black shadow-2xl transition-transform hover:scale-105 active:scale-95 flex items-center gap-3 bg-[#EFA00B] !text-[#361D2E] hover:bg-white"
                >
                  <MessageCircle className="h-6 w-6 fill-current text-[#25D366]" />
                  {HERO.ctaLabel}
                  <ArrowRight className="h-5 w-5" strokeWidth={2.75} />
                </CtaLink>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-white backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                  {HERO.ctaSubtext}
                </span>
              </div>

              {/* Micro Trust Proof */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-white/75 pt-1">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#EFA00B]" />
                  For Ages 7–17
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#EFA00B]" />
                  Live on Zoom
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#EFA00B]" />
                  Leave anytime
                </span>
              </div>
            </div>
          </Reveal>

          {/* 5. Centered Countdown Timer */}
          <Reveal delay={320}>
            <div className="max-w-xl mx-auto pt-2">
              <Countdown target={HERO.countdownTarget} title="Registration open · Next live workshop starts in" />
            </div>
          </Reveal>

          {/* 6. Feature Pills (Centered) */}
          <Reveal delay={380}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {PILLS.map((pill) => {
                const Icon = pill.icon
                return (
                  <span
                    key={pill.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white/90 backdrop-blur-md"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#EFA00B]" strokeWidth={2.5} />
                    {pill.label}
                  </span>
                )
              })}
            </div>
          </Reveal>

        </div>
      </div>

      {/* ── Anchored Trust Strip Along Bottom ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/45 backdrop-blur-md py-4">
        <div className="wrap flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-extrabold text-white/80">
          <span className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-[#EFA00B]" />
            World Memory Champion Techniques
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#EFA00B]" />
            5 Live 2-Hour Interactive Sessions
          </span>
          <span className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#EFA00B]" />
            Primary &amp; Secondary (Ages 7–17)
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#EFA00B]" />
            100% Free · Created by Troffee Education
          </span>
        </div>
      </div>
    </section>
  )
}