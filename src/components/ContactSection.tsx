import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32 border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <ScrollReveal>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2 block">
          // 11 — Contact & Links
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Let's Connect</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Direct Contact */}
        <ScrollReveal>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6">Direct Contact</h3>
          <div className="space-y-4">
            <a
              href="mailto:saran17102005@gmail.com"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>saran17102005@gmail.com</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="tel:+919840099258"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span>+91 98400 99258</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </ScrollReveal>

        {/* Profiles & Links */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6">Profiles</h3>
          <div className="space-y-4">
            <a
              href="https://github.com/saranraj1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Github className="w-5 h-5 text-primary" />
              <span>github.com/saranraj1</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://linkedin.com/in/saranraj-u"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <span>linkedin.com/in/saranraj-u</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-8 mb-4">Project Links</h3>
          <div className="space-y-3">
            <a
              href="https://github.com/saranraj1/voice-guardian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowUpRight className="w-3 h-3" /> Voice Guardian
            </a>
            <a
              href="https://github.com/saranraj1/fairness-and-bias-audit-for-student-performance"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowUpRight className="w-3 h-3" /> SilentBias
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          U SaranRaj — AI/ML Researcher & Developer · Chennai, Tamil Nadu, India
        </p>
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          © 2026 · Built with Precision
        </p>
      </div>
    </div>
  </section>
);

export default ContactSection;
