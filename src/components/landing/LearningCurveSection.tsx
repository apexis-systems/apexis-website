import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Users, Zap, MousePointerClick } from "lucide-react";

const steps = [
  { icon: Users, label: "Onboard", desc: "Invite your team" },
  { icon: MousePointerClick, label: "Click", desc: "Intuitive interface" },
  { icon: Zap, label: "Go Live", desc: "Start documenting" },
];

export function LearningCurveSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
            ZERO TO MINIMAL
            <br />
            <span className="text-gradient-gold">LEARNING CURVE</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            The platform is designed so anyone in the project ecosystem can use it immediately — architects, contractors, project directors, builders, and clients.
          </p>
        </AnimatedSection>

        {/* Minimal graphic: 3-step flow */}
        <AnimatedSection delay={0.2}>
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-10">
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4 sm:gap-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-center">
                    <step.icon className="w-7 h-7 sm:w-9 sm:h-9 text-primary" />
                  </div>
                  <span className="text-sm font-bold">{step.label}</span>
                  <span className="text-xs text-muted-foreground">{step.desc}</span>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.3 }}
                    className="hidden sm:block w-12 h-px bg-primary/30 origin-left"
                  />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="text-sm font-medium text-primary">
            Easier documentation and faster adoption across teams.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
