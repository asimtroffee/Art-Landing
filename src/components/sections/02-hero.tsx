"use client"

import Image from "next/image"
import { ArrowRight, MessageCircle, Trophy, Users, Calendar, CheckCircle2, ShieldCheck, Sparkles, MousePointer, Lock, Zap } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Reveal from "@/components/ui/reveal"
import Countdown from "@/components/ui/countdown"
import { HERO, SITE } from "@/lib/constants"

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FAF6F0] pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E5D7C9]"
    >
      {/* ── Soft Ambient Radial Glows ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#D65108]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#EFA00B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="wrap relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* 1. Eyebrow Badge */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#D65108]/20 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] shadow-sm mb-6">
            <Trophy className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
            <span>{HERO.badge}</span>
            <span className="text-[#D65108]/40">·</span>
            <span className="text-[#D65108]">5 Free Live Workshops</span>
          </div>
        </Reveal>

        {/* 2. Main Headline with Interspersed 3D Visuals (Payway Style) */}
        <Reveal delay={80}>
          <div className="relative max-w-5xl mx-auto">
            
            {/* Top Row: "Top students" + 3D Fanned Cards + "don't have" */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              <span className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-normal leading-none text-[#361D2E] tracking-tight">
                Top students
              </span>

              {/* 3D Fanned Memory Cards Floating Token */}
              <div className="relative inline-flex items-center justify-center my-1 sm:my-0 group cursor-pointer transition-transform duration-300 hover:scale-110 hover:-rotate-1">
                <div className="relative h-14 sm:h-20 w-24 sm:w-36 drop-shadow-xl">
                  <Image
                    src="/images/hero-3d-cards.png"
                    alt="3D Memory Techniques Cards"
                    fill
                    priority
                    sizes="(max-width: 640px) 96px, 144px"
                    className="object-contain"
                  />
                </div>
                {/* 3D Dark Click Pointer Cursor */}
                <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#361D2E] text-white shadow-lg border border-white">
                  <MousePointer className="h-3.5 w-3.5 fill-white text-[#361D2E]" />
                </span>
              </div>

              <span className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-normal leading-none text-[#361D2E] tracking-tight">
                don&apos;t have
              </span>
            </div>

            {/* Middle Row: "better brains." + 3D Toggle Switch */}
            <div className="mt-2 sm:mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-normal leading-none text-[#361D2E] tracking-tight">
                better brains.
              </span>

              {/* 3D Toggle Switch Token */}
              <div className="relative inline-flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <div className="relative h-12 sm:h-16 w-20 sm:w-28 drop-shadow-lg">
                  <Image
                    src="/images/hero-3d-toggle.png"
                    alt="3D AURA Technique Active Toggle"
                    fill
                    sizes="(max-width: 640px) 80px, 112px"
                    className="object-contain"
                  />
                </div>
                <span className="absolute -top-2 -right-2 rounded-full bg-[#25D366] px-1.5 py-0.5 text-[9px] font-black text-white uppercase shadow-sm">
                  ON
                </span>
              </div>
            </div>

            {/* Bottom Row: "They have better" + "techniques." (Vibrant Orange & 3D Badges) */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span className="font-heading text-5xl sm:text-7xl lg:text-[5.6rem] font-normal leading-none text-[#D65108] tracking-tight">
                They have better
              </span>

              {/* 3D Brain Lightning Badge */}
              <div className="relative inline-flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-3">
                <div className="relative h-14 sm:h-20 w-14 sm:w-20 drop-shadow-xl">
                  <Image
                    src="/images/hero-3d-brain.png"
                    alt="3D Brain Power Lightning Token"
                    fill
                    sizes="(max-width: 640px) 56px, 80px"
                    className="object-contain"
                  />
                </div>
              </div>

              <span className="font-heading text-5xl sm:text-7xl lg:text-[5.6rem] font-normal leading-none text-[#D65108] tracking-tight relative">
                techniques.
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

              {/* 3D Memory Lock Token */}
              <div className="hidden md:inline-flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:-rotate-6">
                <div className="relative h-14 sm:h-16 w-14 sm:w-16 drop-shadow-xl">
                  <Image
                    src="/images/hero-3d-lock.png"
                    alt="3D Long-Term Retention Lock"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </Reveal>

        {/* 3. Subheadline (Clean, Centered, No Blur) */}
        <Reveal delay={160}>
          <div className="mt-8 max-w-2xl mx-auto space-y-3">
            <p className="text-base sm:text-lg font-bold leading-relaxed text-[#361D2E]/85">
              {HERO.subheadline}
            </p>
            <p className="text-xs sm:text-sm font-black text-[#D65108]">
              ✨ 5 free live workshops · The same techniques world memory champions use · Built for ages 7–17
            </p>
          </div>
        </Reveal>

        {/* 4. Payway-Style High-Contrast Capsule CTA Button */}
        <Reveal delay={240}>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="inline-flex items-center">
              <CtaLink
                href={SITE.joinUrl}
                ctaId="hero_join"
                className="group relative flex items-center justify-between rounded-2xl bg-[#361D2E] pl-7 pr-3 py-3.5 text-base sm:text-lg font-black text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#281323] hover:shadow-[0_20px_40px_rgba(54,29,46,0.25)]"
              >
                <span className="flex items-center gap-2.5 mr-6">
                  <MessageCircle className="h-5 w-5 fill-[#25D366] text-[#25D366]" />
                  {HERO.ctaLabel}
                </span>
                
                {/* Payway-Style Vibrant Orange Triangular / Pill Accent Corner */}
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D65108] text-white shadow-md transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-[#EFA00B] group-hover:text-[#361D2E]">
                  <ArrowRight className="h-5 w-5" strokeWidth={2.75} />
                </span>
              </CtaLink>
            </div>

            {/* Reassurance Tags */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-extrabold text-[#361D2E]/70 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                100% Free Live Attendance
              </span>
              <span className="text-[#361D2E]/30">·</span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#D65108]" />
                For Ages 7–17 (Primary &amp; Secondary)
              </span>
              <span className="text-[#361D2E]/30">·</span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-[#D65108]" />
                No Payment Needed
              </span>
            </div>
          </div>
        </Reveal>

        {/* 5. Clean Countdown Timer (Solid White Container, Zero Blur) */}
        <Reveal delay={320}>
          <div className="mt-10 inline-block rounded-2xl border-2 border-[#E5D7C9] bg-white px-6 py-4 shadow-sm">
            <Countdown target={HERO.countdownTarget} title="Registration open · Next live workshop starts in" />
          </div>
        </Reveal>

      </div>

      {/* ── Anchored Trust Strip Along Bottom ── */}
      <div className="relative z-10 mt-14 border-t border-[#E5D7C9] bg-white py-4">
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