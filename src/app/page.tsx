import Nav from "@/components/sections/01-nav"
import Hero from "@/components/sections/02-hero"
import TheProblem from "@/components/sections/03-the-problem"
import TheReveal from "@/components/sections/03b-the-reveal"
import TheShift from "@/components/sections/04-the-shift"
import TheMethod from "@/components/sections/05-the-method"
import Workshops from "@/components/sections/04-workshops"
import WhoItsFor from "@/components/sections/03-who-its-for"
import TrustSection from "@/components/sections/06-facilitators"
import HowToJoin from "@/components/sections/15-how-it-works"
import FAQSection from "@/components/sections/16-faq"
import ClosingCta from "@/components/sections/11-lead-form"
import Footer from "@/components/sections/18-footer"
import StickyBottomBar from "@/components/sections/19-sticky-bottom-bar"
import TrackedSection from "@/components/analytics/tracked-section"
import ScrollDepthTracker from "@/components/analytics/scroll-depth-tracker"

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <TrackedSection trackId="hero">
          <Hero />
        </TrackedSection>
        <TrackedSection trackId="the_problem">
          <TheProblem />
        </TrackedSection>
        <TrackedSection trackId="the_reveal">
          <TheReveal />
        </TrackedSection>
        <TrackedSection trackId="the_shift">
          <TheShift />
        </TrackedSection>
        <TrackedSection trackId="the_method">
          <TheMethod />
        </TrackedSection>
        <TrackedSection trackId="workshops">
          <Workshops />
        </TrackedSection>
        <TrackedSection trackId="who_its_for">
          <WhoItsFor />
        </TrackedSection>
        <TrackedSection trackId="trust">
          <TrustSection />
        </TrackedSection>
        <TrackedSection trackId="how_to_join">
          <HowToJoin />
        </TrackedSection>
        <TrackedSection trackId="faq">
          <FAQSection />
        </TrackedSection>
        <TrackedSection trackId="closing_cta">
          <ClosingCta />
        </TrackedSection>
      </main>
      <Footer />
      <StickyBottomBar />
      <ScrollDepthTracker />
    </>
  )
}