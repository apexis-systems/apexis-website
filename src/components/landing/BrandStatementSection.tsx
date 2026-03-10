import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Activity, FileText, MessageSquare, BarChart3, Eye, ArrowDown } from "lucide-react";

const flow = [
  { label: "Site Activity", icon: Activity },
  { label: "Structured Updates", icon: FileText },
  { label: "Team Communication", icon: MessageSquare },
  { label: "Professional Reporting", icon: BarChart3 },
  { label: "Client Visibility", icon: Eye },
];

export function BrandStatementSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Headline */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-3">
            Construction Projects Run on Information.
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]" style={{ color: "#f97415" }}>
            APEXIS Structures It.
          </p>
        </AnimatedSection>

        {/* Supporting text */}
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-20">
          <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
            <p>Every construction project generates hundreds of updates, decisions, instructions, and conversations.</p>
            <p>When this information is scattered across messages, calls, and informal communication channels, clarity is lost.</p>
            <p>
              <span className="font-bold" style={{ color: "#111111" }}>APEXIS</span> brings structure to project communication by recording site activity, organizing conversations, and transforming updates into professional reports.
            </p>
            <p>This ensures that project teams and clients always have clear visibility into what is happening on site.</p>
          </div>
        </AnimatedSection>

        {/* Vertical flow */}
        <AnimatedSection className="mb-20">
          <div className="flex flex-col items-center gap-2 max-w-xs mx-auto">
            {flow.map((step, i) => (
              <div key={step.label} className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-4 rounded-xl border border-border/60 bg-card px-5 py-3.5"
                >
                  <step.icon className="w-4 h-4 flex-shrink-0" style={{ color: "#f97415" }} strokeWidth={1.5} />
                  <span className="text-sm font-medium">{step.label}</span>
                </motion.div>
                {i < flow.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-3.5 h-3.5 text-foreground/15" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Closing */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-xl sm:text-2xl font-bold" style={{ color: "#f97415" }}>
            Because construction progress deserves clarity.
          </p>
        </AnimatedSection>

        {/* CTA buttons */}
        <AnimatedSection className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#demo">Book a Private Demo</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#demo">Start a Pilot Project</a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
