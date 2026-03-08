import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const metrics = [
  { value: "10x", label: "Clearer Communication" },
  { value: "70%", label: "Fewer Missed Updates" },
  { value: "100%", label: "Documented Project History" },
];

export function MetricsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6 block">
            Trusted by Professionals in Construction
          </span>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-8"
              >
                <p className="text-5xl lg:text-6xl font-bold font-display tracking-tight mb-3" style={{ color: '#f97415' }}>
                  {m.value}
                </p>
                <p className="text-sm text-muted-foreground font-light">{m.label}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
