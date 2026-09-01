import Image from "next/image"
import Reveal from "@/components/ui/reveal"
import { THE_PROBLEM } from "@/lib/constants"
import { AlertTriangle, HelpCircle, Sparkles, UserX, UserCheck } from "lucide-react"

export default function TheProblem() {
  return (
    <section
      id="the-problem"
      className="scroll-mt-20 bg-[#FBF5ED] py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Background ambient shapes */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#D65108]/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#EFA00B]/10 blur-3xl pointer-events-none" />

      <div className="wrap max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D65108]/20 bg-[#D65108]/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#D65108] mb-4">
              <AlertTriangle className="h-4 w-4 text-[#D65108]" strokeWidth={2.5} />
              {THE_PROBLEM.kicker}
            </div>
            <h2 className="font-heading text-4xl font-extrabold text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Every parent{" "}
              <span className="italic text-[#D65108] relative inline-block">
                recognizes this.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden>
                  <path d="M2 9 C60 2, 140 2, 198 7" stroke="#EFA00B" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 font-hand text-2xl font-bold text-ink/75">
              Two students. Same textbook. Same study time. Why is one remembering everything a month later?
            </p>
          </div>
        </Reveal>

        {/* 2-Student Contrast Showcase with Photos */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Left Student: The Cramming Trap */}
          <Reveal delay={100}>
            <div className="sketch-card h-full flex flex-col overflow-hidden rounded-3xl border-2 border-red-200 bg-white shadow-md">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
                  alt="Student overwhelmed by late night notes"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
                    <UserX className="h-3.5 w-3.5" />
                    Student A: Rote Repetition
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="font-heading text-xl font-bold drop-shadow">Studies for hours. Reads again and again.</p>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-1 flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-base font-bold text-ink/80 leading-relaxed">
                    &ldquo;They tell you, &apos;I know this!&apos; But a month later, half of it is completely gone.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-ink/60 leading-relaxed">
                    Without mental imagery or structured recall, traditional reading only fills temporary memory.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#E5D7C9] text-xs font-bold text-red-600">
                  Result: Frustration, exam anxiety &amp; fading facts
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Student: The Technique Advantage */}
          <Reveal delay={200}>
            <div className="sketch-card h-full flex flex-col overflow-hidden rounded-3xl border-2 border-[#EFA00B]/50 bg-white shadow-lg ring-4 ring-[#EFA00B]/15">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                  alt="Student using structured visual memory techniques"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D65108] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-white shadow-md">
                    <UserCheck className="h-3.5 w-3.5" />
                    Student B: The Method User
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="font-heading text-xl font-bold drop-shadow">Same class. Same textbook. Remembers clearly.</p>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-1 flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-base font-extrabold text-[#361D2E] leading-relaxed">
                    &ldquo;Ask that student&apos;s parents: &apos;They learned a way to study.&apos; Not a gift. A method.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-ink/70 leading-relaxed">
                    They turn raw lessons into mental pictures and follow strategic spaced review intervals.
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#E5D7C9] text-xs font-bold text-[#D65108]">
                  Result: Effortless recall, calm confidence &amp; top scores
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* The Core Question Callout Card */}
        <Reveal delay={300}>
          <div className="mt-12 rounded-3xl border-2 border-[#D65108]/30 bg-white p-8 sm:p-10 shadow-xl text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FDF3DD] px-4 py-1 text-xs font-black text-[#D65108] mb-4">
              <HelpCircle className="h-4 w-4" />
              The Real Question
            </div>
            <p className="text-lg sm:text-xl font-bold text-ink/70 max-w-xl mx-auto">
              {THE_PROBLEM.coreQuestion.lead}
            </p>
            <h3 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-[2.8rem] font-extrabold text-[#D65108] leading-tight">
              &ldquo;{THE_PROBLEM.coreQuestion.question.replace('It\'s: "', '').replace('"', '')}&rdquo;
            </h3>
            <p className="mt-4 font-hand text-2xl font-bold text-ink/80">
              The answer comes directly from how world memory champions train...
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
