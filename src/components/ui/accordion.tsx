"use client"

import { useState } from "react"
import { Plus, HelpCircle } from "lucide-react"

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
            className={`border-2 rounded-2xl overflow-hidden bg-white transition-all duration-300 ${
              isOpen
                ? "border-[#D65108]/40 shadow-lg ring-4 ring-[#D65108]/10"
                : "border-[#E5D7C9] shadow-sm hover:border-[#D65108]/30"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-xl sm:text-2xl font-extrabold text-ink leading-snug">
                {item.q}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 bg-[#D65108] text-white shadow-md"
                    : "bg-[#FBE7DC] text-[#D65108]"
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
                <div className="px-6 pb-6 pt-1 border-t border-[#E5D7C9]/60">
                  <p className="text-base leading-relaxed text-ink/75 font-semibold">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}