import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | AURA Creative Learning Workshops",
  description:
    "How the AURA Creative Learning Workshops website collects, uses, and protects analytics and opt-in lead data, in line with the Personal Data Protection Act (PDPA) 2010.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper py-16 sm:py-24">
      <div className="wrap max-w-3xl">
        <p className="kicker">Privacy Policy</p>
        <h1 className="mt-3 font-heading text-3xl font-black text-ink sm:text-4xl">
          Your privacy matters to us
        </h1>
        <p className="mt-2 text-sm text-ink/50">Last updated: August 2026</p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-ink/75">
          <section>
            <h2 className="font-heading text-xl font-bold text-ink mb-3">1. Who we are</h2>
            <p>
              The AURA Creative Learning Workshops is a creative
              learning programme for school students aged 7 to 17. This policy explains how this
              website handles the limited data it collects when you browse and when you opt in to
              receive workshop updates, in line with the Personal Data Protection Act (PDPA) 2010.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-ink mb-3">2. What we collect</h2>
            <p className="mb-3">When you give consent via the cookie banner, we collect anonymous analytics:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Page engagement</strong> which sections of the page you viewed, and for how
                long, and how far you scrolled within them.
              </li>
              <li>
                <strong>Actions</strong> which buttons (calls to action) you clicked.
              </li>
              <li>
                <strong>Device &amp; traffic</strong> device type (mobile / desktop / tablet),
                approximate traffic source (e.g. an ad campaign or direct visit).
              </li>
            </ul>
            <p className="mt-3 mb-3">
              <strong>We do not link analytics to you.</strong> Analytics is anonymous; this data
              cannot identify you.
            </p>
            <p className="mb-3">
              If you fill in the <strong>opt-in workshop list form</strong>, we collect only what
              you choose to provide: parent name, email, WhatsApp number, your child&apos;s age
              range, and your preferred workshop. This personal data is used solely to send you
              workshop and Olympiad updates.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-ink mb-3">3. How we use it</h2>
            <p>
              Analytics is used purely to understand how the page performs: what&apos;s working,
              where visitors lose interest, and which calls to action get the most attention.
              Opt-in details are used only to send updates you asked for. We do not use this
              information for advertising, and we never sell or rent it.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-ink mb-3">4. Consent</h2>
            <p>
              Tracking only begins <strong>after you explicitly accept</strong> the cookie banner.
              You may decline at any time, and no analytics will be collected. Your choice is
              remembered on your device. Joining the workshop list is entirely voluntary, and you
              can ask to be removed from it at any time by contacting us.
            </p>
            <p className="mt-3">
              If your browser sends a &quot;Do Not Track&quot; signal, tracking is automatically
              disabled.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-ink mb-3">5. Where data is stored</h2>
            <p>
              Anonymous analytics and opt-in form submissions are stored securely in Google
              Firebase (Firestore). Access is restricted to the authorized administrators of the
              programme.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-ink mb-3">6. Retention</h2>
            <p>
              Analytics records are retained for as long as needed to improve the website.
              Opt-in details are kept while you remain subscribed to workshop updates, and can be
              deleted on request.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-ink mb-3">7. Your rights</h2>
            <p>
              Under the PDPA you may request access to, or correction or deletion of, the data we
              hold about you. To unsubscribe or delete your details, email us at the address on
              the website or in your welcome message.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-ink mb-3">8. Registration &amp; quiz data</h2>
            <p>
              Workshop registration and Olympiad quiz submissions are handled by the official
              shop and the AURA microsite under their own terms and privacy
              policies. Data you submit there (including MyKad number where required for score
              merging) is governed by those separate policies.
            </p>
          </section>

          <p className="pt-4 text-xs text-ink/45">
            This policy may be updated from time to time. The &quot;Last updated&quot; date above
            reflects the latest version.
          </p>
        </div>
      </div>
    </main>
  )
}