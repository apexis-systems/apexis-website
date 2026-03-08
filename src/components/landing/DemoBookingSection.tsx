import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

export function DemoBookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="demo" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-[1.1]">
            See How Structured Reporting Changes Construction Projects.
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Book a private walkthrough of <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> and experience how construction teams can record, report, and release project updates with clarity.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {submitted ? (
            <div className="text-center py-16">
              <CheckCircle2 className="w-14 h-14 mx-auto mb-4" style={{ color: '#f97415' }} strokeWidth={1.5} />
              <h3 className="font-display text-2xl font-bold mb-2">Demo Booked.</h3>
              <p className="text-muted-foreground font-light">Our team will reach out shortly to confirm your session.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="demo-name" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</Label>
                  <Input id="demo-name" required placeholder="Your full name" className="bg-card border-border/60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="demo-company" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Company</Label>
                  <Input id="demo-company" required placeholder="Company name" className="bg-card border-border/60" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</Label>
                <Input id="demo-email" type="email" required placeholder="you@company.com" className="bg-card border-border/60" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Role</Label>
                  <Select>
                    <SelectTrigger className="bg-card border-border/60">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="architect">Architect</SelectItem>
                      <SelectItem value="contractor">Contractor</SelectItem>
                      <SelectItem value="builder">Builder</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="director">Project Director</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Company Size</Label>
                  <Select>
                    <SelectTrigger className="bg-card border-border/60">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1–10</SelectItem>
                      <SelectItem value="11-50">11–50</SelectItem>
                      <SelectItem value="51-200">51–200</SelectItem>
                      <SelectItem value="200+">200+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="demo-time" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Preferred Demo Time</Label>
                <Input id="demo-time" type="datetime-local" className="bg-card border-border/60" />
              </div>
              <Button type="submit" variant="hero" className="w-full" size="lg">
                Book Private Demo
              </Button>
              <p className="text-center text-xs text-muted-foreground/60 font-light">
                Early access currently limited to selected project teams.
              </p>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
