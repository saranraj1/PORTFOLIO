import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "IBM Certification Program",
    duration: "Aug 2025 – Nov 2025",
    responsibilities: [
      "Developed and deployed 8 production-level full-stack applications using React.js, Node.js, Express.js, and MongoDB",
      "Designed REST APIs handling over 200 requests per minute with stable backend performance",
      "Implemented CI/CD pipelines and automated testing to improve deployment reliability",
      "Collaborated in agile teams using Git-based version control and structured code reviews",
    ],
  },
  {
    title: "Python Programming Intern",
    company: "Codtech IT Solutions Pvt. Ltd.",
    duration: "Jan 2026 – Feb 2026",
    responsibilities: [
      "Completed 4 structured Python programming assignments covering core language constructs",
      "Developed and tested reusable Python scripts for improved correctness and execution flow",
      "Participated in regular progress reviews and incorporated supervisor feedback",
    ],
  },
];

const education = {
  degree: "B.Tech — Artificial Intelligence & Data Science",
  institution: "Chettinad College of Engineering, Karur",
  duration: "2023 – 2027 (Expected)",
  year: "3rd Year",
};

const ExperienceSection = () => (
  <section className="py-24 md:py-32">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Work Experience */}
      <ScrollReveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2 block">
          // 06 — Work Experience
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Experience</h2>
      </ScrollReveal>

      <div className="space-y-6 mb-20">
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.title} delay={i * 0.1}>
            <div className="bg-surface-elevated border border-border rounded-sm p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold">{exp.title}</h3>
                  <p className="text-sm text-neural-teal font-mono">{exp.company}</p>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{exp.duration}</span>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((r, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">→</span> {r}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Education */}
      <ScrollReveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2 block">
          // 07 — Education
        </span>
        <div className="bg-surface-elevated border border-border rounded-sm p-6 md:p-8">
          <h3 className="text-xl font-display font-semibold mb-1">{education.degree}</h3>
          <p className="text-sm text-muted-foreground font-mono mb-2">{education.institution}</p>
          <div className="flex gap-4 font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
            <span>{education.duration}</span>
            <span>·</span>
            <span>{education.year}</span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ExperienceSection;
