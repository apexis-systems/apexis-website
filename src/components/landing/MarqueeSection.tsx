import { AnimatedSection } from "./AnimatedSection";

const companies = [
  "Vertex Constructions",
  "UrbanGrid Developers",
  "Elevate Interiors",
  "Horizon BuildCo",
  "Axis Infra Group",
  "Meridian Projects",
];

export function MarqueeSection() {
  return (
    <section className="py-16 overflow-hidden">
      <AnimatedSection className="text-center mb-10">
        <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
          Trusted by Growing Project Teams
        </p>
      </AnimatedSection>

      <div className="relative group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          {[...companies, ...companies].map((name, i) => (
            <div
              key={i}
              className="mx-8 lg:mx-12 flex-shrink-0 text-xl lg:text-2xl font-display font-bold text-foreground/10 hover:text-foreground/20 transition-colors duration-300 select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
