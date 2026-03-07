import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const before = [
  "Project updates scattered across chat threads",
  "Important site decisions undocumented",
  "Delayed visibility for architects and project directors",
  "Clients receiving informal updates",
  "Difficult project documentation at handover",
];

const after = [
  "Structured project updates",
  "Timestamped site records",
  "Instant reporting for decision makers",
  "Professional communication with stakeholders",
  "Exportable handover documentation",
];

export function BeforeAfterSection() {
  return (
    <section className="py-32 lg:py-40 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Before APEXIS vs <span className="text-gradient-gold">After APEXIS</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-border/60 bg-card p-8 h-full"
            >
              <h3 className="font-display font-bold text-lg mb-8 text-foreground/70">Before APEXIS</h3>
              <div className="space-y-5">
                {before.map((item) => (
                  <div key={item} className="flex items-start gap-3 pb-5 border-b border-border/40 last:border-0 last:pb-0">
                    <X className="w-4 h-4 text-muted-foreground/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-muted-foreground font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-8 h-full"
            >
              <h3 className="font-display font-bold text-lg mb-8" style={{ color: '#f97415' }}>After APEXIS</h3>
              <div className="space-y-5">
                {after.map((item) => (
                  <div key={item} className="flex items-start gap-3 pb-5 border-b border-border/40 last:border-0 last:pb-0">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#f97415' }} strokeWidth={1.5} />
                    <span className="text-sm text-foreground font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
