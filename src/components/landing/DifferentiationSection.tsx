import { AnimatedSection } from "./AnimatedSection";
import { X, Check, MessageCircle, FileText, HardDrive, Database, Brain, LayoutDashboard, Shield } from "lucide-react";

const oldWay = [
  { icon: MessageCircle, label: "WhatsApp Groups" },
  { icon: FileText, label: "Manual PDFs" },
  { icon: HardDrive, label: "Scattered Drives" },
];

const newWay = [
  { icon: Database, label: "Centralized Documentation" },
  { icon: Brain, label: "AI-Assisted Reporting" },
  { icon: LayoutDashboard, label: "Client Dashboards" },
  { icon: Shield, label: "Role-Based Transparency" },
];

export function DifferentiationSection() {
  return (
    <section className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Built for the Field.{" "}
            <span className="text-gradient-gold">Not Just the Office.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old way */}
          <AnimatedSection>
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-8">
              <h3 className="font-display text-lg font-semibold mb-6 text-destructive/80">Instead of…</h3>
              <div className="space-y-4">
                {oldWay.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <X className="w-4 h-4 text-destructive/60" />
                    </div>
                    <item.icon className="w-5 h-5 text-muted-foreground/50" />
                    <span className="text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* New way */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8">
              <h3 className="font-display text-lg font-semibold mb-6 text-primary">You get…</h3>
              <div className="space-y-4">
                {newWay.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <item.icon className="w-5 h-5 text-primary/60" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
