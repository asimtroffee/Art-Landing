import Image from "next/image"
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react"
import CtaLink from "@/components/ui/cta-link"
import { FOOTER, SITE } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-[#D65108] text-white border-t border-[#B34407]">
      <div className="wrap py-16">
        <div className="mb-14 rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-10 text-center">
          <p className="font-hand text-3xl font-bold text-white sm:text-4xl">Free workshops. Memory techniques for life.</p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80 font-bold">{FOOTER.heritage}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <CtaLink
              href={SITE.joinUrl}
              ctaId="footer_join"
              className="btn-primary bg-[#EFA00B] px-8 py-3.5 text-sm font-extrabold !text-[#361D2E] shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              Join the WhatsApp Group
              <ArrowRight className="h-4 w-4" strokeWidth={2.75} />
            </CtaLink>
            <CtaLink
              href={SITE.registerUrl}
              ctaId="footer_kit"
              className="btn-sketch-crayon px-6 py-3 text-sm border-white bg-white/90 text-[#361D2E] hover:bg-white"
            >
              Get the Kit · RM10
            </CtaLink>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8F5] p-3 rounded-2xl inline-block shadow-md">
              <Image
                src="/images/logo-aura.png"
                alt="AURA Creative Learning"
                width={160}
                height={60}
                className="h-12 w-auto object-contain rounded-lg"
              />
            </div>
            <p className="mt-4 font-hand text-2xl font-bold text-white/90">AURA Creative Learning Workshops</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80 font-bold">{FOOTER.tagline}</p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white/60 font-medium">{FOOTER.heritage}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-bold text-white">
                <Mail className="h-4 w-4 text-[#EFA00B]" />
                workshops@aura-learning.com
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-bold text-white">
                <MapPin className="h-4 w-4 text-[#EFA00B]" />
                Malaysia
              </span>
            </div>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <h3 className="text-xs font-black uppercase tracking-widest text-white/70">{col.title}</h3>
                <Sparkles className="h-3 w-3 text-[#EFA00B]" />
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => {
                  const external = link.href.startsWith("http")
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs font-black uppercase tracking-wider text-white transition-colors hover:text-[#EFA00B]"
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-white/20 pt-8">
          <p className="text-xs font-bold text-white/70">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  )
}