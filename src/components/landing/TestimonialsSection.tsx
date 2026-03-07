import { AnimatedSection } from "./AnimatedSection";

const testimonials = [
  {
    name: "Daniel Carter",
    role: "Principal Architect",
    quote: "APEXIS replaced our entire reporting workflow. What used to take my team 4 hours now takes 15 minutes.",
  },
  {
    name: "Armaan Chaudhary",
    role: "Interior Design Lead",
    quote: "Finally, a platform that understands design-build teams. The client dashboard alone changed how we operate.",
  },
  {
    name: "Arjun Rao",
    role: "Project Director",
    quote: "Structured updates with role-based access. My clients trust the process more because they can see it.",
  },
  {
    name: "Mohammed Ahmed",
    role: "Development Manager",
    quote: "We've reduced project disputes by 60% since implementing APEXIS. Documented progress speaks for itself.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
            What Industry Leaders{" "}
            <span className="text-gradient-gold">Are Saying</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border/60 p-8 h-full hover:shadow-lg hover:shadow-foreground/[0.03] transition-all duration-500">
                <p className="text-foreground/70 leading-relaxed mb-8 font-light text-lg italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
