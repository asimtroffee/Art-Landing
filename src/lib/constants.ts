export const SITE = {
  name: "AURA Memory Technique",
  shortName: "AURA",
  tagline: "The memory technique that teaches your child how to learn.",
  url: "/",
  joinUrl: "https://tinyurl.com/3ctwky4y",
  quizLinks: {
    A: "https://forms.office.com/r/h6T6HLd3ta",
    B: "https://forms.office.com/r/PQdDxgmZcb",
    C: "https://forms.office.com/r/WkVesa7YBW",
  },
} as const

export const NAV = {
  links: [
    { label: "How it works", href: "#the-method" },
    { label: "Workshops", href: "#workshops" },
    { label: "Who it's for", href: "#who-its-for" },
    { label: "How to join", href: "#how-to-join" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Join the WhatsApp Group",
  ctaId: "nav_join",
  ctaHref: "https://tinyurl.com/3ctwky4y",
} as const

export const HERO = {
  headlineTop: "Memory tricks that actually stick.",
  headlineAccent: "Learn it once. Remember it for life.",
  paragraphs: [
    "Your child studies for hours. Reads the notes again and again. Says \"I know this.\"",
    "Then exam day comes — and it's gone.",
    "That's not because they didn't try. It's because no one ever showed them how memory really works.",
  ],
  hook: "AURA fixes that. 5 free live workshops that teach a simple memory system your child can use for every exam, in every subject.",
  ctaLabel: "Join the WhatsApp Group",
  ctaSubtext: "Free · No payment needed",
  badge: "Created by Troffee Education",
  countdownTarget: "2026-05-10T09:30:00+08:00",
} as const

export const THE_PROBLEM = {
  kicker: "The Problem",
  headline: "Every parent recognizes this.",
  paragraphs: [
    "You've seen it happen.",
    "The night before an exam, your child is surrounded by notes. They read. They re-read. They tell you they've got it.",
    "Then the exam is in front of them — and it feels like they never studied at all.",
    "This isn't about trying harder. It isn't about being \"smart enough.\"",
    "Schools teach children what to learn. They rarely teach how to remember it. Cramming feels like studying, but most of it disappears within days. This is called the forgetting curve — and it happens to almost every student who was never taught a better way.",
  ],
} as const

export const THE_SHIFT = {
  kicker: "The Shift",
  headline: "Memory is a skill. It can be learned.",
  intro:
    "Here's something most parents have never heard: memory is a skill. It's not something kids are just born with or without. It can be learned — with the right technique.",
  techniqueIntro: "That technique is AURA.",
  points: [
    {
      before: "Instead of re-reading pages until they blur,",
      after:
        "your child learns to turn lessons into simple sketch notes their brain actually holds onto.",
    },
    {
      before: "Instead of last-minute cramming,",
      after:
        "they learn to review facts at just the right times — so information sticks for weeks, not just for Friday's test.",
    },
    {
      before: "Instead of freezing on exam questions,",
      after:
        "they learn a simple way to think through any question, step by step.",
    },
    {
      before: "And instead of mumbling through a presentation,",
      after:
        "they learn to explain what they know clearly and with confidence.",
    },
  ],
  closer:
    "If a child can explain something well, it means they really understand it.",
  summary: "Four skills. One simple system. Taught live, for free, over five workshops.",
} as const

export const THE_METHOD = {
  kicker: "The Method",
  headline: "How AURA actually works",
  techniques: [
    {
      num: 1,
      title: "Sketch Notes That Stick",
      body: "Boring textbook pages turn into simple pictures and arrows. Notes your child actually wants to look at again — because they make sense right away.",
    },
    {
      num: 2,
      title: "Never-Forget Memory Tricks",
      body: "A way to review facts at just the right times, so they don't fade away. Your child remembers things weeks later, not just for one test.",
    },
    {
      num: 3,
      title: "Answering Exam Questions With Real Depth",
      body: "A simple method to think through exam questions step by step. No more staring at the page not knowing where to start.",
    },
    {
      num: 4,
      title: "Mind Maps & Creative Notes",
      body: "Turning a messy topic into one clear, colourful page — a skill your child can use for any subject.",
    },
    {
      num: 5,
      title: "Presenting With Confidence",
      body: "Standing up and explaining an idea clearly, without freezing up. This is what makes a child stand out in class.",
    },
  ],
} as const

export const WORKSHOPS = [
  {
    num: 1,
    date: "10 May 2026",
    time: "9:30 – 11:30am",
    title: "Turn Lessons Into Sketch Notes",
    body: "A simple way to make notes that are easy to remember.",
  },
  {
    num: 2,
    date: "24 May 2026",
    time: "2:30 – 4:30pm",
    title: "Never-Forget Memory Tricks",
    body: "How to review facts so they stay in memory.",
  },
  {
    num: 3,
    date: "7 June 2026",
    time: "2:30 – 4:30pm",
    title: "Think & Answer Exam Questions",
    body: "A step-by-step way to tackle any question.",
  },
  {
    num: 4,
    date: "21 June 2026",
    time: "2:30 – 4:30pm",
    title: "Build Mind Maps & Creative Notes",
    body: "How to turn any topic into a clear, creative note.",
  },
  {
    num: 5,
    date: "5 July 2026",
    time: "2:30 – 4:30pm",
    title: "Present With Confidence",
    body: "How to speak clearly and with confidence.",
  },
] as const

export const WORKSHOPS_SECTION = {
  kicker: "The Workshops",
  headline: "Free, live, built for every age.",
  subheadline:
    "Five live workshops. Each one builds on the last. 100% free to attend.",
  closer:
    "Finish all 5, and your child has a memory system they can use for every exam, every year.",
} as const

export const WHO_IS_THIS_FOR = {
  kicker: "Who it's for",
  headline: "Every student, 7 to 17",
  subheadline: "Taught at the right level for their age.",
  categories: [
    {
      id: "A",
      age: "7 – 12",
      name: "Primary",
      body: "Young learners build the basics: simple pictures, easy memory tricks, and the confidence to explain what they've learned.",
    },
    {
      id: "B",
      age: "13 – 15",
      name: "Lower Secondary",
      body: "Teens learn to organise many subjects at once, think more clearly, and present their ideas with structure.",
    },
    {
      id: "C",
      age: "16 – 17",
      name: "Upper Secondary",
      body: "Students learn exam-ready memory techniques and stronger communication skills — useful for exams and for life after school.",
    },
  ],
} as const

export const TRUST = {
  kicker: "Why AURA",
  headline: "Why parents choose AURA",
  pillars: [
    {
      title: "It's 100% free to join.",
      body: "All 5 live workshops, at no cost. The only optional item is a learning kit — and that's just RM10.",
      doubt: "cost",
    },
    {
      title: "Made by Troffee Education.",
      body: "AURA was built by Troffee Education to teach the one thing schools usually skip: how to actually remember what you learn.",
      doubt: "trust",
    },
    {
      title: "Real memory science, made simple.",
      body: "These aren't random \"tips.\" They're proven memory methods, explained in a way any child can understand and use right away.",
      doubt: "competence",
    },
  ],
} as const

export const HOW_TO_JOIN = {
  kicker: "How to join",
  headline: "Two simple steps to get started.",
  steps: [
    {
      num: "01",
      title: "Join the Group",
      body: "Join the official WhatsApp group to book your child's spot in the workshops.",
    },
    {
      num: "02",
      title: "Attend the Workshops",
      body: "Show up live for all 5 sessions. Each one builds on the last, so your child leaves with a complete memory system by the end.",
    },
  ],
  footnote:
    "Free to join. No payment needed — just join the WhatsApp group and the team will guide you through every step.",
} as const

export const FAQ = [
  {
    q: "Is the workshop really free?",
    a: "Yes. All 5 live workshops are 100% free. Just join the WhatsApp group to book a spot. The only optional item is the learning kit, and you only get it if you want it.",
  },
  {
    q: "Do I have to buy the kit?",
    a: "No. A normal notebook and coloured pens work fine. The kit is just a nice-to-have.",
  },
  {
    q: "Does my child need any experience?",
    a: "No. The workshops start from the basics. Most kids are making confident notes from the very first session.",
  },
  {
    q: "Is this backed by real memory science, or is it just \"tips\"?",
    a: "It's based on proven learning methods — the same ones used in memory research — just explained simply, so any child aged 7 to 17 can use them right away.",
  },
] as const

export const CLOSING_CTA = {
  headline: "Your child's first memory trick is one click away.",
  subheadline:
    "Get the WhatsApp invite, workshop reminders, and simple memory tips you can start using with your child today.",
  ctaLabel: "Join the WhatsApp Group",
  badge: "100% free · no payment needed · leave anytime",
} as const

export const FOOTER = {
  tagline:
    "Created by Troffee Education — helping the next generation learn to learn.",
  columns: [
    {
      title: "Programme",
      links: [
        { label: "How it works", href: "#the-method" },
        { label: "Workshops", href: "#workshops" },
        { label: "Who it's for", href: "#who-its-for" },
        { label: "How to join", href: "#how-to-join" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Privacy policy", href: "/privacy" },
      ],
    },
    {
      title: "Join",
      links: [
        { label: "Join WhatsApp Community", href: "https://tinyurl.com/3ctwky4y" },
      ],
    },
  ],
  copyright: "© 2026 Troffee Education. All rights reserved.",
} as const