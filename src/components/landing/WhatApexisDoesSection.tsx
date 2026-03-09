import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Activity, FileText, BarChart3, Eye } from "lucide-react";

const steps = [
  { icon: Activity, label: "Site Activity" },
  { icon: FileText, label: "Structured Log" },
  { icon: BarChart3, label: "Automated Report" },
  { icon: Eye, label: "Client Visibility" },
];

export function WhatApexisDoesSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase mb-6 block" style={{ color: '#f97415' }}>
            What APEXIS Actually Does
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
            Construction Reporting Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> transforms informal site communication into structured, professional project documentation.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-16 h-16 rounded-xl border border-border/60 bg-card flex items-center justify-center">
                    <step.icon className="w-6 h-6" style={{ color: '#f97415' }} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{step.label}</span>
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.12 }}
                    className="hidden sm:block w-12 lg:w-16 h-px bg-border mx-4"
                  />
                )}
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.12 }}
                    className="sm:hidden w-px h-8 bg-border"
                  />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed font-light">
            Instead of relying on scattered updates across chat platforms, <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> records project activity in a structured format and generates clear reports for decision makers.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
