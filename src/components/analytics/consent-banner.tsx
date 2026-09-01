"use client"

import { useEffect, useSyncExternalStore } from "react"
import Link from "next/link"
import { analytics, getConsent } from "@/lib/analytics/client"
import { SITE_CONFIG } from "@/lib/analytics/site-config"

function readConsent() {
  if (typeof window === "undefined") return null
  return getConsent(SITE_CONFIG.slug)
}

function serverConsent() {
  return null
}

function subscribeConsent(callback: () => void) {
  window.addEventListener("storage", callback)
  window.addEventListener("popstate", callback)
  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener("popstate", callback)
  }
}

export default function ConsentBanner() {
  const consent = useSyncExternalStore(subscribeConsent, readConsent, serverConsent)
  const visible = consent === null

  useEffect(() => {
    analytics.init(SITE_CONFIG)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="wrap">
        <div className="sketch-card mx-auto max-w-3xl p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-ink sm:text-base">
            <span className="font-hand text-lg text-tangerine mr-2">Heads up!</span>
            {SITE_CONFIG.consentText}{" "}
            <Link href="/privacy" className="font-bold text-cobalt underline underline-offset-2 hover:text-cobalt-deep">
              Read our privacy policy
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => analytics.setConsent(true)}
              className="btn-primary px-6 py-2.5 text-sm"
            >
              Allow analytics
            </button>
            <button
              onClick={() => analytics.setConsent(false)}
              className="rounded-full border-2 border-ink px-6 py-2 text-sm font-semibold text-ink transition-colors hover:bg-paper-deep"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}