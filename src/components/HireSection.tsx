import ScrollReveal from "./ScrollReveal";

const roles = [
  { title: "AI Research Intern", desc: "Model robustness, failure analysis, safety evaluation, responsible AI research.", tags: ["Robustness", "Safety", "Explainability"] },
  { title: "ML Engineer Intern", desc: "Building and evaluating production-ready ML pipelines with real constraints.", tags: ["TensorFlow", "Python", "MLOps"] },
  { title: "Full Stack AI Developer", desc: "End-to-end AI applications from model training to cloud deployment.", tags: ["FastAPI", "AWS", "React"] },
  { title: "Open Source Contributor", desc: "Contributing to AI fairness, robustness, and explainability tooling.", tags: ["Fairness", "GitHub", "Community"] },
];

const HireSection = () => (
  <section id="hire" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <ScrollReveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2 block">
          // 10 — What I'm Looking For
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Open to Opportunities</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          I'm actively seeking roles where AI is taken seriously — not just shipped fast. If you're working on systems that need to be robust, explainable, or fair, let's talk.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {roles.map((role, i) => (
          <ScrollReveal key={role.title} delay={i * 0.1}>
            <div className="bg-surface-elevated border border-border rounded-sm p-6 h-full hover:border-primary/30 transition-colors">
              <h3 className="font-display font-semibold text-lg mb-2">{role.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{role.desc}</p>
              <div className="flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-primary/5 border border-primary/10 rounded-sm text-[10px] font-mono text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-neural-teal/10 border border-neural-teal/20 rounded-sm font-mono text-xs text-neural-teal">
            Available for internships · 2026
          </span>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HireSection;
