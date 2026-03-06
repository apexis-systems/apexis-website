import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DashboardMockup } from "./DashboardMockup";

interface HeroProps {
  onOpenSignup: () => void;
}

export function HeroSection({ onOpenSignup }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Abstract peak background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute -right-20 -top-20 w-[800px] h-[800px] opacity-[0.06]"
          viewBox="0 0 800 800"
          fill="none"
        >
          <path d="M400 50L750 700H50L400 50Z" stroke="currentColor" strokeWidth="2" />
          <path d="M400 150L650 650H150L400 150Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M400 250L550 600H250L400 250Z" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary mb-6">
            Currently onboarding select pilot firms
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Your Projects Deserve Better Than <span className="text-primary">WhatsApp Updates.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Apexis is the structured execution layer for modern construction and design teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" onClick={onOpenSignup}>
              Get Early Access
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">Book a Private Demo</a>
            </Button>
          </div>
        </motion.div>

        {/* Right - Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="hidden lg:block"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
