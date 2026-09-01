"use client"

import type { ReactNode } from "react"
import { analytics } from "@/lib/analytics/client"

type CtaLinkProps = {
  href: string
  ctaId: string
  children: ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
}

export default function CtaLink({ href, ctaId, children, className, onClick, ariaLabel }: CtaLinkProps) {
  const handleClick = () => {
    analytics.trackCta(ctaId)
    onClick?.()
  }
  const external = href.startsWith("http")
  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  )
}