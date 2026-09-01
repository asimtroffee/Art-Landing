export type SiteConfig = {
  slug: string
  siteId: string
  sectionOrder: { id: string; label: string }[]
  ctaPoints: { id: string; sectionId: string; label: string; isPrimary: boolean }[]
  consentText: string
}

export const SITE_CONFIG: SiteConfig = {
  slug: "aura-workshops",
  siteId: "aura-workshops",
  sectionOrder: [
    { id: "hero", label: "Hero" },
    { id: "the_problem", label: "The Problem" },
    { id: "the_reveal", label: "The World Champion Reveal" },
    { id: "the_shift", label: "The Shift" },
    { id: "the_method", label: "The Method" },
    { id: "workshops", label: "Workshops" },
    { id: "who_its_for", label: "Who It's For" },
    { id: "trust", label: "Why Parents Trust AURA" },
    { id: "how_to_join", label: "How To Join" },
    { id: "faq", label: "FAQ" },
    { id: "closing_cta", label: "Closing CTA" },
  ],
  ctaPoints: [
    { id: "nav_join", sectionId: "nav", label: "Join the WhatsApp Group", isPrimary: true },
    { id: "hero_join", sectionId: "hero", label: "Join the WhatsApp Group", isPrimary: true },
    { id: "reveal_join", sectionId: "the_reveal", label: "Learn These 4 Principles Live", isPrimary: true },
    { id: "shift_table_join", sectionId: "the_shift", label: "Teach My Child These Techniques Free", isPrimary: true },
    { id: "method_join", sectionId: "the_method", label: "Join the Free Workshops", isPrimary: true },
    { id: "workshops_join", sectionId: "workshops", label: "Join the WhatsApp Group", isPrimary: true },
    { id: "how_join", sectionId: "how_to_join", label: "Join the WhatsApp Group", isPrimary: true },
    { id: "closing_join", sectionId: "closing_cta", label: "Join the WhatsApp Group", isPrimary: true },
    { id: "footer_join", sectionId: "footer", label: "Join the WhatsApp Group", isPrimary: true },
    { id: "sticky_register", sectionId: "sticky_bar", label: "Join the WhatsApp Group", isPrimary: true },
  ],
  consentText:
    "We use anonymized, session-only analytics to understand how visitors use this page. We track which sections are read and where visitors leave. No personal data is collected.",
}