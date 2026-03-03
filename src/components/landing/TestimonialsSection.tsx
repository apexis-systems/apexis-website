import { AnimatedSection } from "./AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Daniel Carter",
    role: "Principal Architect",
    quote: "Apexis replaced our entire reporting workflow. What used to take my team 4 hours now takes 15 minutes.",
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
    quote: "We've reduced project disputes by 60% since implementing Apexis. Documented progress speaks for itself.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What Industry Leaders{" "}
            <span className="text-gradient-gold">Are Saying</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border p-8 h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <Quote className="w-8 h-8 text-gold mb-4" />
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-display font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
