import { AnimatedSection } from "./AnimatedSection";
import { ImageOff, MessageSquareWarning, FileWarning, EyeOff } from "lucide-react";

const problems = [
  { icon: ImageOff, title: "Scattered Site Images", desc: "Photos lost across devices and chat groups with zero organization." },
  { icon: MessageSquareWarning, title: "Unstructured Communication", desc: "Critical updates buried in WhatsApp threads and email chains." },
  { icon: FileWarning, title: "Manual Reporting Chaos", desc: "Hours wasted compiling reports from scattered sources." },
  { icon: EyeOff, title: "No Client Transparency", desc: "Clients left in the dark, creating friction and distrust." },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            The Real Problem Isn't Delays.{" "}
            <span className="text-gradient-gold">It's Disorganization.</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="text-lg font-medium text-muted-foreground italic">
            "You're managing high-value projects with low-structure tools."
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
