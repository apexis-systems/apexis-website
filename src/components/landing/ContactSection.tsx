import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/apexis.systems?igsh=MXV1aTQyaXd1dnpqZA%3D%3D&utm_source=qr",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Apexis-Systems/61586472806950/?mibextid=wwXIfr&rdid=7zsnysMKWjKIbGmS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18R6ckH2vk%2F%3Fmibextid%3DwwXIfr",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/apexis-systems/about/?viewAsMember=true",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Apexis.systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

const roles = [
  "Architect",
  "Interior Designer",
  "Contractor",
  "Builder",
  "Engineer",
  "Project Manager",
  "Developer",
  "Other",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({
        title: "Message sent",
        description: "We'll get back to you within 1–2 business days.",
      });
      setFormData({ name: "", company: "", email: "", role: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-primary">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Contact the Apexis Team
            </h2>
            <p className="text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              We're here to help construction teams bring clarity and structure to project reporting.
              <br />
              Reach out to us for product questions, support, or partnership opportunities.
            </p>
          </div>
        </AnimatedSection>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left – Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              {/* General Inquiries */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">General Inquiries</h3>
                <p className="text-sm text-muted-foreground font-light">
                  For questions about Apexis, partnerships, or platform information.
                </p>
                <a href="mailto:support@apexis.in" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  <Mail className="w-4 h-4" />
                  support@apexis.in
                </a>
              </div>

              {/* Product Support */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Product Support</h3>
                <p className="text-sm text-muted-foreground font-light">
                  If you need help with your account, project workspace, or platform features.
                </p>
                <a href="mailto:support@apexis.in" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  <Mail className="w-4 h-4" />
                  support@apexis.in
                </a>
              </div>

              {/* Request a Demo */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Request a Private Demo</h3>
                <p className="text-sm text-muted-foreground font-light">
                  See how Apexis helps construction teams record, structure, and share project updates.
                </p>
                <a href="mailto:info@apexis.in" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                  <Mail className="w-4 h-4" />
                  info@apexis.in
                </a>
              </div>

              {/* Response Time */}
              <div className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 p-4">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Response Time</h4>
                  <p className="text-sm text-muted-foreground font-light">
                    Our team typically responds within 1–2 business days.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right – Contact Form */}
          <AnimatedSection delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/60 bg-card/80 shadow-sm p-6 md:p-8 space-y-5"
            >
              <div className="space-y-1.5">
                <Label htmlFor="contact-name" className="text-sm text-foreground">Name</Label>
                <Input
                  id="contact-name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={100}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact-company" className="text-sm text-foreground">Company Name</Label>
                <Input
                  id="contact-company"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  maxLength={100}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact-email" className="text-sm text-foreground">Email Address</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  maxLength={255}
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-sm text-foreground">Role</Label>
                <Select value={formData.role} onValueChange={(v) => setFormData({ ...formData, role: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((r) => (
                      <SelectItem key={r} value={r}>{r}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact-message" className="text-sm text-foreground">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  maxLength={1000}
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {/* Social Media below form */}
            <div className="mt-8 text-center">
              <p className="text-xs font-bold tracking-widest uppercase mb-2 text-primary">
                Connect With Apexis
              </p>
              <p className="text-sm text-muted-foreground font-light mb-5 max-w-md mx-auto">
                Follow Apexis for updates on product development, construction technology insights, and new platform releases.
              </p>
              <div className="flex items-center justify-center gap-5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-foreground transition-all duration-300 hover:text-primary hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Closing line */}
        <AnimatedSection delay={0.3}>
          <p className="text-center text-sm text-muted-foreground font-light mt-16">
            Apexis is building the reporting infrastructure for modern construction projects.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
