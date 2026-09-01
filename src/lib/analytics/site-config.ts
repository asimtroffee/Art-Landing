export type SiteConfig = {
  slug: string
  name: string
  url: string
  sectionOrder: { id: string; label: string }[]
  ctaPoints: { id: string; sectionId: string; label: string; isPrimary?: boolean }[]
  consentText: string
}

export const SITE_CONFIG: SiteConfig = {
  slug: "aura-workshops",
  name: "AURA Creative Learning Workshops",
  url: "http://localhost:3002",
  sectionOrder: [
    { id: "hero", label: "Hero" },
    { id: "trust_marks", label: "Trust Marks" },
    { id: "who_its_for", label: "Who It's For" },
    { id: "what_youll_learn", label: "What You'll Learn" },
    { id: "curriculum", label: "Workshop Schedule" },
    { id: "showcase", label: "What Students Create" },
    { id: "facilitators", label: "Facilitators" },
    { id: "pricing", label: "Pricing" },
    { id: "competition", label: "The Olympiad" },
    { id: "lead_form", label: "Lead Form" },
    { id: "testimonials", label: "Testimonials" },
    { id: "how_it_works", label: "How To Join" },
    { id: "faq", label: "FAQ" },
  ],
  ctaPoints: [
    { id: "nav_register", sectionId: "nav", label: "Register Now", isPrimary: false },
    { id: "hero_register", sectionId: "hero", label: "Get the Faber-Castell Kit · RM10", isPrimary: false },
    { id: "hero_join", sectionId: "hero", label: "Join the WhatsApp Group", isPrimary: true },
    { id: "roadmap_register_all", sectionId: "curriculum", label: "Join the WhatsApp Group", isPrimary: true },
    { id: "pricing_join", sectionId: "pricing", label: "Join the WhatsApp Group", isPrimary: true },
    { id: "pricing_kit", sectionId: "pricing", label: "Get the Kit", isPrimary: false },
    { id: "competition_join", sectionId: "competition", label: "Join the WhatsApp Group", isPrimary: true },
    { id: "competition_kit", sectionId: "competition", label: "Get the Kit · RM10", isPrimary: false },
    { id: "how_join", sectionId: "how_it_works", label: "Join the WhatsApp Group", isPrimary: true },
    { id: "sticky_register", sectionId: "sticky_bar", label: "Join the WhatsApp Group", isPrimary: true },
  ],
  consentText:
    "We use anonymized, session-only analytics to understand how visitors use this page. We track which sections are read and where visitors leave. No personal data is collected.",
}