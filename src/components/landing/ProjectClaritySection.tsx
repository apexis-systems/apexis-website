import { AnimatedSection } from "./AnimatedSection";
import { DashboardMockup } from "./DashboardMockup";

export function ProjectClaritySection() {
  return (
    <section className="py-32 lg:py-40 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3 leading-[1.1]">
              Clarity Across{" "}
              <span className="text-gradient-gold">Every Project</span>
            </h2>
            <p className="text-muted-foreground mb-8 font-light">
              A single view of everything happening across your construction projects.
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-light mb-8">
              <p><span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> transforms scattered site activity into a structured command center.</p>
              <p>Every update becomes visible, organized, and decision-ready.</p>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "What progress was made",
                "What decisions were recorded",
                "What issues require attention",
                "What documentation is available",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-light">
                  <div className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-display font-bold text-gradient-gold">
              No searching. No confusion. Just clarity.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="hidden lg:block">
            <DashboardMockup />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
