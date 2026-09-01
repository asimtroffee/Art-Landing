"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, MessageCircle, Trophy, Brain, Users, Calendar, CheckCircle2, Clock, ShieldCheck } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import Countdown from "@/components/ui/countdown"
import FloatingDoodles from "@/components/ui/floating-doodles"
import TiltCard from "@/components/ui/tilt-card"
import { HERO, SITE, WORKSHOPS } from "@/lib/constants"

const SLIDES = [
  { src: "/images/hero-slide-1.jpg", alt: "Children learning world memory champion techniques" },
  { src: "/images/hero-slide-2.jpg", alt: "Kids learning visual memory sketch notes" },
  { src: "/images/hero-slide-3.jpg", alt: "Creative workshop activities and mind maps" },
  { src: "/images/hero-slide-4.jpg", alt: "Young students building structured recall" },
  { src: "/images/hero-slide-5.jpg", alt: "Students presenting memory notes with confidence" },
]

const QUICK_SKILLS = [
  { num: "01", title: "Visual Sketch Notes", desc: "Turns textbook pages into memorable pictures" },
  { num: "02", title: "Spaced Memory Timing", desc: "Locks facts into permanent long-term memory" },
  { num: "03", title: "Structured Exam Logic", desc: "Step-by-step thinking for any question" },
  { num: "04", title: "Mind Maps & Synthesis", desc: "Organizes whole chapters into one page" },
  { num: "05", title: "Confident Presentation", desc: "Active recall out loud without stage fright" },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [activeSkill, setActiveSkill] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), [])

  /* auto-advance background slides every 7 s */
  useEffect(() => {
    const id = setInterval(next, 7000)
    return () => clearInterval(id)
  }, [next])

  /* cycle skills highlight */
  useEffect(() => {
    const skillTimer = setInterval(() => {
      setActiveSkill((s) => (s + 1) % QUICK_SKILLS.length)
    }, 3500)
    return () => clearInterval(skillTimer)
  }, [])

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

      {/* ── High-Contrast Gradient Overlay for Superior Text Legibility ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E0E1A]/95 via-[#281323]/85 to-[#361D2E]/65 pointer-events-none z-[1]" />

      {/* ── Background Slide Controls ── */}
      <div className="absolute bottom-12 left-8 z-20 hidden lg:flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 cursor-pointer border border-white/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-110 cursor-pointer border border-white/10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1.5 ml-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current ? "w-6 bg-[#EFA00B]" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Main Content Container (Split Grid) ── */}
      <div className="wrap relative z-10 flex-1 flex flex-col justify-center pt-24 pb-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* ════════ LEFT COLUMN: The Compelling Narrative & Call to Action ════════ */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Eyebrow Kicker */}
            <Reveal>
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white backdrop-blur-md shadow-sm">
                <Trophy className="h-4 w-4 text-[#EFA00B]" strokeWidth={2.5} />
                <span>{HERO.badge}</span>
                <span className="text-white/40">·</span>
                <span className="text-[#EFA00B]">5 Free Live Workshops</span>
              </div>
            </Reveal>

            {/* 2. Primary Headline */}
            <Reveal delay={80}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[4.1rem] font-normal leading-[1.04] text-white drop-shadow-2xl">
                <span className="block">{HERO.headlineTop}</span>
                <span className="block text-[#EFA00B] drop-shadow-[0_2px_16px_rgba(239,160,11,0.5)]">
                  {HERO.headlineAccent}
                </span>
              </h1>
            </Reveal>

            {/* 3. Clarifying Subheadline */}
            <Reveal delay={160}>
              <div className="rounded-2xl border border-white/15 bg-black/40 p-5 sm:p-6 backdrop-blur-md shadow-xl max-w-xl">
                <p className="text-base sm:text-lg font-bold leading-relaxed text-white">
                  {HERO.subheadline}
                </p>
                <div className="mt-3 pt-3 border-t border-white/15 flex items-center gap-2 text-xs font-extrabold text-[#EFA00B]">
                  <Sparkles className="h-4 w-4 shrink-0" />
                  <span>5 free live workshops · Same techniques · Any child can learn them</span>
                </div>
              </div>
            </Reveal>

            {/* 4. Action CTA Zone */}
            <Reveal delay={240}>
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-4">
                  <CtaLink
                    href={SITE.joinUrl}
                    ctaId="hero_join"
                    className="btn-primary shimmer-badge px-8 py-4 text-base font-black shadow-2xl transition-transform hover:scale-105 active:scale-95 flex items-center gap-3 bg-[#EFA00B] !text-[#361D2E] hover:bg-white"
                  >
                    <MessageCircle className="h-5 w-5 fill-current text-[#25D366]" />
                    {HERO.ctaLabel}
                    <ArrowRight className="h-5 w-5" strokeWidth={2.75} />
                  </CtaLink>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs sm:text-sm font-bold text-white backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                    {HERO.ctaSubtext}
                  </span>
                </div>

                {/* Micro Trust Proof */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-white/70 pt-1">
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
          </div>

          {/* ════════ RIGHT COLUMN: Interactive Masterclass & Countdown Card ════════ */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <TiltCard maxTilt={3}>
                <div className="rounded-3xl border-2 border-white/20 bg-[#361D2E]/90 p-6 sm:p-7 backdrop-blur-xl shadow-2xl text-white">
                  
                  {/* Top: Live Countdown Badge */}
                  <div className="mb-5 pb-4 border-b border-white/15">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D65108] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-sm">
                        <Clock className="h-3.5 w-3.5" />
                        Next Live Workshop
                      </span>
                      <span className="text-xs font-bold text-[#EFA00B]">Workshop 1 · 10 May</span>
                    </div>
                    <Countdown target={HERO.countdownTarget} title="Registration open · Starts in" />
                  </div>

                  {/* Middle: 5 Memory Superpowers Interactive Showcase */}
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-white/60 mb-3 flex items-center justify-between">
                      <span>The 5 World Champion Skills</span>
                      <span className="text-[#EFA00B] font-bold">100% Free</span>
                    </p>

                    <div className="space-y-2">
                      {QUICK_SKILLS.map((skill, idx) => {
                        const isActive = idx === activeSkill
                        return (
                          <div
                            key={skill.num}
                            onClick={() => setActiveSkill(idx)}
                            className={`flex items-center gap-3 rounded-xl p-2.5 transition-all duration-300 cursor-pointer ${
                              isActive
                                ? "bg-white/20 border border-[#EFA00B]/50 shadow-md translate-x-1"
                                : "bg-white/5 border border-transparent hover:bg-white/10"
                            }`}
                          >
                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-heading text-xs font-bold ${
                                isActive ? "bg-[#EFA00B] text-[#361D2E]" : "bg-white/15 text-white/80"
                              }`}
                            >
                              {skill.num}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className={`text-xs font-extrabold truncate ${isActive ? "text-[#EFA00B]" : "text-white"}`}>
                                {skill.title}
                              </p>
                              <p className="text-[11px] text-white/70 truncate">{skill.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Bottom: Direct Action Card Link */}
                  <div className="mt-5 pt-4 border-t border-white/15">
                    <CtaLink
                      href={SITE.joinUrl}
                      ctaId="hero_card_join"
                      className="w-full flex items-center justify-between rounded-xl bg-white/10 hover:bg-white/20 p-3 text-xs font-black text-white transition-colors border border-white/15"
                    >
                      <span className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#EFA00B]" />
                        Secure Your Child&apos;s Free Seat
                      </span>
                      <ArrowRight className="h-4 w-4 text-[#EFA00B]" />
                    </CtaLink>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

        </div>
      </div>

      {/* ── Anchored Trust Strip Along Bottom ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md py-4">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 text-xs font-extrabold text-white/80">
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

      {/* ── Cloud Scallop SVG Divider at bottom ── */}
      <div className="cloud-scallop-divider absolute bottom-0 left-0 right-0 z-10 pointer-events-none opacity-0" />
    </section>
  )
}