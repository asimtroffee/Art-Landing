import Nav from "@/components/sections/01-nav"
import Hero from "@/components/sections/02-hero"
import TrustStrip from "@/components/sections/02b-trust-strip"
import WhoItsFor from "@/components/sections/03-who-its-for"
import Workshops from "@/components/sections/04-workshops"
import Facilitators from "@/components/sections/06-facilitators"
import Pricing from "@/components/sections/07-pricing"
import Competition from "@/components/sections/09-competition"
import Testimonials from "@/components/sections/14-testimonials"
import HowItWorks from "@/components/sections/15-how-it-works"
import FAQSection from "@/components/sections/16-faq"
import LeadForm from "@/components/sections/11-lead-form"
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
        <TrackedSection trackId="trust_strip">
          <TrustStrip />
        </TrackedSection>
        <TrackedSection trackId="who_its_for">
          <WhoItsFor />
        </TrackedSection>
        <TrackedSection trackId="workshops">
          <Workshops />
        </TrackedSection>
        <TrackedSection trackId="facilitators">
          <Facilitators />
        </TrackedSection>
        <TrackedSection trackId="pricing">
          <Pricing />
        </TrackedSection>
        <TrackedSection trackId="competition">
          <Competition />
        </TrackedSection>
        <TrackedSection trackId="testimonials">
          <Testimonials />
        </TrackedSection>
        <TrackedSection trackId="how_it_works">
          <HowItWorks />
        </TrackedSection>
        <TrackedSection trackId="faq">
          <FAQSection />
        </TrackedSection>
        <TrackedSection trackId="lead_form">
          <LeadForm />
        </TrackedSection>
      </main>
      <Footer />
      <StickyBottomBar />
      <ScrollDepthTracker />
    </>
  )
}