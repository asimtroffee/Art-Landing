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
  title: "AURA Creative Learning Workshops | Memory Techniques & Learning How to Learn",
  description:
    "AURA workshops teach students aged 7–17 memory techniques and how to learn, including sketch noting, spaced recall, critical thinking and presentation skills in 5 live 2-hour online sessions, then take on the AURA Student Olympiad with prizes up to RM2,500.",
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