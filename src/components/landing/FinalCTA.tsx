import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";

interface FinalCTAProps {
  onOpenSignup: () => void;
}

export function FinalCTA({ onOpenSignup }: FinalCTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-surface-dark relative overflow-hidden">
      {/* Abstract bg */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute right-0 bottom-0 w-[500px] h-[500px] opacity-[0.04]" viewBox="0 0 500 500">
          <path d="M250 30L480 450H20L250 30Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-surface-dark-foreground mb-6">
            Stop Managing Chaos.{" "}
            <span className="text-gradient-gold">Start Leading at the Apex.</span>
          </h2>
          <p className="text-surface-dark-foreground/50 mb-8 text-sm font-medium">
            Private beta closing soon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={onOpenSignup}>
              Get Early Access
            </Button>
            <Button variant="hero-outline" size="lg" className="border-surface-dark-foreground/20 text-surface-dark-foreground hover:border-primary hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
