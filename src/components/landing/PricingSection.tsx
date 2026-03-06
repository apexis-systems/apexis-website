import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "One-Time Buy",
    monthlyPrice: "₹10,000",
    annualPrice: "₹10,000",
    desc: "Single project access",
    subtitle: "Valid for 90 days",
    features: [
      "Single Project Access",
      "Client Viewership",
      "Basic Reporting",
      "5GB Storage",
      "One-time purchase",
    ],
    cta: "Buy Now",
    highlighted: false,
    outline: false,
  },
  {
    name: "Starter",
    subtitle: "Monthly Subscription",
    monthlyPrice: "₹40,000",
    annualPrice: "₹26,000",
    desc: "Up to 5 projects",
    features: [
      "Up to 5 Projects",
      "Client Viewership",
      "Structured Reporting",
      "25GB Storage",
      "Basic Project Dashboard",
    ],
    cta: "Get Started",
    highlighted: false,
    outline: false,
  },
  {
    name: "Professional",
    subtitle: "Monthly Subscription",
    monthlyPrice: "₹60,000",
    annualPrice: "₹39,000",
    desc: "Up to 10 projects",
    badge: "Most Popular",
    features: [
      "Unlimited Projects",
      "Client Viewership",
      "AI-Assisted Reports",
      "Role-Based Access",
      "100GB Storage",
      "Media Documentation",
      "Priority Support",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
    outline: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    desc: "Above 10 projects",
    features: [
      "Unlimited Projects",
      "Client Viewership",
      "Custom Workflows",
      "Dedicated Support",
      "Above 100GB Storage",
    ],
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
                className={`relative rounded-xl border p-6 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
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
                <p className="text-sm text-muted-foreground mt-1">{plan.desc}</p>
                {plan.subtitle && (
                  <p className="text-xs font-medium text-foreground/70 mt-1">{plan.subtitle}</p>
                )}
                <p className="text-xs font-semibold text-primary mt-2 mb-4">14 Day Free Trial</p>
                <div className="mb-6">
                  <motion.span
                    key={annual ? "annual" : "monthly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold font-display"
                  >
                    {annual ? plan.annualPrice : plan.monthlyPrice}
                  </motion.span>
                  {plan.monthlyPrice !== "Custom" && plan.name !== "One-Time Buy" && (
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
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>14-Day Free Trial</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secure Data Storage</span>
                  </li>
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
