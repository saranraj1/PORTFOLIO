import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "AI / Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "TensorFlow", "Sentence Transformers", "FAISS"],
  },
  {
    title: "AI Robustness & Ethics",
    skills: ["SHAP Explainability", "Bias Detection", "Fairness Metrics", "Model Robustness", "RAG Failure Analysis", "Responsible AI"],
  },
  {
    title: "Cloud & Backend",
    skills: ["AWS EC2", "DynamoDB", "S3", "Amazon Bedrock", "FastAPI", "REST APIs", "MongoDB"],
  },
  {
    title: "Languages & Tools",
    skills: ["Python", "JavaScript", "React.js", "Node.js", "Git", "CI/CD", "Streamlit"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <ScrollReveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2 block">
          // 05 — Skills & Stack
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Technical Arsenal</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={i * 0.1}>
            <div className="bg-surface-elevated border border-border rounded-sm p-6 h-full">
              <h3 className="font-mono text-xs uppercase tracking-wider text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-muted border border-border rounded-sm text-xs text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
