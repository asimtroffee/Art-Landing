export const SITE = {
  name: "AURA Creative Learning Workshops",
  shortName: "AURA",
  tagline: "Memory techniques that teach your child how to learn.",
  url: "/",
  registerUrl: "https://shop.faber-castell.com.my/collections/score-a-creative-learning-products",
  joinUrl: "https://tinyurl.com/3ctwky4y",
  quizLinks: {
    A: "https://forms.office.com/r/h6T6HLd3ta",
    B: "https://forms.office.com/r/PQdDxgmZcb",
    C: "https://forms.office.com/r/WkVesa7YBW",
  },
  pricePerWorkshop: 10,
} as const

export const NAV = {
  links: [
    { label: "Who it's for", href: "#who-its-for" },
    { label: "Workshops", href: "#curriculum" },
    { label: "The Olympiad", href: "#competition" },
    { label: "How to join", href: "#how-to-join" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: "Join the WhatsApp Group",
  ctaId: "nav_join",
  ctaHref: "https://tinyurl.com/3ctwky4y",
} as const

export const HERO = {
  kicker: "AURA · Free Memory Workshops by Faber-Castell",
  headlineTop: "Memory tricks that actually stick!",
  headlineMiddle: "Learn it once. Remember it for life.",
  subheadline:
    "Your child studies hard, but forgets it all by exam day. Five free live workshops teach the memory techniques that make learning stick for life.",
  description:
    "Then put those skills to the test in the AURA Student Olympiad, with cash prizes up to RM2,500.",
  priceLabel: "",
  price: "FREE",
  priceUnit: "attendance · kit optional RM10",
  videoSrc: "/video.mp4",
  posterSrc: "/images/img-not-sure-how-to-start-2026.png",
  countdownTarget: "2026-05-10T09:30:00+08:00",
  pills: [
    { label: "Free to Join", icon: "Calendar" },
    { label: "5 Live Workshops", icon: "Clock" },
    { label: "Ages 7–17", icon: "Users" },
    { label: "Olympiad Entry", icon: "Trophy" },
  ],
} as const

export const TRUST_STRIP = {
  band: "An official Faber-Castell programme · trusted since 1761",
  stats: [
    { value: "5", label: "Free live workshops" },
    { value: "7–17", label: "Years old" },
    { value: "RM2,500", label: "Top Olympiad prize" },
    { value: "100%", label: "Free to attend" },
  ],
} as const

export const WHO_IS_THIS_FOR = {
  kicker: "Who it's for",
  headline: "Built for every school student, 7 to 17",
  subheadline: "Three competition categories make sure every age group builds the memory skills that outlast any exam.",
  categories: [
    {
      id: "A",
      age: "7 – 12",
      name: "Primary",
      body: "Young learners build visual-memory foundations, fun recall tricks and the confidence to explain ideas.",
    },
    {
      id: "B",
      age: "13 – 15",
      name: "Lower Secondary",
      body: "Teens learn to organise subjects with the Commander's list, think critically and present with structure.",
    },
    {
      id: "C",
      age: "16 – 17",
      name: "Upper Secondary",
      body: "Students master exam-ready memory techniques, high-level critical thinking and confident presentation.",
    },
  ],
} as const

export const WORKSHOPS = [
  {
    num: "WS 1",
    date: "10 May 2026",
    time: "9.30 – 11.30am",
    title: "Turn Lessons Into Sketch Notes",
    body: "The visual memory method that turns information into memorable sketch notes: pictures, arrows and structure that make revision effortless.",
    benefits: [
      "Pictures, arrows and structure that make revision effortless",
      "Sketch notes that double as flashcards and Olympiad entries",
    ],
  },
  {
    num: "WS 2",
    date: "24 May 2026",
    time: "2.30 – 4.30pm",
    title: "Never-Forget Memory Tricks",
    body: "Train spaced recall, memory techniques and colour coding so facts actually stay in long-term memory.",
    benefits: [
      "Spaced recall that moves facts into long-term memory",
      "Memory tricks and colour coding for every subject",
    ],
  },
  {
    num: "WS 3",
    date: "7 June 2026",
    time: "2.30 – 4.30pm",
    title: "Think & Answer Exam Questions",
    body: "Learn thinking frameworks that help students analyse, connect ideas and answer exam questions with depth.",
    benefits: [
      "Frameworks to analyse and connect ideas fast",
      "Exam answers with real depth and structure",
    ],
  },
  {
    num: "WS 4",
    date: "21 June 2026",
    time: "2.30 – 4.30pm",
    title: "Build Mind Maps & Creative Notes",
    body: "Design stunning creative notes, mind maps, river flow notes and memory-map layouts, perfect for the Olympiad entry.",
    benefits: [
      "Mind maps, river flow notes and memory-map layouts",
      "A show-stopping creative note for the Olympiad entry",
    ],
  },
  {
    num: "WS 5",
    date: "5 July 2026",
    time: "2.30 – 4.30pm",
    title: "Present With Confidence",
    body: "Stand up and present with confidence, structure and clarity. This is the edge in the Grand Finale.",
    benefits: [
      "Confidence, structure and clarity when presenting",
      "The edge that wins in the Grand Finale",
    ],
  },
] as const

export const FACILITATORS = {
  kicker: "Why AURA",
  headline: "Three reasons parents choose AURA",
  subheadline:
    "Every doubt a parent has, answered up front: the cost, the trust, and whether it actually works.",
  pillars: [
    {
      title: "It's 100% free to join",
      body: "Attendance for all 5 workshops costs nothing. You only pay if you want the optional Faber-Castell kit.",
      doubt: "cost",
    },
    {
      title: "An official Faber-Castell programme",
      body: "Built and delivered by Faber-Castell Malaysia, a brand families have trusted since 1761.",
      doubt: "trust",
    },
    {
      title: "Memory science, not rote drilling",
      body: "Spaced recall and proven techniques are taught live, so your child learns how to learn for life.",
      doubt: "competence",
    },
  ],
} as const

export const PRICING = {
  kicker: "Pricing",
  headline: "The workshops are free. The kit is optional.",
  subheadline:
    "Attendance is 100% free. Just join the WhatsApp group to book your child's spot. Grab the official Faber-Castell kit only if you want it.",
  free: {
    title: "Join the Workshops",
    price: "FREE",
    unit: "attendance for all 5",
    badge: "Free · No payment needed",
    features: [
      "All 5 live memory workshops, 100% free",
      "Hands-on memory techniques that make study stick",
      "Eligible for the AURA Student Olympiad entry",
      "E-certificate path for Mission 1",
    ],
    cta: "Join the WhatsApp Group",
    ctaId: "pricing_join",
    href: "https://tinyurl.com/3ctwky4y",
  },
  kit: {
    title: "Faber-Castell Kit (Optional)",
    price: "RM10",
    unit: "per workshop · RM50 all 5",
    features: [
      "Official Faber-Castell sketch noting tools",
      "Markers and materials for every memory technique",
      "Workbook templates for sketch notes and mind maps",
      "A keepsake kit that lasts beyond the workshops",
    ],
    cta: "Get the Kit",
    ctaId: "pricing_kit",
    href: "https://shop.faber-castell.com.my/collections/score-a-creative-learning-products",
  },
  footnote:
    "No payment needed to attend. The Faber-Castell Kit is optional and purchased separately through the official Faber-Castell Shop.",
} as const

export const COMPETITION = {
  kicker: "The Student Olympiad",
  headline: "From your first memory note to the national Grand Finale",
  subheadline:
    "The AURA Student Olympiad turns every memory technique into a real competitive journey, free to enter and open to all students.",
  countdownTarget: "2026-07-19T23:59:00+08:00",
  stages: [
    {
      step: "Mission 1",
      dates: "6 Apr – 19 Jul 2026",
      audience: "Open to all students",
      title: "Qualifying Stage",
      body: "Complete an online assessment and submit your creative note, your memory techniques at work. The Top 100 scorers in each category advance.",
    },
    {
      step: "Semi-Final",
      dates: "8 – 22 Aug 2026",
      audience: "Top 100 per category",
      title: "The Advanced Challenge",
      body: "Shortlisted students take on advanced tasks testing presentation skills, idea organisation and communication confidence. Top 10 per category advance.",
    },
    {
      step: "Grand Finale",
      dates: "30 Sep & 1 Oct 2026",
      audience: "Top 10 per category",
      title: "The Ultimate Showdown",
      body: "A 2-day physical event in Klang Valley with creative note creation, assessments, critical thinking challenges and live presentations judged by experts.",
    },
  ],
  prizeHeadline: "One Top Student crowned in each category",
  prizes: [
    { place: "Top Student", cash: "RM2,500", hamper: "+ RM500 hamper", featured: true },
    { place: "1st Runner Up", cash: "RM1,500", hamper: "+ RM500 hamper" },
    { place: "2nd Runner Up", cash: "RM1,000", hamper: "+ RM400 hamper" },
    { place: "3rd Runner Up", cash: "RM800", hamper: "+ RM400 hamper" },
    { place: "4th Runner Up", cash: "RM600", hamper: "+ RM400 hamper" },
    { place: "5× Consolation", cash: "RM500", hamper: "+ RM300 hamper" },
  ],
} as const

export const HOW_IT_WORKS = {
  kicker: "How to join",
  headline: "Three simple steps to your first creative note",
  steps: [
    {
      num: "01",
      title: "Understand & Create",
      body: "Choose your age category, download the Mission 1 article, then study it with your new memory techniques and create your creative learning note, handwritten on A4 or A3 paper.",
    },
    {
      num: "02",
      title: "Submit Your Note",
      body: "Scan or photograph your note top-down, rename it YourFullName_SchoolName, and upload it as a PDF or high-quality JPEG/PNG.",
    },
    {
      num: "03",
      title: "Take the Online Quiz",
      body: "Submit your note first, then take the quiz for your category. You only get ONE attempt, so revise with your memory techniques before you start.",
    },
  ],
  deadline: "Mission 1 submission deadline: 19 July 2026, 11.59pm",
} as const

export const LEAD_FORM = {
  kicker: "Get the WhatsApp invite",
  headline: "Join the WhatsApp group",
  subheadline:
    "Get the group invite, workshop reminders and memory technique tips straight to WhatsApp. Free, no payment needed.",
  button: "Join the WhatsApp Group",
  success: "Check your WhatsApp. Your invite is on its way!",
} as const

export const TESTIMONIALS = [
  {
    name: "[Parent of a Category A student, KL]",
    role: "Workshop parent",
    quote:
      "[PLACEHOLDER — replace with real quote] My daughter used the spaced recall method before her exams and actually stopped panicking. She remembers her notes now, not just reads them.",
    initials: "PG",
  },
  {
    name: "[Secondary school teacher, school partner]",
    role: "Teacher · Bulk submission partner",
    quote:
      "[PLACEHOLDER — replace with real quote] The workshops teach real study skills our students aren't getting in class, like how to remember what they learn. The creative notes speak for themselves.",
    initials: "TC",
  },
  {
    name: "[Past participant, Semi-Finalist]",
    role: "Student · Semi-Finalist",
    quote:
      "[PLACEHOLDER — replace with real quote] Sketch noting and the Commander's list made hard subjects click for me. I went into the quiz feeling prepared and confident.",
    initials: "SM",
  },
] as const

export const FAQ = [
  {
    q: "Is the workshop really free?",
    a: "Yes, attendance is 100% free. Just join the WhatsApp group to book your child's spot in any of the 5 live workshops. The optional Faber-Castell kit is the only thing that costs anything, and you only buy it if you want it.",
  },
  {
    q: "How do I join the WhatsApp group?",
    a: "Tap any 'Join the WhatsApp Group' button on this page and you'll be taken straight to the group invite. No payment and no form needed. Then we'll send workshop reminders and memory tips directly to your WhatsApp.",
  },
  {
    q: "Do I have to buy the Faber-Castell kit?",
    a: "No. The kit is completely optional. Every technique is taught hands-on in the live workshops, and most students can follow along with everyday stationery. The kit just adds official Faber-Castell tools and templates if you want the full experience.",
  },
  {
    q: "Who can join the AURA Student Olympiad?",
    a: "Students aged 7 to 17 in three categories: A (7–12, Primary), B (13–15, Lower Secondary) and C (16–17, Upper Secondary).",
  },
  {
    q: "Do my child need any prior knowledge to join the workshops?",
    a: "No. The workshops start from the very basics and guide students step-by-step through each memory and creative learning technique. A Faber-Castell-trained facilitator leads the way.",
  },
  {
    q: "What is spaced recall?",
    a: "A memory technique that reviews material at growing intervals, like a day, three days, a week, a month, just before it's about to be forgotten. It's one of the most evidence-backed ways to move facts into long-term memory, and it's taught live in the Never-Forget Memory Tricks workshop.",
  },
  {
    q: "Do the workshops really teach memory techniques?",
    a: "Yes. Every workshop is built on learning-how-to-learn methods: sketch notes for visual memory, spaced recall and memory tricks in Never-Forget Memory Tricks, and mind maps and creative notes that turn any subject into a memorable, hand-drawn revision aid.",
  },
  {
    q: "How does the online quiz work?",
    a: "You must submit your creative note before attempting the quiz. You are only allowed ONE attempt, so study thoroughly first. Click the correct category link to avoid issues.",
  },
  {
    q: "Must the creative note be handwritten?",
    a: "Yes. All creative note entries must be handwritten on A4 or A3 paper, and written in English. Entries containing digital elements (typed text, digital designs, scanned printed materials) will be disqualified.",
  },
  {
    q: "How do PAJSK marks work?",
    a: "Following the Ministry of Education's guideline and subject to MOE approval after the challenge, the organiser releases an official announcement. PAJSK marks are awarded to eligible participants aged 10 to 17 from government schools. Approval can take up to 3 months.",
  },
  {
    q: "When do participants receive the e-certificate?",
    a: "Participants who submit their entry and complete all of Mission 1 are eligible for an e-certificate. Details from your submission are used on the certificate, one certificate per participant.",
  },
  {
    q: "Do we need the workshops to enter the competition?",
    a: "No, anyone can join the Olympiad directly through the Join Now link and follow the three steps. The workshops simply teach the exact memory techniques that give students the best shot at scoring well.",
  },
  {
    q: "How are finalists judged?",
    a: "On online assessment performance, the creativity and quality of the creative note, and from the Semi-Final onward, presentation skills, idea organisation and communication confidence.",
  },
] as const

export const FOOTER = {
  tagline:
    "An official programme teaching school students how to learn with memory techniques that last a lifetime.",
  heritage:
    "Faber-Castell has been in classrooms for over 260 years. This programme is how we help the next generation learn to learn.",
  columns: [
    {
      title: "Programme",
      links: [
        { label: "Who it's for", href: "#who-its-for" },
        { label: "Workshops", href: "#curriculum" },
        { label: "The Olympiad", href: "#competition" },
        { label: "How to join", href: "#how-to-join" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Get workshop updates", href: "#lead-form" },
        { label: "Privacy policy", href: "/privacy" },
      ],
    },
    {
      title: "Register",
      links: [
        { label: "Register in the Faber-Castell Shop", href: "https://shop.faber-castell.com.my/collections/score-a-creative-learning-products" },
        { label: "Join the Olympiad", href: "https://tinyurl.com/3ctwky4y" },
        { label: "Faber-Castell Malaysia", href: "https://www.faber-castell.com.my" },
      ],
    },
  ],
  copyright: "© 2026 AURA Creative Learning. All rights reserved.",
} as const