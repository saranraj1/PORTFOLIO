import ScrollReveal from "./ScrollReveal";

const PhilosophySection = () => (
  <section id="philosophy" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
    <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
      <ScrollReveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2 block">
          // 03 — Research Philosophy
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
          What I Believe About AI
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <blockquote className="text-lg md:text-xl leading-relaxed text-muted-foreground border-l-2 border-primary pl-6 mb-8">
          "Most people build AI to impress. I build AI to interrogate. A model that scores 99% but can't explain itself is not intelligence — it's a pattern with confidence. I believe the most important question in AI is not 'does it work?' but 'when does it break, who does it hurt, and can we see why?'
          <br /><br />
          Robustness is not a feature. Fairness is not optional. Explainability is not a bonus — it is the baseline."
        </blockquote>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex flex-wrap gap-3">
          {["Grounded in SilentBias", "Grounded in Voice Guardian", "Grounded in 120-day challenge"].map((tag) => (
            <span key={tag} className="px-3 py-1.5 bg-surface-elevated border border-border rounded-sm font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PhilosophySection;
