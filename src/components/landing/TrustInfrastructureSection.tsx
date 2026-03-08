import { AnimatedSection } from "./AnimatedSection";
import { ShieldCheck, Database, FileText } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Privacy by Design",
    lines: [
      "Your project documentation remains fully private.",
      "Even platform administrators cannot access your project records.",
    ],
  },
  {
    icon: Database,
    title: "Secure Data Architecture",
    lines: [
      "Your documentation is stored securely with strict access controls.",
      "Only authorized project participants can view data.",
    ],
  },
  {
    icon: FileText,
    title: "Professional Documentation",
    lines: [
      "Every project update can become structured documentation.",
      "Perfect for reporting, compliance, and client handovers.",
    ],
  },
];

export function TrustInfrastructureSection() {
  return (
    <section className="py-32 lg:py-40 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 leading-[1.1]">
            Built Like{" "}
            <span className="text-gradient-gold">Infrastructure</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light">
            Serious construction projects require serious systems. <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> is designed with the same reliability expectations as enterprise software platforms.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.12}>
              <div className="bg-card rounded-xl border border-border/60 p-8 h-full hover:shadow-lg hover:shadow-foreground/[0.03] hover:-translate-y-1 transition-all duration-500">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-6">
                  <p.icon className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-base mb-4">{p.title}</h3>
                <div className="space-y-3">
                  {p.lines.map((line) => (
                    <p key={line} className="text-sm text-muted-foreground leading-relaxed font-light">{line}</p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-20 max-w-2xl mx-auto">
          <p className="font-display font-semibold text-base mb-2"><span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> is not another messaging tool.</p>
          <p className="text-muted-foreground font-light">
            It is operational infrastructure for construction execution.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
