import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Users, MousePointerClick, Zap } from "lucide-react";

const steps = [
  { icon: Users, label: "Onboard", desc: "Invite your team" },
  { icon: MousePointerClick, label: "Click", desc: "Intuitive interface" },
  { icon: Zap, label: "Go Live", desc: "Start documenting" },
];

export function LearningCurveSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-8">
            ZERO TO MINIMAL
            <br />
            <span className="text-gradient-gold">LEARNING CURVE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light mb-12">
            The platform is designed so anyone in the project ecosystem can use it immediately — architects, contractors, project directors, builders, and clients.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-10">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4 sm:gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-border/60 bg-card flex items-center justify-center">
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#f97415' }} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium">{step.label}</span>
                  <span className="text-xs text-muted-foreground font-light">{step.desc}</span>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.3 }}
                    className="hidden sm:block w-12 h-px bg-border origin-left"
                  />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="text-sm font-medium" style={{ color: '#f97415' }}>
            Easier documentation and faster adoption across teams.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
