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
    <section id="solution" className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
            How <span className="font-bold" style={{ color: '#f97415' }}>APEXIS</span> Works
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-xl border border-border/60 bg-card flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-6 h-6" style={{ color: '#f97415' }} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs text-muted-foreground font-medium tracking-widest">{step.num}</span>
                <h3 className="font-display text-2xl font-bold mt-2 mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
