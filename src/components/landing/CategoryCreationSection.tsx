import { AnimatedSection } from "./AnimatedSection";
import { MessageCircle, ListChecks, ClipboardList } from "lucide-react";

const columns = [
  {
    icon: MessageCircle,
    title: "Messaging Tools",
    purpose: "Communication",
    examples: ["Chat updates", "Images in threads", "Informal messages"],
    outcome: "Information gets buried.",
  },
  {
    icon: ListChecks,
    title: "Project Management Tools",
    purpose: "Task coordination",
    examples: ["Task lists", "Deadlines", "Team assignments"],
    outcome: "Execution tracking remains incomplete.",
  },
  {
    icon: ClipboardList,
    title: "APEXIS",
    purpose: "Execution Documentation",
    examples: ["Structured site logs", "Time-stamped progress", "Professional reports"],
    outcome: "Projects gain operational clarity.",
    highlighted: true,
  },
];

export function CategoryCreationSection() {
  return (
    <section className="py-32 lg:py-40">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6 block">
            A New Category for Construction Teams
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            Construction Needs a{" "}
            <span className="text-gradient-gold">Reporting Layer.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto mb-20">
          <div className="space-y-4 text-muted-foreground leading-relaxed text-center font-light">
            <p>Project management tools organize tasks. Messaging tools enable communication.</p>
            <p>But construction projects require something different.</p>
            <p className="font-display font-medium text-foreground">
              They require structured documentation of execution.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {columns.map((col, i) => (
            <AnimatedSection key={col.title} delay={i * 0.12}>
              <div
                className={`rounded-xl border p-8 h-full transition-all duration-500 hover:shadow-lg hover:shadow-foreground/[0.03] hover:-translate-y-1 ${
                  col.highlighted
                    ? "border-foreground/15 bg-foreground/[0.03]"
                    : "border-border/60 bg-card"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${col.highlighted ? "bg-foreground/10" : "bg-foreground/5"}`}>
                  <col.icon className="w-5 h-5 text-foreground/60" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-base mb-1" style={col.highlighted ? { color: '#f97415' } : undefined}>{col.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 font-light">Purpose: {col.purpose}</p>
                <ul className="space-y-2 mb-6">
                  {col.examples.map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                      <div className="w-1 h-1 rounded-full bg-foreground/20 flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
                <p className={`text-sm font-medium ${col.highlighted ? "text-foreground" : "text-muted-foreground"}`}>
                  {col.outcome}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <p className="font-display font-semibold text-base mb-2">
            <span style={{ color: '#f97415' }}>APEXIS</span> is not another project management tool.
          </p>
          <p className="text-muted-foreground font-light mb-8">
            It is the reporting infrastructure construction projects have been missing.
          </p>
          <p className="text-2xl sm:text-3xl font-display font-bold text-gradient-gold">
            Record. Report. Release.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
