import type { Metadata } from "next"
import { Bebas_Neue, Nunito, Caveat } from "next/font/google"
import "./globals.css"
import ConsentBanner from "@/components/analytics/consent-banner"

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
})

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "AURA Memory Technique | Free Workshops for Students 7–17",
  description:
    "AURA teaches students aged 7–17 how memory really works. 5 free live workshops covering sketch noting, spaced recall, exam techniques, mind maps and presentation skills. Created by Troffee Education.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${nunito.variable} ${caveat.variable}`}>
      <body className="min-h-screen bg-[#FFFFFF] text-ink antialiased">
        {children}
        <ConsentBanner />
      </body>
    </html>
  )
}