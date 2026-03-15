import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const terminalLines = [
  { prompt: "$ whoami", response: "U SaranRaj — AI/ML Researcher & Developer" },
  { prompt: '$ cat profile.json', response: '{ "focus": "AI Robustness & Explainability", "location": "Chennai, India" }' },
  { prompt: "$ python3 philosophy.py", response: '"Building AI that interrogates itself"' },
];

const stats = [
  { value: "120+", label: "Day AI Challenge" },
  { value: "92%", label: "Model Accuracy" },
  { value: "23%", label: "Bias Reduction" },
  { value: "3", label: "AI Projects" },
  { value: "2", label: "Internships" },
];

const HeroSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTypingResponse, setIsTypingResponse] = useState(false);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;

    const currentLine = terminalLines[visibleLines];

    if (!isTypingResponse) {
      // Type prompt
      if (currentCharIndex < currentLine.prompt.length) {
        const timer = setTimeout(() => {
          setTypedText((prev) => prev + currentLine.prompt[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, 40);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTypingResponse(true);
          setCurrentCharIndex(0);
          setTypedText("");
        }, 300);
        return () => clearTimeout(timer);
      }
    } else {
      // Show response instantly, then move to next line
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
        setIsTypingResponse(false);
        setCurrentCharIndex(0);
        setTypedText("");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, currentCharIndex, isTypingResponse]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-neural-purple/10 blur-[120px] orb-purple" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-neural-teal/10 blur-[100px] orb-teal" />
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] rounded-full bg-neural-coral/8 blur-[100px] orb-coral" />

      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="bg-surface-elevated border border-border rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-neural-coral/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-neural-teal/60" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground">saran@portfolio:~</span>
              </div>

              {/* Terminal body */}
              <div className="p-4 font-mono text-sm space-y-2 min-h-[200px]">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i}>
                    <div className="text-neural-teal">{line.prompt}</div>
                    <div className="text-muted-foreground ml-2">{line.response}</div>
                  </div>
                ))}
                {visibleLines < terminalLines.length && (
                  <div>
                    {!isTypingResponse ? (
                      <div className="text-neural-teal">
                        {typedText}
                        <span className="terminal-cursor text-primary">▊</span>
                      </div>
                    ) : (
                      <div>
                        <div className="text-neural-teal">{terminalLines[visibleLines].prompt}</div>
                        <div className="text-muted-foreground ml-2">{terminalLines[visibleLines].response}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-6"
          >
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2 block">
                AI/ML Researcher & Developer
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[0.9] mb-4">
                U Saran
                <br />
                <span className="text-primary">Raj</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              3rd year B.Tech AI & Data Science undergraduate — studying not just how AI works,
              but where it breaks, why it fails, and how to make it trustworthy.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors rounded-sm"
              >
                View Projects <ArrowDown className="w-3 h-3" />
              </a>
              <a
                href="mailto:saran17102005@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-mono text-xs uppercase tracking-wider hover:border-primary hover:text-primary transition-colors rounded-sm"
              >
                Get in Touch <Mail className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface-elevated/50 border border-border rounded-sm p-4 text-center"
            >
              <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
