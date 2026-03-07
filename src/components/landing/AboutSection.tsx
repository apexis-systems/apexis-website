import { AnimatedSection } from "./AnimatedSection";

export function AboutSection() {
  return (
    <section id="about" className="py-32 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <AnimatedSection>
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6 block">About APEXIS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-[1.1]">
            Built for Clarity in Construction.
          </h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-light">
            <p>
              APEXIS was created to solve a structural problem in construction projects — the lack of organized, accountable reporting.
            </p>
            <p>
              Modern construction teams rely heavily on informal communication. But serious projects require documented progress, structured updates, and decision-ready visibility.
            </p>
            <p>
              APEXIS transforms site activity into recorded, categorized, and professionally reportable data — giving architects, contractors, and project directors operational control.
            </p>
          </div>
          <p className="mt-10 text-2xl font-display font-bold text-gradient-gold">
            Record. Report. Release.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
