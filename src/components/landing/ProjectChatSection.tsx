import { AnimatedSection } from "./AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, FileText, Search, Users, ArrowRight } from "lucide-react";

const flowSteps = [
  { label: "Project Update Posted", icon: FileText },
  { label: "Team Discussion in Chat", icon: MessageSquare },
  { label: "Clarifications & Decisions Logged", icon: Search },
  { label: "Client Visibility & Communication", icon: Users },
];

const features = [
  {
    icon: MessageSquare,
    title: "Structured Conversations",
    desc: "Project discussions organized in clear chronological order so teams can easily follow the sequence of events.",
  },
  {
    icon: FileText,
    title: "Project-Linked Messaging",
    desc: "Chat conversations stay directly connected to project updates, reports, and documentation.",
  },
  {
    icon: Search,
    title: "Searchable Communication History",
    desc: "Quickly find past instructions, clarifications, and discussions without digging through unrelated messages.",
  },
  {
    icon: Users,
    title: "Client Communication",
    desc: "Maintain professional and structured conversations with clients directly inside the project workspace.",
  },
];

const pipeline = [
  { label: "Site Update", icon: FileText },
  { label: "Team Discussion", icon: MessageSquare },
  { label: "Documentation", icon: Search },
  { label: "Client Visibility", icon: Users },
];

export function ProjectChatSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={scrollRef} className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
            Professional Project Communication
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
            Stop Managing Critical Project Conversations in{" "}
            <span className="text-gradient-gold">Messaging Apps</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
            <p>
              Construction projects involve constant coordination between architects, contractors, consultants, vendors, and clients.
            </p>
            <p>
              Yet many projects still rely on informal messaging groups to manage critical project communication.
            </p>
            <p>
              <span className="font-bold" style={{ color: "#111111" }}>APEXIS</span> introduces a structured communication system designed specifically for construction teams — where conversations stay organized, traceable, and connected directly to the project workflow.
            </p>
          </div>
        </AnimatedSection>

        {/* Scroll flow cards */}
        <motion.div style={{ y: parallaxY }} className="mb-16">
          <div className="flex flex-col items-center gap-3 max-w-xs mx-auto">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="w-full">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <p className="font-display font-medium text-sm">{step.label}</p>
                </motion.div>
                {i < flowSteps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-3 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="group bg-card rounded-xl p-6 border border-border/60 hover:border-foreground/10 transition-all duration-500 hover:shadow-xl hover:shadow-foreground/[0.03] hover:-translate-y-1 h-full">
                <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-base mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Horizontal pipeline */}
        <AnimatedSection className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground font-mono">
            {pipeline.map((step, i) => (
              <span key={step.label} className="flex items-center gap-2">
                <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/60">
                  <step.icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                  <span>{step.label}</span>
                </span>
                {i < pipeline.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-foreground/20" />
                )}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Closing */}
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <p className="text-lg font-semibold mb-3">
            Project communication should live where the project lives.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            <span className="font-bold" style={{ color: "#111111" }}>APEXIS</span> replaces fragmented messaging with structured conversations designed specifically for construction teams.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
