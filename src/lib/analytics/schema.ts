export type DeviceType = "mobile" | "tablet" | "desktop" | "unknown"

export type SectionState = {
  enteredAt: number
  dwellMs: number
  maxScrollPercent: number
}

export type SectionViewEvent = {
  type: "section_entered"
  section_id: string
  entered_at: number
  dwell_ms: number
  max_scroll_percent: number
}

export type CtaEvent = {
  type: "cta_click"
  cta_id: string
  section_id: string
  cta_label: string
  clicked_at: number
  converted: boolean
}

export type FormEvent = {
  type: "form_start" | "form_submit"
  form_id: string
  started_at?: number
  submitted_at?: number
}

export type ScrollEvent = {
  type: "scroll_depth"
  depth: 25 | 50 | 75 | 100
  at: number
}

export type PageViewEvent = {
  type: "page_view"
  at: number
}

export type SessionEndEvent = {
  type: "session_end"
  last_section_seen: string
  total_time_on_page_ms: number
  sections_viewed: string[]
  deepest_section_reached: string
}

export type AnalyticsEvent =
  | PageViewEvent
  | SectionViewEvent
  | CtaEvent
  | FormEvent
  | ScrollEvent
  | SessionEndEvent

export type SessionMeta = {
  sessionId: string
  startedAt: number
  deviceType: DeviceType
  trafficSource: string
}

export type EventPayload = {
  siteId: string
  meta: SessionMeta
  events: AnalyticsEvent[]
}

export type FirestoreSectionView = {
  enteredAt: Date
  dwellMs: number
  maxScrollPercentWithinSection: number
}

export type FirestoreCtaClick = {
  ctaId: string
  sectionId: string
  ctaLabel: string
  clickedAt: Date
  converted: boolean
}

export type FirestoreSession = {
  startedAt?: Date
  endedAt?: Date | null
  lastActiveAt?: Date
  deviceType?: string
  trafficSource?: string
  totalTimeOnPageMs?: number
  lastSectionSeen?: string
  deepestSectionReached?: string
  sectionsViewed?: string[]
  converted?: boolean
  scrollDepths?: number[]
  formsStarted?: string[]
  formsSubmitted?: string[]
  ctaClicks?: FirestoreCtaClick[]
  sectionViews?: Record<string, FirestoreSectionView>
}
