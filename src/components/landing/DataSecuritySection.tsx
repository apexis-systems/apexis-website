import { Shield, Lock, Server } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const features = [
  {
    icon: Shield,
    title: "Full Data Ownership",
    description:
      "All project updates, reports, and documentation recorded on Apexis remain the property of the project team. Apexis does not claim ownership of user data.",
  },
  {
    icon: Lock,
    title: "Private Project Workspaces",
    description:
      "Project information is visible only to authorized team members and invited stakeholders. Your project data is never publicly accessible.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description:
      "Apexis uses secure cloud infrastructure and encrypted data transmission to ensure project records remain protected and reliable.",
  },
];

export function DataSecuritySection() {
  return (
    <section id="data-security" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            Your Project Data Stays Yours
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Apexis is designed to protect the integrity, privacy, and ownership of construction project documentation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {features.map((feature, i) => (
            <AnimatedSection
              key={feature.title}
              delay={i * 0.15}
              className="rounded-2xl border border-border/40 bg-card p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-8 h-8 mb-5 text-muted-foreground" strokeWidth={1.4} />
              <h3 className="text-lg font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {feature.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.45} className="text-center">
          <p className="text-base md:text-lg font-display font-bold">
            Your construction data is never sold, shared, or used for advertising.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
