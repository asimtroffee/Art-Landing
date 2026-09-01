"use client"

import Image from "next/image"
import { ArrowRight, Sparkles, MessageCircle, Trophy, Users, Calendar, CheckCircle2, ShieldCheck, Clock, Pencil, Brain, Mic } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import Countdown from "@/components/ui/countdown"
import FloatingDoodles from "@/components/ui/floating-doodles"
import { HERO, SITE } from "@/lib/constants"

const HERO_PHOTOS = [
  {
    src: "/images/hero-slide-1.jpg",
    alt: "Students creating visual sketch notes",
    tag: "Visual Sketch Notes",
    icon: Pencil,
    rotation: "-rotate-2",
  },
  {
    src: "/images/hero-slide-2.jpg",
    alt: "Students learning spaced memory techniques",
    tag: "Spaced Retention",
    icon: Brain,
    rotation: "rotate-1",
  },
  {
    src: "/images/hero-slide-5.jpg",
    alt: "Student presenting notes with confidence",
    tag: "Active Recall",
    icon: Mic,
    rotation: "-rotate-1",
  },
]

const PILLS = [
  { label: "Ages 7–17 (Primary & Secondary)", icon: Users },
  { label: "5 Live 2-Hour Zoom Sessions", icon: Calendar },
  { label: "100% Free Attendance", icon: CheckCircle2 },
  { label: "World Memory Champion Methods", icon: Trophy },
]

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#FBF5ED] pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E5D7C9]"
    >
      {/* ── Ambient Floating Creative Doodles ── */}
      <FloatingDoodles className="z-[1] hidden sm:block opacity-60 pointer-events-none" />

      {/* ── Background Soft Ambient Glows ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#D65108]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#EFA00B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Centered Main Content ── */}
      <div className="wrap relative z-10 flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* 1. Eyebrow Kicker */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#D65108]/20 bg-[#FBE7DC] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] shadow-sm">
              <Trophy className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
              <span>{HERO.badge}</span>
              <span className="text-[#D65108]/40">·</span>
              <span className="text-[#D65108]">5 Free Live Workshops</span>
            </div>
          </Reveal>

          {/* 2. Primary Headline */}
          <Reveal delay={80}>
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[4.6rem] font-normal leading-[1.04] text-[#361D2E] tracking-tight">
              <span className="block">{HERO.headlineTop}</span>
              <span className="block text-[#D65108] relative inline-block mt-1">
                {HERO.headlineAccent}
                <svg
                  className="absolute bottom-0 left-0 w-full h-3 sm:h-4 pointer-events-none"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </Reveal>

          {/* 3. Clarifying Subheadline Card (Solid White, No Blur) */}
          <Reveal delay={160}>
            <div className="max-w-2xl mx-auto rounded-3xl border-2 border-[#E5D7C9] bg-white p-6 sm:p-7 shadow-md">
              <p className="text-base sm:text-lg font-bold leading-relaxed text-[#361D2E]">
                {HERO.subheadline}
              </p>
              <div className="mt-4 pt-3 border-t border-[#E5D7C9] flex items-center justify-center gap-2 text-xs sm:text-sm font-black text-[#D65108]">
                <Sparkles className="h-4 w-4 text-[#EFA00B] shrink-0" />
                <span>{HERO.hook}</span>
              </div>
            </div>
          </Reveal>

          {/* 4. Action CTA Zone */}
          <Reveal delay={240}>
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <CtaLink
                  href={SITE.joinUrl}
                  ctaId="hero_join"
                  className="btn-primary shimmer-badge px-9 py-4 text-base sm:text-lg font-black shadow-xl bg-[#D65108] hover:bg-[#B34407] !text-white flex items-center gap-3 transition-transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="h-6 w-6 fill-current text-[#25D366]" />
                  {HERO.ctaLabel}
                  <ArrowRight className="h-5 w-5" strokeWidth={2.75} />
                </CtaLink>
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#E5D7C9] bg-white px-4 py-2.5 text-xs sm:text-sm font-extrabold text-[#361D2E] shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                  {HERO.ctaSubtext}
                </span>
              </div>

              {/* Micro Trust Points */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-extrabold text-[#361D2E]/70 pt-1">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D65108]" />
                  For Ages 7–17
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D65108]" />
                  Live on Zoom
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D65108]" />
                  Leave anytime
                </span>
              </div>
            </div>
          </Reveal>

          {/* 5. Countdown Card (Solid White, No Blur) */}
          <Reveal delay={320}>
            <div className="inline-block rounded-2xl border-2 border-[#E5D7C9] bg-white px-6 py-4 shadow-sm">
              <Countdown target={HERO.countdownTarget} title="Registration open · Next live workshop starts in" />
            </div>
          </Reveal>

          {/* 6. Real Workshop Photo Preview Row (Crisp Light Cards) */}
          <Reveal delay={400}>
            <div className="pt-6 grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
              {HERO_PHOTOS.map((photo) => {
                const Icon = photo.icon
                return (
                  <div
                    key={photo.tag}
                    className={`sketch-card overflow-hidden rounded-2xl border-2 border-[#E5D7C9] bg-white p-2.5 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:rotate-0 ${photo.rotation}`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/5">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="pt-2.5 pb-1 px-1 flex items-center justify-between text-xs font-black text-[#361D2E]">
                      <span>{photo.tag}</span>
                      <Icon className="h-3.5 w-3.5 text-[#D65108]" />
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>

        </div>
      </div>

      {/* ── Anchored Trust Strip Along Bottom ── */}
      <div className="relative z-10 mt-14 border-t border-[#E5D7C9] bg-white/80 py-4">
        <div className="wrap flex flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-extrabold text-[#361D2E]/80">
          <span className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-[#D65108]" />
            World Memory Champion Techniques
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#D65108]" />
            5 Live 2-Hour Interactive Sessions
          </span>
          <span className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#D65108]" />
            Primary &amp; Secondary (Ages 7–17)
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-[#D65108]" />
            100% Free · Created by Troffee Education
          </span>
        </div>
      </div>
    </section>
  )
}