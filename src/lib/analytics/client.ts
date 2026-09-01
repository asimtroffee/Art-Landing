"use client"

import type {
  AnalyticsEvent,
  CtaEvent,
  FormEvent,
  ScrollEvent,
  SectionState,
  SessionMeta,
} from "@/lib/analytics/schema"
import type { SiteConfig } from "@/lib/analytics/site-config"

const FLUSH_INTERVAL_MS = 5000

function consentKey(siteId: string) {
  return `sb-consent.${siteId}`
}

function sessionKey(siteId: string) {
  return `sb-session.${siteId}`
}

function getConsent(siteId: string): "granted" | "denied" | null {
  if (typeof window === "undefined") return null
  const v = window.localStorage.getItem(consentKey(siteId))
  if (v === "granted" || v === "denied") return v
  return null
}

function isDnt() {
  return navigator.doNotTrack === "1" || navigator.doNotTrack === "yes"
}

function detectDevice(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") return "desktop"
  const ua = navigator.userAgent
  if (/iPad|Tablet|PlayBook/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) return "tablet"
  if (/Mobi|iPhone|Android/i.test(ua)) return "mobile"
  return "desktop"
}

function getTrafficSource(): string {
  if (typeof window === "undefined") return "direct"
  const params = new URLSearchParams(window.location.search)
  const source = params.get("utm_source")
  const campaign = params.get("utm_campaign")
  if (source) return campaign ? `utm_${source}_${campaign}` : `utm_${source}`
  const ref = document.referrer
  if (ref) {
    try {
      const host = new URL(ref).hostname.replace(/^www\./, "")
      if (host && host !== window.location.hostname) return `referrer_${host}`
    } catch {
      return "direct"
    }
  }
  return "direct"
}

function getOrCreateSession(siteId: string): SessionMeta {
  const now = Date.now()
  if (typeof window !== "undefined") {
    const existing = window.sessionStorage.getItem(sessionKey(siteId))
    if (existing) {
      try {
        const parsed = JSON.parse(existing) as SessionMeta
        if (parsed.sessionId) return parsed
      } catch {
        // fall through
      }
    }
    const meta: SessionMeta = {
      sessionId:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `s_${now}_${Math.random().toString(36).slice(2)}`,
      startedAt: now,
      deviceType: detectDevice(),
      trafficSource: getTrafficSource(),
    }
    window.sessionStorage.setItem(sessionKey(siteId), JSON.stringify(meta))
    return meta
  }
  return {
    sessionId: `s_${now}_${Math.random().toString(36).slice(2)}`,
    startedAt: now,
    deviceType: "desktop",
    trafficSource: "direct",
  }
}

function analyticsEndpoint(): string {
  return (
    process.env.NEXT_PUBLIC_ANALYTICS_API_URL ??
    (typeof window === "undefined" ? "" : window.location.origin + "/api/analytics/event")
  )
}

class AnalyticsClient {
  private config: SiteConfig | null = null
  private meta: SessionMeta | null = null
  private sections = new Map<string, SectionState>()
  private scrollSent = new Set<number>()
  private ctaQueue: CtaEvent[] = []
  private formQueue: FormEvent[] = []
  private scrollQueue: ScrollEvent[] = []
  private flushTimer: ReturnType<typeof setInterval> | null = null
  private ended = false
  private enabled = false
  private pageViewSent = false
  private lastSectionSeen = ""
  private deepestIndex = 0

  init(siteConfig: SiteConfig) {
    if (this.config?.slug === siteConfig.slug && this.enabled) return
    this.config = siteConfig
    if (getConsent(siteConfig.slug) === "granted" && !isDnt()) this.enable()
  }

  setConsent(accepted: boolean) {
    const config = this.config
    if (!config) return
    window.localStorage.setItem(consentKey(config.slug), accepted ? "granted" : "denied")
    window.dispatchEvent(new Event("storage"))
    if (accepted && !isDnt()) this.enable()
    else this.disable()
  }

  hasPendingConsent(): boolean {
    return !!this.config && getConsent(this.config.slug) === null
  }

  private enable() {
    if (this.enabled || !this.config) return
    this.enabled = true
    this.meta = getOrCreateSession(this.config.slug)
    this.sendPageView()
    this.flushTimer = setInterval(() => this.flush(), FLUSH_INTERVAL_MS)
    this.attachExitHandlers()
  }

  private disable() {
    this.enabled = false
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
      this.flushTimer = null
    }
  }

  private isEnabled() {
    return this.enabled && this.config && !isDnt()
  }

  private attachExitHandlers() {
    const onExit = () => {
      if (!this.enabled || this.ended) return
      this.ended = true
      this.endSession()
    }
    window.addEventListener("pagehide", onExit)
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") onExit()
    })
  }

  private sendPageView() {
    if (this.pageViewSent) return
    this.pageViewSent = true
    this.send([{ type: "page_view", at: Date.now() }])
  }

  reportSection(id: string, state: SectionState) {
    if (!this.isEnabled() || !this.config) return
    this.sections.set(id, { ...state })
    const idx = this.config.sectionOrder.findIndex((s) => s.id === id)
    if (idx > this.deepestIndex) this.deepestIndex = idx
    this.lastSectionSeen = id
  }

  trackScroll(depth: 25 | 50 | 75 | 100) {
    if (!this.isEnabled()) return
    if (this.scrollSent.has(depth)) return
    this.scrollSent.add(depth)
    this.scrollQueue.push({ type: "scroll_depth", depth, at: Date.now() })
  }

  trackCta(ctaId: string) {
    if (!this.isEnabled() || !this.config) return
    const point = this.config.ctaPoints.find((p) => p.id === ctaId)
    if (!point) return
    this.ctaQueue.push({
      type: "cta_click",
      cta_id: ctaId,
      section_id: point.sectionId,
      cta_label: point.label,
      clicked_at: Date.now(),
      converted: !!point.isPrimary,
    })
  }

  trackForm(event: "form_start" | "form_submit", formId: string) {
    if (!this.isEnabled()) return
    const ev: FormEvent =
      event === "form_start"
        ? { type: "form_start", form_id: formId, started_at: Date.now() }
        : { type: "form_submit", form_id: formId, submitted_at: Date.now() }
    this.formQueue.push(ev)
  }

  private collectSectionEvents(): AnalyticsEvent[] {
    const events: AnalyticsEvent[] = []
    this.sections.forEach((s, sectionId) => {
      events.push({
        type: "section_entered",
        section_id: sectionId,
        entered_at: s.enteredAt,
        dwell_ms: Math.round(s.dwellMs),
        max_scroll_percent: Math.round(s.maxScrollPercent),
      })
    })
    return events
  }

  flush() {
    if (!this.enabled || !this.meta || !this.config) return
    const events: AnalyticsEvent[] = this.collectSectionEvents()
    events.push(...this.ctaQueue)
    this.ctaQueue = []
    events.push(...this.formQueue)
    this.formQueue = []
    events.push(...this.scrollQueue)
    this.scrollQueue = []
    if (!events.length) return
    this.send(events)
  }

  private endSession() {
    if (!this.meta || !this.config) return
    const sectionsViewed = Array.from(this.sections.keys())
    this.ctaQueue.length = 0
    const events: AnalyticsEvent[] = [
      {
        type: "session_end",
        last_section_seen: this.lastSectionSeen,
        total_time_on_page_ms: Math.round(Date.now() - this.meta.startedAt),
        sections_viewed: sectionsViewed,
        deepest_section_reached: this.config.sectionOrder[this.deepestIndex]?.id ?? this.lastSectionSeen,
      },
    ]
    events.push(...this.collectSectionEvents())
    this.send(events, true)
  }

  private send(events: AnalyticsEvent[], useBeacon = false) {
    if (!this.meta || !this.config) return
    const body = JSON.stringify({
      siteId: this.config.slug,
      meta: this.meta,
      events,
    })
    const url = analyticsEndpoint()
    if (useBeacon) {
      try {
        navigator.sendBeacon(url, new Blob([body], { type: "application/json" }))
        return
      } catch {
        // fall back to fetch keepalive
      }
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {
      // silently drop on network failure
    })
  }
}

export const analytics = new AnalyticsClient()

export { getConsent }