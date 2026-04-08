import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 sm:px-10 lg:px-16">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--cg-gray-500)] mb-6">
          Common Ground Academy
        </p>
        <h1
          className="text-[clamp(48px,12vw,160px)] font-black tracking-[-0.06em] leading-[0.85] uppercase text-[var(--cg-black)]"
        >
          90-DAY<br />AI MASTERY
        </h1>
        <p className="mt-8 text-[15px] font-light text-[var(--cg-gray-500)] max-w-lg leading-relaxed">
          From &ldquo;what the hell is an LLM&rdquo; to certified, automation-building
          AI practitioner. No degree required. No bullshit.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/dashboard"
            className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase px-10 py-4 bg-[var(--cg-black)] text-[var(--cg-white)] border-2 border-[var(--cg-black)] hover:bg-[var(--cg-gray-800)] transition-colors text-center"
          >
            Start Learning
          </Link>
          <Link
            href="/curriculum"
            className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase px-10 py-4 bg-transparent text-[var(--cg-black)] border-2 border-[var(--cg-black)] hover:bg-[var(--cg-black)] hover:text-[var(--cg-white)] transition-colors text-center"
          >
            View Curriculum
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[var(--cg-black)] px-6 sm:px-10 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "12", label: "Weeks" },
            { num: "8+", label: "Free Certifications" },
            { num: "$150", label: "Total Investment" },
            { num: "90%", label: "Percentile Target" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-[clamp(32px,5vw,56px)] font-black text-[var(--cg-white)] tracking-tight">
                {stat.num}
              </div>
              <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[var(--cg-gray-500)] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Phases */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 max-w-5xl mx-auto">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--cg-gray-500)] mb-4">
          The Plan
        </p>
        <h2 className="text-[clamp(24px,5vw,48px)] font-extrabold tracking-[-0.04em] uppercase leading-tight mb-12">
          Four Phases.<br />
          <span className="text-[var(--cg-gray-300)]">Zero Filler.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            {
              phase: "01",
              title: "Foundations",
              weeks: "Weeks 1-3",
              desc: "What AI is, how to use it, your first certifications. Go from zero to competent.",
            },
            {
              phase: "02",
              title: "Applied Skills",
              weeks: "Weeks 4-6",
              desc: "AI for business, automation fundamentals, advanced prompting. Start making money with this.",
            },
            {
              phase: "03",
              title: "Automation & Business",
              weeks: "Weeks 7-9",
              desc: "Build systems, think strategically, create custom AI assistants. Become dangerous.",
            },
            {
              phase: "04",
              title: "Certification & Mastery",
              weeks: "Weeks 10-12",
              desc: "Paid certifications, portfolio, future planning. Prove what you know.",
            },
          ].map((p) => (
            <div
              key={p.phase}
              className="border border-[var(--cg-gray-100)] p-8 hover:border-[var(--cg-gray-300)] transition-colors"
            >
              <span className="text-[40px] font-black text-[var(--cg-gray-100)]">
                {p.phase}
              </span>
              <h3 className="text-[16px] font-bold uppercase tracking-wider mt-2">
                {p.title}
              </h3>
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--cg-gray-500)] mt-1">
                {p.weeks}
              </p>
              <p className="text-[14px] text-[var(--cg-gray-700)] leading-relaxed mt-4">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/dashboard"
            className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase px-12 py-4 bg-[var(--cg-black)] text-[var(--cg-white)] border-2 border-[var(--cg-black)] hover:bg-[var(--cg-gray-800)] transition-colors"
          >
            Let&apos;s Go
          </Link>
        </div>
      </section>

      {/* Bottom Statement */}
      <section className="bg-[var(--cg-gray-100)] px-6 sm:px-10 py-20 text-center">
        <p className="text-[clamp(18px,4vw,36px)] font-extrabold tracking-[-0.03em] uppercase leading-tight max-w-3xl mx-auto">
          A degree takes 4 years and costs $50K.{" "}
          <span className="text-[var(--cg-gray-300)]">
            This takes 90 days and costs $150.
          </span>
        </p>
        <p className="text-[14px] text-[var(--cg-gray-500)] mt-6 max-w-xl mx-auto leading-relaxed">
          No classroom. No professor reading slides. Just you, the tools, and a
          plan designed by people who actually use this stuff every day.
        </p>
      </section>
    </div>
  );
}
