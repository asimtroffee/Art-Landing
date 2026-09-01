"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import { SITE } from "@/lib/constants"

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      const atBottom = window.scrollY > total - document.documentElement.clientHeight - 40
      setVisible(window.scrollY > 640 && !atBottom)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 backdrop-blur-md shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
      <div className="wrap flex items-center justify-between gap-3">
        <p className="hidden text-sm font-extrabold text-ink sm:block">
          <span className="text-tangerine font-extrabold">100% free</span> · memory techniques that make learning stick
        </p>
        <CtaLink
          href={SITE.joinUrl}
          ctaId="sticky_register"
          className="btn-primary px-6 py-2.5 text-sm shadow-md"
        >
          Join the WhatsApp Group
          <ArrowRight className="h-4 w-4" strokeWidth={2.75} />
        </CtaLink>
      </div>
    </div>
  )
}