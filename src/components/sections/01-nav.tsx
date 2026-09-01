import Image from "next/image"
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import { NAV, SITE } from "@/lib/constants"

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-[#D65108]/95 backdrop-blur-md shadow-md border-b border-[#B34407]">
      <div className="wrap flex h-20 items-center justify-between gap-4">
        {/* Logo & Brand */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3 rounded-full bg-[#FAF8F5] px-3.5 py-1.5 shadow-sm transition-transform hover:scale-105"
          aria-label="AURA home"
        >
          <Image
            src="/images/logo-aura.png"
            alt="AURA Memory Technique"
            width={140}
            height={44}
            priority
            className="h-9 w-auto object-contain"
          />
          <span className="hidden sm:inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#361D2E]/80 border-l border-[#361D2E]/20 pl-2.5">
            By Troffee Education
          </span>
        </a>

        {/* Navigation Links */}
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
                <Sparkles className="h-3 w-3 text-[#EFA00B]/60" strokeWidth={2.5} />
              )}
            </div>
          ))}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white border border-white/20">
            <span className="h-2 w-2 rounded-full bg-[#EFA00B] animate-pulse" />
            100% Free
          </span>
          <CtaLink
            href={NAV.ctaHref}
            ctaId={NAV.ctaId}
            className="btn-primary shimmer-badge px-5 py-2.5 text-xs sm:text-sm font-extrabold shadow-md flex items-center gap-2"
            ariaLabel="Join the WhatsApp group"
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            <span className="hidden xs:inline">{NAV.cta}</span>
            <span className="xs:hidden">Join Free</span>
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.75} />
          </CtaLink>
        </div>
      </div>
    </header>
  )
}