"use client"

import { useEffect, useState } from "react"
import { ArrowRight, MessageCircle } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import { SITE } from "@/lib/constants"

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const atBottom = window.scrollY > total - document.documentElement.clientHeight - 80
      setVisible(window.scrollY > 640 && !atBottom)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5D7C9] bg-white/95 p-3 backdrop-blur-md shadow-[0_-8px_30px_rgba(0,0,0,0.1)] transition-transform duration-300">
      <div className="wrap flex items-center justify-between gap-3">
        <div className="hidden sm:block">
          <p className="text-sm font-extrabold text-[#361D2E]">
            <span className="text-[#D65108] font-black">100% Free Workshops</span> · Memory tricks that actually stick
          </p>
          <p className="text-xs font-semibold text-[#361D2E]/60">
            Created by Troffee Education for students aged 7–17
          </p>
        </div>
        <CtaLink
          href={SITE.joinUrl}
          ctaId="sticky_register"
          className="btn-primary shimmer-badge px-6 py-2.5 text-xs sm:text-sm font-extrabold shadow-md flex items-center gap-2 w-full sm:w-auto justify-center"
        >
          <MessageCircle className="h-4 w-4 fill-current" />
          Join the WhatsApp Group
          <ArrowRight className="h-4 w-4" strokeWidth={2.75} />
        </CtaLink>
      </div>
    </div>
  )
}