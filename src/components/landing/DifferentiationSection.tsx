import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Pencil, HardHat, ClipboardList, Building2, Activity, MessageSquare, FileText, Eye, ArrowDown } from "lucide-react";

const roles = [
  {
    icon: Pencil,
    title: "Architects And Designers",
    desc: "Stay informed about site progress, design clarifications, and implementation updates without relying on fragmented message threads.",
  },
  {
    icon: HardHat,
    title: "Contractors & Site Engineers",
    desc: "Record daily site activities, share updates with the team, and maintain clear documentation of project progress.",
  },
  {
    icon: ClipboardList,
    title: "Project Managers",
    desc: "Maintain a clear overview of site developments, decisions, and communication across the project lifecycle.",
  },
  {
    icon: Building2,
    title: "Clients & Stakeholders",
    desc: "Receive professional updates and structured reports that provide transparent visibility into project progress.",
  },
];

const flow = [
  { label: "Site Activity", icon: Activity },
  { label: "Team Communication", icon: MessageSquare },
  { label: "Structured Reporting", icon: FileText },
  { label: "Client Visibility", icon: Eye },
];

export function DifferentiationSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-6">
          <span
            className="text-xs font-bold tracking-widest uppercase mb-4 block"
            style={{ color: "#f97415" }}
          >
            Built for the Field. Not Just the Office.
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
            Designed for Real Construction Teams
          </h2>
        </AnimatedSection>

        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
            <p>
              Construction projects involve many professionals working across the site, the office, and the client side.
            </p>
            <p>
              <span className="font-bold" style={{ color: "#111111" }}>APEXIS</span> provides a shared platform where every stakeholder can stay aligned through structured updates, organized communication, and professional reporting.
            </p>
          </div>
        </AnimatedSection>

        {/* Role grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {roles.map((role, i) => (
            <AnimatedSection key={role.title} delay={i * 0.1}>
              <div className="group bg-card rounded-xl p-7 border border-border/60 hover:border-foreground/10 transition-all duration-500 hover:shadow-xl hover:shadow-foreground/[0.03] hover:-translate-y-1 h-full">
                <div className="w-11 h-11 rounded-lg bg-foreground/5 flex items-center justify-center mb-5">
                  <role.icon className="w-5 h-5" style={{ color: "#f97415" }} strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{role.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{role.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Vertical flow */}
        <AnimatedSection className="mb-20">
          <div className="flex flex-col items-center gap-2 max-w-xs mx-auto">
            {flow.map((step, i) => (
              <div key={step.label} className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
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
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground leading-relaxed font-light mb-3">
            Construction projects succeed when teams stay aligned.
          </p>
          <p className="text-lg font-bold" style={{ color: "#f97415" }}>
            APEXIS provides the structured communication and reporting layer that connects the entire project team.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
