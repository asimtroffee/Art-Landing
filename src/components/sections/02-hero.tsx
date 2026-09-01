"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, MessageCircle, Trophy, Users, Calendar, CheckCircle2, ShieldCheck, Sparkles, MousePointer, Lock, Zap, Clock } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import Countdown from "@/components/ui/countdown"
import { HERO, SITE } from "@/lib/constants"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FAF7F2] pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E5D7C9]"
    >
      {/* ── Soft Ambient Glows ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[#D65108]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#EFA00B]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="wrap max-w-7xl mx-auto relative z-10">
        
        {/* ── Top Eyebrow Badge ── */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#D65108]/20 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] shadow-sm"
          >
            <Trophy className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
            <span>{HERO.badge}</span>
            <span className="text-[#D65108]/40">·</span>
            <span className="text-[#D65108]">5 Free Live Workshops</span>
          </motion.div>
        </div>

        {/* ── Hero Center Stage with Floating 3D Elements (Payway Style) ── */}
        <div className="relative min-h-[420px] lg:min-h-[460px] flex flex-col items-center justify-center">
          
          {/* ════════ LEFT FLOATING 3D COMPONENT: Fanned Technique Cards + Cursor ════════ */}
          <motion.div
            className="hidden xl:block absolute left-2 top-8 z-20 pointer-events-auto"
            animate={{
              x: mousePosition.x * -0.8,
              y: [0, -12, 0],
              rotate: [-5, -3, -5],
            }}
            transition={{
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              x: { type: "spring", stiffness: 50, damping: 20 },
            }}
          >
            <div className="relative group cursor-pointer">
              {/* Card stack with drop shadow */}
              <div className="relative w-52 h-52 transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/images/hero-3d-cards.png"
                  alt="3D Memory Technique Cards"
                  fill
                  priority
                  sizes="208px"
                  className="object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]"
                />
              </div>

              {/* 3D Dark Mouse Pointer */}
              <motion.div
                className="absolute bottom-4 right-6 flex items-center gap-1.5 rounded-full bg-[#361D2E] pl-2 pr-3 py-1 text-white shadow-xl border-2 border-white"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <MousePointer className="h-3.5 w-3.5 fill-white text-[#361D2E]" />
                <span className="text-[10px] font-black uppercase tracking-wider">AURA Cards</span>
              </motion.div>

              {/* Status Chip */}
              <div className="absolute -top-2 left-4 rounded-full bg-white border border-[#E5D7C9] px-3 py-1 text-[11px] font-black text-[#D65108] shadow-sm">
                4 Champion Systems
              </div>
            </div>
          </motion.div>

          {/* ════════ RIGHT FLOATING 3D COMPONENT: Toggle + Brain Lightning + Lock ════════ */}
          <motion.div
            className="hidden xl:block absolute right-2 top-10 z-20 pointer-events-auto"
            animate={{
              x: mousePosition.x * 0.8,
              y: [0, 14, 0],
              rotate: [4, 6, 4],
            }}
            transition={{
              y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 6.5, ease: "easeInOut" },
              x: { type: "spring", stiffness: 50, damping: 20 },
            }}
          >
            <div className="relative flex flex-col items-center gap-3">
              {/* 3D Toggle Switch */}
              <div className="relative w-40 h-20 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/hero-3d-toggle.png"
                  alt="3D AURA Method Toggle"
                  fill
                  sizes="160px"
                  className="object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.12)]"
                />
                <span className="absolute -top-1 right-2 rounded-full bg-[#25D366] px-2 py-0.5 text-[10px] font-black text-white shadow-md">
                  TECHNIQUE: ON
                </span>
              </div>

              {/* Stacked 3D Icons Row */}
              <div className="flex items-center gap-3 mt-1">
                {/* 3D Brain */}
                <div className="relative w-20 h-20 transition-transform duration-300 hover:scale-110">
                  <Image
                    src="/images/hero-3d-brain.png"
                    alt="3D Brain Power Token"
                    fill
                    sizes="80px"
                    className="object-contain drop-shadow-lg"
                  />
                </div>

                {/* 3D Lock */}
                <div className="relative w-16 h-16 transition-transform duration-300 hover:scale-110">
                  <Image
                    src="/images/hero-3d-lock.png"
                    alt="3D Permanent Retention Lock"
                    fill
                    sizes="64px"
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Retain pill */}
              <div className="rounded-full bg-white border border-[#E5D7C9] px-3.5 py-1 text-[11px] font-black text-[#361D2E] shadow-sm flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                90%+ Long-Term Recall
              </div>
            </div>
          </motion.div>

          {/* ════════ MAIN TYPOGRAPHY (Commanding & Clean) ════════ */}
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-5xl sm:text-7xl lg:text-[5.8rem] font-normal leading-[1.03] text-[#361D2E] tracking-tight"
            >
              Top students don&apos;t have{" "}
              <span className="block text-[#361D2E]">better brains.</span>
              <span className="block text-[#D65108] relative inline-block mt-2">
                They have better techniques.
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
            </motion.h1>

            {/* Mobile 3D preview cards row */}
            <div className="xl:hidden flex items-center justify-center gap-4 my-6">
              <div className="relative w-28 h-28 drop-shadow-md">
                <Image
                  src="/images/hero-3d-cards.png"
                  alt="3D Memory Cards"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
              <div className="relative w-24 h-14 drop-shadow-md">
                <Image
                  src="/images/hero-3d-toggle.png"
                  alt="3D Toggle"
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16 drop-shadow-md">
                <Image
                  src="/images/hero-3d-brain.png"
                  alt="3D Brain"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* ════════ Subheadline (Crisp & Readable) ════════ */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-base sm:text-xl font-bold leading-relaxed text-[#361D2E]/80 max-w-2xl mx-auto"
            >
              {HERO.subheadline}
            </motion.p>

            {/* ════════ Payway-Style Capsule CTA Button ════════ */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-col items-center gap-4"
            >
              <div className="inline-flex items-center">
                <CtaLink
                  href={SITE.joinUrl}
                  ctaId="hero_join"
                  className="group relative flex items-center justify-between rounded-2xl bg-[#361D2E] pl-8 pr-3 py-3.5 text-base sm:text-lg font-black text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#281323] hover:shadow-[0_20px_40px_rgba(54,29,46,0.25)]"
                >
                  <span className="flex items-center gap-3 mr-6">
                    <MessageCircle className="h-6 w-6 fill-[#25D366] text-[#25D366]" />
                    {HERO.ctaLabel}
                  </span>
                  
                  {/* Payway-Style Vibrant Orange Arrow Wedge */}
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D65108] text-white shadow-md transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#EFA00B] group-hover:text-[#361D2E]">
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
            </motion.div>

            {/* ════════ Countdown Timer (Clean Solid Container) ════════ */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 inline-block rounded-2xl border-2 border-[#E5D7C9] bg-white px-6 py-4 shadow-sm"
            >
              <Countdown target={HERO.countdownTarget} title="Registration open · Next live workshop starts in" />
            </motion.div>

          </div>

        </div>

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