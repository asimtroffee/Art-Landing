"use client"

import { useRef, useState } from "react"
import { Mail, Send, CheckCircle2 } from "lucide-react"
import { analytics } from "@/lib/analytics/client"
import Reveal from "@/components/ui/reveal"
import { LEAD_FORM, WORKSHOPS } from "@/lib/constants"

const INBOX_URL = process.env.NEXT_PUBLIC_INBOX_URL ?? "http://localhost:3001/api/inbox"

type Status = "idle" | "sending" | "done" | "error"

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle")
  const startedRef = useRef(false)

  const markStarted = () => {
    if (!startedRef.current) {
      startedRef.current = true
      analytics.trackForm("form_start", "lead_form")
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = new FormData(e.currentTarget)
    const payload = {
      siteId: "aura-workshops",
      lead: {
        parentName: form.get("parentName"),
        email: form.get("email"),
        whatsapp: form.get("whatsapp"),
        childAge: form.get("childAge"),
        workshop: form.get("workshop"),
      },
    }
    analytics.trackForm("form_submit", "lead_form")
    try {
      const res = await fetch(INBOX_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`inbox replied ${res.status}`)
      setStatus("done")
    } catch {
      setStatus("error")
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-ink/40 transition-all focus:border-cobalt focus:ring-2 focus:ring-cobalt/15 focus:outline-none"

  return (
    <section id="lead-form" className="scroll-mt-20 gradient-mesh-ink py-20 text-[#FFF9EF] sm:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="kicker !text-tangerine">{LEAD_FORM.kicker}</p>
            <h2 className="mt-3 font-heading text-4xl font-extrabold sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Your child&apos;s first memory trick is{" "}
              <span className="relative inline-block text-tangerine">
                one click away
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#FFF9EF]/70">{LEAD_FORM.subheadline}</p>
            <ul className="mt-8 space-y-4">
              {[
                "Memory technique tips you can use today",
                "Early reminders before every workshop",
                "New Olympiad rounds & deadlines",
              ].map((tip) => (
                <li key={tip} className="flex items-center gap-3 text-[15px] font-bold text-[#FFF9EF]/85">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-tangerine text-white">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
            <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-bold text-white/90">
              100% free · no payment needed · leave anytime
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="sketch-card p-6 sm:p-8 bg-white border border-line shadow-2xl">
            {status === "done" ? (
              <div className="py-10 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint-soft">
                  <CheckCircle2 className="h-9 w-9 text-mint" strokeWidth={2.5} />
                </span>
                <p className="mt-5 font-heading text-2xl font-extrabold text-ink">{LEAD_FORM.success}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} onFocus={markStarted} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="parentName" className="mb-1.5 block text-sm font-bold text-ink">
                      Parent&apos;s name
                    </label>
                    <input
                      id="parentName"
                      name="parentName"
                      type="text"
                      required
                      placeholder="Asma Abdullah"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="childAge" className="mb-1.5 block text-sm font-bold text-ink">
                      Child&apos;s age range
                    </label>
                    <select id="childAge" name="childAge" required defaultValue="" className={field}>
                      <option value="" disabled>
                        Select category
                      </option>
                      <option value="A (7–12)">A · 7 to 12 years</option>
                      <option value="B (13–15)">B · 13 to 15 years</option>
                      <option value="C (16–17)">C · 16 to 17 years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 flex items-center gap-1.5 text-sm font-bold text-ink">
                    <Mail className="h-4 w-4 text-cobalt" />
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-bold text-ink">
                    WhatsApp number <span className="font-normal text-ink/50">(for reminders)</span>
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="+60 12-345 6789"
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="workshop" className="mb-1.5 block text-sm font-bold text-ink">
                    Workshop you&apos;re most interested in
                  </label>
                  <select id="workshop" name="workshop" defaultValue="" className={field}>
                    <option value="" disabled>
                      Select a workshop
                    </option>
                    {WORKSHOPS.map((ws) => (
                      <option key={ws.num} value={ws.title}>
                        {ws.num} · {ws.title} — {ws.date}
                      </option>
                    ))}
                    <option value="All workshops">All 5 workshops</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full px-6 py-4 text-base disabled:opacity-60 shadow-lg mt-2"
                >
                  {status === "sending" ? "Sending…" : LEAD_FORM.button}
                  <Send className="h-5 w-5" strokeWidth={2.5} />
                </button>

                {status === "error" && (
                  <p className="text-sm font-semibold text-tangerine-deep">
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className="text-center text-xs leading-relaxed text-ink/50 pt-2">
                  We&apos;ll only use your details to send workshop &amp; Olympiad updates. See our{" "}
                  <a href="/privacy" className="font-bold text-cobalt underline underline-offset-2">
                    privacy policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}