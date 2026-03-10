import { AnimatedSection } from "./AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Camera, FileText, Share2, ArrowRight, ArrowDown, Ruler, Box, HardHat, Eye } from "lucide-react";

const stages = [
  {
    icon: Camera,
    num: "01",
    title: "Record",
    desc: [
      "Site teams quickly record progress updates, site activities, photos, and notes directly from the project workspace.",
      "Information is captured in real time, creating a clear and chronological record of the project's development.",
    ],
    graphic: "Mobile device capturing site photos and updates",
  },
  {
    icon: FileText,
    num: "02",
    title: "Report",
    desc: [
      "Recorded updates are automatically structured into organized reports that reflect the true progress of the project.",
      "Project teams can review updates, discuss clarifications through chat, and maintain clear documentation.",
    ],
    graphic: "Structured report layout with organized sections",
  },
  {
    icon: Share2,
    num: "03",
    title: "Release",
    desc: [
      "Professional reports can be shared with clients and stakeholders, providing clear visibility into project progress.",
      "This ensures transparency, accountability, and professional communication throughout the project lifecycle.",
    ],
    graphic: "Report being shared with client or stakeholder",
  },
];

const flow = [
  { label: "Record", icon: Camera },
  { label: "Report", icon: FileText },
  { label: "Release", icon: Share2 },
];

export function SolutionSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="solution" ref={scrollRef} className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-6">
          <span
            className="text-xs font-bold tracking-widest uppercase mb-4 block"
            style={{ color: "#f97415" }}
          >
            How APEXIS Works
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.05]">
            <span style={{ color: "#f97415" }}>Record.</span>{" "}
            <span style={{ color: "#f97415" }}>Report.</span>{" "}
            <span style={{ color: "#f97415" }}>Release.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            A simple workflow that transforms scattered site updates into
            structured project documentation and professional client reporting.
          </p>
        </AnimatedSection>

        {/* Three stages */}
        <div className="space-y-16 lg:space-y-24 mb-20">
          {stages.map((stage, i) => (
            <AnimatedSection key={stage.title} delay={i * 0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Text side */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl border border-border/60 bg-card flex items-center justify-center"
                    >
                      <stage.icon
                        className="w-5 h-5"
                        style={{ color: "#f97415" }}
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground tracking-widest">
                      {stage.num}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold mb-5">
                    {stage.title}
                  </h3>
                  <div className="space-y-4">
                    {stage.desc.map((p, j) => (
                      <p
                        key={j}
                        className="text-muted-foreground leading-relaxed font-light"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Graphic side */}
                <motion.div
                  style={{ y: parallaxY }}
                  className={i % 2 === 1 ? "lg:order-1" : ""}
                >
                  <div className="rounded-2xl border border-border/60 bg-card p-8 lg:p-12 flex items-center justify-center min-h-[220px]">
                    <div className="text-center">
                      <stage.icon
                        className="w-12 h-12 mx-auto mb-4"
                        style={{ color: "#f97415" }}
                        strokeWidth={1}
                      />
                      <p className="text-sm text-muted-foreground font-light">
                        {stage.graphic}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Horizontal flow */}
        <AnimatedSection className="mb-20">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {flow.map((step, i) => (
              <span key={step.label} className="flex items-center gap-3 sm:gap-4">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border/60"
                >
                  <step.icon
                    className="w-4 h-4"
                    style={{ color: "#f97415" }}
                    strokeWidth={1.5}
                  />
                  <span className="font-display font-semibold text-sm">
                    {step.label}
                  </span>
                </motion.span>
                {i < flow.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-foreground/20" />
                )}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Benefit text */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-muted-foreground leading-relaxed font-light mb-4">
            This workflow eliminates scattered communication and transforms
            everyday site updates into structured project intelligence.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            <span className="font-bold" style={{ color: "#111111" }}>
              APEXIS
            </span>{" "}
            makes documentation effortless while ensuring that project teams and
            clients always stay aligned.
          </p>
        </AnimatedSection>

        {/* Closing */}
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <p className="text-lg font-bold" style={{ color: "#f97415" }}>
            From site activity to client reporting — everything flows through
            APEXIS.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
