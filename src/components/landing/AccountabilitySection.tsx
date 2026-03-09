import { AnimatedSection } from "./AnimatedSection";
import { Clock, BookOpen, BarChart3, Eye } from "lucide-react";

const features = [
{ icon: Clock, title: "Time-Stamped Updates", desc: "Every site update is automatically time-stamped." },
{ icon: BookOpen, title: "Recorded Decisions", desc: "Important decisions are captured and documented." },
{ icon: BarChart3, title: "Documented Progress", desc: "Progress images, notes, and reports stay organized." },
{ icon: Eye, title: "Transparent Communication", desc: "Everyone sees the same structured information." }];


export function AccountabilitySection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 leading-[1.1]">
            Every Update Leaves{" "}
            <span className="text-gradient-gold">a Record</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light">
            Construction projects require accountability. <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> creates a verifiable record of execution.
          </p>
        </AnimatedSection>

        <AnimatedSection className="flex items-center justify-center gap-2 mb-16 text-xs text-muted-foreground font-mono">
          {["Update", "Log", "Report", "Record"].map((step, i) =>
          <span key={step} className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-card border border-border/60 text-primary">{step}</span>
              {i < 3 && <span className="text-foreground/20">→</span>}
            </span>
          )}
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) =>
          <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border/60 p-6 h-full hover:shadow-lg hover:shadow-foreground/[0.03] hover:-translate-y-1 transition-all duration-500">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5" style={{ color: '#f97415' }} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{f.desc}</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </section>);

}