import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "One-Time Buy",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    desc: "Single project access",
    features: ["Basic reporting", "Limited storage", "One-time payment", "Validity: 90 days"],
    cta: "Buy Now",
    highlighted: false,
    outline: false,
  },
  {
    name: "Starter",
    monthlyPrice: "₹33,750",
    annualPrice: "₹21,938",
    desc: "Up to 5 team members",
    features: ["Standard reporting", "Basic client dashboard", "Email support"],
    cta: "Get Started",
    highlighted: false,
    outline: false,
  },
  {
    name: "Professional",
    monthlyPrice: "₹54,000",
    annualPrice: "₹35,100",
    desc: "For scaling teams",
    badge: "Most Popular",
    features: ["Unlimited projects", "AI-assisted reporting", "Advanced dashboards", "Media documentation", "Role-based access", "Priority support"],
    cta: "Upgrade to Pro",
    highlighted: true,
    outline: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    desc: "Custom integrations",
    features: ["API access", "Dedicated onboarding", "Advanced security controls", "Custom SLA"],
    cta: "Contact Sales",
    highlighted: false,
    outline: true,
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Flexible Plans for{" "}
            <span className="text-gradient-gold">Structured Growth</span>
          </h2>
        </AnimatedSection>

        {/* Toggle */}
        <AnimatedSection className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative w-14 h-7 rounded-full bg-secondary transition-colors"
            aria-label="Toggle billing period"
          >
            <motion.div
              className="absolute top-1 w-5 h-5 rounded-full bg-primary"
              animate={{ left: annual ? "calc(100% - 24px)" : "4px" }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
            Annual <span className="text-primary text-xs font-semibold">(Save 35%)</span>
          </span>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-xl border p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-border bg-card hover:shadow-primary/5"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold bg-gold text-gold-foreground rounded-full">
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <motion.span
                    key={annual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold font-display"
                  >
                    {annual ? plan.annualPrice : plan.monthlyPrice}
                  </motion.span>
                  {plan.monthlyPrice !== "Custom" && (
                    <span className="text-sm text-muted-foreground">/month</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.highlighted ? "hero" : plan.outline ? "hero-outline" : "default"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8">
          <a href="#" className="text-sm text-primary font-medium hover:underline">
            Compare all plan features →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
