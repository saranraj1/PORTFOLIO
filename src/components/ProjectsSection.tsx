import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const accentHex: Record<string, string> = {
  "neural-purple": "#a78bfa",
  "neural-teal": "#2dd4bf",
  "neural-coral": "#fb7185",
};

// ─── SVG Architecture Diagrams ───

const ThenaliDiagram = () => {
  const nodeBg = "#0f0f18";
  const border = "#2a2a3d";
  const text = "#9896b0";
  const accent = "#a78bfa";
  const teal = "#2dd4bf";
  const arrowColor = "#4a4870";

  return (
    <svg viewBox="0 0 600 420" className="w-full max-w-[600px] mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Layer 1 - Frontend */}
      <rect x="150" y="10" width="300" height="50" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="300" y="30" textAnchor="middle" fill={accent} fontSize="10" fontFamily="monospace" fontWeight="bold">Frontend</text>
      <text x="300" y="46" textAnchor="middle" fill={text} fontSize="9" fontFamily="monospace">Tailwind CSS — repo explorer, learning dashboard</text>

      {/* Arrow 1→2 */}
      <line x1="300" y1="60" x2="300" y2="90" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-purple)" />

      {/* Layer 2 - Backend */}
      <rect x="150" y="90" width="300" height="50" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="300" y="110" textAnchor="middle" fill={accent} fontSize="10" fontFamily="monospace" fontWeight="bold">Backend</text>
      <text x="300" y="126" textAnchor="middle" fill={text} fontSize="9" fontFamily="monospace">Python + FastAPI — API routing, Whisper STT</text>

      {/* Arrow 2→3a and 2→3b */}
      <line x1="230" y1="140" x2="150" y2="180" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-purple)" />
      <line x1="370" y1="140" x2="450" y2="180" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-purple)" />

      {/* Layer 3a - AI Processing (purple border) */}
      <rect x="30" y="180" width="240" height="50" rx="4" fill={nodeBg} stroke={accent} strokeWidth="1.5" />
      <text x="150" y="200" textAnchor="middle" fill={accent} fontSize="10" fontFamily="monospace" fontWeight="bold">AI Processing</text>
      <text x="150" y="216" textAnchor="middle" fill={text} fontSize="9" fontFamily="monospace">Amazon Bedrock + Sentence Transformers</text>

      {/* Layer 3b - Vector Search (teal border) */}
      <rect x="330" y="180" width="240" height="50" rx="4" fill={nodeBg} stroke={teal} strokeWidth="1.5" />
      <text x="450" y="200" textAnchor="middle" fill={teal} fontSize="10" fontFamily="monospace" fontWeight="bold">Vector Search</text>
      <text x="450" y="216" textAnchor="middle" fill={text} fontSize="9" fontFamily="monospace">FAISS — semantic similarity retrieval</text>

      {/* Arrows 3a→4 and 3b→4 */}
      <line x1="150" y1="230" x2="230" y2="280" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-purple)" />
      <line x1="450" y1="230" x2="370" y2="280" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-purple)" />

      {/* Layer 4 - Cloud */}
      <rect x="100" y="280" width="400" height="50" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="300" y="300" textAnchor="middle" fill={accent} fontSize="10" fontFamily="monospace" fontWeight="bold">Cloud Infrastructure</text>
      <text x="300" y="316" textAnchor="middle" fill={text} fontSize="9" fontFamily="monospace">AWS EC2 · DynamoDB · S3 · Amazon Polly</text>

      <defs>
        <marker id="arrowhead-purple" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={arrowColor} />
        </marker>
      </defs>
    </svg>
  );
};

const VoiceGuardianDiagram = () => {
  const nodeBg = "#0f0f18";
  const border = "#2a2a3d";
  const text = "#9896b0";
  const accent = "#2dd4bf";
  const arrowColor = "#4a4870";

  return (
    <svg viewBox="0 0 700 300" className="w-full max-w-[700px] mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Row 1: Pipeline L→R */}
      {/* Mic Input */}
      <rect x="10" y="20" width="120" height="50" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="70" y="42" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Microphone</text>
      <text x="70" y="56" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">Input</text>

      <line x1="130" y1="45" x2="165" y2="45" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-teal)" />

      {/* Feature Extraction */}
      <rect x="165" y="20" width="160" height="50" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="245" y="40" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Feature Extraction</text>
      <text x="245" y="54" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">MFCC · Chroma · Tonnetz</text>

      <line x1="325" y1="45" x2="360" y2="45" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-teal)" />

      {/* Emotion Classifier */}
      <rect x="360" y="20" width="170" height="50" rx="4" fill={nodeBg} stroke={accent} strokeWidth="1.5" />
      <text x="445" y="40" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Emotion Classifier</text>
      <text x="445" y="54" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">TensorFlow · 92% accuracy</text>

      <line x1="530" y1="45" x2="565" y2="45" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-teal)" />

      {/* Emotion Output */}
      <rect x="565" y="20" width="120" height="50" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="625" y="42" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Emotion</text>
      <text x="625" y="56" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">Output</text>

      {/* Arrow down from Emotion Classifier to Groq */}
      <line x1="445" y1="70" x2="445" y2="110" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-teal)" />

      {/* Groq API */}
      <rect x="345" y="110" width="200" height="50" rx="4" fill={nodeBg} stroke={accent} strokeWidth="1.5" />
      <text x="445" y="130" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Groq API / Llama-3</text>
      <text x="445" y="144" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">Empathetic coaching engine</text>

      {/* Arrows from Groq to two outputs */}
      <line x1="380" y1="160" x2="260" y2="200" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-teal)" />
      <line x1="510" y1="160" x2="560" y2="200" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-teal)" />

      {/* Live Emotion Dashboard */}
      <rect x="140" y="200" width="200" height="50" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="240" y="220" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Live Emotion Dashboard</text>
      <text x="240" y="234" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">Real-time visualization</text>

      {/* Voice Mood Coach */}
      <rect x="460" y="200" width="200" height="50" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="560" y="220" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Voice Mood Coach</text>
      <text x="560" y="234" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">Personalized feedback</text>

      <defs>
        <marker id="arrowhead-teal" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={arrowColor} />
        </marker>
      </defs>
    </svg>
  );
};

const SilentBiasDiagram = () => {
  const nodeBg = "#0f0f18";
  const border = "#2a2a3d";
  const text = "#9896b0";
  const accent = "#fb7185";
  const arrowColor = "#4a4870";

  return (
    <svg viewBox="0 0 600 400" className="w-full max-w-[600px] mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Raw Dataset */}
      <rect x="175" y="10" width="250" height="45" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="300" y="28" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Raw Dataset</text>
      <text x="300" y="42" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">10K+ student records</text>

      <line x1="300" y1="55" x2="300" y2="80" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-coral)" />

      {/* Preprocessing */}
      <rect x="175" y="80" width="250" height="40" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="300" y="104" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Preprocessing</text>

      <line x1="300" y1="120" x2="300" y2="145" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-coral)" />

      {/* Baseline Models */}
      <rect x="150" y="145" width="300" height="45" rx="4" fill={nodeBg} stroke={accent} strokeWidth="1.5" />
      <text x="300" y="163" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Baseline Models</text>
      <text x="300" y="177" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">XGBoost + Random Forest</text>

      {/* Split arrows */}
      <line x1="225" y1="190" x2="140" y2="225" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-coral)" />
      <line x1="375" y1="190" x2="460" y2="225" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-coral)" />

      {/* SHAP */}
      <rect x="30" y="225" width="220" height="45" rx="4" fill={nodeBg} stroke={accent} strokeWidth="1.5" />
      <text x="140" y="243" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">SHAP Explainability</text>
      <text x="140" y="257" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">Feature importance analysis</text>

      {/* Bias Detection */}
      <rect x="350" y="225" width="220" height="45" rx="4" fill={nodeBg} stroke={accent} strokeWidth="1.5" />
      <text x="460" y="243" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Bias Detection</text>
      <text x="460" y="257" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">Demographic disparity analysis</text>

      {/* Merge arrows */}
      <line x1="140" y1="270" x2="225" y2="300" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-coral)" />
      <line x1="460" y1="270" x2="375" y2="300" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-coral)" />

      {/* Reweighing */}
      <rect x="150" y="300" width="300" height="45" rx="4" fill={nodeBg} stroke={accent} strokeWidth="1.5" />
      <text x="300" y="318" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" fontWeight="bold">Reweighing Mitigation</text>
      <text x="300" y="332" textAnchor="middle" fill={text} fontSize="8" fontFamily="monospace">23% fairness improvement</text>

      {/* Split to outputs */}
      <line x1="225" y1="345" x2="140" y2="370" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-coral)" />
      <line x1="375" y1="345" x2="460" y2="370" stroke={arrowColor} strokeWidth="1.5" markerEnd="url(#arrowhead-coral)" />

      {/* Streamlit Dashboard */}
      <rect x="30" y="370" width="220" height="25" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="140" y="387" textAnchor="middle" fill={text} fontSize="9" fontFamily="monospace">Streamlit Dashboard</text>

      {/* Fairness Report */}
      <rect x="350" y="370" width="220" height="25" rx="4" fill={nodeBg} stroke={border} strokeWidth="1" />
      <text x="460" y="387" textAnchor="middle" fill={text} fontSize="9" fontFamily="monospace">Fairness Report</text>

      <defs>
        <marker id="arrowhead-coral" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={arrowColor} />
        </marker>
      </defs>
    </svg>
  );
};

const diagramComponents: Record<string, React.FC> = {
  "Thenali AI": ThenaliDiagram,
  "Voice Guardian": VoiceGuardianDiagram,
  "SilentBias": SilentBiasDiagram,
};

const ProjectCard = ({ project, i }: { project: typeof projects[0]; i: number }) => {
  const [showDiagram, setShowDiagram] = useState(false);
  const DiagramComponent = diagramComponents[project.title];

  return (
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

          {/* Architecture Pipeline */}
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

          {/* Architecture Diagram Toggle */}
          {DiagramComponent && (
            <div className="mt-4">
              <button
                onClick={() => setShowDiagram(!showDiagram)}
                className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider border rounded-sm transition-colors ${
                  showDiagram
                    ? `${colorMap[project.color]}`
                    : "border-border text-muted-foreground hover:text-primary hover:border-primary"
                }`}
              >
                {showDiagram ? "▾ Hide Architecture" : "▸ View Architecture"}
              </button>

              <AnimatePresence>
                {showDiagram && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-4 border border-border rounded-sm bg-background/50">
                      <DiagramComponent />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.div>
    </ScrollReveal>
  );
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
          <ProjectCard key={project.title} project={project} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
