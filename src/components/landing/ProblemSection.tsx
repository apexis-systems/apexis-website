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
    <section id="problem" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
            The Real Problem Isn't Delays.{" "}
            <span className="text-gradient-gold">It's Disorganization.</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="group relative bg-card rounded-xl p-6 border border-border/60 hover:border-foreground/10 transition-all duration-500 hover:shadow-xl hover:shadow-foreground/[0.03] hover:-translate-y-1 h-full">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5" style={{ color: '#f97415' }} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-base mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <p className="text-lg text-muted-foreground italic font-light">
            "WhatsApp Was Built for Personal Communication — Not Construction Projects."
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
