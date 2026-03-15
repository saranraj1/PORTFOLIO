import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Define the Real Problem",
    tagline: "What is actually broken — not what someone asked me to fix",
    approach: "Most AI projects fail here. Someone asks for a model — I ask what decision that model is supposed to improve. If I cannot answer that, I do not start building.",
    questions: [
      "What human decision does this system change?",
      "Who is affected if it gets it wrong?",
      "Is this actually an AI problem or a process problem?",
      "What does failure look like in the real world?",
    ],
    proof: "SilentBias — started with 'who is hurt by wrong predictions' · Voice Guardian — started with 'what does emotional support actually need'",
  },
  {
    num: "02",
    title: "Interrogate the Data",
    tagline: "Data is never neutral — I treat it like a suspect",
    approach: "Before any model, I examine the data for what it hides. Missing values tell stories. Proxy variables carry hidden biases. Distribution shifts break production systems.",
    questions: [
      "What is this data actually measuring vs. what we think it measures?",
      "Where does it come from — and who collected it?",
      "What groups are underrepresented or mislabeled?",
      "What would data decay look like in 6 months?",
    ],
    proof: "SilentBias — analyzed 10K+ records for demographic bias · 120-day challenge — Week 1: data decay & proxy variables",
  },
  {
    num: "03",
    title: "Baseline First",
    tagline: "If I cannot beat a simple model, the problem is not the model",
    approach: "I always start with the simplest possible approach. A baseline gives a floor to beat and forces me to understand what 'good enough' actually means.",
    questions: [
      "What would a rule-based approach achieve?",
      "What is the minimum acceptable performance threshold?",
      "Is the performance gap worth the complexity cost?",
      "What does the confusion matrix reveal about failure patterns?",
    ],
    proof: "SilentBias — XGBoost + Random Forest benchmarked first · Voice Guardian — established accuracy floor before deep learning",
  },
  {
    num: "04",
    title: "Iterate with Intent",
    tagline: "Every change must have a hypothesis attached to it",
    approach: "Random experimentation is not research. Every iteration I make is preceded by a specific question — if I add this feature, the model should improve in this specific way.",
    questions: [
      "What exact hypothesis does this change test?",
      "How will I know if this iteration worked or got lucky?",
      "Am I overfitting to the validation set?",
      "What did this iteration teach me regardless of the result?",
    ],
    proof: "Voice Guardian — MFCC → Chroma → Tonnetz added with specific hypotheses · Thenali AI — FAISS chosen over keyword search for a specific retrieval reason",
  },
  {
    num: "05",
    title: "Stress Test Everything",
    tagline: "A model I have not tried to break is a model I do not understand",
    approach: "Before trusting any model, I actively try to destroy it. Edge cases, adversarial inputs, distribution shifts, missing data at inference time.",
    questions: [
      "What inputs would this model have never seen in training?",
      "What happens when key features are missing at inference?",
      "Does performance degrade uniformly across subgroups?",
      "What is the confidence distribution on wrong predictions?",
    ],
    proof: "120-day challenge — dedicated focus on model fragility · SilentBias — tested bias across demographic subgroups specifically",
  },
  {
    num: "06",
    title: "Can It Explain Itself?",
    tagline: "If I cannot explain why it decided that, I will not deploy it",
    approach: "The final gate. A model that performs well but cannot be explained is a liability. I require every system to have at least one layer of human-readable justification.",
    questions: [
      "Can I point to the exact features driving each prediction?",
      "Would a domain expert agree with the model's reasoning?",
      "Is the explanation stable across similar inputs?",
      "What would a user need to understand to trust this output?",
    ],
    proof: "SilentBias — SHAP explainability on every prediction · Thenali AI — AI explanations designed to be readable by non-experts",
  },
];

const ThinkingSection = () => {
  const [active, setActive] = useState(0);
  const currentStep = steps[active];

  return (
    <section id="think" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScrollReveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2 block">
            // 04 — Engineering Mindset
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How I Think</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            Every AI system I build follows this framework — not a rigid checklist, but a way of thinking that keeps the real problem in focus.
          </p>
        </ScrollReveal>

        {/* Step pills */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {steps.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setActive(i)}
                className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider border rounded-sm transition-all ${
                  active === i
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/30"
                }`}
              >
                {step.num}. {step.title}
              </button>
            ))}
          </div>

          {/* Progress */}
          <div className="h-0.5 bg-border rounded-full mb-8">
            <motion.div
              className="h-full bg-primary rounded-full"
              animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </ScrollReveal>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-surface-elevated border border-border rounded-sm p-6 md:p-8"
          >
            <p className="font-mono text-xs text-neural-teal mb-2">{currentStep.tagline}</p>
            <h3 className="text-xl font-display font-semibold mb-4">
              Step {currentStep.num} — {currentStep.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{currentStep.approach}</p>

            <div className="mb-6">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-3 block">Questions I Ask</span>
              <ul className="space-y-2">
                {currentStep.questions.map((q, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">?</span> {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border pt-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">Proof</span>
              <p className="text-sm text-muted-foreground italic">{currentStep.proof}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ThinkingSection;
