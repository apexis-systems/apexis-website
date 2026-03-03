import { AnimatedSection } from "./AnimatedSection";
import { DashboardMockup } from "./DashboardMockup";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimatedSection>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">About Apexis</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Built for Clarity in Construction.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Apexis was created to solve a structural problem in construction projects — the lack of organized, accountable reporting.
              </p>
              <p>
                Modern construction teams rely heavily on informal communication. But serious projects require documented progress, structured updates, and decision-ready visibility.
              </p>
              <p>
                Apexis transforms site activity into recorded, categorized, and professionally reportable data — giving architects, contractors, and project directors operational control.
              </p>
              <p className="text-sm text-muted-foreground/70">
                We are building infrastructure for construction reporting.
              </p>
            </div>
            <p className="mt-8 text-xl font-display font-bold text-gradient-gold">
              Record. Report. Release.
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
