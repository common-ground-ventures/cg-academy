import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="w-full max-w-[1100px] mx-auto px-[40px] py-[clamp(60px,10vw,112px)] text-center">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--cg-gray-700)] mb-8">
            Common Ground Academy
          </p>
          <h1 className="text-[clamp(48px,9vw,130px)] font-black tracking-[-0.06em] leading-[0.85] uppercase text-[var(--cg-black)]">
            90-DAY<br />AI MASTERY
          </h1>
          <p className="mt-8 text-[16px] font-normal text-[var(--cg-gray-700)] max-w-xl mx-auto leading-[1.7]">
            From &ldquo;what the hell is an LLM&rdquo; to certified, automation-building
            AI practitioner. No degree required. No bullshit.
          </p>
          <div className="mt-10 flex flex-row gap-4 flex-wrap justify-center">
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
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[var(--cg-black)] py-[clamp(48px,8vw,80px)]">
        <div className="max-w-[1100px] mx-auto px-[40px] grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { num: "12", label: "Weeks" },
            { num: "8+", label: "Free Certifications" },
            { num: "$150", label: "Total Investment" },
            { num: "90%", label: "Percentile Target" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-[clamp(30px,5vw,48px)] font-black text-[var(--cg-white)] tracking-tight">
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
      <section className="py-[clamp(60px,10vw,112px)]">
        <div className="max-w-[1100px] mx-auto px-[40px] text-center">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--cg-gray-700)] mb-4">
            The Plan
          </p>
          <h2 className="text-[clamp(24px,4.5vw,48px)] font-extrabold tracking-[-0.04em] uppercase leading-tight mb-14">
            Four Phases.<br />
            <span className="text-[var(--cg-gray-300)]">Zero Filler.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
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
                <span className="text-[36px] font-black text-[var(--cg-gray-100)]">
                  {p.phase}
                </span>
                <h3 className="text-[15px] font-bold uppercase tracking-wider mt-2">
                  {p.title}
                </h3>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--cg-gray-700)] mt-1">
                  {p.weeks}
                </p>
                <p className="text-[14px] text-[var(--cg-black)] leading-relaxed mt-4">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <Link
              href="/dashboard"
              className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase px-12 py-4 bg-[var(--cg-black)] text-[var(--cg-white)] border-2 border-[var(--cg-black)] hover:bg-[var(--cg-gray-800)] transition-colors"
            >
              Let&apos;s Go
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Statement */}
      <section className="bg-[var(--cg-gray-100)] py-[clamp(60px,10vw,112px)]">
        <div className="max-w-[1100px] mx-auto px-[40px] text-center">
          <p className="text-[clamp(18px,3.5vw,30px)] font-extrabold tracking-[-0.03em] uppercase leading-tight">
            A degree takes 4 years and costs $50K.{" "}
            <span className="text-[var(--cg-gray-300)]">
              This takes 90 days and costs $150.
            </span>
          </p>
          <p className="text-[14px] text-[var(--cg-gray-700)] mt-6 max-w-xl mx-auto leading-[1.7]">
            No classroom. No professor reading slides. Just you, the tools, and a
            plan designed by people who actually use this stuff every day.
          </p>
        </div>
      </section>
    </div>
  );
}
