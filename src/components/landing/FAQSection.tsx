import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is Apexis for?",
    a: "Apexis is built for architects, interior designers, contractors, builders, and real estate developers who manage construction and design projects and need structured reporting and client communication.",
  },
  {
    q: "Does this replace project management tools?",
    a: "Apexis complements your existing project management tools. We focus specifically on site documentation, structured reporting, and controlled client visibility — the execution layer that most PM tools miss.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. All data is encrypted at rest and in transit. We implement role-based access controls and enterprise-grade security protocols. Your project data never leaves your control.",
  },
  {
    q: "Is this suitable for small firms?",
    a: "Yes. Our Starter plan is designed for teams of up to 5 members. Whether you're a solo architect or a growing firm, Apexis scales with your needs.",
  },
  {
    q: "When is the full launch?",
    a: "We are currently onboarding select pilot firms in our private beta. Full launch is planned for later this year. Join early access to secure founding member benefits.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
