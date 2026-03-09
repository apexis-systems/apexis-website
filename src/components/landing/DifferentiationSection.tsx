import { AnimatedSection } from "./AnimatedSection";
import { MessageCircle, Image, FileText, LayoutDashboard } from "lucide-react";

export function DifferentiationSection() {
  return (
    <section className="py-12 lg:py-16 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            Built for the Field.{" "}
            <span className="text-gradient-gold">Not Just the Office.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          <AnimatedSection>
            <div className="rounded-xl border border-border/60 bg-card p-8 h-full">
              <h3 className="font-display text-base font-semibold mb-8 text-muted-foreground">Instead of…</h3>
              <div className="space-y-6">
                <div className="rounded-lg p-4 border border-border/40">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-4 h-4 text-muted-foreground/40" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-muted-foreground/60">Chat Messages</span>
                  </div>
                  <div className="space-y-2">
                    {["Site photo sent ✓✓", "any update on 3rd floor?", "will send report tmrw", "Check the PDF I sent"].map((msg) => (
                      <div key={msg} className="bg-background/60 rounded-md px-3 py-1.5 text-xs text-muted-foreground/50 w-fit max-w-[70%]">
                        {msg}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-lg p-4 border border-border/40">
                  <div className="flex items-center gap-3 mb-3">
                    <Image className="w-4 h-4 text-muted-foreground/40" strokeWidth={1.5} />
                    <span className="text-sm font-medium text-muted-foreground/60">Scattered Images & Files</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className="aspect-square rounded bg-background/40 flex items-center justify-center">
                        <Image className="w-3 h-3 text-muted-foreground/20" strokeWidth={1.5} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="rounded-xl border border-foreground/10 bg-foreground/[0.02] p-8 h-full">
              <h3 className="font-display text-base font-semibold mb-8" style={{ color: '#f97415' }}>You get…</h3>
              <div className="space-y-6">
                <div className="rounded-lg p-4 border border-foreground/5">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-4 h-4" style={{ color: '#f97415' }} strokeWidth={1.5} />
                    <span className="text-sm font-medium text-foreground/60">Structured Reports</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Auto-Generated Reports</span>
                      <span className="font-medium" style={{ color: '#f97415' }}>Generated</span>
                    </div>
                    <div className="h-1 bg-border/60 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: "75%", backgroundColor: '#f97415' }} />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg p-4 border border-foreground/5">
                  <div className="flex items-center gap-3 mb-3">
                    <LayoutDashboard className="w-4 h-4" style={{ color: '#f97415' }} strokeWidth={1.5} />
                    <span className="text-sm font-medium text-foreground/60">Organized Dashboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Active", value: "5" },
                      { label: "Reports", value: "28" },
                      { label: "Media", value: "142" },
                      { label: "Updates", value: "67" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-foreground/[0.03] rounded-md p-2 text-center">
                        <div className="text-lg font-bold font-display">{stat.value}</div>
                        <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
