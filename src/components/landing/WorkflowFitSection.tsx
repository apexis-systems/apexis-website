import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Activity, Database, FileText, BarChart3, Share2 } from "lucide-react";

const steps = [
  { icon: Activity, label: "Site Activity" },
  { icon: Database, label: "Recorded in APEXIS" },  
  { icon: FileText, label: "Structured Documentation" },
  { icon: BarChart3, label: "Professional Reports" },
  { icon: Share2, label: "Shared With Clients" },
];

export function WorkflowFitSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <AnimatedSection className="text-center mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6 block">
            Seamless Integration
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
            A Platform Built Around Real Construction Workflows
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            <span className="font-bold" style={{ color: '#f97415' }}>APEXIS</span> does not replace your existing tools. It adds a structured reporting layer to your project execution.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="my-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-0">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col lg:flex-row items-center gap-3 lg:gap-0">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center gap-3 min-w-[120px]"
                >
                  <div className="w-14 h-14 rounded-xl border border-border/60 bg-card flex items-center justify-center">
                    <step.icon className="w-5 h-5" style={{ color: '#f97415' }} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-medium text-foreground text-center">{step.label}</span>
                </motion.div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block w-8 h-px bg-border mx-2" />
                )}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-px h-6 bg-border" />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="text-center max-w-2xl mx-auto">
          <div className="space-y-2 text-muted-foreground font-light leading-relaxed">
            <p>Architects remain focused on design.</p>
            <p>Contractors continue executing on site.</p>
            <p>Project leaders maintain visibility.</p>
          </div>
          <p className="mt-8 text-muted-foreground font-light leading-relaxed">
            <span style={{ color: '#f97415' }}>APEXIS</span> simply ensures that every update becomes a structured record that can be reported, tracked, and shared professionally.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
