import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { CalendarDays, ClipboardList, Users } from "lucide-react";

const layers = [
  { icon: CalendarDays, label: "Planning Tools", sub: "Scheduling & task allocation" },
  { icon: ClipboardList, label: "Execution Documentation", sub: "APEXIS", highlighted: true },
  { icon: Users, label: "Client Reporting", sub: "Client visibility" },
];

export function TheShiftSection() {
  return (
    <section className="py-12 lg:py-16 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <AnimatedSection className="mb-16">
          <span className="text-xs font-bold tracking-widest uppercase mb-6 block" style={{ color: '#f97415' }}>
            The Shift
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            The Execution Layer That Most Project Management Tools Miss
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mb-12">
          <div className="space-y-5 text-muted-foreground leading-relaxed text-lg font-light max-w-3xl">
            <p>Many construction teams use project management software.</p>
            <p>But project management platforms focus on planning, scheduling, and task allocation.</p>
            <p>What is often missing is the execution documentation layer.</p>
            <p><strong className="font-medium" style={{ color: '#111111' }}>APEXIS fills this gap.</strong></p>
            <p>It records real site activity, structures the information, and converts it into professional reporting infrastructure.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mb-12">
          <div className="flex flex-col items-center gap-3 max-w-sm mx-auto">
            {layers.map((layer, i) => (
              <div key={layer.label} className="w-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className={`rounded-xl border p-5 flex items-center gap-4 transition-all duration-300 ${
                    layer.highlighted
                      ? "border-foreground/20 bg-foreground/[0.03]"
                      : "border-border/60 bg-card"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    layer.highlighted ? "bg-foreground/10" : "bg-foreground/5"
                  }`}>
                    <layer.icon className="w-5 h-5" style={{ color: '#f97415' }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm">{layer.label}</p>
                    <p className="text-xs text-muted-foreground">{layer.sub}</p>
                  </div>
                </motion.div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-4 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5} className="max-w-3xl">
          <p className="text-lg font-display font-semibold text-foreground">
            <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> is building the execution documentation layer for modern construction projects.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
