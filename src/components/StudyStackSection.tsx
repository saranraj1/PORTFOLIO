import ScrollReveal from "./ScrollReveal";

const studies = [
  { title: "Agentic AI & RAG Systems", desc: "RAG failure modes, autonomous agent safety, hallucination patterns in production", progress: 55, note: "Part of 120+ day challenge" },
  { title: "Advanced Mathematics for ML", desc: "Linear algebra, probability theory, and optimisation for deep learning foundations", progress: 40, note: "Ongoing · foundational" },
  { title: "Korean Language", desc: "Targeting TOPIK Level 5 by October 2026 — vocabulary and reading comprehension", progress: 28, note: "Target: TOPIK 5 · Oct 2026" },
  { title: "Cloud Architecture (AWS)", desc: "Scalable inference, serverless pipelines, cost optimisation for AI workloads", progress: 50, note: "Applied via Thenali AI" },
];

const languages = [
  { name: "Tamil", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Korean", level: "Learning (TOPIK 5 target)" },
];

const StudyStackSection = () => (
  <section className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <ScrollReveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2 block">
          // 08 — Active Study Stack
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Currently Learning</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {studies.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.1}>
            <div className="bg-surface-elevated border border-border rounded-sm p-6 h-full">
              <h3 className="font-display font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: `${s.progress}%` }}
                  />
                </div>
                <span className="font-mono text-[10px] text-primary">{s.progress}%</span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground mt-2 block">{s.note}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Languages */}
      <ScrollReveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-4 block">
          // 09 — Languages
        </span>
        <div className="flex flex-wrap gap-4">
          {languages.map((l) => (
            <div key={l.name} className="px-4 py-2 bg-surface-elevated border border-border rounded-sm">
              <span className="font-display font-semibold text-sm">{l.name}</span>
              <span className="text-muted-foreground text-xs ml-2">— {l.level}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default StudyStackSection;
