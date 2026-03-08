import { AnimatedSection } from "./AnimatedSection";
import { FileOutput, FolderCheck, Award, Users } from "lucide-react";

const benefits = [
  { icon: FolderCheck, title: "Organized Documentation", desc: "Every project record structured and accessible." },
  { icon: FileOutput, title: "Complete Execution Record", desc: "Full timeline of progress, decisions, and updates." },
  { icon: Award, title: "Professional Client Delivery", desc: "Export-ready documentation that reflects quality." },
  { icon: Users, title: "Increased Trust & Credibility", desc: "Clients appreciate structured, transparent reporting." },
];

export function ClientHandoverSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-[1.1]">
            Professional Project{" "}
            <span className="text-gradient-gold">Handover Documentation</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg font-light">
            <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> allows contractors and consultants to export project records into structured handover documents.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border/60 p-6 h-full hover:shadow-lg hover:shadow-foreground/[0.03] hover:-translate-y-1 transition-all duration-500">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-5">
                  <b.icon className="w-5 h-5" style={{ color: '#f97415' }} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-sm mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
