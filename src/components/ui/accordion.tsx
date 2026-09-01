"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

type FaqItem = {
  q: string
  a: string
}

export default function FAQAccordion({ items }: { items: readonly FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className={`border border-line rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 ${
              isOpen ? "shadow-md ring-1 ring-cobalt/5" : ""
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-base font-extrabold text-ink sm:text-lg">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cobalt-soft text-cobalt transition-transform duration-300 ${
                  isOpen ? "rotate-45 bg-tangerine text-white" : ""
                }`}
              >
                <Plus className="h-4 w-4" strokeWidth={3} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink/70 sm:text-[15px]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}