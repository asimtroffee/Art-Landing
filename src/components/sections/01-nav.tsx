import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import { NAV } from "@/lib/constants"

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-[#D65108] shadow-md border-b border-[#B34407]">
      <div className="wrap flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex shrink-0 items-center rounded-full bg-[#FAF8F5] px-3.5 py-1 shadow-sm transition-transform hover:scale-105" aria-label="AURA home">
          <Image
            src="/images/logo-aura.png"
            alt="AURA Creative Learning"
            width={160}
            height={50}
            priority
            className="h-10 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV.links.map((link, idx) => (
            <div key={link.href} className="flex items-center gap-6">
              <a
                href={link.href}
                className="text-xs font-extrabold uppercase tracking-wider text-white transition-colors hover:text-[#EFA00B]"
              >
                {link.label}
              </a>
              {idx < NAV.links.length - 1 && (
                <Sparkles className="h-3.5 w-3.5 text-[#EFA00B]/80" strokeWidth={2.5} />
              )}
            </div>
          ))}
        </nav>

        <CtaLink
          href={NAV.ctaHref}
          ctaId={NAV.ctaId}
          className="btn-primary px-6 py-2.5 text-sm font-extrabold shadow-md"
          ariaLabel="Join the WhatsApp group"
        >
          {NAV.cta}
          <ArrowRight className="h-4 w-4" strokeWidth={2.75} />
        </CtaLink>
      </div>
    </header>
  )
}