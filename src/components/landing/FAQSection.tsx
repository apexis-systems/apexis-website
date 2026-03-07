import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is APEXIS for?",
    a: "APEXIS is built for architects, interior designers, contractors, builders, and real estate developers who manage construction and design projects and need structured reporting and client communication.",
  },
  {
    q: "Does this replace project management tools?",
    a: "APEXIS complements your existing project management tools. We focus specifically on site documentation, structured reporting, and controlled client visibility — the execution layer that most project management tools miss.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. All data is encrypted at rest and in transit. We implement role-based access controls and enterprise-grade security protocols. Your project data never leaves your control.",
  },
  {
    q: "Is this suitable for small firms?",
    a: "Yes. Our Starter plan is designed for up to 5 projects. Whether you're a solo architect or a growing firm, APEXIS scales with your needs.",
  },
  {
    q: "When is the full launch?",
    a: "We are currently onboarding select pilot firms in our private beta. Full launch is planned for later this year. Join early access to secure founding member benefits.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-32 lg:py-40 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1]">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl border border-border/60 px-6"
              >
                <AccordionTrigger className="text-left font-display font-medium text-sm hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed font-light">
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
