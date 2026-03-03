import { AnimatedSection } from "./AnimatedSection";
import { Camera, FileText, Share2 } from "lucide-react";

const steps = [
  {
    icon: Camera,
    num: "01",
    title: "Record",
    desc: "Capture site logs, images, and updates instantly from the field.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Report",
    desc: "Generate professional, AI-assisted reports in seconds.",
  },
  {
    icon: Share2,
    num: "03",
    title: "Release",
    desc: "Share structured, role-based client updates with control.",
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Meet <span className="text-gradient-gold">Structured Execution.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.15}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <step.icon className="w-7 h-7" />
                </div>
                <span className="font-mono text-xs text-primary font-semibold tracking-widest">{step.num}</span>
                <h3 className="font-display text-2xl font-bold mt-2 mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
