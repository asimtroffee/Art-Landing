"use client"

import Image from "next/image"
import { ArrowRight, Sparkles, MessageCircle, Trophy, Users, Calendar, CheckCircle2, ShieldCheck, Clock, MousePointer2 } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import Countdown from "@/components/ui/countdown"
import FloatingDoodles from "@/components/ui/floating-doodles"
import { HERO, SITE } from "@/lib/constants"

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FAF6F0] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5D7C9]"
    >
      {/* ── Ambient Soft Background Glows & Doodles ── */}
      <FloatingDoodles className="z-[1] hidden sm:block opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#EFA00B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D65108]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="wrap relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* ── 1. Top Creator & Live Badge ── */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#D65108]/20 bg-[#FBE7DC] px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] shadow-sm mb-6">
            <Trophy className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
            <span>{HERO.badge}</span>
            <span className="text-[#D65108]/40">·</span>
            <span className="text-[#D65108]">5 Free Live Workshops</span>
          </div>
        </Reveal>

        {/* ── 2. Master Dribbble-Style Layered Headline with 3D Floating Elements ── */}
        <div className="relative w-full max-w-5xl py-4">
          
          {/* Top Line */}
          <Reveal delay={60}>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[0.95] text-[#361D2E] tracking-tight">
                TOP STUDENTS DON&apos;T HAVE
              </span>
            </div>
          </Reveal>

          {/* Middle Line with 3D Cards & 3D Brain */}
          <Reveal delay={120}>
            <div className="relative mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              
              {/* 3D Floating Memory Cards Fan */}
              <div className="relative group cursor-pointer">
                <div className="relative h-16 w-28 sm:h-24 sm:w-44 md:h-28 md:w-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-white ring-4 ring-[#EFA00B]/30 transform -rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
                  <Image
                    src="/images/3d-cards-fan.jpg"
                    alt="3D Memory Flashcards"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                {/* 3D Pointer Cursor */}
                <div className="absolute -bottom-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#361D2E] text-white shadow-lg border border-white transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
                  <MousePointer2 className="h-4 w-4 fill-white text-[#361D2E]" />
                </div>
              </div>

              {/* Text: BETTER BRAINS */}
              <span className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[0.95] text-[#361D2E] tracking-tight">
                BETTER BRAINS.
              </span>

              {/* 3D Glowing Brain with Lightbulb */}
              <div className="relative h-16 w-16 sm:h-22 sm:w-22 md:h-28 md:w-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-white ring-4 ring-[#D65108]/20 transform rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-110">
                <Image
                  src="/images/3d-brain-lightbulb.jpg"
                  alt="3D Brain & Lightbulb"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>

              {/* 3D Interactive Toggle Badge */}
              <div className="hidden lg:inline-flex items-center gap-2 rounded-full bg-white border-2 border-[#E5D7C9] px-3.5 py-1.5 shadow-md transform -rotate-3">
                <span className="h-3 w-3 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-wider text-[#361D2E]">Skill Mode: ON</span>
              </div>
            </div>
          </Reveal>

          {/* Bottom Line: THEY HAVE BETTER TECHNIQUES */}
          <Reveal delay={180}>
            <div className="relative mt-3 sm:mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              
              <span className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.8rem] font-normal leading-[0.95] text-[#D65108] tracking-tight relative inline-block drop-shadow-sm">
                THEY HAVE BETTER TECHNIQUES.
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

              {/* 3D Study Elements (Trophy & Stopwatch) */}
              <div className="relative h-14 w-28 sm:h-20 sm:w-40 md:h-24 md:w-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-white ring-4 ring-[#EFA00B]/30 transform rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105">
                <Image
                  src="/images/3d-study-elements.jpg"
                  alt="3D Trophy & Stopwatch"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>

            </div>
          </Reveal>

        </div>

        {/* ── 3. Subheadline Card (Crisp Solid White, No Blur) ── */}
        <Reveal delay={240}>
          <div className="mt-8 max-w-2xl mx-auto rounded-3xl border-2 border-[#E5D7C9] bg-white p-6 sm:p-7 shadow-lg text-center">
            <p className="text-base sm:text-lg font-bold leading-relaxed text-[#361D2E]">
              {HERO.subheadline}
            </p>
            <div className="mt-4 pt-3 border-t border-[#E5D7C9] flex items-center justify-center gap-2 text-xs sm:text-sm font-black text-[#D65108]">
              <Sparkles className="h-4 w-4 text-[#EFA00B] shrink-0" />
              <span>{HERO.hook}</span>
            </div>
          </div>
        </Reveal>

        {/* ── 4. High-Converting Dribbble-Style Pill CTA ── */}
        <Reveal delay={300}>
          <div className="mt-8 space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <CtaLink
                href={SITE.joinUrl}
                ctaId="hero_join"
                className="btn-primary shimmer-badge px-10 py-4 text-base sm:text-lg font-black shadow-2xl bg-[#D65108] hover:bg-[#B34407] !text-white flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 rounded-full"
              >
                <MessageCircle className="h-6 w-6 fill-current text-[#25D366]" />
                {HERO.ctaLabel}
                <ArrowRight className="h-5 w-5" strokeWidth={2.75} />
              </CtaLink>
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#E5D7C9] bg-white px-5 py-3 text-xs sm:text-sm font-extrabold text-[#361D2E] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#25D366] animate-pulse" />
                {HERO.ctaSubtext}
              </span>
            </div>

            {/* Micro Reassurances */}
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-extrabold text-[#361D2E]/75 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#D65108]" />
                For Ages 7–17
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#D65108]" />
                Live on Zoom
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#D65108]" />
                Leave anytime
              </span>
            </div>
          </div>
        </Reveal>

        {/* ── 5. Clean Light Countdown Timer Card ── */}
        <Reveal delay={360}>
          <div className="mt-8 inline-block rounded-2xl border-2 border-[#E5D7C9] bg-white px-6 py-4 shadow-md">
            <Countdown target={HERO.countdownTarget} title="Registration open · Next live workshop starts in" />
          </div>
        </Reveal>

      </div>

      {/* ── 6. Bottom Trust Strip Anchored Along Full Width ── */}
      <div className="relative z-10 mt-14 border-t border-[#E5D7C9] bg-white/90 py-4">
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