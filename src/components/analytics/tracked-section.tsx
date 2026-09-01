"use client"

import { useEffect, useRef } from "react"
import { analytics } from "@/lib/analytics/client"

type TrackedSectionProps = {
  trackId: string
  children: React.ReactNode
}

export default function TrackedSection({ trackId, children }: TrackedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const stateRef = useRef({
    inView: false,
    enteredAt: 0,
    dwellMs: 0,
    lastTick: 0,
    maxScrollPercent: 0,
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const computeScrollPercent = () => {
      const rect = el.getBoundingClientRect()
      const height = rect.height || 1
      const scrolledIn = (window.innerHeight - rect.top) / height
      return Math.max(0, Math.min(100, scrolledIn * 100))
    }

    const report = () => {
      const s = stateRef.current
      if (!s.enteredAt) return
      analytics.reportSection(trackId, {
        enteredAt: s.enteredAt,
        dwellMs: s.dwellMs,
        maxScrollPercent: s.maxScrollPercent,
      })
    }

    const tick = () => {
      const s = stateRef.current
      const now = Date.now()
      if (s.inView) {
        s.dwellMs += now - s.lastTick
        s.maxScrollPercent = Math.max(s.maxScrollPercent, computeScrollPercent())
      }
      s.lastTick = now
      report()
    }

    const onEnter = () => {
      const s = stateRef.current
      s.inView = true
      s.lastTick = Date.now()
      if (!s.enteredAt) s.enteredAt = Date.now()
      s.maxScrollPercent = Math.max(s.maxScrollPercent, computeScrollPercent())
    }

    const onLeave = () => {
      const s = stateRef.current
      if (!s.inView) return
      s.dwellMs += Date.now() - s.lastTick
      s.inView = false
      report()
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onEnter()
          else onLeave()
        })
      },
      { threshold: 0.5 },
    )
    observer.observe(el)

    const interval = setInterval(tick, 1000)
    const onVisible = () => {
      if (document.visibilityState === "visible") tick()
      else onLeave()
    }
    document.addEventListener("visibilitychange", onVisible)
    window.addEventListener(
      "scroll",
      () => {
        if (stateRef.current.inView) {
          stateRef.current.maxScrollPercent = Math.max(
            stateRef.current.maxScrollPercent,
            computeScrollPercent(),
          )
        }
      },
      { passive: true },
    )

    return () => {
      observer.disconnect()
      clearInterval(interval)
      document.removeEventListener("visibilitychange", onVisible)
      report()
    }
  }, [trackId])

  return <div ref={ref}>{children}</div>
}