import { AnimatedSection } from "./AnimatedSection";

export function OriginSection() {
  return (
    <section id="origin" className="py-12 lg:py-16 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <AnimatedSection>
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6 block">
            The Origin
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
            The Origin of <span className="font-bold" style={{ color: '#f97415' }}>APEXIS</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base font-light">
            <p>
              <span className="font-bold" style={{ color: '#f97415' }}>APEXIS</span> was born out of years of real-world experience in the architecture and construction industry.
            </p>
            <p>
              While working on multiple residential and commercial projects, one challenge appeared repeatedly — clients and professionals often struggled to clearly understand the real-time progress of their projects. Updates were scattered across calls, messages, site visits, and informal communication, making it difficult for everyone to stay fully informed.
            </p>
            <p>
              Even for architects, interior designers, contractors, and project teams, coordinating updates and maintaining clear communication across different agencies could become complicated and time-consuming.
            </p>
            <p>
              Over time, it became clear that the industry needed a more structured and transparent way to track project progress.
            </p>
            <p className="font-medium" style={{ color: '#f97415' }}>
              <span className="font-bold" style={{ color: '#f97415' }}>APEXIS</span> was created to address this gap.
            </p>
            <p>
              Built with deep insights from architectural practice and real project experience, <span className="font-bold" style={{ color: '#f97415' }}>APEXIS</span> is designed to support architects, interior designers, contractors, developers, and clients throughout the lifecycle of a construction project.
            </p>
            <p>
              <span style={{ color: '#f97415' }}>APEXIS</span> aims to bring technology-driven clarity, accountability, and organized communication into construction projects.
            </p>
            <p>
              By creating a centralized platform for updates and progress tracking, <span style={{ color: '#f97415' }}>APEXIS</span> helps ensure that everyone involved in a project — from clients to professionals — stays aligned and informed.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10">
          <div className="border-l-2 border-accent pl-6">
            <p className="text-lg font-display font-semibold text-foreground leading-relaxed">
              At its core, <span style={{ color: '#f97415' }}>APEXIS</span> is driven by a simple vision: Construction projects should be easy to understand & to make construction progress visible, organized, and reliable for everyone involved.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
