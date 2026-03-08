import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Bell, ClipboardCheck, ArrowRight, ShieldCheck } from "lucide-react";

const flow = [
  { icon: Bell, label: "Phone Notification" },
  { icon: ClipboardCheck, label: "Project Update" },
  { icon: ArrowRight, label: "Action Taken" },
  { icon: ShieldCheck, label: "Timeline Protected" },
];

const benefits = [
  "Never miss a project update",
  "No confusion with chat notifications",
  "Clear priority communication",
  "Faster response cycles",
  "Fewer delays and costly mistakes",
];

export function PriorityNotificationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-[1.1]">
              Priority Notifications That{" "}
              <span className="text-gradient-gold">Mean Business</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-light mb-8">
              <p>Construction projects lose time and money when critical communication is missed.</p>
              <p><span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> notifications are structured, priority alerts — not casual chat messages.</p>
              <p>Every notification signals an actionable update that requires attention.</p>
            </div>
            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-light">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#f97415' }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col items-center gap-3">
              {flow.map((step, i) => (
                <div key={step.label} className="w-full max-w-xs">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-5 h-5" style={{ color: '#f97415' }} strokeWidth={1.5} />
                    </div>
                    <p className="font-display font-medium text-sm">{step.label}</p>
                  </motion.div>
                  {i < flow.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="w-px h-3 bg-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
