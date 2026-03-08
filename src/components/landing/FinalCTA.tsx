import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";

interface FinalCTAProps {
  onOpenSignup: () => void;
}

export function FinalCTA({ onOpenSignup }: FinalCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-surface-dark-foreground mb-6 leading-[1.1]">
            Stop Managing Chaos.{" "}
            <span className="text-gradient-gold">Start Leading at the Apex.</span>
          </h2>
          <p className="text-surface-dark-foreground/40 mb-10 text-sm font-light">
            Private beta closing soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onOpenSignup} className="bg-background text-foreground hover:bg-background/90 font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              Get Early Access
            </Button>
            <Button variant="hero-outline" size="lg" className="border-surface-dark-foreground/20 text-surface-dark-foreground hover:border-surface-dark-foreground/40">
              Schedule Demo
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
