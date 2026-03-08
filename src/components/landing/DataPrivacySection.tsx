import { AnimatedSection } from "./AnimatedSection";
import { Lock, Shield } from "lucide-react";

export function DataPrivacySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <AnimatedSection>
          <div className="w-14 h-14 rounded-xl border border-border/60 bg-card flex items-center justify-center mx-auto mb-8">
            <Lock className="w-6 h-6" style={{ color: '#f97415' }} strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-[1.1]">
            Your Data Belongs <span className="text-gradient-gold">To You</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg font-light">
            <p>Your project data is entirely yours.</p>
            <p>Even the <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> platform administrators cannot access it.</p>
            <p>Your documentation, project history, and records remain fully private and under your control.</p>
          </div>
          <div className="flex items-center justify-center gap-2 mt-10">
            <Shield className="w-4 h-4" style={{ color: '#f97415' }} strokeWidth={1.5} />
            <span className="text-xs font-medium" style={{ color: '#f97415' }}>End-to-end encrypted · Role-based access · SOC 2 compliant</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
