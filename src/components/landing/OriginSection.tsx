import { AnimatedSection } from "./AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function OriginSection() {
  return (
    <section id="origin" className="py-12 lg:py-16 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <AnimatedSection>
          <span className="text-xs font-bold tracking-widest uppercase mb-6 block" style={{ color: '#111111' }}>
            The Origin
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span style={{ color: '#f97415' }}>The Origin of APEXIS</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base font-light">
            <p>
              <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> was born out of years of real-world experience in the architecture and construction industry. Project updates are often scattered across calls, messages, and site visits, making it difficult for clients and professionals to clearly understand real-time progress.
            </p>
            <p>
              Over time, it became clear that the industry needed a more structured and transparent way to track project progress.
            </p>
            <p className="font-bold" style={{ color: '#f97415' }}>
              APEXIS was created to address this gap.
            </p>
            <p>
              <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> solves this by providing a centralized platform that helps architects, interior designers, contractors, developers, and clients track project progress and stay aligned throughout the lifecycle of a construction project.
            </p>
            <p>
              By bringing structured communication and technology into construction management, <span className="font-bold" style={{ color: '#111111' }}>APEXIS</span> aims to create greater transparency, clarity, and accountability for everyone involved — from clients to professionals.
            </p>
          </div>
          <Link to="/founder" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: '#f97415' }}>
            Founder's Note <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
