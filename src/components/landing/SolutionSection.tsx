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
      "Once updates are recorded and structured, information can be released to the relevant stakeholders in a clear and professional format.",
    ],
    bullets: [
      "Progress reports shared with clients",
      "Site documentation and update logs",
      "Layout drawings and working drawings released from the office to the site",
      "Design revisions and technical instructions",
      "3D models and reference visuals for better site understanding",
    ],
    descAfter: "APEXIS ensures that every release of information is structured, traceable, and professionally documented.",
    graphic: "release-flow",
  },
];

const flow = [
  { label: "Record", icon: Camera },
  { label: "Report", icon: FileText },
  { label: "Release", icon: Share2 },
];

const releaseFlow = [
  { label: "Office Design Team", icon: Ruler },
  { label: "Layouts & Working Drawings", icon: FileText },
  { label: "3D Models / Design References", icon: Box },
  { label: "Site Team Implementation", icon: HardHat },
  { label: "Client Visibility", icon: Eye },
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

        <AnimatedSection className="mb-8">
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
                    {stage.bullets && (
                      <ul className="space-y-2 text-muted-foreground font-light">
                        {stage.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#f97415" }} />
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {stage.descAfter && (
                      <p className="text-muted-foreground leading-relaxed font-light">
                        <span className="font-bold" style={{ color: "#111111" }}>APEXIS</span> {stage.descAfter.replace("APEXIS ", "")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Graphic side */}
                <motion.div
                  style={{ y: parallaxY }}
                  className={i % 2 === 1 ? "lg:order-1" : ""}
                >
                  {stage.graphic === "release-flow" ? (
                    <div className="rounded-2xl border border-border/60 bg-card p-6 lg:p-8">
                      <div className="flex flex-col items-center gap-2">
                        {releaseFlow.map((step, si) => (
                          <div key={step.label} className="w-full max-w-[240px]">
                            <motion.div
                              initial={{ opacity: 0, y: 12 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.15 + si * 0.1, duration: 0.5 }}
                              className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/50 px-4 py-3"
                            >
                              <step.icon className="w-4 h-4 flex-shrink-0" style={{ color: "#f97415" }} strokeWidth={1.5} />
                              <span className="text-xs font-medium">{step.label}</span>
                            </motion.div>
                            {si < releaseFlow.length - 1 && (
                              <div className="flex justify-center py-1">
                                <ArrowDown className="w-3 h-3 text-foreground/15" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
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
                  )}
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Release supporting text */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-muted-foreground leading-relaxed font-light mb-3">
            <span className="font-bold" style={{ color: "#111111" }}>APEXIS</span> creates a structured bridge between the design office, the construction site, and the client.
          </p>
          <p className="text-muted-foreground leading-relaxed font-light">
            This ensures that instructions, drawings, and updates reach the right people in a clear and organized manner.
          </p>
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
