import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DashboardMockup } from "./DashboardMockup";

interface HeroProps {
  onOpenSignup: () => void;
}

export function HeroSection({ onOpenSignup }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full border border-border mb-8" style={{ color: '#f97415' }}>
            Currently onboarding select pilot firms
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-6">
            Your Projects Deserve <span style={{ color: '#f97415' }}>Better</span> Than{" "}
            <span style={{ color: '#f97415' }}>WhatsApp Updates.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed font-light">
            <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> is the structured execution layer for modern construction and design teams.
          </p>
          <p className="text-2xl font-display font-bold mb-10" style={{ color: '#f97415' }}>
            RECORD . REPORT . RELEASE .
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" onClick={onOpenSignup}>
              Get Early Access
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#demo">Book a Private Demo</a>
            </Button>
          </div>
        </motion.div>

        {/* Right - Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          className="hidden lg:block"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
