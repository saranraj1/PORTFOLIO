import ScrollReveal from "./ScrollReveal";

const pillars = [
  { num: "01", title: "Data Science", desc: "Data robustness: data decay, missingness patterns, and proxy variable risks in real-world datasets" },
  { num: "02", title: "Machine Learning", desc: "Model fragility: generalization gaps, distribution shift, and failure under edge cases" },
  { num: "03", title: "Deep Learning", desc: "AI systems: neuron behavior analysis and human-in-the-loop dynamics in deployed systems" },
  { num: "04", title: "GenAI & Agents", desc: "Agentic safety: RAG failure modes, hallucination patterns, and autonomous agent safety constraints" },
];

const ChallengeSection = () => (
  <section id="challenge" className="py-24 md:py-32 relative">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <ScrollReveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2 block">
          // 01 — Research Initiative
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          120+ Day AI Failure Modes Challenge
        </h2>
        <div className="inline-block px-3 py-1 bg-neural-teal/10 border border-neural-teal/20 rounded-sm font-mono text-xs text-neural-teal mb-6">
          16 Weeks · In Progress
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
          A 16-week research-oriented study plan — not building more models, but understanding where they break.
        </p>
        <blockquote className="border-l-2 border-primary pl-4 text-muted-foreground italic max-w-3xl mb-12">
          "The gap between a working model and a production-ready AI system is far larger than most tutorials acknowledge. My work moves deliberately beyond baseline accuracy into questions of robustness, explainability, and safety."
        </blockquote>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar, i) => (
          <ScrollReveal key={pillar.num} delay={i * 0.1}>
            <div className="bg-surface-elevated border border-border rounded-sm p-6 h-full hover:border-primary/30 transition-colors group">
              <span className="font-mono text-[10px] text-primary mb-3 block">{pillar.num} /</span>
              <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ChallengeSection;
