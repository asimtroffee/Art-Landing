"use client"

import { useEffect } from "react"
import { analytics } from "@/lib/analytics/client"

export default function ScrollDepthTracker() {
  useEffect(() => {
    let sent = false
    const handleScroll = () => {
      if (sent) return
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      if (max <= 0) return
      const pct = Math.round((window.scrollY / max) * 100)
      for (const depth of [25, 50, 75, 100] as const) {
        if (pct >= depth) analytics.trackScroll(depth)
      }
      if (pct >= 100) sent = true
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}