import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    tag: "AI Platform",
    title: "Thenali AI",
    subtitle: "Developer Learning & Repository Intelligence",
    desc: "AI-powered platform transforming complex GitHub repositories into structured learning experiences. Analyzes repo architecture, generates code explanations, and builds adaptive learning roadmaps.",
    metrics: ["AWS Cloud Infrastructure", "FAISS Vector Search", "Multilingual Support"],
    tech: ["Python", "FastAPI", "Amazon Bedrock", "FAISS", "Tailwind CSS", "DynamoDB", "S3"],
    layers: [
      "Frontend: Tailwind CSS — repository explorer, learning dashboard",
      "Backend: Python + FastAPI — API routing, repo processing",
      "AI: Amazon Bedrock + Sentence Transformers",
      "Vector: FAISS — semantic similarity retrieval",
      "Cloud: AWS EC2 · DynamoDB · S3 · Amazon Polly",
    ],
    link: null,
    color: "neural-purple",
  },
  {
    tag: "Real-Time AI",
    title: "Voice Guardian",
    subtitle: "Emotion Recognition System",
    desc: "Real-time voice emotion recognition system achieving 92% classification accuracy. Detects emotional state from live microphone input and responds with personalized coaching powered by Llama-3 via Groq.",
    metrics: ["92% Accuracy", "Real-time Processing", "Live Dashboard"],
    tech: ["Python", "TensorFlow", "Groq", "Llama-3", "MFCC", "Chroma"],
    layers: [
      "Microphone Input → Feature Extraction (MFCC · Chroma · Tonnetz)",
      "Emotion Classifier (TensorFlow · 92% accuracy)",
      "Groq API (Llama-3) → Empathetic coaching response",
      "Live Emotion Dashboard + Voice Mood Coach",
    ],
    link: "https://github.com/saranraj1/voice-guardian",
    color: "neural-teal",
  },
  {
    tag: "Ethical AI",
    title: "SilentBias",
    subtitle: "Fairness & Bias Audit for Education",
    desc: "Comprehensive bias detection and mitigation framework for AI-driven student risk assessment. Analyzed 10,000+ records and improved fairness metrics by 23% using Reweighing with full SHAP explainability.",
    metrics: ["10,000+ Records", "23% Fairness Improvement", "SHAP Explainability"],
    tech: ["Python", "XGBoost", "Random Forest", "SHAP", "Streamlit"],
    layers: [
      "Raw Dataset (10K+ student records) → Preprocessing",
      "Baseline: XGBoost + Random Forest benchmarked",
      "SHAP Explainability → feature importance per prediction",
      "Bias Detection → demographic disparity analysis",
      "Reweighing Mitigation → 23% fairness improvement",
    ],
    link: "https://github.com/saranraj1/fairness-and-bias-audit-for-student-performance",
    color: "neural-coral",
  },
];

const colorMap: Record<string, string> = {
  "neural-purple": "bg-neural-purple/10 text-neural-purple border-neural-purple/20",
  "neural-teal": "bg-neural-teal/10 text-neural-teal border-neural-teal/20",
  "neural-coral": "bg-neural-coral/10 text-neural-coral border-neural-coral/20",
};

const ProjectsSection = () => (
  <section id="projects" className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <ScrollReveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2 block">
          // 02 — Featured Projects
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">
          What I've Built
        </h2>
      </ScrollReveal>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-surface-elevated border border-border rounded-sm overflow-hidden group"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border rounded-sm mb-3 ${colorMap[project.color]}`}>
                      {project.tag}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground font-mono mt-1">{project.subtitle}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 border border-border text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary hover:border-primary transition-colors rounded-sm"
                    >
                      GitHub <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">{project.desc}</p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.metrics.map((m) => (
                    <span key={m} className="px-3 py-1 bg-muted border border-border rounded-sm text-xs font-mono text-muted-foreground">
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-primary/5 border border-primary/10 rounded-sm text-[10px] font-mono text-primary">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Architecture */}
                <div className="border-t border-border pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3 block">
                    Architecture Pipeline
                  </span>
                  <div className="space-y-1">
                    {project.layers.map((layer, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-mono text-[10px] mt-1">→</span>
                        {layer}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
